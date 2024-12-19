import { createContext, ReactNode, useContext, useState } from "react";

type ApplicationContextType = {
    isOnboarded: boolean;
    setOnboarded: React.Dispatch<React.SetStateAction<boolean | false>>;
};

const ApplicationContext = createContext<ApplicationContextType | undefined>(
    undefined
);

type ApplicationContextProviderProps = {
    children: ReactNode;
};

export const ApplicationContextProvider = ({
    children,
}: ApplicationContextProviderProps) => {
    const [isOnboarded, setOnboarded] = useState(false);

    return (
        <ApplicationContext.Provider value={{ isOnboarded, setOnboarded }}>
            {children}
        </ApplicationContext.Provider>
    );
};

export const useApplicationContext = () => {
    const context = useContext(ApplicationContext);
    if (!context) {
        throw new Error(
            "useApplicationContext must be used within a ApplicationContextProvider"
        );
    }
    return context;
};
