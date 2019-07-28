//Business logic
function Pizza(size,topping,crust){
    this.size = size;
    this.topping = topping;
    this.crust = crust;
}
Pizza.prototype.combineProperties = function() {
    return this.size + "" + this.topping + "" + this.crust;
}

//User Interface logic
$(document).ready(function(){
    $("#delivery").click(function(){
      var location = prompt("Please enter your location.");

      if(location != null){
      alert("You will be charged Ksh. 250 delivery fee.");
      alert("Your order will be delivered to your location.");
      }else{
          alert("You have cancalled delivery.");
      }
    });

    $("#delivery1").click(function(){
        alert("Proceed to place your order by checking out on your right.");
    });

});