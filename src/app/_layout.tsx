import React, { useState } from "react";
import { Stack } from "expo-router";
import { ApplicationContextProvider } from "../contexts/ApplicationContext";
import Onboarding from "../screens/Onboarding";

const RooLayout = () => {
    const [value, setValue] = useState(true);

    console.log("rendring....");

    if (value)
        return (
            <ApplicationContextProvider>
                <Onboarding />
            </ApplicationContextProvider>
        );

    return (
        <ApplicationContextProvider>
            <Stack>
                <Stack.Screen name="index" options={{ title: "Home" }} />
                <Stack.Screen name="one" options={{ title: "First" }} />
                <Stack.Screen name="two" options={{ title: "Second" }} />
                <Stack.Screen name="(auth)" options={{ headerShown: false }} />
            </Stack>
        </ApplicationContextProvider>
    );
};

export default RooLayout;
