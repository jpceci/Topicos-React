// Material Dashboard 2 React base styles
import typography from "../../base/typography";
import colors from "../../base/colors";

const { size } = typography;
const { text } = colors;

const dialogContentText = {
  styleOverrides: {
    root: {
      fontSize: size.md,
      color: text.main,
    },
  },
};

export default dialogContentText;
