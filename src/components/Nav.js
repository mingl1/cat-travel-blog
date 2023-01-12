import "./Nav.css";
import world from "../images/world.png";
export default function Nav() {
  return (
    <nav className="flex bg-[#F55A5A] justify-center align-center p-3 top-0">
      <img className="w-auto" src={world} alt="" />
      <p className="ml-1 text-white font-light">my travel blog</p>
    </nav>
  );
}
