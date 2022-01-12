import React, {useCallback, useEffect, useState} from 'react';

export default {
    title: 'useEffect demo'
}

export const SimpleExample = () => {
    const [fake, setFake] = useState(1)
    const [count, setCount] = useState(1)

    useEffect(()=>{
        debugger
        console.log('useEffect EVERY TIME render')
    })
    useEffect(()=>{
        debugger
        console.log('useEffect only FIRST render')
    },[])
    useEffect(()=>{
        debugger
        console.log('useEffect render every time COUNT changed')
    },[count])

    return (
        <div>
            <span>fake: {fake}</span>
            <span>count: {count}</span>
            <button onClick={() => setFake(fake+1)}>inc f</button>
            <button onClick={() => setCount(count+1)}>inc c</button>
        </div>
    );
};
export const SetIntervalExample = () => {

    const [date, setDate] = useState<Date>()

    useEffect(()=>{
        const intervalId = setInterval(()=>{
            setDate(new Date())
        }, 1000)
    return () => {
            clearInterval(intervalId)
    }
    },[])



    return (
        <div>
            <span>Date: {date?.toLocaleTimeString()}</span>
        </div>
    );
};

export const ResetEffectExample = () => {
    const [fake, setFake] = useState(1)
    const [count, setCount] = useState(1)

    console.log('component rendered with ' + count)

    useEffect(()=>{
        console.log('Effect occurred: ' + count)

        return () => {
            console.log('Reset Effect with: ' + count)
        }
    },[count])
    const incFake = useCallback(() => {
        setFake(fake + 1)
        console.log('create function incFake')
    },[fake])
    const incCount = useCallback(() => {
        setCount(count + 1)
        console.log('create function incCount')
    },[count])

    return (
        <div>
            <span>fake: {fake}</span>
            <span>count: {count}</span>
            <button onClick={incFake}>inc f</button>
            <button onClick={incCount}>inc c</button>
        </div>
    );
};

export const KeysTrackerExample = () => {
    const [text, setText] = useState('')

    console.log('component rendered with ' + text)

    useEffect(()=>{
        const handle = (e: KeyboardEvent) => {
            console.log(e.key)
            setText(text + e.key)
        }
        window.addEventListener('keypress', handle)
        return () => {
            window.removeEventListener('keypress', handle)
        }
    },[text])


    return (
        <div>
            <span>Typed text: {text}</span>
        </div>
    );
};

export const SetTimeoutExample = () => {

    const [text, setText] = useState('')

    useEffect(()=>{
        const timeoutId = setTimeout(()=>{
            setText('3 second passed')
            console.log('3 second passed')
        }, 3000)
        return () => {
            clearTimeout(timeoutId)
        }
    },[])



    return (
        <div>
            <span>Text: {text}</span>
        </div>
    );
};
