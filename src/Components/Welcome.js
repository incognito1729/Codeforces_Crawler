import { useState } from "react";
import { Row, Col, Toast, Button , ToastContainer} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function Welcome(props) {
  const [showA, setShowA] = useState(true);
  const toggleShowA = () => setShowA(!showA);

  return (
    <Row>
      <Col   md={6} className="mb-2 " >
        <Toast show={showA} onClose={toggleShowA}>
          <Toast.Header>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded me-2"
              alt=""
            />
            <strong className="me-auto">{`Hi ${props.username}`}</strong>
          </Toast.Header>
          <Toast.Body>Welcome to Codeforces Crawler!</Toast.Body>
        </Toast>
      </Col>
    </Row>
  );
}


export default Welcome;
