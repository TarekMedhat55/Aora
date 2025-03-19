import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import icons from "@/constants/icons";

const FormField = ({
  title,
  value,
  handleChangeText,
  keyboardType = "default",
  placeholder,
  containerStyle,
}: {
  title: string;
  value: string;
  keyboardType?: "default" | "email-address";
  handleChangeText: (text: string) => void;
  placeholder: string;
  containerStyle: string;
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View className={`space-y-2 ${containerStyle}`}>
      <Text className="text-base text-gray-100 font-medium capitalize mb-2">
        {title}
      </Text>
      <View
        className={`w-full h-16 px-4 flex-row bg-black-100 border-2 ${
          isFocused ? "border-secondary" : "border-black-200"
        } rounded-2xl items-center`}
      >
        <TextInput
          placeholder={placeholder}
          className="flex-1 text-white font-semibold text-base"
          placeholderTextColor="#7b7b8b"
          onChangeText={handleChangeText}
          secureTextEntry={title.toLowerCase() === "password" && !showPassword}
          keyboardType={keyboardType}
          value={value}
          returnKeyType="next"
          autoCapitalize="none"
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
        {title.toLowerCase() === "password" && (
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Image
              source={!showPassword ? icons.eye : icons.eyeHide}
              resizeMode="contain"
              className="w-6 h-6"
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default FormField;
