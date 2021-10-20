import {Dispatch} from "redux";
import {APIcourses} from "../../api/api";
import {initialAppAcion} from "../app/appReducer";


//actions
type AddItemsPageType = {
    type: 'CHENGE_PAGE'
    payload: number
}

export const addItemsPage = (num: number) => ({
    type: 'CHENGE_PAGE',
    payload: num
})

type AddCoursesType = {
    type: 'ADD_COURSES'
    payload: ItemType[]
}

const addCourses = (items: ItemType[]): AddCoursesType => ({
    type: 'ADD_COURSES',
    payload: items
})

type AddCountType = {
    type: 'ADD_COUNT',
    payload: number
}

const addCount = (value: number): AddCountType => ({
    type: 'ADD_COUNT',
    payload: value
})


type ResponseType = {
    count: number
    data: any[]
    success: boolean
}

//thunks
export const getItemsCourses = () => async (dispatch: Dispatch) => {
    try {
        let res = await APIcourses.getCourses() as ResponseType
        if (res.success) {
            dispatch(initialAppAcion())
            let items = res.data.map(el => {
                return {
                    _id: el._id,
                    title: el.title,
                    module_1: el.specializedSubjects && el.specializedSubjects.slice(0, 5),
                    module_2: el.specializedSubjects && el.specializedSubjects.slice(5)
                }
            })
            dispatch(addCount(res.count))
            dispatch(addCourses(items))
            dispatch(addItemsPage(1))
        }
    } catch (error) {
        console.log(error)
    }
}





//reducer
export type ItemType = {
    _id: string
    title: string
    module_1: string[]
    module_2: string[]
}

type CoursesStateType = {
    items: ItemType[]
    countItems: number
    page: ItemType[]
    countPage: number
}
type ActionType = AddCoursesType | AddCountType | AddItemsPageType

const initialState = {
    items: [],
    countItems: 0,
    page: [],
    countPage: 1
}


export const CoursesReducer = (state: CoursesStateType = initialState, action: ActionType) => {
    switch (action.type) {
        case 'ADD_COURSES':
            return {
                ...state,
                items: action.payload
            }
        case 'ADD_COUNT':
            return {
                ...state,
                countItems: action.payload
            }
        case 'CHENGE_PAGE':
            let start = (action.payload * 5) - 5
            let eng = (action.payload * 5)
            return {
                ...state,
                page: state.items.slice(start, eng),
                countPage: action.payload
            }
        default:
            return state
    }
}