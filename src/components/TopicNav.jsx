import { Button, ButtonGroup } from "@mui/material";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import * as api from "../utils/api";

const TopicNav = () => {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    api.fetchTopics().then((topics) => {
      setTopics(topics);
    });
  }, []);

  return (
    <nav className="TopicNav">
      <ButtonGroup color="info">
        <Link to="/">
          <Button>ALL</Button>
        </Link>
        {topics.map(({ slug }) => {
          return (
            <Link to={`/topics/${slug}`}>
              <Button>{slug}</Button>
            </Link>
          );
        })}
      </ButtonGroup>
    </nav>
  );
};

export default TopicNav;
