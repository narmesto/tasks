import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function CycleHoliday(): React.JSX.Element {
    const [value, setValue] = useState<string>("🎄");
    const getNextAlphabetically = (current: string): string => {
        if (current == "🎉") {
            return "🎄";
        } else if (current == "🎄") {
            return "🎃";
        } else if (current == "🎃") {
            return "🎆";
        } else if (current == "🎆") {
            return "❤️";
        } else {
            return "🎉";
        }
    };
    const getNextByYear = (current: string): string => {
        if (current == "🎆") {
            return "🎉";
        } else if (current == "🎉") {
            return "❤️";
        } else if (current == "❤️") {
            return "🎃";
        } else if (current == "🎃") {
            return "🎄";
        } else {
            return "🎆";
        }
    };

    const alphabet = () => {
        setValue(getNextAlphabetically(value));
    };

    const year = () => {
        setValue(getNextByYear(value));
    };

    return (
        <div>
            <Button
                onClick={() => {
                    alphabet();
                }}
            >
                Advance by Alphabet
            </Button>
            <Button
                onClick={() => {
                    year();
                }}
            >
                Advance by Year
            </Button>
            Holiday: {value}
        </div>
    );
}
