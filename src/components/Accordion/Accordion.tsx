import React from "react";
import {AccordionTitle} from "./AccordionTitle";
import {AccordionBody} from "./AccordionBody";
import {ItemType} from "../../App";
import {InitialStateType} from "./AccordionReducer";



export type AccordionPropsType = {
    titleValue: string
    state: InitialStateType
    setCollapsed: () => void
    items: Array<ItemType>
    color?:string
    onClick: (value: number) => void
}

export const Accordion = (props: AccordionPropsType) => {
    return (
        <div>
            <AccordionTitle title={props.titleValue}
                            state={props.state}
                            setCollapsed={props.setCollapsed}
                            color={props.color}
            />
            {!props.state.collapsed && <AccordionBody onClick={props.onClick} items={props.items}/>}
        </div>
    )
}


