import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import AllProducts from './component/AllProducts/AllProducts';
import QuestionsAndAnswer from './component/QuestionsAndAnswer/QuestionsAndAnswer';

function App() {
  return (
    <div>
      <Container>
      <AllProducts></AllProducts>
       <QuestionsAndAnswer></QuestionsAndAnswer>
      </Container>
    </div>
  );
}

export default App;
