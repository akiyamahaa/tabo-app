import { StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Center,
  Divider,
  HStack,
  ScrollView,
  Text,
  VStack,
  useTheme,
} from "native-base";
import Header from "../components/Header";
import { Image } from "expo-image";
import { Star1, Eye } from "iconsax-react-native";
import { useRoute } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParams } from "../navigations/config";
import { IBook, IComment } from "../types/book";
import { firebaseDB } from "../firebase";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  setDoc,
  updateDoc,
  where,
} from "firebase/firestore";
import { useAppDispatch, useAppSelector } from "../store";
import { fetchUser } from "../store/user.reducer";
import { IUser } from "../types/user";
import Comment from "../components/Comment";

type Props = NativeStackScreenProps<RootStackParams, "BookDetail">;

const BookDetail = ({ navigation, route }: Props) => {
  const bookId = route.params.bookId;
  const user = useAppSelector((state) => state.user.user);
  const isFavouriteBook = user?.favourite.includes(bookId);
  const [book, setBook] = useState<IBook | null>(null);
  const [listComment, setListComment] = useState<IComment[]>([]);
  const [rating, setRating] = useState<number>(0);
  const dispatch = useAppDispatch();
  const { colors } = useTheme();

  const fetchBook = async () => {
    const bookRef = doc(firebaseDB, "books", bookId);
    const bookSnap = await getDoc(bookRef);
    setBook(bookSnap.data() as IBook);
    const cloneBook: IBook = bookSnap.data() as IBook;
    await updateDoc(doc(firebaseDB, "books", bookId), {
      ...cloneBook,
      views: cloneBook.views + 1,
    });
  };

  const fetchBookComment = async () => {
    const q = query(
      collection(firebaseDB, "comments"),
      where("bookId", "==", bookId)
    );
    const commentSnapShot = await getDocs(q);
    const comments: IComment[] = [];
    commentSnapShot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      comments.push(doc.data() as any);
    });
    setListComment(comments);
  };

  useEffect(() => {
    fetchBook();
    fetchBookComment();
  }, []);

  useEffect(() => {
    const averageRating = () => {
      const totalRating = listComment.reduce((total, curComment) => {
        return total + curComment.rating;
      }, 0);
      setRating(totalRating / listComment.length);
    };
    averageRating();
  }, [listComment]);

  //TODO: Handle Rating Book
  const handleAddComment = async () => {
    const fakeComment = {
      userId: user?.id,
      bookId: bookId,
      comment: "I love this book",
      rating: 3,
      timestamp: Date(),
    };

    const commentDocRef = doc(collection(firebaseDB, "comments"));
    await setDoc(commentDocRef, {
      id: commentDocRef.id,
      ...fakeComment,
    });
    fetchBookComment();
  };

  const handleFavouriteBook = async () => {
    if (user) {
      let newFavourite;
      // check isFavourite
      if (isFavouriteBook) {
        newFavourite = user.favourite.filter((id: string) => id !== bookId);
      } else {
        newFavourite = [...user.favourite, bookId];
      }
      await updateDoc(doc(firebaseDB, "users", user.id), {
        ...user,
        favourite: newFavourite,
      });
      dispatch(fetchUser(user.id || ""));
    }
  };

  return (
    <Box flex={1} bg={"#fff"}>
      <ScrollView>
        <VStack w={"100%"} height={500}>
          <Box
            position={"absolute"}
            width={"100%"}
            height={500}
            overflow={"hidden"}
            backgroundColor={"amber.100"}
          >
            <Image
              source={{ uri: book?.image }}
              contentFit="cover"
              style={{
                width: "100%",
                height: 800,
                // position: "absolute",
              }}
            />
            {/* Overlay image */}
            <Box
              width={"100%"}
              height={500}
              position={"absolute"}
              backgroundColor={colors.gray[100]}
              opacity={0.75}
            />
          </Box>
          <Header
            title=""
            showLike={true}
            onLike={handleFavouriteBook}
            checkLike={isFavouriteBook}
          />
          <Center mt={4}>
            <Image
              source={{ uri: book?.image }}
              style={{ width: 160, height: 210 }}
              contentFit="fill"
            />
          </Center>
        </VStack>
        {/* Rating Info */}
        <Box alignItems={"center"} marginTop={-20}>
          <HStack px={6} py={4} bgColor={"#F2F2F2"} borderRadius={8}>
            <HStack alignItems={"center"}>
              <Star1 color={colors.primary.Main} variant="Bold" size={16} />
              <Text
                fontSize={16}
                fontWeight={"bold"}
                color={"grey.900"}
                marginLeft={0.5}
              >
                {Number(rating.toFixed(1))}
              </Text>
              <Text fontSize={16} fontWeight={"bold"} color={"grey.300"}>
                /
              </Text>
              <Text fontSize={16} fontWeight={"bold"} color={"grey.300"}>
                5
              </Text>
            </HStack>
            <Text color={"grey.200"} mx={4}>
              |
            </Text>
            <HStack alignItems={"center"}>
              <Eye color={colors.primary.Main} variant="Bold" size={16} />
              <Text
                fontSize={16}
                fontWeight={"bold"}
                color={"grey.900"}
                marginLeft={0.5}
              >
                {book?.views || 0}
              </Text>
            </HStack>
          </HStack>
        </Box>
        <VStack px={6} mt={10}>
          {/* Description */}
          <Text color={"grey.900"} fontSize={14}>
            {book?.description}
          </Text>
          <Button onPress={handleAddComment}>Add Comment</Button>
          <Divider my={6} />
          <VStack>
            {listComment.map((comment) => (
              <Box key={comment.id}>
                <Comment commentInfo={comment} />
              </Box>
            ))}
          </VStack>
        </VStack>
      </ScrollView>
    </Box>
  );
};

export default BookDetail;

const styles = StyleSheet.create({});
