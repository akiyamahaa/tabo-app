import { Animated, StyleSheet, TouchableOpacity } from "react-native";
import React, { useRef } from "react";
import { Box, HStack, Input, Text, VStack, useTheme } from "native-base";
import Header from "../components/Header";
import { SearchNormal } from "iconsax-react-native";
import { Image } from "expo-image";

const BookCardSearch = (props: any) => {
  const { width } = props;
  return (
    <HStack space={1} w={width} justifyContent={"space-between"} m={2}>
      <Image
        source={require("../../assets/book_image.png")}
        style={{ width: 60, height: 60, borderRadius: 8 }}
      />
      <VStack justifyContent={"center"} flex={1}>
        <Text
          fontSize={14}
          fontWeight={"semibold"}
          color={"grey.900"}
          ellipsizeMode="tail"
          numberOfLines={1}
        >
          Emerson Ekstrom Bothman
        </Text>
        <Text fontSize={12} fontWeight={"medium"} color={"grey.500"}>
          Corey Septimus
        </Text>
      </VStack>
    </HStack>
  );
};

const Search = () => {
  const { colors } = useTheme();
  return (
    <Box flex={1} bgColor={"#fff"}>
      <Header title="Searching" showBack={false} />
      {/* Searching Bar */}
      <HStack px={6} mt={2}>
        <Input
          w={{
            base: "100%",
          }}
          InputLeftElement={
            <TouchableOpacity>
              <SearchNormal
                size={16}
                color={colors.grey[500]}
                style={{ marginLeft: 16 }}
              />
            </TouchableOpacity>
          }
          placeholder="Search title, topics or authors"
        />
      </HStack>
      <VStack px={6} mt={2}>
        <Text fontSize={17} fontWeight={"bold"} color={"primary.Main"}>
          Top book search
        </Text>
        <Box flexWrap={"wrap"} flexDir="row">
          <BookCardSearch width={"45%"} />
          <BookCardSearch width={"45%"} />
          <BookCardSearch width={"45%"} />
          <BookCardSearch width={"45%"} />
          <BookCardSearch width={"45%"} />
          <BookCardSearch width={"45%"} />
        </Box>
      </VStack>
    </Box>
  );
};

export default Search;

const styles = StyleSheet.create({});
