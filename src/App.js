import HomePage from "./pages/Home/Home.page";
import { Routes, Route } from "react-router-dom";
import Header from "./component/header/Header.component";
import Footer from "./component/footer/Footer.component";
function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={ <HomePage/>} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
