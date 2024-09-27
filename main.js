const array = [
    {
        firstname1: 'Géza',
        firstname2: 'Ferenc',
        lastname: 'Kocsis'
    },
    {
        firstname1: 'Mária',
        firstname2: 'Júlia',
        lastname: 'Horváth'
    },
    {
        firstname1: 'Ferenc',
        lastname: 'Balogh'
    },
    {
        firstname1: 'Gábor',
        firstname2: 'Attila',
        lastname: 'Horváth'
    },
]
feltolt();
function feltolt(){
    const table=document.createElement("table");
    const thead=document.createElement("thead");
    const tbody=document.createElement("tbody");
    const tr0=document.createElement("tr");
    const th=document.createElement("th");
    const th2=document.createElement("th");
    
    document.body.appendChild(table);
    table.appendChild(thead);
    table.appendChild(tbody);
    thead.appendChild(tr0);
    tr0.appendChild(th);
    tr0.appendChild(th2)
    th.innerHTML="Vezetéknév";
    th2.colSpan="2";
    th2.innerHTML="Keresztnév";

    for(const person of array){
        let tr=document.createElement("tr")
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
    }
}