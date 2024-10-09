import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ToDoCreator from './ToDoCreator'; // Ensure the path is correct
import MissionList from './MissionList';
import Description from './Description'; // Import the Description component
import { useState } from 'react';
import { todos as initialTodos } from './todoItems';  
import './ViewPort.css';

function ViewPort() {
  const [todos, setTodos] = useState(initialTodos);
  const [selectedTodo, setSelectedTodo] = useState(null);

  const updateTodo = (id, newDescription, newDueDate) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, description: newDescription, dueDate: newDueDate } : todo
      )
    );
  };

  return (
    <Container>
      <Row className="top-margin">Assignment2 ZhanYuan's ToDoList</Row>
      <Row >
        <Col sm={4}>
          <ToDoCreator todos={todos} setTodos={setTodos} />
        </Col>
        <Col sm={4}>
          <MissionList todos={todos} setSelectedTodo={setSelectedTodo} />
        </Col>
        <Col sm={4}>
          <Description selectedTodo={selectedTodo} updateTodo={updateTodo} />
        </Col>
      </Row>
    </Container>
  );
}

export default ViewPort;
