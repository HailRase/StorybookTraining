import React from "react";
import {ItemType} from "../../App";

type AccordionBodyPropsType = {
    items: Array<ItemType>
    onClick: (value: number) => void
}

export const AccordionBody = (props: AccordionBodyPropsType) => {
    return (
        <ul>
            {props.items.map(i => <li onClick={ () => { props.onClick(i.value)}} key={i.value}>{i.title}</li>)}
        </ul>
    )
}