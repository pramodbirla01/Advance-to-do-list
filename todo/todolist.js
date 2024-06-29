const toggle=document.getElementById('toggleDark');
const body=document.querySelector('.to-do');

toggle.addEventListener('click',function () {
    this.classList.toggle('bi-moon')
    if (this.classList.toggle('bi-brightness-alt-high')) {
        body.style.background='white';
        body.style.color='black';
        body.style.transition='.2s';
    }
    else{
        body.style.background='black';
        body.style.color='white';
        
    }
})

const inputbox =document.getElementById('input-box')
const list =document.getElementById('list')

function addTask() {
    if (inputbox.value==='') {
        alert("You must write something")
    }
    else{
        let li=document.createElement('li')
        li.innerHTML=inputbox.value;
        list.appendChild(li);
        let span=document.createElement('span')
        span.innerHTML="\u00d7";
        li.appendChild(span)
    }
    inputbox.value="";
    saveData();
}

list.addEventListener('click', function(e) {
    if (e.target.tagName==='LI') {
        e.target.classList.toggle('checked');
        saveData()
    }
    else if(e.target.tagName==='SPAN')
        {
            e.target.parentElement.remove();
            saveData()
        }
},false);

function saveData() {
    localStorage.setItem("data",list.innerHTML);
}
function getData() {
    list.innerHTML=localStorage.getItem('data');
}
getData();