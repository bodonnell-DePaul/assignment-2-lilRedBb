import ListGroup from 'react-bootstrap/ListGroup';
import { differenceInHours, parseISO } from 'date-fns';

function MissionList({ todos, setSelectedTodo }) {
  return (
    <ListGroup>
      {todos.map((todo) => (
        <ListGroup.Item
          key={todo.id}
          action
          onClick={() => setSelectedTodo(todo)} // Set the selected todo when clicked
          variant={getVariant(todo.dueDate)}
        >
          {todo.title} (Due: {todo.dueDate})
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
}

// The getVariant function remains unchanged
function getVariant(dueDate) {
  const currentDate = new Date();
  const todoDate = parseISO(dueDate);
  const timeDifference = todoDate.getTime() - currentDate.getTime();
  const hoursRemaining = timeDifference / (1000 * 60 * 60); 

  if (hoursRemaining > 168) {
    return 'success';
  } else if (hoursRemaining > 96) {
    return 'primary';
  } else if (hoursRemaining > 48) {
    return 'warning';
  } else if (hoursRemaining >= 1) {
    return 'danger';
  } else {
    return 'secondary';
  }
}

export default MissionList;
