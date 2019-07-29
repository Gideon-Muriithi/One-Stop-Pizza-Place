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
    return this.size  + this.topping + this.crust;
}


//User Interface logic

$(document).ready(function(){
    
   $("#delivery1").click(function(){
          alert("Then proceed to place your order by checking out on your right.");
     });
    
    $("form#takeInputs").submit(function(event){
       event.preventDefault();
       var selectedSize = parseInt($("input[name='size']:checked", '#forForm').val());     
       var selectedTopping = parseInt($("input[name='topping']:checked", '#forForm').val());
       var selectedCrust = parseInt($("input[name='crust']:checked", '#forForm').val());
       var newPizza = new Pizza(selectedSize, selectedTopping,selectedCrust);

       var radioValue = $("input[name='delivery']:checked").val();
       if(radioValue=="yes"){
           prompt("Please Enter Delivery Location and Your Tel.")
           alert("Thanks. Your Order Will be Delivered to Your Location.");
           alert('You will incur a delivery fee of Ksh. 250')
       }
       if (radioValue=="yes"){
         var deliveryFee = parseInt(250);
       } else {
         deliveryFee = 0;
       }
        
       $("p#charges").append(newPizza.sizeToppingCrust() + deliveryFee);
    
       $("ol#properties").append("<li>" + newPizza.combineProperties() + "</li>");

      
    });
  
});
