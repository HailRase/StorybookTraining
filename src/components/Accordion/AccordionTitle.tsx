import React from "react";


type  AccordionTitlePropsType = {
    title: string
    collapsed: boolean
    setCollapsed: (collapsed: boolean) => void
    color?: string
}

export const AccordionTitle = (props: AccordionTitlePropsType) => {
    return (
        <h1 onClick={() =>props.setCollapsed(!props.collapsed)}
            style={{color: props.color ? props.color : 'black'}}
        >{props.title}</h1>
    )
}