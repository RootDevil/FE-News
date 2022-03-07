import { Box, Button, ButtonGroup } from "@mui/material";
import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
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
      <NavLink to="/">
        <Button>ALL</Button>
      </NavLink>
      {topics.map(({ slug }) => {
        return (
          <NavLink to={`/topics/${slug}`} key={`button-${slug}`}>
            <Button>{slug}</Button>
          </NavLink>
        );
      })}
    </nav>
  );
};

export default TopicNav;
