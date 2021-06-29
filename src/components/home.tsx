import React, { useState } from "react";
import TextField from '@material-ui/core/TextField';
import { TreeViewer } from "./treeViewer";

interface IEvent {
  target: { value: string }
}

const getInteger = (x: string | null): number => {
  if(x === null) {
    return 0;
  }
  const result = parseInt(x)
  return isNaN(result) ? 0 : result;
}

export const Home: React.FC = () => {
  const [ level, setLevel ] = useState<number>(3);
  return (
    <div className="home-container">
      <div className="home-container__custom">
        <TextField label={"Level"} type={"tel"} value={level} onChange={({ target }: IEvent) => setLevel(getInteger(target.value))} />
      </div>
      <TreeViewer level={level} />
    </div>
  )
}
