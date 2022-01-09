let myTableEl = document.getElementById("myTable")
let row = myTableEl.rows

function createRow() {
    if (row.length === 0) {
        let addRow = myTableEl.insertRow()
        let cell = addRow.insertCell()
    } else {
        let addRow = myTableEl.insertRow()
        for (let i = 0; i < row[0].cells.length; i++) {
            let cell = addRow.insertCell(i)
        }
    }
}

function createColumn() {
    if (row.length === 0) {
        createRow()
    } else {
        for (let i = 0; i < row.length; i++) {
            let cell = row[i].insertCell(0)
        }
    }
}

function removeColumn(){
    if(row.length===0) {
        return
    }
    else{
        for(let i = 0; i < row.length; i++){
            row[i].deleteCell(0)
        }
    }
}

//Removes the last row
function removeRow(){
    if(row.length===0){
        return
    }
    else{
        myTableEl.deleteRow(row[row.length-1])
    }
}