import Navigation from "./navigation";
import logo from "../images/theenk.svg";


export default function Header() {
  return (
    <header className="flex flex-wrap justify-between lg:items-center mx-auto max-w-7xl py-6 sm:py-12 px-4 sm:px-12 lg:px-8 xl:px-16">
      <img src={logo} alt="theenk logo" width="150" height="150" />
      <Navigation />
    </header>
  );

}
