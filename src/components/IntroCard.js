import { Box, Text } from "@chakra-ui/react";
import { Colors } from "../assets/constant/colors";
const IntroCard = ({ item }) => {
  return (
    <Box style={styles.body}>
      <Text style={styles.title}>{item?.title || "Title"}</Text>
      <Text style={styles.subtitle}>{item?.subtitle || "Text subtitle"}</Text>
      <Text style={styles.content}>{item?.content || "Text content"}</Text>
    </Box>
  );
};

export default IntroCard;
const styles = {
  title: {
    color: Colors.MAIN_BLUE,
    fontSize: 30,
    fontWeight: "bold",
    margin: 10,
    fontFamily: "Rubik",
  },
  subtitle: {
    color: Colors.BLACK,
    fontSize: 18,
    margin: 10,
    fontFamily: "Rubik",
  },
  content: {
    color: Colors.GREY,
    fontSize: 14,
    margin: 10,
    fontFamily: "Rubik",
  },
  body: {
    padding: 10,
    width: "30%",
  },
};
