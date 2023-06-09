import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getQuote } from "../../features/quoteSlice/quoteSlice";

export default function Card() {
  const { qoute: data, isLoading } = useSelector((state) => state.qoute);
  const [keyword, setKeyword] = useState("life");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getQuote(keyword));
  };

  useEffect(() => {
    dispatch(getQuote(keyword));
  }, []);

  return (
    <div className="flex flex-col gap-3 justify-center items-center pt-28 md:pt-36 lg:pt-44">
      <form onSubmit={handleSubmit} className="flex flex-row gap-3">
        <input
          type="text"
          placeholder="ex: Life..."
          className="border-2 border-slate-400 p-1 font-mono text-md rounded-md"
          onChange={(e) => setKeyword(e.target.value)}
        />
        <button
          type="submit"
          className="p-1 bg-gradient-to-tr from-lime-600 to-orange-400 rounded-md font-mono font-semibold text-white"
        >
          Generate
        </button>
      </form>

      <div className="border-2 rounded-xl border-slate-400 p-10 mx-10 md:mx-40 lg:mx-96 backdrop-blur bg-white/25 flex flex-col gap-4">
        {isLoading && (
          <h2 className="text-2xl font-bold font-mono text-center">
            Generating...
          </h2>
        )}
        {data &&
          data.map((item, index) => {
            return (
              <div key={index} className="flex flex-col gap-3">
                <p className="font-medium font-mono text-slate-800 text-sm md:text-base lg:text-lg">
                  "{item.quote}"
                </p>

                <p className="font-semibold font-mono text-slate-800 text-base md:text-lg lg:text-xl mx-auto">
                  {item.author}
                </p>
              </div>
            );
          })}
      </div>
    </div>
  );
}
