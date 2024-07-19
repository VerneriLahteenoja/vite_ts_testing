import { PartProps } from "../types/types";


const Part = (props: PartProps) => {
  const assertNever = (part: never): never => {
    throw new Error(
      `Unhandled discriminated union member: ${JSON.stringify(part)}`
    );
  };

  switch (props.coursePart.kind) {
    case "basic":
      return (<div>
        <p>
          <b>{props.coursePart.name}
            {props.coursePart.exerciseCount}
          </b>
          <br />
          <i>{props.coursePart.description}</i>
        </p>
      </div>);
    case "background":
      return (<div>
        <p>
          <b>{props.coursePart.name}
            {props.coursePart.exerciseCount}
          </b>
          <br />
          <i>{props.coursePart.description}</i>
          <br />
          submit to {props.coursePart.backgroundMaterial}
        </p>
      </div>);
    case "group":
      return (<div>
        <p>
          <b>{props.coursePart.name}
            {props.coursePart.exerciseCount}
          </b>
          <br />
          project exercises {props.coursePart.groupProjectCount}
        </p>
      </div>);
    case "special":
      return (<div>
        <p>
          <b>{props.coursePart.name}
            {props.coursePart.exerciseCount}
          </b>
          <br />
          <i>{props.coursePart.description}</i>
          <br />
          required skills: {props.coursePart.requirements.join(", ")}
        </p>
      </div>);
    default:
      assertNever(props.coursePart);
  }
};

export default Part;