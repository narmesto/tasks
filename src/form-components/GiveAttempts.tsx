import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";

export function GiveAttempts(): React.JSX.Element {
    const [left, setLeft] = useState<number>(3);
    const [request, setRequest] = useState<number>(0);
    function changeRequest(event: React.ChangeEvent<HTMLInputElement>) {
        if (event.target.value != "") {
            setRequest(parseInt(event.target.value));
        }
    }
    function changeLeft() {
        setLeft(left + request);
    }
    function use() {
        setLeft(left - 1);
    }
    return (
        <div>
            <div>Attempts left: {left}</div>
            <div>
                <Button onClick={changeLeft}>gain</Button>
            </div>
            <div>
                <Button onClick={use} disabled={left == 0}>
                    use
                </Button>
            </div>
            <Form.Group controlId="formRequested">
                <Form.Label>Request:</Form.Label>
                <Form.Control
                    type="number"
                    value={request}
                    onChange={changeRequest}
                />
            </Form.Group>
        </div>
    );
}
