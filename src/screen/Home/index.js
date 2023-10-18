import React from "react";
import { Box, Image } from "@chakra-ui/react";
import { Logo, MainBanner, IconBurger } from "../../assets/img";
import "./index.css";
import {
  IntroCard,
  Footer,
  CoreValueContent,
  SpecialityContent,
} from "../../components";
import { Introductions } from "../../assets/constant/introductions";

const Home = () => {
  return (
    <div className="main">
      <Box className="nav">
        <Image src={Logo} />
        <Image src={IconBurger} boxSize={"30px"} />
      </Box>
      <Box className="main-banner">
        <Image src={MainBanner} />
      </Box>
      <Box className="intro-container">
        {Introductions?.map((item, index) => {
          return (
            <IntroCard
              item={item}
              index={index}
              length={Introductions?.length}
              key={index}
            />
          );
        })}
      </Box>
      <CoreValueContent />
      <SpecialityContent />
      <Footer />
    </div>
  );
};
export default Home;
