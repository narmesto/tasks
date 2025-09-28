import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): React.JSX.Element {
    const [val1, setValue1] = useState<number>(1);
    const [val2, setValue2] = useState<number>(2);
    const rollVal1 = () => {
        setValue1(d6);
    };
    const rollVal2 = () => {
        setValue2(d6);
    };
    const outcome = () => {
        if (val1 == 1 && val2 == 1) {
            return "Lose";
        } else if (val1 == val2) {
            return "Win";
        } else {
            return null;
        }
    };
    const temp = outcome();
    return (
        <div>
            <div>
                <span data-testid="left-die">{val1}</span>
                <span data-testid="right-die">{val2}</span>
            </div>
            <div>
                <Button onClick={rollVal1}>Roll Left</Button>
                <Button onClick={rollVal2}>Roll Right</Button>
            </div>
            {temp && <div>{temp}</div>}
        </div>
    );
}
