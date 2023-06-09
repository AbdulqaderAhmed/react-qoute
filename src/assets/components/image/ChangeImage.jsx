import React from "react";

export default function ChangeImage({ check, setCheck }) {
  return (
    <div className="flex flex-row gap-3 pt-8 pl-10">
      <label htmlFor="Bg" className="text-white font-bold text-2xl">
        Change Backgound
      </label>
      <input
        type="checkbox"
        id="Bg"
        onChange={(e) => (e.target.checked ? setCheck(true) : setCheck(false))}
      />
    </div>
  );
}
