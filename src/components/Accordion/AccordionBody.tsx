import React from "react";
import {ItemsType} from "../../App";

type AccordionBodyPropsType = {
    items: Array<ItemsType>
}

export const AccordionBody = (props: AccordionBodyPropsType) => {
    return (
        <ul>
            {props.items.map(i => <li key={i.value}>{i.title}</li>)}
        </ul>
    )
}