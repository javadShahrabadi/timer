import styled from "styled-components";
import { Sling as Hamburger } from "hamburger-react";
const Header = (props) => {
  const { toggleButton, clock, endTime } = props;

  return (
    <HeaderContainer>
      {/* toogle sidebar Hamburger */}
      <div style={{ display: "flex", alignItems: "center" }}>
        <div onClick={toggleButton}>
          <Hamburger duration={0.8} />
        </div>
        {/* Time Left Showing section */}
        <TimeLeft>
          <TimeLeftLable>Time Left: </TimeLeftLable>
          {!endTime ? (
            <>
              <p>{clock.hour}</p>:<p>{clock.minutes}</p>:<p>{clock.seconds}</p>
            </>
          ) : (
            <p>Time's Up!</p>
          )}
        </TimeLeft>
      </div>

      {/* Logo Section */}
      <div>
        <Logo>Logo</Logo>
      </div>
    </HeaderContainer>
  );
};

// styled components

const HeaderContainer = styled.header`
  padding: 0.75em 2em;
  border: 1px solid #e8e8e8;
  box-shadow: 0px 6px 10px -11px #000000;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media screen and (max-width: 750px) {
    padding: 0.75em 1em;
  } ;
`;
const Logo = styled.a`
  color: white;
  font-size: 1.25rem;
  background-color: #7c83fd;
  padding: 0.5em 2em;
  border-radius: 5px;
  cursor: pointer;
  @media screen and (max-width: 750px) {
    padding: 0.5em 1em;
  } ;
`;

const TimeLeft = styled.div`
  margin-left: 0.5em;
  font-size: 1.125rem;
  color: gray;
  display: flex;
  align-items: center;
`;

const TimeLeftLable = styled.p`
  color: #7c83fd;
  font-size: 1rem;
  font-weight: bolder;
  margin-right: 0.25em;
`;

export default Header;
