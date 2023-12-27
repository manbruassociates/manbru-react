import React from "react";
import styled, { keyframes } from "styled-components";
import HomeContent from "./homeContent";
import DisclaimerDialogue from "./disclaimerPopup";

const moveBackground = keyframes`
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: 100% 100%;
  }
`;

const twinkling = keyframes`
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  animation: ${moveBackground} 20s linear infinite alternate;
  background: linear-gradient(to bottom right, #161a30, #000);
  color: #fff; /* Set text color */
`;

const Star = styled.div`
  position: absolute;
  width: 2px;
  height: 2px;
  background: #fff;
  animation: ${twinkling} 1.5s ease infinite;
  border-radius: 50%;
  box-shadow: 0 0 2px #fff;
`;

const generateRandomPosition = () => ({
  top: `${Math.random() * 100}%`,
  left: `${Math.random() * 100}%`,
  animationDelay: `${Math.random() * 5}s`,
});

const MovingBackground: React.FC = () => {
  const stars = Array.from({ length: 100 }).map((_, index) => (
    <Star key={index} style={generateRandomPosition()} />
  ));

  return (
    <Background>
      <div style={{ overflowY: "auto", height: "100%" }}>
        <DisclaimerDialogue></DisclaimerDialogue>
        <HomeContent></HomeContent>
      </div>
      {stars}
    </Background>
  );
};

export default MovingBackground;
