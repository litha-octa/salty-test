import { Box, Text, Image } from "@chakra-ui/react";
import { Colors } from "../assets/constant/colors";
import { IconAccesories, IconExhaust, IconSpeed } from "../assets/img";

const SpecialityContent = () => {
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
        <Box style={styles.list}>
          {data?.points?.map((item, index) => {
            return (
              <Box styla={styles.item}>
                <Image src={item?.icon} alt={`icon${index}`} />
                <Text style={{ alignText: "center" }}>{item?.name}</Text>
              </Box>
            );
          })}
        </Box>
        <Text fontSize="md" style={styles.desc}>
          {data?.description}
        </Text>
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
};
