import React, {useState} from 'react';
import {action} from "@storybook/addon-actions";
import {Accordion, AccordionPropsType} from "./Accordion";
import {Story} from "@storybook/react";


const GetCategoryObj = (nameCategory: string) => ({
    table: {
        category: nameCategory
    }
})

export default {
    title: 'Components/Accordion',
    component: Accordion,
    argTypes: {
        color: {
            control: 'color',
            ...GetCategoryObj('Colors')
        },
        collapsed: {
            ...GetCategoryObj('Events')
        },
        setCollapsed: {
            ...GetCategoryObj('Events')
        },
        items: {
            ...GetCategoryObj('Other')
        },
        titleValue: {
            ...GetCategoryObj('Other')
        }
    }
}

const callback = action('Accordion un/collapsed');
const clickCallback = action('item was clicked');
const Template: Story<AccordionPropsType> = (args) => <Accordion {...args}/>

export const CollapsedMode = Template.bind({})
CollapsedMode.args = {
    titleValue: 'menu',
    collapsed: false,
    setCollapsed: callback,
    onClick: clickCallback,
    items: [{title: 'Pavel', value: 1},
        {title: 'Alex', value: 2},
        {title: 'Vladimir', value: 3}]
}

export const UsersUncollapsedMode = Template.bind({})
UsersUncollapsedMode.args = {
    titleValue: 'Users',
    collapsed: true,
    setCollapsed: callback,
    onClick: clickCallback,
    items: [{title: "1", value: 1}]
}

export const ModeChanging: Story<AccordionPropsType> = (args) => {
    const [collapsed, setCollapsed] = useState(false)
    return <Accordion {...args}
                      collapsed={collapsed}
                      setCollapsed={() => setCollapsed(!collapsed)}
                      onClick={(id) => alert(`user with id:${id} should be happy!!!`) }
    />
}
ModeChanging.args = {
    titleValue: 'menu',
    items: [{title: 'Pavel', value: 1},
        {title: 'Alex', value: 2},
        {title: 'Vladimir', value: 3}],
    color: 'green'
}