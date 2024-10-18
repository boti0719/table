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
    const thead=document.createElement("thead");
    const tbody=document.createElement("tbody");
    const tr1=document.createElement("tr");
    const th=document.createElement("th");
    const th1=document.createElement("th");
    const th2=document.createElement("th");
    const th3=document.createElement("th");
    table.setAttribute("id", "tab");
    document.body.appendChild(table);
    table.appendChild(thead);
    table.appendChild(tbody);
    thead.appendChild(tr1);
    tr1.appendChild(th);
    tr1.appendChild(th1);
    tr1.appendChild(th2);
    tr1.appendChild(th3);
    th.innerHTML="Vezetéknév";
    th1.colSpan="2";
    th1.innerHTML="Keresztnév";
    th2.innerHTML="Házas";
    th3.innerHTML="Állat";        
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
        let td=document.createElement("td");
        tr.appendChild(td);
        td.innerHTML=person.lastname;
        let td1=document.createElement("td");
        tr.appendChild(td1);
        td1.innerHTML=person.firstname1;
        if(person.firstname2==undefined || person.firstname2==""){
            td1.colSpan=2;
        }else{
            let td2=document.createElement("td");
            tr.appendChild(td2);
            td2.innerHTML=person.firstname2;
        }
        let td3=document.createElement("td");
        tr.appendChild(td3);
        td3.innerHTML=person.married?"igen":"nem";
        let td4=document.createElement("td");
        tr.appendChild(td4);
        td4.innerHTML=person.pet;
        
    }
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
        })
    }