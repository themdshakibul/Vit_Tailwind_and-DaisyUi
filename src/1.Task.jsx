import { useState } from "react";

const Task = () => {
  const [count, setCoutn] = useState(0);

  //   icreases
  const increasesHandlar = () => {
    const increasesCount = count + 1;
    setCoutn(increasesCount);
  };
  //   Decreases
  const decreasesHandlar = () => {
    const decreasesCount = count - 1;
    setCoutn(decreasesCount);
  };
  //   Reset btn
  const resetHandlar = () => {
    const resetCount = 0;
    setCoutn(resetCount);
  };

  return (
    <>
      <div className="space-y-5">
        <h2 className="text-2xl font-bold">Total Count {count}</h2>
        <div className="flex gap-5">
          <button onClick={increasesHandlar} className="btn btn-success">
            Increases
          </button>
          <button onClick={decreasesHandlar} className="btn btn-error">
            Decreases
          </button>
          <button onClick={resetHandlar} className="btn btn-primary">
            Reset Count
          </button>
        </div>
      </div>
    </>
  );
};

export default Task;
