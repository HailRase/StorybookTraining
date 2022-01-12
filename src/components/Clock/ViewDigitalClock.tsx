import React from "react";
import {ViewClockPropsType} from "./Clock";

export const ViewDigitalClock: React.FC<ViewClockPropsType> = ({date}) => {
    return (
        <div>
            Time: {date?.toLocaleTimeString()}
        </div>
    )
}