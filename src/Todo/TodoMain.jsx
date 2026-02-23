import { useState, useEffect } from 'react';
import AddBtn from './AddBtn';
import InputField from './InputField';
import TodoData from './TodoData';
import TodoHeader from './TodoHeader';
export default function TodoMain() {
    const [todo, setTodo] = useState([]);
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [editItemId, setEditItemId] = useState(null);
    const [editTitle, setEditTitle] = useState("");
    const [addItem, setAddItem] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true)
            try {
                const response = await fetch("https://jsonplaceholder.typicode.com/todos");
                if (!response.ok) {
                    throw new Error("Something went wrong")
                }
                const data = await response.json();
                setTodo(data)

            } catch (err) {
                setError(err.message)
            } finally {
                setIsLoading(false)
            }
        }
        fetchData();
    }, [])

    const handleNewItem = () => {
        const newTodo = {
            "userId": Date.now(),
            "id": Date.now(),
            "title": addItem,
            "completed": false
        }
        setTodo(prev =>
            [newTodo, ...prev]
        )
        setAddItem("")
    }

    return (
        <>
            <div className="container m-auto text-center my-4">

                <TodoHeader text="TODO LIST" />
                <div className="flex justify-center">
                    <InputField value={addItem}
                        onChange={(e) => setAddItem(e.target.value)}
                    />
                    <AddBtn text="Add Item" onClick={() => handleNewItem()} />
                </div>

                <div className="flex justify-center mt-6">
                    <TodoData todo={todo} setTodo={setTodo}
                        isLoading={isLoading} editItemId={editItemId} editTitle={editTitle}
                        setEditItemId={setEditItemId} setEditTitle={setEditTitle}
                    />
                </div>
            </div>
        </>
    )
}