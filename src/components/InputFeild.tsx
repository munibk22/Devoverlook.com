import React from 'react';


interface Props {
    todo: string | number;
    setTodo: React.Dispatch<React.SetStateAction<string | number>>;
    handleAddToDo: (e: React.FormEvent<EventTarget>) => void;
}

export const InputFeild: React.FC<Props> = ({ todo, setTodo, handleAddToDo }) => {



    const handleformSubmit = (e: any) => {
        //e.preventDefault();
        console.log(todo);
        // React.ChangeEvent<HTMLInputElement>
    }

    return (
        <form className="textalign forminput" onSubmit={handleAddToDo}>
            InputFeild
            <ul className=" margintop flexcol alignitems justify">
                <li className="flex alignitems relative" style={{ width: '40%' }}>
                    <input type='text' placeholder='Enter a task'
                        className='input_box'
                        value={todo}
                        onChange={(e) => setTodo(e.target.value)}
                    />
                    <button className='input_button'
                        onClick={handleformSubmit}


                    >Go</button></li>

            </ul>

        </form>
    )
}