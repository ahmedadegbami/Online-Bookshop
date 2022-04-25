import { Alert } from "react-bootstrap";

const WarningSign = (props) => (
  <Alert variant={props.color}>{props.text}</Alert>
);

export default WarningSign;
