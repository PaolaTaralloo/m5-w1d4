import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import WelcomeAlertComp from './components/WelcomeAlertComp';

describe('Welcome Component', () => {
    it('renders the WelcomeAlertComp', () => {
        render(<WelcomeAlertComp />);
        expect(screen.getByText('Welcome to the Book Store')).toBeInTheDocument();
    });
});

