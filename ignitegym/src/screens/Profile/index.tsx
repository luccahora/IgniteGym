import { ScreenHeader } from "@components/ScreenHeader";
import { Center, Text, VStack } from "native-base";
import React from "react";

const Profile: React.FC = () => {
  return (
    <VStack flex={1}>
      <ScreenHeader title="Perfil" />
    </VStack>
  );
};

export default Profile;
