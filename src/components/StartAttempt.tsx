import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): React.JSX.Element {
    const [value, setValue] = useState<number>(4);
    const [bool, setState] = useState<boolean>(false);

    return (
        <span>
            <Button
                onClick={() => {
                    setValue(value - 1);
                    setState(!bool);
                }}
                disabled={bool || value <= 0}
            >
                Start Quiz
            </Button>
            <Button
                onClick={() => {
                    setState(!bool);
                }}
                disabled={!bool}
            >
                Stop Quiz
            </Button>
            <Button
                onClick={() => {
                    setValue(value + 1);
                }}
                disabled={bool}
            >
                Mulligan
            </Button>
            Lives: {value}
        </span>
    );
}
