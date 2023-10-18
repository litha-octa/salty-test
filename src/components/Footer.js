import { Box, Image, Select, Text } from "@chakra-ui/react";
import { WhiteLogo } from "../assets/img";
import { Introductions } from "../assets/constant/introductions";
const Footer = () => {
  return (
    <Box style={styles.body}>
      <Image src={WhiteLogo} />
      <Box style={styles.loc_container}>
        <Select variant="outline" placehholder="text" />
      </Box>
      <Box style={styles.menu_list}>
        {Introductions?.map((item, index) => {
          return <Text key={index}>{item?.title}</Text>;
        })}
      </Box>
    </Box>
  );
};
export default Footer;
const styles = {
  body: {
    backgroundColor: "#07477A",
    padding: 16,
  },
  loc_container: {
    backgroundColor: "white",
    padding: 10,
    alignSelf: "center",
    width: 400,
  },
  menu_list: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    color: "white",
    width: "90%",
  },
};
