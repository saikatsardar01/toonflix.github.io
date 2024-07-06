function getListValue() {
var selectedOption, st;
selectedOption = document.getElementById("myList").selectedIndex;
st=document.getElementById("myList").options[selectedOption].value
//alert(st);
document.getElementById("myTextBoxResult").value=st;
}
