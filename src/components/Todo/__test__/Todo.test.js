import { render, screen, fireEvent } from '@testing-library/react';
import Todo from '../Todo';
import { BrowserRouter as Router } from 'react-router-dom';

// Mocking react-router
const MockTodo = () => {
   return (
      <Router>
         <Todo />
      </Router>
   );
};

// Añadir tareas
const addTask = (tasks) => {
   const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
   const addBtn = screen.getByRole('button', { name: /Add/i });

   tasks.forEach((task) => {
      fireEvent.change(inputElement, { target: { value: `${task}` } });
      fireEvent.click(addBtn);
   });
};

describe('Todo', () => {
   test('Al añadir tarea deberia de estar en componente "TodoList"', () => {
      render(<MockTodo />);
      addTask(['First Task']);
      const divElement = screen.getByText(/First Task/i);
      expect(divElement).toBeInTheDocument();
   });

   test('Deberia poder añadir multiples tareas a "TodoList"', () => {
      render(<MockTodo />);
      addTask(['First Task', 'Second Task', 'Third Task']);
      const divElements = screen.getAllByTestId('task-container');
      expect(divElements.length).toBe(3);
   });

   test('Las tareas no deberian estar completas al inicio cuando se renderizen', () => {
      render(<MockTodo />);
      addTask(['First Task']);
      const divElement = screen.getByText('First Task');
      expect(divElement).not.toHaveClass('todo-item-active');
   });

   test('Al cliquear en una tarea deberia añadirse una clase', () => {
      render(<MockTodo />);
      addTask(['First Task']);
      const divElement = screen.getByText('First Task');
      fireEvent.click(divElement);
      expect(divElement).toHaveClass('todo-item-active');
   });
});
