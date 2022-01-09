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
//removes first column
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

//Removes the first row
function removeRow(){
    if(row.length===0){
        return
    }
    else{
        myTableEl.deleteRow(row[0])
    }
}



//know which cell the user clicked and change color
myTableEl.addEventListener("click", (ev) => {
    let clr = document.getElementById("clrSelection")
    let setClr = clr.options[clr.selectedIndex].value
    ev.target.style.backgroundColor = setClr
})


function changeAllUn(){
    let clr = document.getElementById("clrSelection")
    let setClr = clr.options[clr.selectedIndex].value
    let fill = document.getElementById("fillType")
    let setFill = fill.options[fill.selectedIndex].value
    if(setFill==="fillUn"){
        myTableEl.style.backgroundColor = setClr
    }
}




