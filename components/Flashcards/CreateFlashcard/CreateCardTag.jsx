import { View, Text } from "react-native";
import React from "react";
import { Pressable } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import TagList from "./TagList";

const CreateCardTag = ({card}) => {
  return (
    <View className="flex justify-center w-full items-center">
      <View className="flex flex-row justify-between items-center w-full">
        <Text className="text-xl font-bold text-primary">Tags</Text>
        <Pressable className="flex flex-row gap-x-2 items-center justify-center bg-primary p-2 rounded-md">
          <Icon name="tag" size={24} color="#fff" />
          <Text className="font-bold p-2 text-lg text-white">Create Tag</Text>
        </Pressable>
      </View>
      <View className="flex flex-row justify-between items-center w-full">
        <TagList card={card} />
      </View>
    </View>
  );
};

export default CreateCardTag;
