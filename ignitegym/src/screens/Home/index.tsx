import Group from "@components/Group";
import HomeHeader from "@components/HomeHeader";
import { Center, FlatList, HStack, Text, VStack } from "native-base";
import React, { useState } from "react";

const Home: React.FC = () => {
  const [groupSelected, setGroupSelected] = useState("");
  const [groups, setGroups] = useState([
    "Costas",
    "Bíceps",
    "Tríceps",
    "Ombro",
  ]);

  return (
    <VStack flex={1}>
      <HomeHeader />

      <FlatList
        data={groups}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Group
            name={item}
            isActive={groupSelected === item}
            onPress={() => setGroupSelected(item)}
          />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        _contentContainerStyle={{ px: 8 }}
        my={10}
        maxH={10}
      />
    </VStack>
  );
};

export default Home;
