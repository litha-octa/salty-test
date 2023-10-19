import React from "react";
import { Box, Image, Text } from "@chakra-ui/react";
import { Logo, MainBanner, IconBurger } from "../../assets/img";
import { companyInfo } from "../../assets/constant";
import "./index.css";
import {
  IntroCard,
  Footer,
  CoreValueContent,
  SpecialityContent,
} from "../../components";

const Home = () => {
  return (
    <div className="main">
      <Box className="nav">
        <Image src={Logo} />
        <Image src={IconBurger} boxSize={"30px"} />
      </Box>
      <Box className="main-banner-container">
        <Image src={MainBanner} className="main-banner" />
        <Box className="company-info">
          <Text fontSize={"3xl"}>{companyInfo?.title}</Text>
          <Text fontSize={"md"}>{companyInfo?.description}</Text>
        </Box>
      </Box>
      <IntroCard />
      <CoreValueContent />
      <SpecialityContent />
      <Footer />
    </div>
  );
};
export default Home;
