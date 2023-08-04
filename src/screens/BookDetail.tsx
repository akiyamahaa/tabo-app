import { StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import {
  Box,
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
import { IBook } from "../types/book";
import { firebaseDB } from "../firebase";
import { doc, getDoc } from "firebase/firestore";

const Comment = () => {
  const { colors } = useTheme();
  return (
    <Box mb={6}>
      <VStack>
        {/* User */}
        <HStack justifyContent={"space-between"}>
          <HStack alignItems={"center"}>
            <Image
              source={require("../../assets/avt_cmt.png")}
              style={{ width: 24, height: 24 }}
            />
            <Text
              ml={2}
              fontSize={14}
              fontWeight={"semibold"}
              color={"grey.900"}
            >
              Cooper Herwitz
            </Text>
            <Text
              fontSize={14}
              fontWeight={"semibold"}
              color={"grey.300"}
              mx={2}
            >
              •
            </Text>
            <Text fontSize={14} fontWeight={"semibold"} color={"grey.300"}>
              2hrs ago
            </Text>
          </HStack>
          <HStack alignItems={"center"}>
            <Star1 color={colors.primary.Main} variant="Bold" size={16} />
            <Text
              fontSize={14}
              fontWeight={"bold"}
              color={"grey.900"}
              marginLeft={0.5}
            >
              4,8
            </Text>
            <Text fontSize={14} fontWeight={"bold"} color={"grey.300"}>
              /
            </Text>
            <Text fontSize={14} fontWeight={"bold"} color={"grey.300"}>
              5
            </Text>
          </HStack>
        </HStack>
        {/* Comment */}
        <Box
          mt={2}
          px={3}
          py={2}
          borderWidth={1}
          borderRadius={8}
          borderColor={"grey.100"}
        >
          <Text color={"grey.900"}>
            Lorem ipsum dolor sit amet consectetur. Nunc tincidunt nunc lorem
            molestie morbi
          </Text>
        </Box>
      </VStack>
    </Box>
  );
};

const convertBackgroundImage = (image: string) => {
  return (
    <Box>
      <Image
        source={require("../../assets/book_image.png")}
        contentFit="cover"
        style={{
          width: "100%",
          height: 500,
          position: "absolute",
        }}
      />
    </Box>
  );
};

type Props = NativeStackScreenProps<RootStackParams, "BookDetail">;

const BookDetail = ({ navigation, route }: Props) => {
  const [book, setBook] = useState<IBook>();
  const bookId = route.params.bookId;
  const { colors } = useTheme();

  const fetchBook = async () => {
    const bookRef = doc(firebaseDB, "books", bookId);
    const bookSnap = await getDoc(bookRef);
    setBook(bookSnap.data() as IBook);
  };
  useEffect(() => {
    fetchBook();
  }, []);

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
          <Header title="" showLike={true} />
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
                4,8
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
                4,2k
              </Text>
            </HStack>
          </HStack>
        </Box>
        <VStack px={6} mt={10}>
          {/* Description */}
          <Text color={"grey.900"} fontSize={14}>
            {book?.description}
          </Text>
          <Divider my={6} />
          <VStack>
            <Comment />
            <Comment />
            <Comment />
          </VStack>
        </VStack>
      </ScrollView>
    </Box>
  );
};

export default BookDetail;

const styles = StyleSheet.create({});
