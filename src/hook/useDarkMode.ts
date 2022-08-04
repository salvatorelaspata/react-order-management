import { useState } from "react";
import { theme } from './theme';

export function useDarkMode(initialValue: boolean) {
    const [darkState, setDarkState] = useState<boolean>(initialValue);

    const darkTheme = theme(darkState);

    const handleThemeChange = () => {
        setDarkState(!darkState);
    };

    return {
        handleThemeChange,
        darkTheme,
        darkState,
    };
}
