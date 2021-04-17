var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9","0", "00"];

function input(gir) {
    if(gir === "c"){
    document.calc.txt.value="0";
    }else{
        if(document.calc.txt.value == "0" ){
            document.calc.txt.value=gir;
        }else if (document.calc.txt.value == '/' || document.calc.txt.value == '*' || document.calc.txt.value == '-' || document.calc.txt.value == '+'){
            document.calc.txt.value=gir;
        }else{
            if(document.calc.txt.value.indexOf("/") < 0 && gir == "/"){
                document.calc.txt.value+=gir;
            }else if(document.calc.txt.value.indexOf("*") < 0 && gir == "*"){
                document.calc.txt.value+=gir;
            }else if(document.calc.txt.value.indexOf("+") < 0 && gir == "+"){
                document.calc.txt.value+=gir;
            }else if(document.calc.txt.value.indexOf("-") < 0 && gir == "-"){
                document.calc.txt.value+=gir;
            }else if(document.calc.txt.value.indexOf(".") < 0 && gir == "."){
                document.calc.txt.value+=gir;
            }else if(numbers.includes(gir)){
                document.calc.txt.value+=gir;
            }
        }
    }
}