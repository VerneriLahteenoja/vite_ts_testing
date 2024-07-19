import { ContentProps } from "../types/types";

const Content = (props: ContentProps) => {
  return (
    <div>
      {props.courseParts.map(c => <p key={c.name}>{c.name} {c.exerciseCount}</p>)}
    </div>
  );
};

export default Content;