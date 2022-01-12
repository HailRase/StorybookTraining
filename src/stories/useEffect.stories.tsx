import React, {useEffect, useState} from 'react';

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
export const SetTimeoutExample = () => {

    const [date, setDate] = useState<Date>()

    useEffect(()=>{
        setInterval(()=>{
            setDate(new Date())
        }, 1000)

    },[])



    return (
        <div>
            <span>Date: {date?.toLocaleTimeString()}</span>
        </div>
    );
};

