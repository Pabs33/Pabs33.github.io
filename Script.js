

LoadLDocA("ToDoList.txt", "txt");

function leerTXT(fichero)
{
    let lineas = fichero.split("\n");
    let centro = document.querySelector(".Proyectos");
    let cosas = "";
    for(let i = 0; i < lineas.length; i++)
    {
        cosas += "<div class='Nombre'>" + lineas[i] + "</div>";
    }
    centro.innerHTML = cosas;
}
function ReocgerDatos()
{
    let proyecto = document.getElementById("proyecto").value;
    escribirTexto(proyecto)
}
function escribirTexto(proyecto)
{
    
    let fs = require('fs');
    fs.writeFile(proyecto);

}