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

    return (
        <Switch
            color="default"
            size="sm"
            onChange={() => {
                const newThemeVal = theme === "light" ? "dark" : "light";
                setTheme(newThemeVal);
            }}
        >
            Theme
        </Switch>
    );
};

export default ThemeToggle;
