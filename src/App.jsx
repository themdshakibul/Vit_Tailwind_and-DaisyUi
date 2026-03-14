import "./tailwind-init.css";
import Task from "./1.Task";
import { Suspense } from "react";
import ApiDataFetch from "./ApiDataFetch";

const DataLoading = fetch("https://jsonplaceholder.typicode.com/users").then(
  (res) => res.json(),
);

function App() {
  return (
    <>
      <div className="flex items-center justify-center text-left bg-black text-white">
        {/* <Task /> */}

        <Suspense
          fallback={<h2 className="text-2xl font-bold">Loading data....</h2>}
        >
          <ApiDataFetch DataLoading={DataLoading} />
        </Suspense>
      </div>
    </>
  );
}

export default App;
