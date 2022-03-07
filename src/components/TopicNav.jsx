import { Button, ButtonGroup } from "@mui/material";
import { useEffect, useState } from "react";
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
        {topics.map((topic) => {
          return <Button>{topic.slug}</Button>;
        })}
      </ButtonGroup>
    </nav>
  );
};

export default TopicNav;
