import React from 'react'

type Props = {}

let name: string = "Munib";
let age: number = 40;
let hobbies: string[];
let role: [number, string];

interface Person {
    name: string;
    age: number;
    role: string;
}
let people: Person = {
    name: "Munib2",
    age: 40,
    role: 'dev2'
}

role = [1, 'dev'];

function sayName(name: string) {
    console.log(name);
}

export const Test: React.FC = (props: Props) => {
    return (
        <div>
            <ul >
                <li className='margintop'>name: {name}</li>
                <li className='margintop' >age: {age}</li>
                <li className='margintop'>   role: {role}</li>


            </ul>

            <div className="margintop10">
                <ul className="" >
                    <li className='margintop'>name: {people.name}</li>
                    <li className='margintop' >age: {people.age}</li>
                    <li className='margintop'>   role: {people.role}</li>

                    {sayName(people.name)}
                </ul>
            </div>
        </div>

    )
}

// export default test