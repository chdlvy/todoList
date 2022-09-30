let todoItem = document.getElementsByClassName('item');
let desc = document.getElementsByClassName('desc');
for (let i = 0; i < todoItem.length; i++) {
    todoItem[i].onclick = function () {
        for (let j = 0; j < todoItem.length; j++) {
            todoItem[j].style.height = '60px'
            desc[j].style.display = 'none'
            desc[j].style.opacity = '0'
        }
        todoItem[i].style.height = '150px'
        desc[i].style.display = 'block'
        desc[i].style.opacity = '100'
    }

    desc[i].ondblclick = function (e) {
        desc[i].removeAttribute('readonly')
        desc[i].style.cursor = 'auto'
    }
    desc[i].onblur = function (e) {
        desc[i].setAttribute('readonly','readonly')
        desc[i].style.cursor = 'pointer'
        e.peventDefault()
    }
}