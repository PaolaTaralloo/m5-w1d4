import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import WelcomeAlertComp from './components/WelcomeAlertComp';
import AllTheBooks from './components/AllTheBooksComp';
import fantasyBooks from './data/fantasy.json';
import { BrowserRouter } from 'react-router-dom';
import CommentAreaComp from './components/CommentAreaComp';

//1. Verifica che il componente Welcome venga montato
describe('Welcome Component', () => {
    it('renders the WelcomeAlertComp correctly', () => {
        render(<WelcomeAlertComp />)
        expect(screen.getByText('Benvenuto')).toBeInTheDocument()
    })
})

//2. Verifica che vengano effettivamente renderizzate tante bootstrap cards quanti sono i libri nel file json
describe('AllTheBooks Component', () => {
    it('renders the correct number of book cards', () => {
        render(
            <BrowserRouter>
            <AllTheBooks search="" />
        </BrowserRouter>
        );
        const bookCards = screen.getAllByRole('img')
        expect(bookCards).toHaveLength(fantasyBooks.length)
    })
})

//3. Verifica che il componente CommentArea venga renderizzato correttamente.
describe('CommentAreaComp', () => {
    it('renders the CommentAreaComp correctly', () => {
        render(<CommentAreaComp />)
        const commentArea = screen.getByTestId('addCommentComp-test');
        expect(commentArea).toBeInTheDocument();
    })
}) 

//4. Verifica, magari con più tests, che il filtraggio dei libri tramite navbar si comporti come previsto.
describe('Book filtering', () => {
    it('filters books correctly based on search input', () => {
        render(
            <BrowserRouter>
                <AllTheBooks search="witch" />
            </BrowserRouter>
        )
        const filteredBooks = screen.getAllByRole('img');
        const witcherBooks = fantasyBooks.filter(book => 
            book.title.toLowerCase().includes('witch')
        )
        expect(filteredBooks).toHaveLength(witcherBooks.length)
    })

    it('shows no books when search does not match any title', () => {
        render(
            <BrowserRouter>
                <AllTheBooks search="abcd" />
            </BrowserRouter>
        );
        const books = screen.queryAllByRole('img')
        expect(books).toHaveLength(0)
    })
}) 

//5. Verifica che, cliccando su un libro, il suo bordo cambi colore
//6. + Verifica che, cliccando su di un secondo libro dopo il primo, il bordo del primo libro ritorni normale
//OPZ Verifica che, cliccando due volte sullo stesso libro, il bordo ritorni normal
describe('Book selection behavior', () => {
    it('changes border color when a book is clicked and reverts when another is selected', () => {
        render(
            <BrowserRouter>
                <AllTheBooks search="" />
            </BrowserRouter>
        );

        const bookCards = screen.getAllByRole('img')
        const firstBook = bookCards[0].closest('.card-custom')
        const secondBook = bookCards[1].closest('.card-custom')

        expect(firstBook).toHaveStyle({ border: '1px solid grey' })
        expect(secondBook).toHaveStyle({ border: '1px solid grey' })

        fireEvent.click(firstBook);
        expect(firstBook).toHaveStyle({ border: '3px solid red' })
        expect(secondBook).toHaveStyle({ border: '1px solid grey' })

        fireEvent.click(secondBook);
        expect(firstBook).toHaveStyle({ border: '1px solid grey' })
        expect(secondBook).toHaveStyle({ border: '3px solid red' })
    })

    it('deselects a book when clicking it twice', () => {
        render(
            <BrowserRouter>
                <AllTheBooks search="" />
            </BrowserRouter>
        )

        const bookCards = screen.getAllByRole('img')
        const book = bookCards[0].closest('.card-custom')

        fireEvent.click(book)
        expect(book).toHaveStyle({ border: '3px solid red' })

        fireEvent.click(book)
        expect(book).toHaveStyle({ border: '1px solid grey' })
    })
})

//7. Verifica che all'avvio della pagina, senza aver ancora cliccato su nessun libro, non ci siano istanze del componente SingleComment all'interno del DOM
describe('Initial page load', () => {
    it('should not have any SingleComment components when no book is selected', () => {
        render(
            <BrowserRouter>
                <AllTheBooks search="" />
            </BrowserRouter>
        )
      
        const deleteButtons = screen.queryAllByText('Elimina')
        expect(deleteButtons).toHaveLength(0)
    })
})

//8. Verifica infine che, cliccando su di un libro con recensioni, esse vengano caricate correttamente all'interno del DOM
