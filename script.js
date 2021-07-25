const btn = document.querySelector('button')
const input = document.querySelector('input')
const ul = document.createElement('ul')
const div = document.createElement('div')
const finish = document.createElement('ul')
var num = localStorage.length;


input.addEventListener("keypress", check)

function inputCheck(str) {
    if (str.match(/^\s*$/)) {
        return false;
    } else {
        return true
    }
}

function check(event) {
    if (event.keyCode === 13) {
        addTask()
    }
}

btn.addEventListener('click', () => {
    addTask()
})


const addTask = () => {
    if (inputCheck(input.value) === false) {
        alert("Task cannot be empty")
    }
    else if (inputCheck(input.value) === true) {
        const l = document.createElement('li')
        const delbtn = document.createElement('button')
        const donebtn = document.createElement('button')

        donebtn.innerHTML = "Done"
        donebtn.classList.add('bg-green-300', 'ring-2', 'rounded-sm', 'ring-white', 'px-2')
        donebtn.style.display="none"
        donebtn.addEventListener('click',()=>{
            divflex.classList.add('line-through')
            finish.insertBefore(l,finish.childNodes[0])
            donebtn.remove()
            delbtn.remove()
        })

        
        delbtn.innerHTML = "Delete"
        delbtn.classList.add('bg-red-400', 'ring-2', 'rounded-sm', 'ring-white', 'px-2')
        delbtn.style.display="none"
        delbtn.addEventListener('click',()=>{
            l.remove()
            for(var i=0;i<localStorage.length;i++){
                if(localStorage.getItem(String(i)) == divflex.innerHTML){
                    localStorage.removeItem(String(i))
                }
            }
            num--;
        })

        const divbtn = document.createElement('div')
        divbtn.classList.add('flex')
        divbtn.append(donebtn)
        const divp = document.createElement('div')
        divp.classList.add('p-1')
        divbtn.append(delbtn)

        const divflex = document.createElement('div')
        divflex.classList.add('flex','justify-between')

        localStorage.setItem(String(num),input.value)
        divflex.innerHTML = localStorage.getItem(String(num))
        num+=1;

        divflex.append(divbtn)
        l.append(divflex)
        l.addEventListener('mouseover', () =>{
            donebtn.style.display = "block"
            delbtn.style.display = "block"
        })
        l.addEventListener('mouseleave', ()=>{
            donebtn.style.display = "none"
            delbtn.style.display = "none"
        })
        l.classList.add('max-w-sm', 'mx-auto', 'my-auto', 'py-2', 'mb-4', 'shadow-xl', 'ring-1', 'ring-black', 'rounded-md', 'p-2', 'italic')

        ul.insertBefore(l,ul.childNodes[0])

        
        input.value = null
    }
    
}
document.body.append(ul)
document.body.append(finish)

for(var a in localStorage){
    input=0
    addTask
}
