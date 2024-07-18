
var domString = {
    addBtn : document.querySelector('.add__btn'),
    taskDes : document.querySelector('.add__description')
}


domString.addBtn.addEventListener('click',controller)


document.addEventListener('keypress', function(event){
    if(event.keyCode == 13)
        addTask

})

var tasksArray = [];

var Tasks = function(id,description)
{
    this.id = id
    this.description = description
}


function addATax(description)
{
    var id  =0
    if(tasksArray.length>0)
        id = tasksArray[tasksArray.length-1].id+1
    else
     id = 1
    var newTaskInstance = new Tasks(id,description)
    tasksArray.push(newTaskInstance)
    console.log(tasksArray)
    return newTaskInstance
}

function controller()
{
    var input = domString.taskDes.value
    if(input)
    {
        addATax(input)
    };
}