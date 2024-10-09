import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

function ToDoCreator({ todos, setTodos }) {
  // State for managing the form fields and modal visibility
  
  const [newTodo, setNewTodo] = useState({
    title: '',
    dueDate: '',
    description: '',
  });

  // Function to open and close the modal
 

  // Function to handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewTodo({
      ...newTodo,
      [name]: value,
    });
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Generate a new id by incrementing the last todo's id
    const newId = todos.length ? todos[todos.length - 1].id + 1 : 1;

    // Create a new todo object with an empty description
    const todoToAdd = {
      ...newTodo,
      id: newId,
      description: '', // Set description as blank initially
    };

    // Update the todos array by adding the new todo
    setTodos([...todos, todoToAdd]);

    // Reset the form and close the modal
    setNewTodo({ title: '', dueDate: '', description: '' });
    
  };

  return (
    <>

          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formTodoTitle">
              <Form.Label>Topic</Form.Label>
              <Form.Control
                type="text"
                name="title"
                placeholder="Enter todo topic"
                value={newTodo.title}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="formDueDate">
              <Form.Label>Due Date</Form.Label>
              <Form.Control
                type="date"
                name="dueDate"
                value={newTodo.dueDate}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Add Todo
            </Button>
          </Form>
     
    </>
  );
}

export default ToDoCreator;
