import { Box, Image, Select, Text } from "@chakra-ui/react";
import { WhiteLogo, FooterBg } from "../assets/img";
import { branch } from "../assets/constant";
import { Colors } from "../assets/constant/colors";
import "./index.css";
const Footer = () => {
  const list = ["Who We Are", "Our Values", "The Perks"];
  return (
    <Box backgroundImage={FooterBg} style={styles.body}>
      <Image src={WhiteLogo} style={styles.logo} />
      <Box className="loc_container">
        <Select placeholder={branch[0].name} style={styles.selector}>
          {branch?.map((item, index) => {
            return <option value={index}>{item.name}</option>;
          })}
        </Select>
        <Text style={styles.address}>{branch[0].loc}</Text>
      </Box>
      <Box className="menuListFooter">
        {list?.map((e, index) => {
          return (
            <Text key={index} style={styles.menuListItem}>
              {e}
            </Text>
          );
        })}
      </Box>
    </Box>
  );
};
export default Footer;
const styles = {
  body: {
    // backgroundColor: "#07477A",
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
    width: "50%",
    color: Colors.MAIN_BLUE,
    fontSize: 16,
    marginTop: 20,
    marginBottom: 20,
  },
  menuListItem: {
    marginTop: 18,
    fontSize: 14,
  },
  logo: {
    maxWidth: 200,
    width: "50%",
  },
};
