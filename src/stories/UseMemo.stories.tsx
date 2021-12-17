import React, {useMemo, useState} from 'react';

export default {
    title: 'UseMemo'
}

export const DifficultCountingWithUseMemo = () => {
    const [a, setA] = useState(0)
    const [b, setB] = useState(0)

    let resultA = 1
    let resultB = 1

    useMemo(()=>{
        for (let i = 1; i <= a; i++) {
            let fake = 0
            while (fake < 50000000) {
                fake++
                let a = Math.random()
            }
            resultA *= i
        }
    }, [a])

    for (let i = 1; i <= b; i++) {
        resultB *= i
    }

    return (
        <div>
            <input type="text" value={a} onChange={(e) => setA(+e.currentTarget.value)}/>
            <input type="text" value={b} onChange={(e) => setB(+e.currentTarget.value)}/>
            <hr/>
            <div>Result A: {resultA}</div>
            <div>Result B: {resultB}</div>
        </div>
    )
}


const MemoizedUsers = (props: { users: string[] }) => {
    console.log('Users render')
    return (
        <div>
            {props.users.map((user, index) => <div key={index}>{user}</div>)}
        </div>
    )
}
const Users = React.memo(MemoizedUsers)

export const HelpForReactMemo = () => {
    const [count, setCount] = useState(0)
    const [users, setUsers] = useState(['Ura', 'Pavel', 'Egor', 'Jan'])

    const inc = () => {
        setCount(count + 1)
    }
    const addUser = () => {
        setUsers(/*users.filter(u => u.toLowerCase().indexOf('a') < -1)  */ [...users, 'Sasha' + new Date().getTime()])
    }

    const filteredUsers = useMemo(() => {
        return users.filter(u=> u.toLowerCase().indexOf('a') > -1)
    }, [users])
    return (
        <div>
            <button onClick={inc}>+</button>
            <button onClick={addUser}>add user</button>
            {count}
            <Users users={filteredUsers}/>
        </div>
    );
};
