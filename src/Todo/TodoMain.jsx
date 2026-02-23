import AddBtn from './AddBtn';
import InputField from './InputField';
import TodoData from './TodoData';
import TodoHeader from './TodoHeader';
export default function TodoMain() {
    return (
        <>
            <div className="container m-auto text-center my-4">

                <TodoHeader text="TODO LIST" />
                <div className="flex justify-center">
                    <InputField />
                    <AddBtn text="Add Item" />
                </div>

                <div className="flex justify-center mt-6">
                    <TodoData />
                </div>
            </div>
        </>
    )
}