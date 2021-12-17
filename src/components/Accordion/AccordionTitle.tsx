import React from "react";
import {InitialStateType} from "./AccordionReducer";


type  AccordionTitlePropsType = {
    title: string
    state: InitialStateType
    setCollapsed: () => void
    color?: string
}

export const AccordionTitle = (props: AccordionTitlePropsType) => {
    return (
        <h1 onClick={props.setCollapsed}
            style={{color: props.color ? props.color : 'black'}}
        >{props.title}</h1>
    )
}