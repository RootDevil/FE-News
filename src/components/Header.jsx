import StyledLink from "./StyledLink";
import UserBar from "./UserBar";

const Header = () => {
  return (
    <header className="App-header">
      <div className="header-content">
        <StyledLink to="/" color="white">
          <h1>Northcoders News</h1>
        </StyledLink>
        <UserBar />
      </div>
    </header>
  );
};

export default Header;
