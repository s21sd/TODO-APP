const inputlist = document.querySelector('.todo-list');
const btn = document.querySelector('#push');
const tasks = document.querySelector('#tasks');
const maincnt = document.querySelector('.main-container');
const secmain = document.querySelector('.second-div');

const taskname = document.querySelector('.taskname');
const show = document.querySelector('.show');
const updateTODO = (e) => {
    // first checking for if any value is present or not 
    if (inputlist.value.length == 0) {
        show.innerHTML = "Please add some todo";
    }
    // updating the value here
    else {
        tasks.innerHTML += `
        <div class="task">

            <span class="taskname">
            ${inputlist.value}
            </span>
            
            <button class = "delete">
            <i class='fa-solid fa-trash '></i>
            
            </button > 
           
        </div>
        `;
        show.innerHTML = "";
        var deletebtn = document.querySelectorAll('.delete');

        for (var i = 0; i < deletebtn.length; i++) {

            deletebtn[i].addEventListener("click", deleteTodo);


        }

        function deleteTodo() {
            this.parentElement.remove();
        }



    }

}

btn.addEventListener("click", (e) => {
    updateTODO(e);

})





// for button 
const ac = document.querySelector('#accept');
ac.addEventListener('click', (e) => {

    if (ac.checked == true) {

        maincnt.style.backgroundImage = "url('./images/bg-desktop-light.jpg')";
        document.querySelector('h1').style.color = "black"
        document.body.style.background = "white";

    }
    if (ac.checked == false) {
        maincnt.style.backgroundImage = "url('./images/bg-desktop-dark.jpg')";
        document.querySelector('h1').style.color = "white"
        document.body.style.background = "black";

    }



})



