import Header from "./components/header/Header";
import LocationCard from "../../components/locationCard/LocationCard";
import "./home.scss";

export default function Home(props) {
  return (
    <>
      <Header />
      <Banner />
      <Gallery />
      <Footer />
    </>
  );
}
