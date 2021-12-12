import React, {useState} from 'react';
import {action} from "@storybook/addon-actions";
import {Story} from "@storybook/react";
import Select, {ItemType, SelectPropsType} from "./Select";


const GetCategoryObj = (nameCategory: string) => ({
    table: {
        category: nameCategory
    }
})

export default {
    title: 'Components/Select',
    component: Select,

}

const callback = action('Accordion un/collapsed');
const clickCallback = action('item was clicked');
const Template: Story<SelectPropsType> = (args) => <Select {...args}/>

export const CollapsedMode = Template.bind({})
CollapsedMode.args = {
    value: 'menu',
    items: [{title: 'Pavel', value: '1'},
        {title: 'Alex', value: '2'},
        {title: 'Vladimir', value: '3'}]
}

export const UncollapsedMode = Template.bind({})
UncollapsedMode.args = {
    value: 'menu',
    items: [{title: 'Pavel', value: '1'},
        {title: 'Alex', value: '2'},
        {title: 'Vladimir', value: '3'}]
}

export const ModeChanging: Story<SelectPropsType> = (args) => {
    const [value, setValue] = useState<string>('1')
    return <Select {...args}
                   value={value}
                   setValue={setValue}/>
}
ModeChanging.args = {
    items: [{value: '1', title: 'Pavel' },
        {value: '2', title: 'Alex' },
        {value: '3', title: 'Vladimir'}],
}