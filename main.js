const array = [
    {
        firstname1: 'Géza',
        firstname2: 'Ferenc',
        lastname: 'Kocsis',
        married: true,
        pet: 'kutya'
    },
    {
        firstname1: 'Mária',
        firstname2: 'Júlia',
        lastname: 'Horváth',
        married: false,
        pet: 'macska'
    },
    {
        firstname1: 'Ferenc',
        lastname: 'Balogh',
        married: false,
        pet: 'teknős'
    },
    {
        firstname1: 'Gábor',
        firstname2: 'Attila',
        lastname: 'Horváth',
        married: true,
        pet: 'macska'
    },
]
feltolt();
formtThings();
function feltolt(){
    let table;
    if(document.getElementById("tab")!==null){
        document.getElementById("tab").innerHTML=null;
        table=document.getElementById("tab")
    }else{
        table=document.createElement("table");
    }
    table.setAttribute("id", "tab");
    const thead=document.createElement("thead");
    table.appendChild(thead);
    const tbody=document.createElement("tbody");
    table.appendChild(tbody);
    const tr1=document.createElement("tr");
    thead.appendChild(tr1);
    cellCreate(tr1, "th", "Vezetéknév");
    cellCreate(tr1, "th", "Keresztnév").colSpan="2";
    cellCreate(tr1, "th", "Házas");
    cellCreate(tr1, "th", "Állat");
    document.body.appendChild(table);
    for(const person of array){
        let tr=document.createElement("tr");
        tbody.appendChild(tr);
        tr.addEventListener("click", function(e){
            const selectedRow=tbody.querySelector(".selected");
            e.currentTarget.classList.add("selected");
            if(selectedRow != undefined){
                selectedRow.classList.remove("selected");
            }
            console.log("click")
        })
        cellCreate(tr, "td", person.lastname);
        if(person.firstname2==undefined || person.firstname2==""){
            cellCreate(tr, "td", person.firstname1).colSpan=2;
        }else{
            cellCreate(tr, "td", person.firstname1);
            cellCreate(tr, "td", person.firstname2);
        }
        cellCreate(tr, "td", person.married?"igen":"nem");
        cellCreate(tr, "td", person.pet);
    }
}
/**
 * @param {HTMLTableRowElement} parent 
 * @param {"td"|"th"} elemtType 
 * @param {string} text 
 * @returns {HTMLTableCellElement}
 */
function cellCreate(parent, elemtType, text){
    const elem=document.createElement(elemtType);
    elem.innerHTML=text;
    parent.appendChild(elem);
    return elem;
}
function validate(lastname, firstname1, pet){
    let b=true;
    for(const err of document.querySelectorAll(".error"))
        err.innerHTML="";
    if(document.getElementById("lastname").value===""){
        lastname.parentElement.querySelector(".error").innerHTML="A vezeték név kötelező!";
        b=false;
    }if(document.getElementById("firstname1").value===""){
        firstname1.parentElement.querySelector(".error").innerHTML="Az első keresztnév kötelező!";
        b=false;
    }if(document.getElementById("pet").value===""){
        pet.parentElement.querySelector(".error").innerHTML="A házi állat kötelező!";
        b=false;
    }
    return b;
}
function formtThings(){
    const form=document.getElementById("form");
    form.addEventListener("submit", function(e){
        e.preventDefault();
        if(validate(document.getElementById("lastname"), document.getElementById("firstname1"), document.getElementById("pet"))){
            array.push({
                lastname: document.getElementById("lastname").value,
                firstname1: document.getElementById("firstname1").value,
                firstname2: document.getElementById("firstname2").value===""?undefined:document.getElementById("firstname2").value,
                married: document.getElementById("married").checked,
                pet: document.getElementById("pet").value
            })
            console.log(array);
        }
        feltolt();
        form.reset();
    })
    
}