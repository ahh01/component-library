import React from "react";
import Button from "./components/Button";
import Alert from "./components/Alert";
import Badge from "./components/Badge";
import Card from "./components/Card";
import { AiFillGolden } from "react-icons/ai";
import { FiAlertTriangle } from "react-icons/fi";
import "./App.css";

function App() {
  return (
    <div className="container p-4">
      <h1 className=" text-4xl font-bold">Component library</h1>
      <br />
      <Button
        size="small"
        color="blue"
        disabled={false}
        onClick={() => console.log("Button Clicked!")}
      >
        Click Me
      </Button>
      <br /> <br />
      <h2 className="text-xl font-bold mb-2">Alert</h2>
      <Alert color="yellow" size="primary" icon={<FiAlertTriangle />}>
        This is an information alert.
      </Alert>
      <br />
      <h2 className="text-xl font-bold mb-2">Badge</h2>
      <Badge color="blue" size="md" icon={<AiFillGolden />}>
        Small Badge
      </Badge>
      <br />
      <h2 className="text-xl font-bold mb-3">Card</h2>
      <Card
        href="https://img.freepik.com/free-vector/playing-cards-aces-set_78370-2354.jpg?size=338&ext=jpg&ga=GA1.1.735520172.1711411200&semt=ais"
        imgAlt="Sample image"
        imgSrc="https://img.freepik.com/free-vector/playing-cards-aces-set_78370-2354.jpg?size=338&ext=jpg&ga=GA1.1.735520172.1711411200&semt=ais"
      >
        <p>This is a sample card.</p>
      </Card>
    </div>
  );
}

export default App;
