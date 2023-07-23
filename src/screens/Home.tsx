import { StyleSheet } from "react-native";
import React from "react";

import { Box, Button, Center, HStack, Image, ScrollView, Text, VStack } from "native-base";
import BookCard from "../components/BookCard";
import GroupBook from "../components/GroupBook";

const Home = () => {
  return (
    <ScrollView flex={1} bgColor={"#fff"}>
      <Box px={2}>
        <Center
          bgColor={"primary.Main"}
          height={280}
          borderBottomLeftRadius={8}
          borderBottomRightRadius={8}
        >
          <VStack alignItems={"center"}>
            <Text fontWeight={"bold"} fontSize={24} color="white">
              Hello, Marcus Curtis!
            </Text>
            <Text fontSize={16} color={"white"} textAlign={"center"}>
              Which book suits your {"\n"} current mood?
            </Text>
          </VStack>
        </Center>
      </Box>
      <Box borderRadius={8} mx={6} p={4} style={styles.boxShadow} shadow={3}>
        <VStack space={3}>
          <HStack alignItems={"center"}>
            <Image source={require("../../assets/avt.png")} w={16} h={16} />
            <Text fontWeight={"bold"} fontSize={24} color={"grey.900"} ml={4}>
              Marcus Curtis
            </Text>
          </HStack>
          <Text fontSize={14}>
            Lorem ipsum dolor sit amet consectetur. At vulputate vulputate id
            suscipit morbi. Tristique dolor dictum convallis nisl
          </Text>
        </VStack>
      </Box>
      <VStack px={6} mt={8} space={5}>
        <GroupBook />
        <GroupBook />

      </VStack>
    </ScrollView>
  );
};
  
export default Home;

const styles = StyleSheet.create({
  boxShadow: {
    backgroundColor: "white",
    marginTop: -60,
  },
});
