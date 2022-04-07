import { useContext, useEffect } from "react";
import { UserContext } from "../contexts/UserContext";
import Avatar from "@mui/material/Avatar";
import * as api from "../utils/api";

const UserBar = () => {
  const { user, setUser } = useContext(UserContext);

  useEffect(() => {
    api
      .fetchUserByUsername("grumpy19")
      .then((user) => {
        setUser(user);
      });
  }, [setUser]);

  return (
    <div className="user-bar">
      <Avatar sx={{ width: 35, height: 35 }} src={user.avatar_url}></Avatar>
      <p>{user.username}</p>
    </div>
  );
};

export default UserBar;
