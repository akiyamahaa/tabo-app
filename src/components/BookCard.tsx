import { StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { Box, HStack, Text, VStack, useTheme } from "native-base";
import { Image } from "expo-image";
import { Star1 } from "iconsax-react-native";
import { useNavigation } from "@react-navigation/native";

const BookCard = (props: any) => {
  const { colors } = useTheme();
  const { width = 140, height = 210, mb = 0 } = props;
  const navigation = useNavigation<any>();
  const navigateDetail = () => {
    navigation.navigate("BookDetail");
  };
  return (
    <Box width={width} mb={mb}>
      <TouchableOpacity onPress={navigateDetail}>
        <VStack>
          <Box position={"relative"} bgColor={"amber.100"} mb={2.5}>
            <Image
              source={require("../../assets/book_image.png")}
              style={{ width: "100%", height }}
              contentFit="cover"
            />
            <HStack
              position={"absolute"}
              bgColor={"white"}
              borderRadius={100}
              paddingX={1.5}
              paddingY={0.4}
              alignItems={"center"}
              m={2.5}
            >
              <Star1 color={colors.primary.Main} variant="Bold" size={12} />
              <Text
                fontSize={12}
                fontWeight={"bold"}
                color={"grey.900"}
                marginLeft={1.5}
              >
                4,8
              </Text>
              <Text fontSize={10} fontWeight={"bold"} color={"grey.300"}>
                /
              </Text>
              <Text fontSize={10} fontWeight={"bold"} color={"grey.300"}>
                5
              </Text>
            </HStack>
          </Box>
          <Text fontSize={14} fontWeight={"semibold"} color={"grey.900"}>
            Emerson Ekstrom Bothman
          </Text>
          <Text fontSize={12} fontWeight={"medium"} color={"grey.500"}>
            Corey Septimus
          </Text>
        </VStack>
      </TouchableOpacity>
    </Box>
  );
};

export default BookCard;

const styles = StyleSheet.create({});
