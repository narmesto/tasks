import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function CheckAnswer({
    expectedAnswer,
}: {
    expectedAnswer: string;
}): React.JSX.Element {
    const [answer, setAnswer] = useState<string>("");
    function changeAnswer(event: React.ChangeEvent<HTMLTextAreaElement>) {
        setAnswer(event.target.value);
    }
    return (
        <div>
            <Form.Group controlId="answerBox">
                <Form.Control
                    as="textarea"
                    value={answer}
                    onChange={changeAnswer}
                />
            </Form.Group>
            {answer == expectedAnswer && <div>✔️</div>}
            {answer != expectedAnswer && <div>❌</div>}
        </div>
    );
}
