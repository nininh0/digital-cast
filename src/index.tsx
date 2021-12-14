import { StatusBar } from "expo-status-bar";
import React from "react";

import { Background } from './styles';

const Main: React.FC = () => {
    return (
        <>
            <StatusBar style="light" />
            <Background />
        </>
    );
}

export default Main;