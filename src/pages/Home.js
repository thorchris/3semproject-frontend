import "bootstrap/dist/css/bootstrap.css";
import { Button, Form } from "react-bootstrap";
import "mdbreact/dist/css/mdb.css";
import { MDBCol, MDBFormInline, MDBBtn } from "mdbreact";
import Card from "../components/Card";
import gotImg from "../images/GOT.jpg";
import hpImg from "../images/HarryPotter.jpg";
import swImg from "../images/starwars.jpg";

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
          <div
            className="row"
            style={{
              justifyContent: "center",
              flexDirection: "row",
            }}
          >
            <Card imgToDisplay={gotImg} />
            <Card imgToDisplay={hpImg} />
            <Card imgToDisplay={swImg} />
          </div>
          <div className="col-2"></div>
        </div>
      </div>
    </div>
  );
}
