import { useState } from "react";
import { Box, Text, Image, Button } from "@chakra-ui/react";
import { Colors } from "../assets/constant/colors";
import { NextBtn, PrevBtn, NextDisabled, PrevDisabled } from "../assets/img";
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
            <Text color={Colors.BLACK}>{current + 1}</Text>{" "}
            {` / ${Introductions?.length}`}
          </Text>
          <Box style={styles.row}>
            <Button variant={"ghost"} isDisabled={current === 0 ? true : false}>
              {current === 0 ? (
                <Image src={PrevDisabled} />
              ) : (
                <Image src={PrevBtn} onClick={() => setCurrent(current - 1)} />
              )}
            </Button>
            <Button
              variant={"ghost"}
              isDisabled={current === Introductions?.length - 1 ? true : false}
            >
              {current === Introductions?.length - 1 ? (
                <Image src={NextDisabled} />
              ) : (
                <Image src={NextBtn} onClick={() => setCurrent(current + 1)} />
              )}
            </Button>
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
  },
  prevbtnActive: {
    transform: [{ rotate: "90deg" }],
  },
};
