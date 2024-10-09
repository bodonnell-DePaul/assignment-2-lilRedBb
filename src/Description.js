import { useState, useEffect, useRef } from 'react';
import { Tab, Tabs, Button, Form } from 'react-bootstrap';

function Description({ selectedTodo, updateTodo }) {
  const [description, setDescription] = useState(selectedTodo ? selectedTodo.description : '');
  const [dueDate, setDueDate] = useState(selectedTodo ? selectedTodo.dueDate : '');
  const descriptionRef = useRef(null);

  // Update the description and due date states when selectedTodo changes
  useEffect(() => {
    if (selectedTodo) {
      setDescription(selectedTodo.description);
      setDueDate(selectedTodo.dueDate);
    }
  }, [selectedTodo]);

  const handleSave = () => {
    if (selectedTodo && descriptionRef.current) {
      const updatedDescription = descriptionRef.current.innerText;
      updateTodo(selectedTodo.id, updatedDescription, dueDate);
    }
  };

  if (!selectedTodo) {
    return <div className="p-3">Select a todo to see the details.</div>;
  }

  return (
    <Tabs defaultActiveKey="description" id="todo-tabs">
      <Tab eventKey="description" title="Description">
        <div className="p-3">
          <h5>Description</h5>
          <div
            ref={descriptionRef}
            contentEditable
            suppressContentEditableWarning={true}
            className="border p-2"
            style={{ minHeight: '100px' }}
          >
            {description}
          </div>
          <div className="p-3">
          <Form.Group controlId="dueDate">
            <Form.Label>Due Date</Form.Label>
            <Form.Control
              type="date"
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
            />
          </Form.Group>
        </div>
          <Button variant="primary" className="mt-2" onClick={handleSave}>
            Save
          </Button>
        </div>
      </Tab>
      
    </Tabs>
  );
}

export default Description;
