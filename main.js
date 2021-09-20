function myTestFunction(test) {



    console.log("Testet är: " + test);
    
    
    
    }
    
    
    
    
    function myOtherFunction() {
    
    
    
    
    document.getElementById("testet").innerHTML = "<p> Välkommen till min hemsida </p>";
    
    // null = ingenting ( inte ens noll )
    
    
    
    document.getElementById("my-element").setAttribute("id","my-new-id");
    
    
    
    
    document.getElementById("my-new-id").setAttribute("style","background-color: red;");
    
    document.getElementById("my-new-id").style = "background-color: red";
    
    document.getElementById("my-new-id").setAttribute("class","cool-class");
    
    document.getElementById("my-new-id").innerHTML = "<!--Välkommen till min hemsida--> <p> Välkommen till min hemsida </p>";
    
    
    
    }
    
    
    
    document.getElementById("testet").addEventListener("click", function() {
    
    
    
    console.info("Du tryckte på TESTET!");
    
    
    
    });
    
    
    
    myOtherFunction();
    
    
    
    myTestFunction("Välkommen till min hemsida");