let display=document.querySelector("#display")
function sinf(){
    display.value=Math.sin(display.value)
}
function cosf(){
    display.value=Math.cos(display.value)
}
function tanf(){
    display.value=Math.tan(display.value)
}
function sqrf(){
    display.value=Math.sqrt(display.value)
}
function calculate() {
    try {
        let expression = display.value;
        if (expression.trim() !== "") {
            let result = eval(expression);
            if (typeof result === 'number' && !isNaN(result)) {
                display.value = result;
            }
        }
    } catch (e) {
        display.value = "Error";
    }
}
