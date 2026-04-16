export default function EventTodo() {

//     function handleClick(name) {
//         alert(`Button pressed by ${name}`);
//     }

//     function handleSubmit(e) {
//         e.preventDefault();

//         const taskValue = e.target.task.value.trim();

//         if (taskValue === "") {
//             alert("Task cannot be empty");
//             return;
//         }

//         const li = document.createElement("li");
//         li.innerHTML = `
//             <span>${taskValue}</span>
//             <button class="deleteBtn">Delete</button>
//         `;

//         document.getElementById("task-list").appendChild(li);

//         e.target.reset();
//     }

//     function handleListClick(e) {
//         if (e.target.className === "deleteBtn") {
//             e.target.parentElement.remove();
//         }
//     }

    return (
        <>
            <h1>Event Handling</h1>

            <button onClick={() => handleClick("Nisha")}>
                Click Me
            </button>

            <form onSubmit={handleSubmit}>
                <input type="text"  placeholder="Enter task" 
                value={hsdfghj}/>
                <input type="submit" value="Add Task" />
            </form>

            <ul id="task-list" onClick={handleListClick}></ul>
        </>
    );

 }
    
