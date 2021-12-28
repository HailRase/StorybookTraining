import React, {useState} from "react";

export default {
    title: 'useState demo'
}

function generateDate (){
    return 1;
}

export const UseState = () => {
    const [counter, setCounter] = useState<number>(generateDate)

    const changer = (state: number) => {
        return state + 1
    }

    const inc = () => {
        setCounter(counter + 1)
    }

    return (
        <div>
            <button onClick={() => setCounter(state => state + 1)}>+</button>
            {counter}
        </div>
    );
};
