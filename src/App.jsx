import p2 from "./images/p2.jpg";
import logo from "./images/vl.png";
function App() {
  return (
    <>
      <img src={logo} alt="" className="logo" />
      <div className="container">
        <h1 className="primary-header">
          <span className="v">V</span>ERTILINE{" "}
          <span className="span">SYNERGY</span> LIMITED
        </h1>
        <p className="text-description">
          YOUR ONE - STOP HOSPITALITY SOLUTIONS COMPANY
        </p>
        <img src={p2} alt="" className="img" />
        <p className="text-description">
          MAKING <span className="s-p">HOSPITALITY</span> GREAT AGAIN.
        </p>
        <div className="services">
          <ul className="ul">
            <h3 className="tet-header">Our Services Includes:</h3>
            <li className="s-t">TURN AROUND SERVICES</li>
            <li className="s-t">HOSPITALITY INVESTMENT SERVICES</li>
            <li className="s-t">TRAINING AND DEVELOPMENT SERVICES</li>
            <li className="s-t">PRE-SETUP CONSULTING AND ADVISORY SERVICES</li>
            <li className="s-t">HOSPITALITY OPERATIONAL MANAGEMENT SERVICES</li>
          </ul>
        </div>
        <div className="en">
          <p className="info">
            <strong>For More Enquiries, you can reach out on:</strong>
          </p>
          <p className="t-l">Tel: +234 705 331 0977.</p>
          <p className="t-l">Address: 59, Awolow Rd, Ikoyi.</p>
          <p className="t-l">www.vertilinesynergy.com</p>
        </div>
      </div>
    </>
  );
}

export default App;
