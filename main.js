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
//feltolt();
formtThings();

function feltolt(){
    const table=document.createElement("table");
    const thead=document.createElement("thead");
    const tbody=document.createElement("tbody");
    const tr1=document.createElement("tr");
    const th=document.createElement("th");
    const th1=document.createElement("th");
    const th2=document.createElement("th");
    const th3=document.createElement("th");
    
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
        let tr=document.createElement("tr")
        tr.addEventListener("click", function(e){
            const selectedRow=tbody.querySelector(".selected");
            e.currentTarget.classList.add("selected");
            if(selectedRow != undefined){
                selectedRow.classList.remove("selected");
            }
            console.log("click")
        })
        tbody.appendChild(tr);
        let td=document.createElement("td")
        tr.appendChild(td);
        td.innerHTML=person.lastname
        
        let td1=document.createElement("td")
        tr.appendChild(td1);
        td1.innerHTML=person.firstname1
        if(person.firstname2!==undefined){
            let td2=document.createElement("td")
            tr.appendChild(td2);
            td2.innerHTML=person.firstname2
        }else{
            td1.colSpan=2
        }
        let td3=document.createElement("td")
        tr.appendChild(td3);
        td3.innerHTML=person.married?"igen":"nem";
        let td4=document.createElement("td")
        tr.appendChild(td4);
        td4.innerHTML=person.pet;
    }
}
function formtThings(){
        const form=document.getElementById("form");
        form.addEventListener("submit", function(e){
            e.preventDefault();
            array.push({
                lastname: document.getElementById("lastname").value,
                firstname1: document.getElementById("firstname1").value,
                firstname2: document.getElementById("firstname2").value,
                married: document.getElementById("married").checked,
                pet: document.getElementById("pet").value

            })
            feltolt();
        })
    }