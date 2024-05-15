import './App.css'
import Home from "./components/Home/Home.jsx";
import './output.css'
import Header from "./components/Header/Header.jsx";
import Statistics from "./components/Statistics/Statistics.jsx";
import Classes from "./components/Classes/Classes.jsx";
import BMI from "./components/BMI/BMI.jsx";
import Trainer from "./components/Trainer/Trainer.jsx";
import Purchase from "./components/Purchase/Purchase.jsx";
import Review from "./components/Review/Review.jsx";
import Contact from "./components/Contact/Contact.jsx";
import Footer from "./components/Footer/Footer.jsx";

function App() {

  return (
      <>
          <Header />
          <Home />
          <Statistics />
          <Classes />
          <BMI />
          <Trainer />
          <Purchase />
          <Review />
          <Contact />
          <Footer />
      </>
  )
}

export default App
