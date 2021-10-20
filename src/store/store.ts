import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import {AppReducer} from "./app/appReducer";
import {CoursesReducer} from "./courses/coursesReducer";


const rootReducer = combineReducers({
    app: AppReducer,
    courses: CoursesReducer
})

export type RootState = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer, applyMiddleware(thunk))

// @ts-ignore
window.store = store