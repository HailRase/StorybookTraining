import React, {useEffect, useState} from 'react';
import {ViewDigitalClock} from "./ViewDigitalClock";
import {ViewAnalogClock} from "./ViewAnalogClock";


type ClockPropsType = {
    mode?: 'digital' | 'analog'
}

const Clock = (props: ClockPropsType) => {
    const [date, setDate] = useState<Date>(new Date())

    useEffect(() => {
        const intervalId: ReturnType<typeof setInterval> = setInterval(() => {
            setDate(new Date())
        }, 1000)
        return () => {
            clearInterval(intervalId)
        }
    }, [])


    let view

    switch (props.mode) {
        case 'analog':
            return view = <ViewAnalogClock date={date}/>
        case 'digital':
        default:
            return view = <ViewDigitalClock date={date}/>
    }


    return (
        <>
            {view}
        </>
    );
}
export default Clock;


export type ViewClockPropsType = {
    date: Date
}

