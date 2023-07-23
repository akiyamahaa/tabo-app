import { StyleSheet } from "react-native";
import React from "react";
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

const BookDetail = () => {
  const { colors } = useTheme();
  return (
    <Box flex={1} bg={"#fff"}>
      <ScrollView>
        <VStack w={"100%"} height={500}>
          <Image
            source={require("../../assets/bg_book.png")}
            style={{
              width: "100%",
              height: 500,
              resizeMode: "contain",
              position: "absolute",
            }}
          />
          <Header title="" showLike={true} />
          <Center mt={4}>
            <Image
              source={require("../../assets/book_image.png")}
              style={{ width: 160, height: 210 }}
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
        <VStack px={6} mt={6}>
          {/* Description */}
          <Text color={"grey.900"} fontSize={14}>
            Lorem ipsum dolor sit amet consectetur. Lacus amet orci arcu vel
            tristique in erat. Id egestas a lectus vitae. Eget condimentum magna
            proin eget nibh amet turpis nunc. Tempus eget tincidunt semper amet
            tortor.
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
