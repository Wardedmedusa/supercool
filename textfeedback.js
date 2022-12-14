
function myFunction() { 

    var x = document.getElementById("form1"); 

    var text = ""; 

    var i; 

    for (i = 0; i < x.length ;i++) { 

        data = x.elements[i].value; 

if (data!="This submits the data to another page") { 

text += "Your feedback text was entered as " + data + "."; 

} 

    } 

    document.getElementById("output_here").innerHTML = text; 

} 
function myFunction2() { 

    var x = document.getElementById("form2"); 

    var text = ""; 

    var i; 

    for (i = 0; i < x.length ;i++) { 

        data = x.elements[i].value; 

if (data!="This submits the data to another page") { 

text += "Your email text was entered as " + data + "."; 

} 

    } 

    document.getElementById("output_here2").innerHTML = text; 

}  
function myFunction3() { 

    var x = document.getElementById("form3"); 

    var text = ""; 

    var i; 

    for (i = 0; i < x.length ;i++) { 

        data = x.elements[i].value; 

if (data!="This submits the data to another page") { 

text += "Your date text was entered as " + data + "."; 

} 

    } 

    document.getElementById("output_here3").innerHTML = text; 

} 
function myFunction4() { 

    var x = document.getElementById("form4"); 

    var text = ""; 

    var i; 

    for (i = 0; i < x.length ;i++) { 

        data = x.elements[i].value; 

if (data!="This submits the data to another page") { 

text += "Your date text was entered as " + data + "."; 

} 

    } 

    document.getElementById("output_here4").innerHTML = text; 

} 