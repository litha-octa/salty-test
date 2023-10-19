import { useState } from "react";
import { Box, Text, Image } from "@chakra-ui/react";
import { Colors } from "../assets/constant/colors";
import { NextBtn, PrevBtn } from "../assets/img";
import { Introductions } from "../assets/constant";
import "./index.css";
const IntroCard = () => {
  const [current, setCurrent] = useState(0);
  return (
    <Box className="introContainer">
      {Introductions?.map((item, index) => {
        return (
          <Box className={"list-model"} key={index}>
            <Text style={styles.title}>{item?.title || "Title"}</Text>
            <Text style={styles.subtitle}>
              {item?.subtitle || "Text subtitle"}
            </Text>
            <Text style={styles.content}>
              {item?.content || "Text content"}
            </Text>
          </Box>
        );
      })}
      <Box className="list-card">
        <Text style={styles.title}>
          {Introductions[current]?.title || "Title"}
        </Text>
        <Text style={styles.subtitle}>
          {Introductions[current]?.subtitle || "Text subtitle"}
        </Text>
        <Text style={styles.content}>
          {Introductions[current]?.content || "Text content"}
        </Text>
        <Box className="indicatorIntro">
          <Text style={styles.row}>
            <Text color={Colors.BLACK}> </Text> {`/ length}`}
          </Text>
          <Box style={styles.row}>
            <Image src={PrevBtn} />
            <Image src={NextBtn} onClick={() => {}} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default IntroCard;
const styles = {
  title: {
    color: Colors.MAIN_BLUE,
    fontSize: 36,
    fontWeight: "bold",
  },
  subtitle: {
    color: Colors.BLACK,
    fontWeight: "600",
    fontSize: 18,
  },
  content: {
    color: Colors.GREY,
    fontSize: 14,
  },

  row: {
    display: "flex",
    flexDirection: "row",
    fontSize: 22,
    fontWeight: "bold",
    color: Colors.GREY,
  },
};
