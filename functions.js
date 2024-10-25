function feltolt(){
    let table
    if(document.getElementById("tab")!=undefined){
        document.getElementById("tab").innerHTML=null
    }
    createHtmlElement(document.body, "table", "tab");
    createHtmlElement("tab", "thead", "thead");
    createHtmlElement("tab", "tbody", "tbody");
    createHtmlElement("thead", "tr", "tr");
    let tr1=document.getElementById("tr")
    cellCreate(tr1, "th", "Vezetéknév");
    cellCreate(tr1, "th", "Keresztnév").colSpan="2";
    cellCreate(tr1, "th", "Házas");
    cellCreate(tr1, "th", "Állat");
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
/**
 * @param {string|HTMLTableElement} parent
 * @param {string} elemtId 
 * @param {string} elemtType 
 */
function createHtmlElement(parent, elemtType, elemtId){
    const elem=document.createElement(elemtType);
    elem.setAttribute("id", elemtId);
    if(typeof(parent)!="string"){
        parent.appendChild(elem);
    } 
    else if(document.getElementById(parent)!=undefined)
        document.getElementById(parent).appendChild(elem);
}
