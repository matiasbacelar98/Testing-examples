import { render, screen } from '@testing-library/react';
import Header from '../Header';

describe('header', () => {
   test('should render same text passed into title prop', () => {
      render(<Header title='My Header' />);
      const headingElement = screen.getByText(/My Header/i);
      expect(headingElement).toBeInTheDocument();
   });
});

// test('should render same text passed into title prop', () => {
//    render(<Header title='My Header' />);
//    const headingElement = screen.getByRole('heading');
//    expect(headingElement).toBeInTheDocument();
// });

// test('should render same text passed into title prop', () => {
//    render(<Header title='todo' />);
//    const h1Element = screen.getByRole('heading', { name: /todo/i });
//    expect(h1Element).toBeInTheDocument();
// });

// test('render prop text', () => {
//    render(<Header title='todo' />);
//    const h1Element = screen.getByRole('heading', { name: /todo/i });
//    expect(h1Element).toBeInTheDocument();
// });

// test('render prop text', () => {
//    render(<Header title='todo' />);
//    const h3Element = screen.getByTitle('heading');
//    expect(h3Element).toBeInTheDocument();
// });

// test('render prop text', () => {
//    render(<Header title='todo' />);
//    const h3Element = screen.getByTestId('header-2');
//    expect(h3Element).toBeInTheDocument();
// });

// FIND BY
// test('render prop text', async () => {
//    render(<Header title='todo' />);
//    const h1Element = await screen.findByText(/todo/i);
//    expect(h1Element).toBeInTheDocument();
// });

// test('render prop text', () => {
//    render(<Header title='todo' />);
//    const h1Element = screen.queryByText(/fail text/i);
//    expect(h1Element).not.toBeInTheDocument();
// });

// test('render prop text', () => {
//    render(<Header title='todo' />);
//    const headings = screen.getAllByRole('heading');
//    expect(headings.length).toBe(2);
// });
