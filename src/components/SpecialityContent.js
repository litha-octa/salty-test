import React, { useState } from "react";
import { Box, Text, Image, Button } from "@chakra-ui/react";
import { Colors } from "../assets/constant/colors";
import {
  ArrowNextOn,
  ArrowPrevOn,
  ArrowNextOff,
  ArrowPrevOff,
} from "../assets/img";
import "./index.css";
import { speciality } from "../assets/constant";
const SpecialityContent = () => {
  const [current, setCurrent] = useState(0);

  return (
    <Box style={styles.body}>
      <Box style={styles.main_container}>
        <Text style={styles.title} fontSize="2xl">
          {speciality?.title}
        </Text>
        <Text fontSize="md" style={styles.subtitle}>
          {speciality?.subtitle}
        </Text>
        <Box className="speciality_list">
          {speciality?.points?.map((item, index) => {
            return (
              <Box style={styles.item}>
                <Image
                  src={item?.icon}
                  alt={`icon${index}`}
                  className="speciality-icon"
                />
                <Text style={styles.itemName}>{item?.name}</Text>
                <Text fontSize="md" style={styles.desc}>
                  {item?.description}
                </Text>
              </Box>
            );
          })}
        </Box>
        <Box className="specialityListItem">
          <Box>
            <Image
              src={speciality?.points[current]?.icon}
              alt={`icon${current}`}
              // className="speciality-icon"
              style={styles.iconItem}
            />
            <Text style={styles.itemName}>
              {speciality?.points[current]?.name}
            </Text>
            <Text style={styles.desc}>
              {speciality?.points[current]?.description}
            </Text>
          </Box>
        </Box>
        <Box className="specialityBtnContainer">
          <Button isDisabled={current === 0 ? true : false}>
            {current === 0 ? (
              <Image src={ArrowPrevOff} />
            ) : (
              <Image
                src={ArrowPrevOn}
                onClick={() => setCurrent(current - 1)}
              />
            )}
          </Button>
          <Button
            isDisabled={
              current === speciality?.points?.length - 1 ? true : false
            }
          >
            {current === speciality?.points?.length - 1 ? (
              <Image src={ArrowNextOff} />
            ) : (
              <Image
                src={ArrowNextOn}
                onClick={() => {
                  setCurrent(current + 1);
                }}
              />
            )}
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
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 40,
    paddingBottom: 40,
  },
  main_container: {
    backgroundColor: "white",
    padding: 20,
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
    // color: Colors.GREY,
    fontFamily: "rubik",
    color: "#A7A7A7",
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
    padding: 10,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    textAlign: "center",
  },
  itemName: {
    fontSize: 16,
    fontWeight: "bold",
    color: Colors.BLACK,
    marginTop: 10,
    marginBottom: 30,
  },
  iconItem: {
    marginTop: 30,
    width: "30%",
    alignSelf: "center",
    margin: "auto",
  },
};
