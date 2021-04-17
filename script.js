let myArray = ["start","mijn","array"];
let elVooraan = "aaa";
let elAchteraan = "zzz";

ShowArray();

function Toevoegen(bVooraan = true)
{
    let waardeToeveogen = document.getElementById("waarde").value;
    let positie = document.getElementById("positie").value;
    let toeTeVoegen;
    if (waardeToeveogen == '')
        if (bVooraan) toeTeVoegen = elVooraan;
        else toeTeVoegen = elAchteraan;
    else
        toeTeVoegen = waardeToeveogen;

    if (positie == '' || positie > myArray.length)
        if (bVooraan)
            myArray.unshift(toeTeVoegen);
        else
            myArray.push(toeTeVoegen)
    else
    {
        console.log(positie);
        myArray.splice(positie,0,waardeToeveogen);
        
    }
    document.getElementById("positie").value = '';

    ShowArray();
}

function Verwijderen(bVooraan = true)
{
    if (bVooraan)
        myArray.shift();
    else 
        myArray.pop();
    ShowArray();
}
function SortArray()
{
    myArray.sort();
    ShowArray();
}

function ReverseArray()
{
    myArray.reverse();
    ShowArray();
}
function ResetMyArray()
{
    myArray = ["start","mijn","array"];
    ShowArray();
}
function ShowArray()
{
    let divMsg = document.getElementById("msg");
    divMsg.innerHTML = "<p>Array lengte: "+myArray.length + "</p><p>Array: " +myArray.toString()+"</p>";
}
