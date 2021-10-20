


//actions
type initialAppType = {
    type: 'INIT_APP'
}
export const initialAppAcion = (): initialAppType => ({type: 'INIT_APP'})





//reducer
type AppStateType = {
    initApp: boolean
}
type ActionType = initialAppType

const initialState = {
    initApp: false
}





export const AppReducer = (state: AppStateType = initialState, action: ActionType) => {
    switch (action.type) {
        case 'INIT_APP':
            return {
                ...state,
                initApp: true
            }
        default:
            return state
    }
}