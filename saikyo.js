function change() {
  if (document.getElementById("selbox")) {
    selboxValue = document.getElementById("selbox").value;
    if (selboxValue == "0"){
      document.getElementById("input1").style.display = "none";
      document.getElementById("input2").style.display = "none";
    }

    else if (selboxValue == "1") {
      document.getElementById("input1").style.display = "";
      document.getElementById("input2").style.display = "none";

      var button = document.getElementById("button1");
      button.addEventListener("click", function(e) {
        e.preventDefault();

        var do1 = document.getElementById("do1").value;
        var fun1 = document.getElementById("fun1").value;
        var N1 = document.getElementById("koushi1").value;

        var theta = (parseFloat(do1, 10) + (parseFloat(fun1, 10) / 60)) * Math.PI / 180 ;

        var sin= Math.sin(theta);
        var result10 = document.getElementById("result1-0");
        result10.value = sin;

        d1 = document.getElementById("d1");
        d2 = document.getElementById("d2");
        if (d1.checked == true) {
          var dN1 =  parseFloat(N1, 10) * ((((Math.cos(theta) / Math.sin(theta)) * Math.PI / 10800) ** 2 + (0.001 / 589.592) ** 2 ) ** 0.5) ;
        }
        else if (d2.checked == true) {
          var dN1 = parseFloat(N1, 10) * ((((Math.cos(theta) / Math.sin(theta)) * Math.PI / 10800) ** 2 + (0.001 / 588.995) ** 2 ) ** 0.5) ;
        }
        else {
          var dN1 = "Error";
        }

        let result11 = document.getElementById("result1-1");
        result11.value = dN1;

        document.getElementById("d-tou_bomb").play();
      });
    }

    else if (selboxValue == "2") {
      document.getElementById("input2").style.display = "";
      document.getElementById("input1").style.display = "none";

      var button = document.getElementById("button2");
      button.addEventListener("click", function(e) {
        e.preventDefault();

        var do2 = document.getElementById("do2").value;
        var fun2 = document.getElementById("fun2").value;
        var m = document.getElementById("zisu").value;
        var N2 = document.getElementById("koushiava").value;
        var dN2 = document.getElementById("koushi2").value;

        var theta = (parseFloat(do2, 10) + (parseFloat(fun2, 10) / 60)) * Math.PI / 180 ;
        var sin = Math.sin (theta);
        var result20 = document.getElementById("result2-0");
        result20.value = sin;

        var lambda = 1000000 * Math.sin(theta) / (parseFloat(m, 10) * parseFloat(N2, 10));
        var result21 = document.getElementById("result2-1");
        result21.value = lambda;

        var dlambda = lambda * ((((Math.cos(theta) / Math.sin(theta)) * Math.PI / 10800) ** 2 + (dN2 / N2) ** 2 ) ** 0.5);
        var result22 = document.getElementById("result2-2");
        result22.value = dlambda;

        document.getElementById("d-tou_bomb").play();
      });
    }
  }
}
