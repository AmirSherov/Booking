import AllComponents from "./components/AllComponents.jsx"
import { BrowserRouter } from "react-router-dom"


function App() {
  return (
    // http://localhost:5173/
    // http://localhost:5173/about
    // http://localhost:5173/contact
    <BrowserRouter>
      <AllComponents />
    </BrowserRouter>
  )
}

export default App
