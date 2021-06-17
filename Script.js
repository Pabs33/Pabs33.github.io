LoadLDocA("ToDoList.txt", "txt");

function leerTXT(fichero)
{
    let lineas = fichero.split("\n");
    let centro = document.querySelector(".centro");
    cosas = "";
    for(let i = 0; i < lineas.length; i++)
    {
        cosas += "<div class='Nombre'>" + lineas[i] + "</div>";
    }
    centro.innerHTML = cosas;
}