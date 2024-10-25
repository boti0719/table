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