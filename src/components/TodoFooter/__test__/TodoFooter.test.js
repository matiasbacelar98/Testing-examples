import { render, screen } from '@testing-library/react';
import TodoFooter from '../TodoFooter';
import { BrowserRouter as Router } from 'react-router-dom';

const MockTodoFooter = ({ numberOfIncompleteTasks }) => {
   return (
      <Router>
         <TodoFooter numberOfIncompleteTasks={numberOfIncompleteTasks} />
      </Router>
   );
};

describe('TodoFooter', () => {
   test('deberia renderizar la cantidad de tareas pendientes', () => {
      render(<MockTodoFooter numberOfIncompleteTasks={5} />);
      const parragraphElement = screen.getByText(/5 tasks left/i);
      expect(parragraphElement).toBeInTheDocument();
   });

   test('deberia renderizar "task" cuando el numero de tareas es 1', () => {
      render(<MockTodoFooter numberOfIncompleteTasks={1} />);
      const parragraphElement = screen.getByText(/1 task left/i);
      expect(parragraphElement).toBeInTheDocument();
   });
});

// // Probando assertions
// test('Esperar a que sea verdad', () => {
//    render(<MockTodoFooter numberOfIncompleteTasks={1} />);
//    const parragraphElement = screen.getByText(/1 task left/i);
//    expect(parragraphElement).toBeTruthy();
// });

// test('Deberia ser visible', () => {
//    render(<MockTodoFooter numberOfIncompleteTasks={1} />);
//    const parragraphElement = screen.getByText(/1 task left/i);
//    expect(parragraphElement).toBeVisible();
// });

// test('Esperar a que contenga un parrafo', () => {
//    render(<MockTodoFooter numberOfIncompleteTasks={1} />);
//    const parragraphElement = screen.getByText(/1 task left/i);
//    expect(parragraphElement).toContainHTML('p');
// });

// test('Esperar a que contenga contenido', () => {
//    render(<MockTodoFooter numberOfIncompleteTasks={1} />);
//    const parragraphElement = screen.getByText(/1 task left/i);
//    expect(parragraphElement).toHaveTextContent('1 task left');
// });

// test('No Deberia ser visible', () => {
//    render(<MockTodoFooter numberOfIncompleteTasks={1} />);
//    const parragraphElement = screen.getByText(/1 task left/i);
//    expect(parragraphElement).not.toBeVisible();
// });

// test('Tomar valores de elemento html', () => {
//    render(<MockTodoFooter numberOfIncompleteTasks={1} />);
//    const parragraphElement = screen.getByText(/1 task left/i);
//    expect(parragraphElement.textContent).toBe('1 task left');
// });
