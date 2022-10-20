<<<<<<< HEAD
import {render, screen} from "@testing-library/react"
import Footer from "./components/Footer/footer";
import '@testing-library/jest-dom'


test("renders learn react link",() => {
    render(<Footer />)
    const HeaderGlavnayaElem = screen.getByText(/футер/i)
    expect(HeaderGlavnayaElem).toBeInTheDocument()
})
=======
>>>>>>> c8b62bc75b904543e2d22533d581b41d98a42242
