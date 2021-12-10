import React from "react";
import {AccordionTitle} from "./AccordionTitle";
import {AccordionBody} from "./AccordionBody";
import {ItemsType} from "../../App";



export type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    setCollapsed: (collapsed: boolean) => void
    items: Array<ItemsType>
    color?:string
}

export const Accordion = (props: AccordionPropsType) => {
    return (
        <div>
            <AccordionTitle title={props.titleValue}
                            collapsed={props.collapsed}
                            setCollapsed={props.setCollapsed}
                            color={props.color}
            />
            {!props.collapsed && <AccordionBody items={props.items}/>}
        </div>
    )
}


