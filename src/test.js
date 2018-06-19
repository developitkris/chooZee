$(document).ready(function() {
    $('#weatherLocation').click(function() {
      let drink = $('#drink').val();
      $('#drink').val("");
  
  
      let request = new XMLHttpRequest();
      let url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita`;
  
      request.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
          let response = JSON.parse(this.responseText);
          getElements(response);
        }
      }
  
      request.open("GET", url, true);
      request.send();
  
  
        let getElements = function(response) {
          $('.showDrink').text(`The humidity in `);
          $('.showDrink').text(`The temperature in Kelvins is `);
        }
    });
  });