type ActionType = ReturnType<typeof toggleCollapsed>
export const toggleCollapsed = () => {
    return {
        type: "TOGGLE-COLLAPSED"
    } as const
}

export type InitialStateType = {
    collapsed: boolean
}

export const initialState: InitialStateType = {
    collapsed: false
}

export const AccordionReducer = (state = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case "TOGGLE-COLLAPSED":
            return {
                ...state, collapsed: !state.collapsed
            }
        default:
            throw new Error('Bad action type')
    }
}