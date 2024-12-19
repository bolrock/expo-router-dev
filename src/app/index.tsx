import { View, Text } from "react-native";
import React, { useState } from "react";
import { Link, Redirect, Stack } from "expo-router";
import { useApplicationContext } from "../contexts/ApplicationContext";
import Onboarding from "../screens/Onboarding";

const Home = () => {
    const { isOnboarded, setOnboarded } = useApplicationContext();

    if (!isOnboarded) return <Onboarding />;

    return (
        <View>
            <Text>Home</Text>
        </View>
    );
};

export default Home;
