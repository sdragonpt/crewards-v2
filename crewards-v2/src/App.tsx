import "./App.css";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import  MoneyCounter from "./components/MoneyCounter";
import CardSection from "./components/CardSection";

function App() {
  return (
    <>
      <div className="bg-[#1c1c1c] min-h-screen">
        <NavBar />
        <Hero />
        <MoneyCounter targetAmount={33500} />
        <CardSection />
      </div>
    </>
  );
}

export default App;
