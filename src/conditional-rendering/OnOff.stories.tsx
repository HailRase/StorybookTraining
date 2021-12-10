import React, {useState} from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {OnOff} from "./OnOff";
import {action} from "@storybook/addon-actions";

export default {
    title: 'OnOff',
    component: OnOff
}

const callback = action('on or off clicked')

export const OnMode = () => <OnOff on={true} setOn={callback}/>
export const OffMode = () => <OnOff on={false} setOn={callback}/>
export const ModeChanging = () => {
    const [on, setOn] = useState(false)
   return <OnOff on={on} setOn={() => setOn(!on)}/>
}