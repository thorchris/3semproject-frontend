import "bootstrap/dist/css/bootstrap.css";
import { Form } from "react-bootstrap";
import 'mdbreact/dist/css/mdb.css';
import { MDBBtn } from "mdbreact";
import Dachma from "./dachma6.svg"

export default function Home() {
  return (
    <div className="container-fluid padding">
      <img src={Dachma} alt=""></img>
      <div className="row">
        <div className="col-3"></div>
        <div className="col-6 text-center">
          <h4 className="mt-5">Search for your favorite character</h4>
          <Form>
            <Form.Control placeholder="Search here.." />
            <Form.Text className="text-muted">
              Type character name, movie, tv show etc.
            </Form.Text>
            <MDBBtn
              outline
              color="primary"
              rounded
              size="m"
              type="submit"
              className="mr-auto"
            >
              Search
            </MDBBtn>
          </Form>
          <div className="col-3"></div>
        </div>
      </div>
    </div>
  );
}
