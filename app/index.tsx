import { View, Text, ScrollView, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import images from "@/constants/images";
import CustomButton from "@/components/CustomButton";
import { router } from "expo-router";
const App = () => {
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView contentContainerClassName="h-full">
        <View className="w-full h-full items-center justify-center px-4 ">
          <Image
            source={images.logo}
            resizeMode="contain"
            className="w-[130px] h-[84px]"
          />
          <Image
            source={images.cards}
            className="max-w-[380px] w-full h-[300px]"
            resizeMode="contain"
          />
          <View className="relative mt-5 ">
            <Text className="text-3xl text-white font-bold text-center">
              Discover Endless {"\n"} Possibilities with{" "}
              <Text className="text-secondary"> Aora</Text>
            </Text>
            <Image
              source={images.path}
              resizeMode="contain"
              className="w-[136px] h-[15px] -bottom-2 -right-12 absolute"
            />
          </View>
          <Text className="text-sm text-gray-100 mt-7 text-center font-pregular ">
            Where creativity meets innovation: embark on a journey limitless
            with Aora
          </Text>
          <CustomButton
            title="continue with email"
            containerStyles="mt-7"
            textStyles="capitalize"
            handlePress={() => router.push("/sign-in")}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
