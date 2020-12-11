import "bootstrap/dist/css/bootstrap.css";
import "mdbreact/dist/css/mdb.css";
import Dachma from "../images/dachma6.svg";
import "mdbreact/dist/css/mdb.css";
import gotImg from "../images/Got2.png";
import hpImg from "../images/HarryPotter2.png";
import swImg from "../images/Sw2.png";
import Search from "../components/Search";
import ImageShadow from 'react-image-shadow';

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
        <div className="col-3"></div>
        <div className="col-6">
          <h4 className="mt-5 text-center">Current shows in the site:</h4>
          <p className="mt-2 text-muted text-center">
            Click the menu top right to navigate to a show!
          </p>
            <div className="gotImg">
            <ImageShadow src={gotImg} alt="got"/>
            </div>
            <div className="hpImg">
            <ImageShadow src={hpImg} alt="hp"/>
            </div>
            <div className="swImg">
            <ImageShadow src={swImg} alt="sw"/>
            </div>
        </div>
        <div className="col-3"></div>
      </div>
    </div>
  );
}
