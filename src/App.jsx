import React from "react";
import ChangeImage from "./assets/components/image/ChangeImage";
import Card from "./assets/components/card/Card";

export default function App() {
  // const [check, setCheck] = useState(false);
  return (
    <div className=" img h-screen">
      {/* <ChangeImage check={check} setCheck={setCheck} /> */}
      <div>
        <Card />
      </div>
    </div>
  );
}
