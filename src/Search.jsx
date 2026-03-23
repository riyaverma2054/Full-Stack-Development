import {useState} from 'react'
export default function Search(){
    const [find, setfind]=useState("");
    const names=["denie","ritchie","paul"];
    const student=names.filter((names)=>names.toLowerCase().includes(find.toLowerCase()))

    return(
        <div>
            <h2>demo to show search</h2>
            <input type="text"
            placeholder= "Enter key to search"
            value={find}
            onChange={(e)=>setfind(e.target.value)}/>
            <ul>
                {student.map((item,index)=>(<li key={(index)>(item)}></li>))}
            </ul>






        </div>
    )



}