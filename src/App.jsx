import { Container, Col, Row } from 'react-bootstrap';
import './App.css'
import DrinkList from './components/DrinkList/DrinkList';
import 'bootstrap/dist/css/bootstrap.css';
import ClickMe from './components/ClickMe';




function App() {
  return (
    <Container>
<Row className='d-flex flex-column flex-lg-row'>
    <div className="App">
      <DrinkList/>
      <ClickMe/>
    </div>
</Row>
    </Container>
  );
}

export default App

// import './App.css'
// import Movie from './components/Movie/Movie';
// import 'bootstrap/dist/css/bootstrap.css';
// import { Container, Col, Row } from 'react-bootstrap';
// import Drink from './components/Drink/Drink';



// function App() {
//   return (
//     <Container>
//       <Row className='d-flex flex-column flex-lg-row'>
//           <h2>List of Movies</h2>
//           <Col className='col-lg-3'><Movie /></Col>
//           <Col className='col-lg-3'><Movie /></Col>
//           <Col className='col-lg-3'><Movie /></Col>
//           <Drink/>
//       </Row>
//     </Container>
//   );
// }

// export default App