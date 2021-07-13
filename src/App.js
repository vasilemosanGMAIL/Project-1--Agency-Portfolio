import Nav from './components/Nav/Nav';
 import Services from './components/Services/Services';
 import Portfolio from './components/Portfolio/Portfolio';
 import PortfolioModals from './components/Portfolio/PortfolioModals';
 import About from './components/About/About';
 import Team from './components/Team/Team';
 import Clients from './components/Contact/Clients';
 import Contact from './components/Contact/Contact';
 import Footer from './components/Footer';
function App() {
  return (
    <>
    <Nav />
    <Services />
    <Portfolio />
    <PortfolioModals /> 
    <About />
    <Team />
    <Clients />
    <Contact />
    <Footer />
    </>
  );
}

export default App;
