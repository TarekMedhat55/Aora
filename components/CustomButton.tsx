import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

const CustomButton = ({
  title,
  containerStyles,
  textStyles,
  isLoading,
  handlePress,
}: {
  title: string;
  containerStyles: string;
  textStyles?: string;
  isLoading?: boolean;
  handlePress: () => void;
}) => {
  return (
    <TouchableOpacity
      disabled={isLoading}
      activeOpacity={0.7}
      onPress={handlePress}
      className={`bg-secondary rounded-xl w-full min-h-[62px] justify-center items-center ${
        isLoading ? "opacity-50" : ""
      } ${containerStyles}`}
    >
      <Text className={`${textStyles} text-primary font-psemibold text-lg`}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
