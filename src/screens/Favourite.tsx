import { StyleSheet } from "react-native";
import React from "react";
import { Box, HStack, ScrollView, StatusBar, Text } from "native-base";
import Header from "../components/Header";
import BookCard from "../components/BookCard";

const Favourite = () => {
  return (
    <Box flex={1}>
      <Header title="Favourite" showBack={false} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Box
          flexDirection={"row"}
          flexWrap={"wrap"}
          justifyContent={"space-between"}
          p={6}
        >
          <BookCard width={"48%"} mb={6} />
          <BookCard width={"48%"} mb={6} />
          <BookCard width={"48%"} mb={6} />
          <BookCard width={"48%"} mb={6} />
          <BookCard width={"48%"} mb={6} />
          <BookCard width={"48%"} mb={6} />
        </Box>
      </ScrollView>
    </Box>
  );
};

export default Favourite;

const styles = StyleSheet.create({});
