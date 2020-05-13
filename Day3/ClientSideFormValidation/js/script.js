function validate(){
    let name = document.forms["myform"]["name"].value;
    if(name=""){
        document.getElementById("name").className = "input";
        return false;
    }
    return true;

}
function checkMinMax() {
    var inpObj = document.getElementById("id1");
    if (!inpObj.checkValidity()) {
      document.getElementById("demo").innerHTML = inpObj.validationMessage;
    }
}