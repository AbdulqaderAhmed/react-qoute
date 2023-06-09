import React, { useState } from "react";
import ChangeImage from "./assets/components/image/ChangeImage";
import Card from "./assets/components/card/Card";

export default function App() {
  const [check, setCheck] = useState(false);
  return (
    <div
      className={` ${check ? "bg-anime" : "bg-sunset"} md:${
        check ? "bg-anime" : "bg-sunset"
      } h-screen`}
    >
      <ChangeImage check={check} setCheck={setCheck} />
      <div>
        <Card />
      </div>
    </div>
  );
}
