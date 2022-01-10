let myTableEl = document.getElementById("myTable")
let row = myTableEl.rows
let tbdy = document.getElementById("ttbody")

//adds rows
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

//adds columns
function createColumn() {
    if (row.length === 0) {
        createRow()
    } else {
        for (let i = 0; i < row.length; i++) {
            let cell = row[i].insertCell(row[0].cells.length-1)
        }
    }
}

//removes last column
function removeColumn(){
    if(row.length===0) {
        return
    }
    else{
        for(let i = 0; i < row.length; i++){
            row[i].deleteCell(-1)
        }
        
    }
}

//Removes the last row
function removeRow(){
    if(row.length===0){
        return
    }
    else{
        myTableEl.deleteRow(-1)
    }
}



//know which cell the user clicked and change color
myTableEl.addEventListener("click", (ev) => {
    let clr = document.getElementById("clrSelection")
    let setClr = clr.options[clr.selectedIndex].value
    ev.target.setAttribute("bgcolor", setClr)
    
})






//Changes the color of all uncolored cells or all cells
function changeAllUn(){
    let clr = document.getElementById("clrSelection")
    let setClr = clr.options[clr.selectedIndex].value
    let fill = document.getElementById("fillType")
    let setFill = fill.options[fill.selectedIndex].value
    if(setFill==="fillUn"){
        for(let i of myTableEl.rows){
            for(let j of i.cells){
                if(j.hasAttribute("bgcolor")===false){
                    j.setAttribute("bgcolor", setClr)
                }
            }
        } 
    }
    else if(setFill==="fillAll"){
        for(let i of myTableEl.rows){
            for(let j of i.cells){
                j.setAttribute("bgcolor", setClr)
            }
        }
    }

    
}


//clears all the cells
function clearAll() {
    for (let i = 0; eachRow = row[i]; i++) {
        for (let j = 0; eachCol = eachRow.cells[j]; j++) {
            eachCol.removeAttribute("bgcolor")
            eachRow.removeAttribute("bgcolor")
        }
    }
    tbdy.removeAttribute("bgcolor")
}


let isClicked= false
myTableEl.addEventListener("mousedown", (ev) => { 
  isClicked = true 
})
myTableEl.addEventListener("mousemove", (ev) => {
  if (isClicked) {
    let clr = document.getElementById("clrSelection")
    let setClr = clr.options[clr.selectedIndex].value
    ev.target.setAttribute("bgcolor", setClr)
  }
})
myTableEl.addEventListener("mouseup", (ev) => {
  if (isClicked) {
    isClicked = false
  }
})







