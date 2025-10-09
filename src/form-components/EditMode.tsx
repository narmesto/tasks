import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): React.JSX.Element {
    const [name, setName] = useState<string>("Your Name");
    const [student, setStudent] = useState<boolean>(true);
    const [edit, setEdit] = useState<boolean>(false);
    function updateEdit(event: React.ChangeEvent<HTMLInputElement>) {
        setEdit(event.target.checked);
    }
    function updateName(event: React.ChangeEvent<HTMLInputElement>) {
        setName(event.target.value);
    }
    function updateStudent(event: React.ChangeEvent<HTMLInputElement>) {
        setStudent(event.target.checked);
    }
    return (
        <div>
            <div>
                <Form.Check
                    inline
                    type="switch"
                    id="edit-mode"
                    label="edit"
                    checked={edit}
                    onChange={updateEdit}
                />
            </div>
            <div>
                {edit && (
                    <Form.Check
                        inline
                        type="checkbox"
                        id="is-student-check"
                        label="student"
                        checked={student}
                        onChange={updateStudent}
                    />
                )}
            </div>
            <div>
                {edit && <Form.Control value={name} onChange={updateName} />}
            </div>
            <div>
                {!edit && (
                    <div>
                        {name} is {!student && "not"} a student
                    </div>
                )}
            </div>
        </div>
    );
}
