import { render, screen, fireEvent } from '@testing-library/react';
import AddInput from '../AddInput';

// Mock setTodos
const mockedSetTodos = jest.fn();

describe('AddInput', () => {
   test('Deberia renderizar elemento input', () => {
      render(<AddInput todos={[]} setTodos={mockedSetTodos} />);

      const inputElement = screen.getByPlaceholderText(
         /Add a new task here.../i
      );

      expect(inputElement).toBeInTheDocument();
   });

   test('Deberia poder escribir en el input', () => {
      render(<AddInput todos={[]} setTodos={mockedSetTodos} />);

      const inputElement = screen.getByPlaceholderText(
         /Add a new task here.../i
      );
      fireEvent.change(inputElement, {
         target: { value: 'First Task' },
      });

      expect(inputElement.value).toBe('First Task');
   });

   test('Al cliquear en botton el valor del input deberia reiniciarse', () => {
      render(<AddInput todos={[]} setTodos={mockedSetTodos} />);

      const inputElement = screen.getByPlaceholderText(
         /Add a new task here.../i
      );
      const addBtn = screen.getByRole('button', { name: 'Add' });

      fireEvent.change(inputElement, {
         target: { value: 'First Task' },
      });
      fireEvent.click(addBtn);

      expect(inputElement.value).toBe('');
   });
});
