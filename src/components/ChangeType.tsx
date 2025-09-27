import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): React.JSX.Element {
    const [value, setValue] = useState<QuestionType>("short_answer_question");
    const change = () => {
        if (value == "short_answer_question") {
            setValue("multiple_choice_question");
        } else {
            setValue("short_answer_question");
        }
    };
    return (
        <span>
            <Button
                onClick={() => {
                    change();
                }}
            >
                Change Type
            </Button>
            {value == "short_answer_question" && <div>Short Answer</div>}
            {value == "multiple_choice_question" && <div>Multiple Choice</div>}
        </span>
    );
}
