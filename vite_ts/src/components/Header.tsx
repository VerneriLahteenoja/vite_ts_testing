import { HeaderProps } from "../types/types";

const Header = (props: HeaderProps) => {
  return (
    <h1>{props.courseName}</h1>
  );
};

export default Header;