import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App.tsx', () => {
    it('renders learn react link', () => {
        render(<App/>);
        const linkElement = screen.getByText(/Users Table/i);
        expect(linkElement).toBeInTheDocument();
    });
});

