import { createContext } from 'react'
import { globalReducer } from './helpers.js'

const context = createContext()

const initialState = {
    navEmailAddres: ''
}

export {
    context,
    initialState,
    globalReducer
}