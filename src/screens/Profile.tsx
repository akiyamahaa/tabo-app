import { StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { useAppDispatch } from "../store";
import { removeUser } from "../store/user.reducer";
import { Box, Button, Center, HStack, Input, Text, VStack } from "native-base";
import Header from "../components/Header";
import { Image } from "expo-image";
import { Camera, Refresh } from "iconsax-react-native";

const CustomInput = (props: any) => {
  const { title, name = "" } = props;
  return (
    <VStack mb={4}>
      <Text
        textTransform={"uppercase"}
        fontWeight={"bold"}
        fontSize={12}
        color={"grey.300"}
        mb={1}
      >
        {title}
      </Text>
      <Input
        bgColor={"grey.50"}
        placeholder={name}
        px={3}
        py={4}
        fontSize={16}
        borderRadius={8}
        borderWidth={0}
      />
    </VStack>
  );
};

const Profile = () => {
  const dispatch = useAppDispatch();

  return (
    <Box flex={1} bgColor={"#fff"}>
      <Header title="Edit Profile" showBack={false} />
      <VStack>
        {/* Avt User */}
        <VStack alignItems={"center"} space={2}>
          <Center position={"relative"}>
            <Image
              source={require("../../assets/avt.png")}
              style={{ width: 128, height: 128, resizeMode: "contain" }}
            />
            <TouchableOpacity style={styles.cameraBtn}>
              <Camera size="20" color="#1C1B1F" />
            </TouchableOpacity>
          </Center>
          <Text fontSize={24} fontWeight={"bold"} color={"grey.900"}>
            Marcus Curtis
          </Text>
        </VStack>
        {/* Input */}
        <VStack px={6}>
          <CustomInput title={"name"} />
          <CustomInput title={"email"} />
          <CustomInput title={"mobile number"} />
          <CustomInput title={"password"} />
          <CustomInput title={"new password"} />
        </VStack>
        {/* Btn */}
        <VStack px={6}>
          <Button bgColor={"primary.Main"} borderRadius={8} mb={8}>
            <HStack alignItems={"center"} space={2}>
              <Refresh size="18" color="#FFF" />
              <Text fontWeight={"bold"} color="white" fontSize={15}>
                Update
              </Text>
            </HStack>
          </Button>
          <Box alignItems={"center"}>
            <TouchableOpacity onPress={() => dispatch(removeUser())}>
              <Text fontSize={14} color={"grey.500"}>
                Sign out
              </Text>
            </TouchableOpacity>
          </Box>
        </VStack>
      </VStack>
    </Box>
  );
};

export default Profile;

const styles = StyleSheet.create({
  cameraBtn: {
    marginTop: -20,
    backgroundColor: "#D9D9D9",
    borderRadius: 40,
    padding: 8,
  },
});
