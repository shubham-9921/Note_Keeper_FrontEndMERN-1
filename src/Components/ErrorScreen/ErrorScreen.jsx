/* eslint-disable react/prop-types */
import Alert from "react-bootstrap/Alert";
const ErrorScreen = ({ variant = "info", children }) => {
  return (
    <>
      <Alert variant={variant}>
        <strong>{children}</strong>
      </Alert>
    </>
  );
};

export default ErrorScreen;
