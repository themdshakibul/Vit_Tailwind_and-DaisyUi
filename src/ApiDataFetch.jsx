import { use } from "react";
import Usear from "./Usear";

const ApiDataFetch = ({ DataLoading }) => {
  const Data = use(DataLoading);
  return (
    <div className="space-y-5">
      <div className="text-2xl font-bold">ApiDataFetch {Data.length} </div>

      {Data.map((Data) => (
        <Usear key={Data.id} Data={Data} />
      ))}
      <div></div>
    </div>
  );
};

export default ApiDataFetch;
