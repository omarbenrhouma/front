import React from 'react';
import { render, screen } from '@testing-library/react';
import Sidebar from '../Componenets/Sidebar';

describe('Sidebar', () => {
  test('renders a sidebar with a list of links', () => {
    render(<Sidebar />);

    const sidebarElement = screen.getByTestId('sidebar');
    expect(sidebarElement).toBeInTheDocument();

  });
});
