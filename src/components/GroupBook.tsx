import { StyleSheet } from "react-native";
import React, { useCallback } from "react";
import { Box, HStack, Text, ScrollView, FlatList } from "native-base";
import BookCard from "./BookCard";
import { IBook } from "../types/book";

interface Props {
  books: IBook[];
}
const GroupBook = (props: Props) => {
  const { books } = props;
  const renderCardItem = useCallback(
    ({ item, index }: any) => <BookCard book={item} />,
    []
  );
  const keyExtractor = useCallback((item: any) => item.id, []);

  return (
    <Box>
      <Text fontWeight={"bold"} color={"primary.Main"} fontSize={17} mb={3}>
        Favorites
      </Text>
      <FlatList
        data={books}
        horizontal
        ItemSeparatorComponent={() => <Box style={{ width: 20, height: 10 }} />}
        renderItem={renderCardItem}
        keyExtractor={keyExtractor}
        maxToRenderPerBatch={4}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        scrollEnabled
      />
    </Box>
  );
};

export default GroupBook;

const styles = StyleSheet.create({});
