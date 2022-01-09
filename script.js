let myTableEl = document.getElementById("myTable")
let row = myTableEl.rows

function createRow() {
    let addRow = myTableEl.insertRow(0)
    let cell = addRow.insertCell(0)
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