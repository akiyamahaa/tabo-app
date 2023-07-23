import { StyleSheet } from "react-native";
import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AuthStackParams } from "../../navigations/config";
import { Box, Button, Center, Input, Text, VStack } from "native-base";
import { Image } from "expo-image";
import { useAppDispatch } from "../../store";
import { setUser } from "../../store/user.reducer";

type Props = {} & NativeStackScreenProps<AuthStackParams, "SignUp">;

const SignUp = ({ navigation, route }: Props) => {
  const dispatch = useAppDispatch();

  function onLoggedIn() {
    dispatch(setUser());
  }
  return (
    <Box flex={1} justifyContent={"center"} px={6} bgColor={"white"}>
      <Box>
        <VStack alignItems={"center"} mb={8}>
          <Center mb={4}>
            <Image
              source={require("../../../assets/logo.png")}
              placeholder={"logo"}
              contentFit="cover"
              style={{ width: 106, height: 80 }}
            />
          </Center>
          <Text color={"grey.900"} fontSize={24} fontWeight={"bold"}>
            Sign up
          </Text>
          <Text color={"grey.500"} fontSize={14}>
            Please enter your details to sign up
          </Text>
        </VStack>
        <VStack space={3} mb={8}>
          <Input
            bgColor={"grey.50"}
            placeholder="Name"
            px={3}
            py={4}
            fontSize={16}
            borderRadius={8}
            borderWidth={0}
          />
          <Input
            bgColor={"grey.50"}
            placeholder="Email"
            px={3}
            py={4}
            fontSize={16}
            borderRadius={8}
            borderWidth={0}
          />
          <Input
            bgColor={"grey.50"}
            placeholder="Password"
            px={3}
            py={4}
            fontSize={16}
            borderRadius={8}
            borderWidth={0}
          />
          <Input
            bgColor={"grey.50"}
            placeholder="Confirm Password"
            px={3}
            py={4}
            fontSize={16}
            borderRadius={8}
            borderWidth={0}
          />
        </VStack>
        <VStack space={3}>
          <Button
            onPress={onLoggedIn}
            bgColor={"primary.Main"}
            borderRadius={8}
            py={4}
          >
            <Text fontWeight={"bold"} color="white" fontSize={15}>
              Sign up
            </Text>
          </Button>
        </VStack>
      </Box>
    </Box>
  );
};

export default SignUp;

const styles = StyleSheet.create({});
