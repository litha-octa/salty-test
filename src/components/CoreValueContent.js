import { CoreValue } from "../assets/constant/coreValue";
import { Box, Text, Image } from "@chakra-ui/react";
import { Colors } from "../assets/constant/colors";
import { Illustration } from "../assets/img";

const CoreValueContent = () => {
  return (
    <Box style={styles.body}>
      <Text style={styles.title} fontSize="4xl">
        {CoreValue?.title}
      </Text>
      <Text style={styles.desc} fontSize="md">
        {CoreValue?.description}
      </Text>
      <Text style={styles.desc} fontSize="md">
        {CoreValue?.description2}
      </Text>
      {CoreValue?.points?.map((item, index) => {
        return (
          <Box key={index} style={styles.list}>
            <Text fontSize="2xl" style={styles.title_list}>
              -{item?.title}
            </Text>
            <Text style={styles.desc}>{item?.content}</Text>
          </Box>
        );
      })}
      <Image src={Illustration} alt="illustration" style={styles.ilustration} />
    </Box>
  );
};
export default CoreValueContent;

const styles = {
  body: {
    backgroundColor: Colors.CORE_GREY,
    padding: 12,
    width: "100%",
  },
  title: {
    textAlign: "center",
    color: Colors.MAIN_BLUE,
    fontWeight: "bold",
    fontFamily: "rubik",
  },
  desc: {
    color: Colors.GREY,
    fontFamily: "rubik",
  },
  list: {
    padding: 10,
  },
  title_list: {
    color: Colors.BLACK,
    fontFamily: "rubik",
    marginBottom: 10,
  },
  ilustration: {
    width: "30%",
    height: "auto",
  },
};
