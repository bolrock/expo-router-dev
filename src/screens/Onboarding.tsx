import { View, Text, TouchableOpacity } from "react-native";
import React, { useContext, useState } from "react";
import { router } from "expo-router";
import { useApplicationContext } from "../contexts/ApplicationContext";

const Onboarding = () => {
    const { isOnboarded, setOnboarded } = useApplicationContext();
    return (
        <View>
            <Text>Onboarding</Text>
            <Text>--{isOnboarded ? "true" : "false"}--</Text>
            <TouchableOpacity
                onPress={() => {
                    setOnboarded(true);
                }}
            >
                <Text>Done</Text>
            </TouchableOpacity>
        </View>
    );
};

export default Onboarding;
