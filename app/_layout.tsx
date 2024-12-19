import React from "react";
import { Stack } from "expo-router";

const RooLayout = () => {
    return (
        <Stack>
            <Stack.Screen name="index" options={{ title: "Home" }} />
            <Stack.Screen name="one" options={{ title: "First" }} />
            <Stack.Screen name="two" options={{ title: "Second" }} />
        </Stack>
    );
};

export default RooLayout;
