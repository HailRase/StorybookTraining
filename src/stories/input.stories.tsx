import React, {ChangeEvent, useRef, useState} from 'react';
import './button.css';

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