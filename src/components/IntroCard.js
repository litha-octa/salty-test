import { Box, Text, Image } from "@chakra-ui/react";
import { Colors } from "../assets/constant/colors";
import { NextBtn, PrevBtn } from "../assets/img";
import "./index.css";
const IntroCard = ({ item, index, length }) => {
  let current = index + 1;
  return (
    <Box className={"introCard"}>
      <Box>
        <Text style={styles.title}>{item?.title || "Title"}</Text>
        <Text style={styles.subtitle}>{item?.subtitle || "Text subtitle"}</Text>
        <Text style={styles.content}>{item?.content || "Text content"}</Text>
      </Box>
      <Box className="indicatorIntro">
        <Text style={styles.row}>
          <Text color={Colors.BLACK}>{current} </Text> {`/ ${length}`}
        </Text>
        <Box style={styles.row}>
          <Image src={PrevBtn} />
          <Image src={NextBtn} onClick={() => current + 1} />
        </Box>
      </Box>
    </Box>
  );
};

export default IntroCard;
const styles = {
  title: {
    color: Colors.MAIN_BLUE,
    fontSize: 30,
    fontWeight: "bold",
    fontFamily: "Rubik",
  },
  subtitle: {
    color: Colors.BLACK,
    fontSize: 18,
    fontFamily: "Rubik",
  },
  content: {
    color: Colors.GREY,
    fontSize: 14,
    fontFamily: "Rubik",
    height: 100,
  },

  row: {
    display: "flex",
    flexDirection: "row",
    fontSize: 22,
    fontWeight: "bold",
    color: Colors.GREY,
  },
};
