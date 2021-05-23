import Container from '../components/Container';
import ContainerBorder from '../components/ContainerBorder';
import TopBar from '../components/TopBar';
import Carousel from '../components/Carousel';
import NavBar from '../components/NavBar';
import TitleBar from '../components/TitleBar';
import Card from '../components/Card';
import ContainerRow from '../components/ContainerRow';
import Services from '../components/Services';

import './App.css';

function App() {
  return (
    <Container>
      <TopBar main="Página Inicial" sub="Meds" />
      <ContainerBorder>
        <Carousel />
        <NavBar />
      </ContainerBorder>
      <ContainerBorder>
        <div className="box">
          <h1>Lorem Ipsum sit dat met agader lirium.</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.</p>
          <p className="bold">Parceiro</p>
          <div className="logo">
            <p>LOGO</p>
          </div>
        </div>
      </ContainerBorder>

      <TitleBar />
      <ContainerRow>
        {
          [1,2,3,4].map(num => <Card />)
        }
      </ContainerRow>

      <ContainerBorder>
        <Services />
      </ContainerBorder>
    </Container>
  );
}

export default App;
