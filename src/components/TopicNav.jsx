import { Button, ButtonGroup } from "@mui/material";
import { useEffect, useState } from "react";
import * as api from "../utils/api";

const TopicNav = ({ setSelectedArticle }) => {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    api.fetchTopics().then((topics) => {
      setTopics(topics);
    });
  }, []);

  const handleClick = (slug) => {
    setSelectedArticle(slug);
  }

  return (
    <nav className="TopicNav">
      <ButtonGroup color="info">
          <Button onClick={() => handleClick()}>ALL</Button>
        {topics.map(({ slug }) => {
          return <Button onClick={() => {handleClick(slug)}}>{slug}</Button>;
        })}
      </ButtonGroup>
    </nav>
  );
};

export default TopicNav;
