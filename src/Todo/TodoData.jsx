import { useState, useEffect } from "react";
import CheckItem from "./CheckItem";
import AddBtn from "./AddBtn";
import InputField from "./InputField";

export default function () {
    const [todo, setTodo] = useState([]);
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [editItemId, setEditItemId] = useState(null);
    const [editTitle, setEditTitle] = useState("");


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

    const handleCheckBox = (checkedItem) => {
        setTodo(previtem =>
            previtem.map((item) =>
                item.id === checkedItem.id ? { ...item, completed: !item.completed } : item

            )
        )
    }

    const handleEdit = (editedItem) => {
        setEditItemId(editedItem.id);
        setEditTitle("");
    }

    const handleSave = (todo) => {
        setTodo(prev =>
            prev.map((edit) => {
                return edit.id === todo.id ? { ...edit, title: editTitle }
                    : edit
            })
        )
        setEditTitle("");

        setEditItemId(null);
    }
    return (
        <>
            {isLoading ? (

                <div>LOADING.........</div>

            ) : (
                <ul>
                    {todo.map((todo) => (

                        <li key={todo.id}
                            className="flex justify-between items-center border-2 py-2 mb-2 px-3"
                        > <CheckItem customClass="mr-3" onClick={() => handleCheckBox(todo)} /> {todo.title}
                            {todo.completed ? (
                                <div>
                                    Completed
                                </div>
                            ) : (
                                <>
                                    <div>{editItemId === todo.id ?
                                        <div className="flex justify-between">
                                            <InputField value={editTitle}
                                                onChange={(e) => setEditTitle(e.target.value)} />
                                            <AddBtn text="Save"
                                                onClick={() => handleSave(todo)} disabled={!editTitle.trim()} />
                                        </div> : <div><AddBtn text="Edit" onClick={() => handleEdit(todo)} /></div>}
                                    </div>

                                </>
                            )}
                        </li>
                    ))}
                </ul>
            )
            }
        </>
    )
}