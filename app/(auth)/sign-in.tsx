import { View, Text, ScrollView, Image, TextInput } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import images from "@/constants/images";
import FormField from "@/components/FormField";
import CustomButton from "@/components/CustomButton";
import { Link } from "expo-router";

const SignIn = () => {
  const [submitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({ email: "", password: "" });
  const handleSubmit = () => {};

  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView contentContainerClassName="h-full">
        <View className="w-full justify-center h-full px-4 my-6">
          <Image
            source={images.logo}
            resizeMode="contain"
            className="w-[115px] h-[35px]"
          />
          <Text className="text-2xl text-white font-psemibold mt-10 ">
            Log In to Aora
          </Text>
          <FormField
            title="email"
            keyboardType="email-address"
            handleChangeText={(text: string) =>
              setForm({ ...form, email: text })
            }
            value={form.email}
            placeholder="enter email address"
            containerStyle="mt-7"
          />
          <FormField
            title="password"
            handleChangeText={(text: string) =>
              setForm({ ...form, password: text })
            }
            value={form.password}
            placeholder="enter your password"
            containerStyle="mt-7"
          />
          <CustomButton
            title="sign in"
            handlePress={handleSubmit}
            containerStyles="mt-7"
            textStyles="capitalize"
            isLoading={submitting}
          />
          <View className="justify-center pt-5 flex-row ">
            <Text className="text-lg text-gray-100 font-pregular">
              Don't have an account?{" "}
            </Text>
            <Link
              href="/sign-up"
              className="text-secondary text-lg font-psemibold"
            >
              sign up
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
