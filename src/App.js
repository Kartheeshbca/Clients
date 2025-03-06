import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Register from './register';
import Deposit from './deposit';
import Cashback from './cashback';
import AllData from './Alldata';
import UserContext from './context';
import img from './swiss.jpg';




function App() {

  const backgroundStyle = {
    backgroundImage: `url(${img})`,  
    backgroundSize: 'cover',  
    backgroundPosition: 'center',  
    backgroundRepeat: 'no-repeat',  
    minHeight: '100vh',  
  }
  return (
    <>
    <div style={ backgroundStyle }>
      <Navbar style={{ backgroundColor:' #ff5733' }} variant="dark" expand="lg" fixed="top" className="shadow-lg">
        <Container>
          <Navbar.Brand href="#/" style={{ color: '#fff' }}>💰 Swiss Bank</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#/" style={{ color: '#fff' }}>Home</Nav.Link>
              <Nav.Link href="#/register" style={{ color: '#fff' }}>Register</Nav.Link>
              <Nav.Link href="#/deposit" style={{ color: '#fff' }}>Deposit</Nav.Link>
              <Nav.Link href="#/cashback" style={{ color: '#fff' }}>Cashback</Nav.Link>
              <Nav.Link href="#/alldata" style={{ color: '#fff' }}>All Data</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      
      {/* Main Content */}
      <div className="container mt-5 pt-5">
        <HashRouter>
          <UserContext.Provider value={{ users: [{
            name: "Kartheeshwaran",
            email: "kartheeshwarang@gmail.com",
            password: 123456789,
            amount: 50000
          }]}}>
            <Routes>
              <Route path="/register" element={<Register />} />
              <Route path="/deposit" element={<Deposit />} />
              <Route path="/cashback" element={<Cashback />} />
              <Route path="/alldata" element={<AllData />} />
            </Routes>
          </UserContext.Provider>
        </HashRouter>
      </div>
      </div>
    </>
  );
}

export default App;
