function awesomeFunction() {
    // skapar en funktion som heter awesomeFunction
    var firstName =prompt ("Please enter your name");
    // Promt är ett meddelandefönster där man fyller i en textruta.
    if (firstName != null) {
        document.getElementById("demo").innerHTML= firstName + " is awesome!";
        // getElementByID betyder att jag ska hämta ett element via  ID namnet.  
    //  Har gjort en knapp på Home där man klickar på den för att kunna skriva sitt namnm
    // Där det sedan kommer stå ditt namn och "is awesome":
    }
}

// Automatic header slideshow
var slideIndex = 0;  
           //Declare index to 0
        // Skapar en variabel som 
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("Picture");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    // De 3 bildern slider ett steg i taget
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "flex";
  setTimeout(showSlides, 7000); // Change image every 7 seconds
}


   
    function displayDate() {
        // Skapar en funktion att visa upp datum
      document.getElementById("Tid").innerHTML = Date();
    //   Du trycker på "The time is" knappen på Home så visar den dagens datum och tid
    }
 
    




    try {
        // Try testar att hitta fel i koden
      Show("Pictures");
    }
    catch(error) {
        // Catch hanterar genom att blockera koden 
    
      console.error(" Oj detta var fel: " +  error);
    //   Här skriver man ut felet som catch hittar
    }
    




   




 












