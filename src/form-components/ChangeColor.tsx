import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function ChangeColor(): React.JSX.Element {
    const [color, setColor] = useState<string>("red");
    function updateColor(event: React.ChangeEvent<HTMLInputElement>) {
        setColor(event.target.value);
    }
    return (
        <div>
            <h3>Change Color</h3>
            <Form.Check
                inline
                type="radio"
                name="colors"
                onChange={updateColor}
                id="color-check-red"
                label={<span style={{ background: "red" }}>red</span>}
                value="red"
                checked={color === "red"}
            />
            <Form.Check
                inline
                type="radio"
                name="colors"
                onChange={updateColor}
                id="color-check-blue"
                label={<span style={{ background: "blue" }}>blue</span>}
                value="blue"
                checked={color === "blue"}
            />
            <Form.Check
                inline
                type="radio"
                name="colors"
                onChange={updateColor}
                id="color-check-green"
                label={<span style={{ background: "green" }}>green</span>}
                value="green"
                checked={color === "green"}
            />
            <Form.Check
                inline
                type="radio"
                name="colors"
                onChange={updateColor}
                id="color-check-orange"
                label={<span style={{ background: "orange" }}>orange</span>}
                value="orange"
                checked={color === "orange"}
            />
            <Form.Check
                inline
                type="radio"
                name="colors"
                onChange={updateColor}
                id="color-check-purple"
                label={<span style={{ background: "purple" }}>purple</span>}
                value="purple"
                checked={color === "purple"}
            />
            <Form.Check
                inline
                type="radio"
                name="colors"
                onChange={updateColor}
                id="color-check-cyan"
                label={<span style={{ background: "cyan" }}>cyan</span>}
                value="cyan"
                checked={color === "cyan"}
            />
            <Form.Check
                inline
                type="radio"
                name="colors"
                onChange={updateColor}
                id="color-check-magenta"
                label={<span style={{ background: "magenta" }}>magenta</span>}
                value="magenta"
                checked={color === "magenta"}
            />
            <Form.Check
                inline
                type="radio"
                name="colors"
                onChange={updateColor}
                id="color-check-white"
                label={<span style={{ background: "white" }}>white</span>}
                value="white"
                checked={color === "white"}
            />
            <Form.Check
                inline
                type="radio"
                name="colors"
                onChange={updateColor}
                id="color-check-black"
                label={<span style={{ background: "black" }}>black</span>}
                value="black"
                checked={color === "black"}
            />
            <div>
                You have chosen{" "}
                <span style={{ background: color }}>{color}</span>.
            </div>
        </div>
    );
}
