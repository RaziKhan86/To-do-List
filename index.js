function addtask() {
    let taskInput = document.getElementById("task-input");
    let tasktext = taskInput.value.trim();
    if (tasktext === "") return;

    let li = document.createElement("li");
    li.innerHTML = `<span class='task-text'>${tasktext}</span>
    <button class='edit' onclick='editTask(this)'>EDIT</button> 
    <button class='delete' onclick='removeTask(this)'>X</button>`;
    document.getElementById("task-list").appendChild(li);
    taskInput.value = "";
}

function removeTask(button) {
    button.closest("li").remove();
}
function editTask(button) {
    let li = button.closest("li");
    let span = li.querySelector(".task-text");

    let input = document.createElement("input");
    input.type = "text";
    input.value = span.textContent;
    input.classList.add("edit-input");

    // Replace span with input
    li.replaceChild(input, span);
    input.focus();

    // When input loses focus, replace it back with the updated span
    input.addEventListener("blur", function () {
        if (input.value.trim() !== "") {
            span.textContent = input.value.trim();
        }
        li.replaceChild(span, input);
    });
}
