import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): React.JSX.Element {
    const [bool, setValue] = useState<boolean>(false);
    if (bool) {
        return (
            <div>
                <Button
                    onClick={() => {
                        setValue(!bool);
                    }}
                >
                    Reveal Answer
                </Button>
                42
            </div>
        );
    } else {
        return (
            <div>
                <Button
                    onClick={() => {
                        setValue(!bool);
                    }}
                >
                    Reveal Answer
                </Button>
            </div>
        );
    }
}
