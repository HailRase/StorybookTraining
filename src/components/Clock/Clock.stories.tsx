import React from 'react';
import Clock from "./Clock";

export default {
    title: 'Components/Clock Example',
    component: Clock
}

type ClockStoriesPropsType = {

}

export const AnalogClockStories: React.FC<ClockStoriesPropsType> = (props) => {
    return (
        <Clock mode={"analog"}/>
    );
};
export const DigitalClockStories: React.FC<ClockStoriesPropsType> = (props) => {
    return (
        <Clock mode={"digital"}/>
    );
};
