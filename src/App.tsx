import React from "react";
import "./App.css";
import img from "./minion.jpg";
import { Button } from "react-bootstrap";
import { Container, Row, Col } from "react-bootstrap";

function App(): React.JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript by Noah Armesto
            </header>
            <h1 style={{ background: "Yellow" }}>Minions</h1>
            <img src={img} alt="A picture of minion" />
            <div>
                Unordered List:
                <ul>
                    <li>Bob</li>
                    <li>Kevin</li>
                    <li>Stuart</li>
                </ul>
            </div>
            <div>
                <Button
                    onClick={() => {
                        console.log("Hello World!");
                    }}
                >
                    Log Hello World
                </Button>
            </div>
            <div>
                <Container>
                    <Row>
                        <Col
                            style={{
                                width: 5,
                                backgroundColor: "red",
                                height: 25,
                            }}
                        ></Col>
                        <Col
                            style={{
                                width: 5,
                                backgroundColor: "red",
                                height: 100,
                            }}
                        ></Col>
                    </Row>
                </Container>
            </div>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload. Hello World.
            </p>
        </div>
    );
}

export default App;
