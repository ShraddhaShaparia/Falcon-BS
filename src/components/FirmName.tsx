import { Link } from "react-router-dom";
import Constants from "./common/Constants";

const FirmName = () => {
  return <Link to="/">{Constants.FIRM_NAME}</Link>;
};
export default FirmName;
