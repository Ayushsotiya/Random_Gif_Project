import React from "react";
import Random from "./components/Random"
import Tag from "./components/Tag"
function App() {
  return (
    <div className="w-full h-screen flex flex-col background items-center gap-y-5 box-border overflow-y-auto">
    <h1 className="bg-white rounded-lg w-11/12 text-center mt-[40px] text-4xl font-bold">Random Gifs</h1>
    <div className="flex flex-col w-full items-center gap-y-10  mb-10  ">
        <Random></Random>
        <Tag/>
      </div>
    </div>
  );
}

export default App;