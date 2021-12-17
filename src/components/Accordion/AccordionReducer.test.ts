import {AccordionReducer, initialState, InitialStateType, toggleCollapsed} from "./AccordionReducer";

test('collapsed should be true', ()=> {
    const newState = AccordionReducer(initialState, toggleCollapsed())
    expect(newState.collapsed).toBe(true)
})
test('collapsed should be false', ()=> {
    const state: InitialStateType = {
        collapsed: true
    }
    const newState = AccordionReducer(state, toggleCollapsed())
    expect(newState.collapsed).toBe(false)
})
test('incorrect action type should throw error', ()=> {
    const state: InitialStateType = {
        collapsed: true
    }

    // @ts-ignore
    expect(()=> AccordionReducer(state, {type: "safdgsdfg"})).toThrowError()
})