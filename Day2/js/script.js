class toDataList{
    constructor(work,startTime,finishTime){
        this.work = work;
        this.startTime = startTime;
        this.finishTime = finishTime;
        
    }
}
let array = [];
let item = 1;

function addNewEntry(){
    var table = document.getElementById("table");
    let work = document.getElementById("text").value;
    let stime = document.getElementById("sdate").valueAsDate;
    let ftime = document.getElementById("ldate").valueAsDate; 
    
    let obj = new toDataList(work,stime,ftime);
    array.push(obj);
    var row = table.insertRow(array.length);
    var cell0 = row.insertCell(0);
    var cell1 = row.insertCell(1);
    var cell2 = row.insertCell(2);
    var cell3 = row.insertCell(3);
    
    
    cell0.innerHTML = item.toString();
    cell1.innerHTML = array[array.length-1].work;
    cell2.innerHTML = array[array.length-1].startTime.toDateString();
    cell3.innerHTML = array[array.length-1].finishTime.toDateString();
    item++;
    

   
}

function deleteThisEntry(){

        document.getElementById("table").deleteRow(1);
        array.pop();    
    
    
}


 var table = document.getElementById("myTable");
  