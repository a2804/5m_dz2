
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";




function UsersPage() {
    const [user, setUser] = useState("");
    const dispatch = useDispatch();

    const users = useSelector(state => state.usersReducer.users)

    const handleUser = e => {
        setUser(e.target.value)
    }

    const createUser = () => {
        dispatch({type: "CREATE_USER", payload: user})
        setUser("")
    }

    const clearList = () => {
        dispatch({type: "CLEAR"})
    }

    return (
        <>
            <h1>add users</h1>
            <input type="text" onChange={handleUser} value={user}/>
            <button onClick={createUser}>добавить</button>
            <button onClick={clearList}>очистить список</button>

            <ul>
                {users.map(user => <li>{user}</li>)}
            </ul>
        </>
    )
}

export default UsersPage;

