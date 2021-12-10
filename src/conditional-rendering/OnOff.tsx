import React, {useState} from "react";

type OnOffPropsType = {
    on: boolean
    setOn: (on: boolean) => void
}

export const OnOff = (props: OnOffPropsType) => {

    return (
        <div>
            <div style={{display: "flex"}}>
                <div style={{border: "1px solid black", backgroundColor: props.on ? "green" : "white"}} onClick={ () => {
                    props.setOn(true)}}>On</div>
                <div style={{border: "1px solid black", backgroundColor: props.on ? "white" : "red"}} onClick={ () => { props.setOn(false)}}>Off</div>
                <div style={{
                    width: "10px",
                    height: "10px",
                    border: "1px solid black",
                    borderRadius: "10px",
                    backgroundColor: props.on ? "green" : "red",
                    marginTop: "7px",
                    marginLeft: "5px"
                }}></div>
            </div>
        </div>
    )
}