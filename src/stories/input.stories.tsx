import React, {ChangeEvent, useRef, useState} from 'react';
import './button.css';
import {action} from "@storybook/addon-actions";

export default {
    title: 'input'
}
export const UncontrolledInput = () => <input/>
export const TrackValueOfUncontrolledInput = () => {
    const [value, setValue] = useState<string>('')
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        let text = e.currentTarget.value
        setValue(text)
    }

    return <> <input onChange={onChange}/> - {value} </>
}
export const GetValueOfUncontrolledInputByButtonPress = () => {
    const [value, setValue] = useState<string>('')
    const inputRef = useRef<HTMLInputElement>(null)
    const save = () => {
        const el = inputRef.current as HTMLInputElement
        setValue(el.value)
    }
    return <> <input ref={inputRef}/>
        <button onClick={save}>save</button>
        - {value} </>
}
export const ControlledInput = () => {
    const [parentValue, setParentValue] = useState<string>('')
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setParentValue(e.currentTarget.value)
    }
    return <input value={parentValue} onChange={ onChangeHandler}/>
}
export const ControlledCheckBox = () => {
    const [parentValue, setParentValue] = useState<boolean>(true)
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setParentValue(e.currentTarget.checked)
    }
    return <input type={"checkbox"} checked={parentValue} onChange={ onChangeHandler}/>
}
export const ControlledSelect = () => {
    const [parentValue, setParentValue] = useState<string | undefined>('2')
    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        setParentValue(e.currentTarget.value)
    }
    return <select value={parentValue} onChange={onChangeHandler}>
        <option>none</option>
        <option value="1">one</option>
        <option value="2">two</option>
        <option value="3">three</option>
    </select>
}