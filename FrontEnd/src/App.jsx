import NavBar from "./components/Navbar/navbar";
import FlowButton from "./components/Button Design/buttondesign1";
import ArrivalCard from "./components/New Arrival Card/new_arrival_card";
import Picture1 from "/pic1.jpg"
import Picture2 from "/pic2.jpg"
import Picture3 from "/pic3.jpg"
import Footer from "./components/Footer/footer";

const App = () => {
  return (
    <>
      <section className="HomeSection1">
        <NavBar />
        <div className="HomeSection1Content">
          <div className="HSC1">
            <h2>LESS ORDINARY</h2>
            <p>Everyday fashion, elevated.</p>
          </div>
          <div className="HSC2">
            <h2>NEW ARRIVALS</h2>
            <p>Explore the collection</p>
            <FlowButton text="Preview" />
          </div>
        </div>
      </section>
      <section className="HomeSection2">
        <h2>NEW ARRIVALS</h2>
        <div style={{display:'flex'}}> 
          <ArrivalCard image = {Picture1} text="Blazers" />
          <ArrivalCard image = {Picture2} text="Shirts" />
          <ArrivalCard image = {Picture3} text="Gowns" />
        </div>
      </section>
      <Footer />
    </>
  );
}
 
export default App;