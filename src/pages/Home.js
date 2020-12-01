import "bootstrap/dist/css/bootstrap.css";
import { Form } from "react-bootstrap";
import 'mdbreact/dist/css/mdb.css';
import { MDBBtn } from "mdbreact";

export default function Home() {
  return (
    <div className="container-fluid padding">
      <div className="row">
        <div className="col-2"></div>
        <div className="col-8 text-center">
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
          <div className="col-2"></div>
        </div>
      </div>
    </div>
  );
}
