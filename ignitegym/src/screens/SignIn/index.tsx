import { VStack, Image, Text, Center, Heading } from "native-base";
import React from "react";
import BackgroundImg from "@assets/background.png";
import LogoSvg from "@assets/logo.svg";

const SignIn: React.FC = () => {
  return (
    <VStack flex={1} bg="gray.700">
      <Image
        source={BackgroundImg}
        alt="Pessoas treinando"
        resizeMode="contain"
        position="absolute"
      />
      <Center my={24}>
        <LogoSvg />
        <Text color={"gray.100"} fontSize={"sm"}>
          Treine sua mente e o seu corpo
        </Text>
      </Center>
    </VStack>
  );
};

export default SignIn;
