import { useState } from "react";
import { Link } from "react-router-dom";

const StyledLink = ({ to, children, color }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={
        isHovered
          ? { textDecoration: "underline", color: color }
          : { textDecoration: "none", color: color }
      }
      to={to}
    >
      {children}
    </Link>
  );
};

export default StyledLink;
