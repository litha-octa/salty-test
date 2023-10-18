import React from "react";
import { Box, Image } from "@chakra-ui/react";
import { Logo, MainBanner } from "../../assets/img";
// import { HamburgerIcon } from "@chakra-ui/icons";
import "./index.css";
import { IntroCard, Footer, CoreValueContent } from "../../components";
import { Introductions } from "../../assets/constant/introductions";

const Home = () => {
  return (
    <div className="main">
      <Box className="nav">
        <Image src={Logo} />
        {/* <HamburgerIcon /> */}
      </Box>
      <Box className="main-banner">
        <Image src={MainBanner} />
      </Box>
      <Box className="intro-container">
        {Introductions?.map((item, index) => {
          return <IntroCard item={item} key={index} />;
        })}
      </Box>
      <CoreValueContent />
      <Footer />
    </div>
  );
};
export default Home;
