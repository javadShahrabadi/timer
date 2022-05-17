import React from "react";

import styled from "styled-components";
import Sidebar from "./Sidebar";
const Body = (props) => {
  const { isOpen, clock, endTime } = props;
  return (
    <MainBody>
      {isOpen && <Sidebar />}
      <Cart>
        <CartDetail>
          <h4>timer</h4>
          <Countdown>
            {!endTime ? (
              <>
                <p>{clock.hour}</p>:<p>{clock.minutes}</p>:
                <p>{clock.seconds}</p>
              </>
            ) : (
              <p>Time's Up!</p>
            )}
          </Countdown>
        </CartDetail>
      </Cart>
    </MainBody>
  );
};

// styled-components

const MainBody = styled.main`
  position: relative;
  height: calc(100vh - 120px);
`;

const Cart = styled.div`
  padding-top: 4em;
  color: black;
  display: grid;
  justify-content: center;
  align-content: center;
`;

const CartDetail = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  background-color: #7c83fd;
  border-radius: 10px;
  color: white;
  padding: 0.5em 5em;
`;

const Countdown = styled.div`
  margin-top: 5px;
  display: flex;
  align-items: center;
`;
export default Body;
