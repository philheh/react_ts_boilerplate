import { Link } from "react-router-dom";

export const Button = (props) => {
  const { link } = props;
  return (
    <Link to={link}>
      <button>
        CLICK ME
      </button>
    </Link>
  );
};