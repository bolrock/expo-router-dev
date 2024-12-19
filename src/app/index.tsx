import { View, Text } from "react-native";
import React, { useState } from "react";
import { Link, Redirect } from "expo-router";

const Home = () => {
    const [isOnboarded, setOnboarded] = useState(true);

    if (isOnboarded)
        return (
            <View>
                <Link href="/one">One</Link>
                <Link href="/two">Two</Link>
            </View>
        );

    return <Redirect href={"/(auth)/onboarding"} />;
};

export default Home;
