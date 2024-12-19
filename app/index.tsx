import { View, Text } from "react-native";
import React from "react";
import { Link } from "expo-router";

const Home = () => {
    return (
        <View>
            <Link href="/one">One</Link>
            <Link href="/two">Two</Link>
        </View>
    );
};

export default Home;
