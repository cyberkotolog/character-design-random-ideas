<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css">
    <title>Document</title>
</head>

    <header class="header-container">
        <h1>Character design ideas generator</h1>
    </header>

<body>  

    <button onclick="generate()" type="button" class="sticky">Randomize new result</button>


    <div class="container">
        <div class="container-text">
            <h2>type:</h2>
        </div>
        <div class ="secondary">
          <div class="Gtext">
                   <p id="type">...</p>
           </div>
        </div>
    </div>

    <div class="container">
        <div class="container-text">
            <h2> primary color:</h2>
        </div> 
        <div class ="secondary">
            <div class = "circle">
                    <p>#<span id="hex-code">00000</span></p>
            </div>
        </div>
    </div>         

    <div class="container">
        <div class="container-text">
            <h2>creature ref:</h2>
        </div>
        <div class ="secondary">
            <div class="Gtext">
                    <p id="creature">...</p>
            </div>
        </div>
    </div>

    <div class="container">
        <div class="container-text">
            <h2>shape language:</h2>
        </div>
        <div class ="secondary">
            <div class="Gtext">
                    <p id="shape">...</p>
            </div>
        </div>
    </div>

    <div class="container">
        <div class="container-text">
            <h2>extra:</h2>
        </div>
        <div class ="secondary">
            <div class="Gtext">
                    <p id="extra">...</p>
            </div>
        </div>
    </div>

    <div class="container">
        <div class="container-text">
            <h2>song inspiration:</h2>
        </div>
        <div class ="secondary">
            <div class="Gtext">
                    <p id="song">...</p>
            </div>
        </div>
    </div>


    <div class="container">
        <div class="container-text">
            <h2>aesthetics:</h2>
        </div>
        <div class ="secondary">
            <div class="Gtext">
                    <p id="aesthetic">...</p>
            </div>
        </div>
    </div>
</div>










    <script src="script.js"> </script>
</body>
</html>
