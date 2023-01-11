import "./Card.css";
import logo from "../images/location.png";
export default function Card(props) {
  console.log(Object.keys(props.imageUrl)[0]);
  return (
    <div className="Card">
      <div className="Image">
        <img src={props.imageUrl[Object.keys(props.imageUrl)[0]]} alt="" />
      </div>
      <div className="Content">
        <div className="Heading">
          <img src={logo} alt="" />
          <p className="location">
            {props.location}{" "}
            <a href={props.googleMapsUrl}>View on Google Maps</a>
          </p>
        </div>
        <h1>{props.title}</h1>
        <p className="date"> {props.date}</p>
        <small className="desc">{props.description}</small>
      </div>
    </div>
  );
}
