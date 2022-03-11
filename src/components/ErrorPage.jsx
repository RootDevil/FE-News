import { Button } from "@mui/material";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { Link } from "react-router-dom";

const ErrorPage = ({ error }) => {
  return (
    <section>
      {error ? (
        <h2>{error.message}</h2>
      ) : (
        <h2>"Sorry, that page doesn't exist"</h2>
      )}
      <Link to="/">
        <Button variant="text" startIcon={<KeyboardBackspaceIcon />}>
          Back to safety
        </Button>
      </Link>
    </section>
  );
};

export default ErrorPage;
