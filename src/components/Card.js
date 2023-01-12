import "./Card.css";
import logo from "../images/location.png";
export default function Card(props) {
  console.log(Object.keys(props.imageUrl)[0]);
  return (
    <div className="flex flex-1 mt-10 h-full justify-items-center max-w-lg m-auto">
      <div className="flex-1 flex justify-end">
        <img
          className="rounded w-56 aspec-[125/168]"
          src={props.imageUrl[Object.keys(props.imageUrl)[0]]}
          alt=""
        />
      </div>
      <div className="flex-1 p-4">
        <div className="flex">
          <img className="mr-1 w-3 self-top h-min mt-0.5" src={logo} alt="" />
          <p className="tracking-widest font-light">
            {props.location}{" "}
            <a
              className="underline text-gray-400 text-xs tracking-tight whitespace-nowrap
              "
              href={props.googleMapsUrl}
            >
              View on Google Maps
            </a>
          </p>
        </div>
        <h1 className="text-lg font-extrabold mb-2">{props.title}</h1>
        <p className="font-bold text-lg m-0"> {props.date}</p>
        <small className="m-0">{props.description}</small>
      </div>
    </div>
  );
}
