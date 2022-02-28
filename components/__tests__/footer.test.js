import { screen, render } from '@testing-library/react'
import Footer from '../footer'



it('renders footer with out error', () => {
    render(<Footer />)
})

it('displays all links', () => {
    const allLinks = screen.getByRole('heading', { level: 3 })
    console.log(allLinks);
})