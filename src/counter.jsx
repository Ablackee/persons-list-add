import { useState } from "react";

const Counter = (props) => {
  const { value } = props;

  return <h1 className="text-4xl font-semibold">{value}</h1>;
};

const App = () => {
  const [count, setCount] = useState(0);
  const inc = () => {
    setCount(count + 1);
  };

  return (
    <div className="flex flex-col gap-4 p-4">
      <h1 className="text-4xl font-semibold">{count}</h1>
      <button
        onClick={inc}
        className="p-4 text-4xl font-bold text-white bg-blue-600 active:bg-blue-700"
      >
        +1
      </button>
    </div>
  );
};

export default App;
