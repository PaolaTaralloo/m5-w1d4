import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import WelcomeAlertComp from './components/WelcomeAlertComp';

describe('Welcome Component', () => {
    it('renders the WelcomeAlertComp correctly', () => {
        render(<WelcomeAlertComp />);
        expect(screen.getByText('Benvenuto')).toBeInTheDocument();
    });
});

