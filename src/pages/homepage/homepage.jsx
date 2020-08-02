import React from "react";
// import "./homepage.scss";
import Directory from "../../components/directory/directory";
import { HomePageContainer } from "./homepage.style";

const HomePage = () => {
  return (
    <HomePageContainer>
      <Directory />
    </HomePageContainer>
  );
};

export default HomePage;
