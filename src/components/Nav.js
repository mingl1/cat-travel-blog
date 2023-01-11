import "./Nav.css";
import world from "../images/world.png";
export default function Nav() {
  return (
    <nav>
      <img src={world} alt="" />
      <p>my travel blog</p>
    </nav>
  );
}
