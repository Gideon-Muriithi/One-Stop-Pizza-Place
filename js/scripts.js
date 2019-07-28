//Business logic
function Pizza(size,topping,crust){
    this.size = size;
    this.topping = topping;
    this.crust = crust;
}

Pizza.prototype.combineProperties = function() {
    return "A " + this.size + " pizza " + "with " + this.topping + " topping " + "and " + this.crust + " crust" + ".";
}

Pizza.prototype.sizeToppingCrust = function(){
    return this.size + " " + this.topping + " " + this.crust;
}

//User Interface logic
$(document).ready(function(){
   
    $("#delivery").click(function(){
       var location = prompt("Please enter your location.");
       window.location2 = location;
      
      if(location != null){
      alert("You will be charged Ksh. 250 delivery fee.");
       alert("Your order will be delivered to your location.");
       }else{
          alert("You have cancelled delivery.");
      }
      alert(location2);

   });
  
     $("#delivery1").click(function(){
          alert("Then proceed to place your order by checking out on your right.");
     });
    
    $("form#takeInputs").submit(function(event){
       event.preventDefault();

       var selectedSize = $("input[name='size']:checked", '#forForm').val();     
       var selectedTopping = $("input[name='topping']:checked", '#forForm').val();
       var selectedCrust = $("input[name='crust']:checked", '#forForm').val();
       var newPizza = new Pizza(selectedSize, selectedTopping,selectedCrust);
       var orderPizza = new Pizza(selectedSize, selectedTopping,selectedCrust);
       
       $("ol#properties").append("<li>" + newPizza.combineProperties() + "</li>");
   
    });
  
});
