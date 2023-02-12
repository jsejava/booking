import Featured from "../../components/featured/Featured";
import FeaturesProperties from "../../components/featuresProperties/FeaturesProperties";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import MailList from "../../components/mailList/MailList";
import Navbar from "../../components/navbar/Navbar";
import PropertyList from "../../components/propertyList/PropertyList";
import "./home.css";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />

      <div className="homeContainer">
        <Featured />
        <h1 className="homeTitle">Browse by property type</h1>
        <PropertyList />
        <h1 className="homeTitle">home guests love</h1>
        <FeaturesProperties />
        <MailList />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
