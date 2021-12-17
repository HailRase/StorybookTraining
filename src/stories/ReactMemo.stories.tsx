import React, {useState} from 'react';


export default {
    title: 'React Memo'
}

const MemoizedNewMessageCounter = (props: { count: number }) => {
    console.log('New message added')
    return (
        <div>{props.count}</div>
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
const NewMessageCounter = React.memo(MemoizedNewMessageCounter)

export const ReactMemo = () => {
    const [count, setCount] = useState(0)
    const [users, setUsers] = useState(['Ura', 'Pavel', 'Egor', 'Jan'])

    const inc = () => {
        setCount(count + 1)
    }
    const addUser = () => {
        setUsers([...users, 'Sasha' + new Date().getTime()])
    }
    return (
        <div>
            <button onClick={inc}>+</button>
            <button onClick={addUser}>add user</button>

            <NewMessageCounter count={count}/>
            <Users users={users}/>
        </div>
    );
};

