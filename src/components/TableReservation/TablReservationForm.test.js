import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TableReservationForm from './TableReservationForm';

describe('TableReservationForm component', () => {
  it('renders form elements', () => {
    render(<TableReservationForm />);
    
    // Check if form elements are rendered
    expect(screen.getByLabelText(/Enter Full Name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Enter Email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Enter Contact Number/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Occasion \(optional\)/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Number of Guests/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Date & Time/i)).toBeInTheDocument();
    expect(screen.getByText(/Reserve Table/i)).toBeInTheDocument();
  });

  it('submits the form with valid data', async () => {
    render(<TableReservationForm />);
    
    // Fill in form fields
    fireEvent.change(screen.getByLabelText(/Enter Full Name/i), { target: { value: 'John Doe' } });
    fireEvent.change(screen.getByLabelText(/Enter Email/i), { target: { value: 'john@example.com' } });
    fireEvent.change(screen.getByLabelText(/Enter Contact Number/i), { target: { value: '1234567890' } });
    fireEvent.change(screen.getByLabelText(/Number of Guests/i), { target: { value: '5' } });
    fireEvent.change(screen.getByLabelText(/Date & Time/i), { target: { value: '2023-12-01T12:00' } });

    // Submit the form
    fireEvent.click(screen.getByText(/Reserve Table/i));

    // Wait for toast message to appear (assuming toast.success() triggers a message)
    await screen.findByText(/Thank You for Reserving Table at Little Lemon Restaurant/i);

    // Ensure that the form is reset after submission
    expect(screen.getByLabelText(/Enter Full Name/i).value).toBe('');
    expect(screen.getByLabelText(/Enter Email/i).value).toBe('');
    expect(screen.getByLabelText(/Enter Contact Number/i).value).toBe('');
    expect(screen.getByLabelText(/Number of Guests/i).value).toBe('');
    expect(screen.getByLabelText(/Date & Time/i).value).toBe('');
  });
});