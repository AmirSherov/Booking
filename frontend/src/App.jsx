import AllComponents from "./components/AllComponents.jsx"
import { BrowserRouter } from "react-router-dom"
import { ToastContainer } from 'react-toastify';
import { context, globalReducer, initialState } from "../store"
import { useReducer } from "react"
function App() {
  const [state, dispatch] = useReducer(globalReducer, initialState)
  return (
  <>
    <ToastContainer/>
    <BrowserRouter>
      <context.Provider value={{ state, dispatch }}>
        <AllComponents />
      </context.Provider>
    </BrowserRouter>
  </>
  )
}
export default App
