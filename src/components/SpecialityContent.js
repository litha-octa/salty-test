import React, { useState } from "react";
import { Box, Text, Image, Button } from "@chakra-ui/react";
import { Colors } from "../assets/constant/colors";
import {
  IconAccesories,
  IconExhaust,
  IconSpeed,
  ArrowNext,
  ArrowPrev,
} from "../assets/img";
import "./index.css";
const SpecialityContent = () => {
  const [current, setCurrent] = useState(0);
  const data = {
    title: "OUR SPECIALITY",
    subtitle:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis euismod libero vel leo auctor, in venenatis nulla consequat. Sed commodo nunc sit amet congue aliquam.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis euismod libero vel leo auctor, in venenatis nulla consequat. Sed commodo nunc sit amet congue aliquam.",
    points: [
      {
        icon: IconAccesories,
        name: "Accesories",
      },
      {
        icon: IconSpeed,
        name: "Speed Improvement",
      },
      {
        icon: IconExhaust,
        name: "Exhaust",
      },
    ],
  };
  return (
    <Box style={styles.body}>
      <Box style={styles.main_container}>
        <Text style={styles.title} fontSize="2xl">
          {data?.title}
        </Text>
        <Text fontSize="md" style={styles.subtitle}>
          {data?.subtitle}
        </Text>
        <Box className="speciality_list">
          {data?.points?.map((item, index) => {
            return (
              <Box style={styles.item}>
                <Image src={item?.icon} alt={`icon${index}`} />
                <Text style={styles.itemName}>{item?.name}</Text>
              </Box>
            );
          })}
        </Box>
        <Box className="specialityListItem">
          <Box>
            <Image src={data?.points[current]?.icon} alt={`icon${current}`} />
            <Text style={styles.itemName}>{data?.points[current]?.name}</Text>
          </Box>
        </Box>

        <Text fontSize="md" style={styles.desc}>
          {data?.description}
        </Text>
        <Box className="specialityBtnContainer">
          <Button isDisabled={current === 0 ? true : false}>
            <Image src={ArrowPrev} onClick={() => setCurrent(current - 1)} />
          </Button>
          <Button
            isDisabled={current === data?.points?.length - 1 ? true : false}
          >
            <Image
              src={ArrowNext}
              onClick={() => {
                setCurrent(current + 1);
              }}
            />
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
export default SpecialityContent;
const styles = {
  body: {
    backgroundColor: Colors.BLUE_SPECIALITY,
    padding: 14,
  },
  main_container: {
    backgroundColor: "white",
    padding: 12,
  },
  title: {
    color: Colors.MAIN_BLUE,
    fontWeight: "bold",
    fontFamily: "rubik",
  },
  subtitle: {
    color: Colors.BLACK,
    fontFamily: "rubik",
  },
  desc: {
    color: Colors.GREY,
    fontFamily: "rubik",
  },
  list: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    paddingTop: 16,
    paddingBottom: 16,
  },
  item: {
    marginHorizontal: 10,
  },
  itemName: {
    fontSize: 16,
    fontWeight: "bold",
    color: Colors.BLACK,
    marginTop: 10,
  },
};
