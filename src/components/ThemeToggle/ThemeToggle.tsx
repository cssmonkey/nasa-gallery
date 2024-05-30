"use client";

import { useTheme } from "next-themes";
import { FC, useEffect, useState } from "react";
import { Switch } from "@nextui-org/react";

const ThemeToggle: FC = () => {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    const emoji = theme === "light" ? "☀️" : "🌙";

    const onSwitchChanges = () => {
        const newThemeVal = theme === "light" ? "dark" : "light";
        setTheme(newThemeVal);
    };

    return (
        <Switch color="default" size="sm" onChange={onSwitchChanges}>
            {emoji} Theme
        </Switch>
    );
};

export default ThemeToggle;
