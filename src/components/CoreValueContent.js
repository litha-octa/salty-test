import { CoreValue } from "../assets/constant";
import { Box, Text, Image } from "@chakra-ui/react";
import { Colors } from "../assets/constant/colors";
import { Illustration } from "../assets/img";
import "./index.css";

const CoreValueContent = () => {
  return (
    <Box style={styles.body}>
      <Text style={styles.title} fontSize="3xl">
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
            <Text fontSize="xl" style={styles.title_list}>
              -{item?.title}
            </Text>
            <Text style={styles.desc}>{item?.content}</Text>
          </Box>
        );
      })}
      <Box style={{ display: "flex", justifyContent: "flex-end" }}>
        <Image src={Illustration} alt="illustration" className="illustration" />
      </Box>
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
  },
  desc: {
    color: Colors.GREY,
    marginBottom: 16,
  },
  list: {
    padding: 10,
  },
  title_list: {
    color: Colors.BLACK,
    marginBottom: 10,
  },
  // ilustration: {
  //   width: "30%",
  //   height: "auto",
  // },
};
