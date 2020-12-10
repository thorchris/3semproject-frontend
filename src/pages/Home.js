import "bootstrap/dist/css/bootstrap.css";
import "mdbreact/dist/css/mdb.css";
import Dachma from "../images/dachma6.svg";
import "mdbreact/dist/css/mdb.css";
import Card from "../components/Card";
import gotImg from "../images/GOT.jpg";
import hpImg from "../images/HarryPotter.jpg";
import swImg from "../images/starwars.jpg";
import Search from "../components/Search";
import homestylecss from "../components/homestyle.css";

export default function Home() {
  return (
    <div className="container-fluid padding">
      <img className="logo" src={Dachma} alt=""></img>
      <div className="row">
        <div className="col-3"></div>
        <div className="col-6 text-center">
          <h4 className="mt-5">Search for your favorite character</h4>
          <Search />
        </div>

        <div className="col-3"></div>
      </div>
      <div className="row">
        <div className="col-2"></div>
        <div className="col-8">
          <h4 className="mt-5 text-center">Current shows in the site:</h4>
          <p className="mt-2 text-muted text-center">
            Click to get info about a movie/tv show.
          </p>
          <div className="flipcards">
            <Card imgToDisplay={gotImg} />
            <Card imgToDisplay={hpImg} />
            <Card imgToDisplay={swImg} />
          </div>
        </div>
        <div className="col-2"></div>
      </div>
    </div>
  );
}
