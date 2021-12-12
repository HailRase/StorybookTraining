import React, {useState} from 'react';
import './App.css';
import {OnOff} from './conditional-rendering/OnOff';
import {Accordion} from "./components/Accordion/Accordion";

export type ItemType = {
    title: string
    value: number
}

function App() {

    const [on, setOn] = useState<boolean>(false)
    const [collapsed, setCollapsed] = useState<boolean>(false)
    const items: Array<ItemType> = [
        {title: 'Pavel', value: 1},
        {title: 'Alex', value: 2},
        {title: 'Vladimir', value: 3}
    ]

    const onClick = (value: number) => {
        console.log(value + ' item was clicked')
    }

    return (
        <div className="App">
            <OnOff on={on} setOn={setOn}/>
            {/*<Accordion titleValue={"Menu"}
                       collapsed={collapsed}
                       setCollapsed={setCollapsed}
                       items={items}
                       color={'green'}
                        onClick={onClick}
            />*/}
        </div>
    );
}

export default App;
