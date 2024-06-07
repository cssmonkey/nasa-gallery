"use client";

import Title from "@/components/Title/Title";
import { ErrorPageProps } from "@/types";
import { Button } from "@nextui-org/react";
import { useEffect } from "react";

const Global = ({ error, reset }: ErrorPageProps) => {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error);
    }, [error]);

    return (
        <html>
            <body>
                <Title level="h1">Something went wrong!</Title>
                <Button color="primary" onClick={() => reset()}>
                    Try again
                </Button>
            </body>
        </html>
    );
};

export default Global;
