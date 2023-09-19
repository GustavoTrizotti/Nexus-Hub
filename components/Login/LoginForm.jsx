import { View, Text, Pressable, ActivityIndicator } from "react-native";
import React, { useState } from "react";
import FormInput from "./FormInput";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import { useAuth } from "../../context/AuthContext";
import { useAsyncStorage } from "@react-native-async-storage/async-storage";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();

  const [token, setToken, storeToken] = useAuth();

  const url = `http://192.168.0.12:8080/login`;

  const handleLogin = async () => {
    setLoading(true);
    const { setItem } = useAsyncStorage('token');
    await axios
      .post(url, {
        username: username,
        password: password,
      })
      .then((response) => {
        setLoading(false);
        setItem({auth: response.headers.authorization, refreshed: true})
        setToken({auth: response.headers.authorization, refreshed: true})
        storeToken(response.headers.authorization)
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };

  return (
    <View className="flex w-full m-4 gap-y-6 h-1/2 justify-center">
      <View>
        <FormInput
          name="account"
          placeholder="Username..."
          color="#d1d5db"
          text={username}
          textColor="#2d2d2d"
          changeText={setUsername}
        />
      </View>
      <View>
        <FormInput
          name="key"
          placeholder="Password..."
          color="#d1d5db"
          text={password}
          textColor="#2d2d2d"
          isPassword={true}
          changeText={setPassword}
        />
        <View className="flex flex-row w-full justify-center gap-x-1.5 items-center pt-2 mt-4">
          <Text className="text-md text-gray-300 font-bold">
            Don't have an account?
          </Text>
          <Text
            className="text-md text-primary font-bold"
            onPress={() => navigation.navigate("Register")}
          >
            Register
          </Text>
        </View>
      </View>
      <View className="flex p-2 mt-4 mx-4">
        <LinearGradient
          className=" flex p-4 items-center justify-center rounded-full mt-2"
          colors={["#AD6FEB", "#CF9EFF"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
        >
          <Pressable onPress={() => handleLogin()}>
            {loading ? (
              <ActivityIndicator size="large" color="#FFF" />
            ) : (
              <Text className="text-white font-bold text-lg text-center uppercase">
                Login
              </Text>
            )}
          </Pressable>
        </LinearGradient>
      </View>
    </View>
  );
};

export default LoginForm;
