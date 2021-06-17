LoadLDocA("ToDoList.txt", "txt");

function leerTXT(fichero)
{
    let lineas = fichero.split("/");
    let centro = document.querySelector(".centro");
    for(let i = 0; i < lineas.length; i++)
    {
        centro += "<div class='Nombre'>" + lineas[i] + "</div>";
    }
}