function greaternum() {
    var x = document.getElementById("num1box").value ;
    var y = document.getElementById("num2box").value ;


    if (((-1)*x) > ((-1)*y)) {
        document.getElementById("i1").innerHTML = "The greater number of " + x + " and " + y + " is " + y;
        
    }

    else if (((-1)*x) < ((-1)*y)) {
        document.getElementById("i1").innerHTML = "The greater number of " + x + " and " + y + " is " + x;
    }

    else if (x>y) {
        document.getElementById("i1").innerHTML = "The greater number of " + x + " and " + y + " is " + x;
    }

    else if (x<y) {
        document.getElementById("i1").innerHTML = "The greater number of " + x + " and " + y + " is " + y;
    } 

}