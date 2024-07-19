import { TotalProps } from "../types/types";

const Total = (props: TotalProps) => {
  return (
    <p>Number of exercises: {props.totalExercises}</p>
  );
};

export default Total;