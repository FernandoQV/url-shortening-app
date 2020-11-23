import GlobalStyles from './helpers/GlobalStyles'
import Header from "./components/Header/Header";
import Shorten from './components/Shorten/Shorten';
import Statistics from './components/Statistics/Statistics'
import Boots from './components/Boots/Boots';
import Footer from './components/Footer/Footer';
function App() {
  
  return (
    <>
    <GlobalStyles/>
    <Header/>
    <Shorten/>
    <Statistics/>
    <Boots/>
    <Footer/>
  </>
  );
}

export default App;
