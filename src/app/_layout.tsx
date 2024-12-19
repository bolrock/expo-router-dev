import React, { useState } from "react";
import { Stack } from "expo-router";
import ScreenOne from "../screens/ScreenOne";

const RooLayout = () => {
    const [value, setValue] = useState(true);

    if (value) return <ScreenOne />;

    return (
        <Stack>
            <Stack.Screen name="index" options={{ title: "Home" }} />
            <Stack.Screen name="one" options={{ title: "First" }} />
            <Stack.Screen name="two" options={{ title: "Second" }} />
            <Stack.Screen name="(auth)" options={{ headerShown: false }} />
        </Stack>
    );
};

export default RooLayout;
