import GlobalStyles from './helpers/GlobalStyles'
import Header from "./components/Header/Header";
import Shorten from './components/Shorten/Shorten';
import Statistics from './components/Statistics/Statistics'
function App() {
  return (
    <>
    <GlobalStyles/>
    <Header/>
    <Shorten/>
    <Statistics/>
  </>
  );
}

export default App;
