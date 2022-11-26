import { ScreenHeader } from "@components/ScreenHeader";
import UserPhoto from "@components/UserPhoto";
import { Center, ScrollView, Text, VStack } from "native-base";
import React from "react";

const Profile: React.FC = () => {
  return (
    <VStack flex={1}>
      <ScreenHeader title="Perfil" />
      <ScrollView>
        <Center mt={6} px={10}>
          <UserPhoto
            source={{ uri: "https://github.com/luccahora.png" }}
            alt="Foto do usuario"
            size={33}
          />
        </Center>
      </ScrollView>
    </VStack>
  );
};

export default Profile;
