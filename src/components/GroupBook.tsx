import { StyleSheet } from "react-native";
import React, { useCallback } from "react";
import { Box, HStack, Text, ScrollView, FlatList } from "native-base";
import BookCard from "./BookCard";

const GroupBook = () => {
  const renderCardItem = useCallback(
    ({ item, index }: any) => <BookCard />,
    []
  );
  const keyExtractor = useCallback((item: any) => item.phone, []);

  return (
    <Box>
      <Text fontWeight={"bold"} color={"primary.Main"} fontSize={17} mb={3}>
        Favorites
      </Text>
      <FlatList
        data={[1, 2, 3, 4, 5]}
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
