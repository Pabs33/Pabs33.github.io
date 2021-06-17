<html UTF-8>
    <head>
        <title>To do list server</title>
        <meta charset="UTF-8" />
        <link rel="stylesheet" href="Estilos.css">
    </head>
    <body>
        <?php
            $proyecto = $_POST["proyecto"];
            $archivo = fopen("ToDoList.txt", "a");
            fwrite($archivo ,"-$proyecto" .PHP_EOL);
        ?>
        <p>Proyecto enviado :)</p><br>
        <a href="index.html">Volver a ver los proyectos</a>
    </body>
</html>