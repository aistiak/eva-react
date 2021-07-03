
import {createStore,applyMiddleware,compose} from "redux"
import { rootReducer } from "./RootReducer"
import thunk ,{ ThunkMiddleware } from "redux-thunk"
import {composeWithDevTools} from "redux-devtools-extension"

const store = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(thunk)
    )
)

export {store} 