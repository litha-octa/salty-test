import { Box, Image, Select, Text } from "@chakra-ui/react";
import { WhiteLogo } from "../assets/img";
import { branch } from "../assets/constant/branch";
import { Colors } from "../assets/constant/colors";
import "./index.css";
const Footer = () => {
  const list = ["Who We Are", "Our Values", "The Perks"];
  return (
    <Box style={styles.body}>
      <Image src={WhiteLogo} />
      <Box className="loc_container">
        <Select placeholder={branch[0].name} style={styles.selector}>
          {branch?.map((item, index) => {
            return <option value={index}>{item.name}</option>;
          })}
        </Select>
        <Text style={styles.address}>{branch[0].loc}</Text>
      </Box>
      <Box style={styles.menu_list}>
        {list?.map((e, index) => {
          return <Text key={index}>{e}</Text>;
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
  menu_list: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    color: "white",
    marginTop: 20,
  },
  selector: {
    color: Colors.DARK_BLUE,
    fontWeight: "bold",
    fontSize: 16,
  },
  address: {
    color: Colors.MAIN_BLUE,
    fontSize: 16,
    marginTop: 20,
    marginBottom: 20,
  },
};
