import NavBar from "./components/navbar";
import FlowButton from "./components/buttondesign1";

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
            <FlowButton text="Shop Now" />
          </div>
        </div>
      </section>
    </>
  );
}
 
export default App;