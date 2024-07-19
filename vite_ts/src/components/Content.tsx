import { ContentProps } from "../types/types";
import Part from "./Part";

const Content = (props: ContentProps) => {
  return (
    <div>
      {props.courseParts.map(c => <Part key={c.name} coursePart={c} />)}
    </div>
  );
};

export default Content;