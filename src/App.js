import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Container, Form, ListGroup, ListGroupItem } from 'react-bootstrap';
import './App.css';

function App() {
  return (
    <div className="App">
      <Container>
        <h1 className='mt-3'>To-Do List</h1>
        <Form className='d-flex mt-3'>
          <Form.Control className='me-2' />
          <Button>
            <FontAwesomeIcon icon={faPlus} />
          </Button>
        </Form>
        <ListGroup className='mt-3'>
          <ListGroupItem>Güneşe Çık</ListGroupItem>
          <ListGroupItem>Araya Çık</ListGroupItem>
          <ListGroupItem>Ehlikeyfe Git</ListGroupItem>
        </ListGroup>
      </Container>
    </div>
  );
}

export default App;
