//priorityは1:低、2:中、3:高
const todos = [
    { title: "晩御飯", priority: 3, completed: false},
    { title: "洗濯", priority: 3, completed: false},
    { title: "ギターの練習", priority: 2, completed: true},
    { title: "宿題", priority: 2, completed: false},
    { title: "デート", priority: 1, completed: true},
    { title: "買い出し", priority: 2, completed: false}
];

function todo_print(todos){
    todos.forEach(({title,completed}) => {
        if(completed){
            document.writeln(`${title}は完了!`);
        } else {
            document.writeln(`${title}をやらないとね`);
        }
    })
}

const notCompleted = todos.filter(({completed}) => {
    return !completed;
});

const sortedTodos = todos.sort((todoA,todoB) => {
    return todoB.priority - todoA.priority;
});

todo_print(notCompleted);