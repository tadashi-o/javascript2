$(function () {
    let display = $('#display');
    $(".btn").on('click',function() {
        let button_value = $(this).data("value");
        let d = display.text();
        if (button_value === "Clear") {
          d = "0";
        }else if (button_value === "=") {
          let d2 = d.replace(/÷/g,'/').replace(/×/g,'*');
          d = new Function ("return " + d2)();
        }else if (d === "0" || d === "00") {
            d = "0";
            if (!(button_value === "0" || button_value === "00")  && !isNaN(button_value) || button_value === "-") {
              if (button_value)
              d = button_value;
            }
            if (button_value === "."){
              d = "0."
            }
        }else{
          if (isNaN(button_value)) {
          let migihashi = d.slice(-1);
            if (!isNaN(migihashi)) {
              d = d != "0" ? d + button_value : button_value;
            }
          }else {
            d = d != "0" ? d + button_value : button_value;
          }
        }
        display.text(d);
    });
});