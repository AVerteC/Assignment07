// CREATE AN ARRAY OF EMPLOYEES
employees = [
    // ID#, name str, 4 digit#, email str, department str
    [21324114, "Mary Jane", 3773, "maryja@bebcorp.com", "Administrative"],
    [32489432, "Dan Daniels", 3642, "danda@bebcorp.com", "Engineering"],
    [34905853, "Frank Jackson", 3532, "frankja@bebcorp.com", "Marketing"],
    [43898932, "Karen Adams", 8263, "karenad@bebcorp.com", "Quality Assurance"],
    [90389093, "John Doe", 9274, "johndo@bebcorp.com", "Executive"]
]

// CHECK TO SEE IF STORAGE OBJECT EXISTS WHEN THE PAGE LOADS
// IF DOES, RETURN STORAGE OBJECT INTO ARRAY INSTEAD OF POPULATED ARRAY
let storage = localStorage.getItem('employees') || ''
if (storage.length > 0) {
    employees = JSON.parse(localStorage.getItem('employees')) 
}

// GET DOM ELEMENTS
const $ = id => document.getElementById(id)
empTable = $("empTable")
// BUILD THE EMPLOYEES TABLE WHEN THE PAGE LOADS
buildGrid()

// ADD EMPLOYEE
let form = $(addForm) 
form.addEventListener('submit', (e) => {
    // PREVENT FORM SUBMISSION
    e.preventDefault()
    // GET THE VALUES FROM THE TEXT BOXES

    // ADD THE NEW EMPLOYEE TO A NEW ARRAY OBJECT

    // PUSH THE NEW ARRAY TO THE *EXISTING* EMPLOYEES ARRAY

    // BUILD THE GRID

    // RESET THE FORM

    // SET FOCUS BACK TO THE ID TEXT BOX

});

// DELETE EMPLOYEE
empTable.addEventListener('click', (e) => {
    // CONFIRM THE DELETE

        // GET THE SELECTED ROWINDEX FOR THE TR (PARENTNODE.PARENTNODE)

        // REMOVE EMPLOYEE FROM ARRAY

        // BUILD THE GRID

});

// BUILD THE EMPLOYEES GRID
function buildGrid() {
    empTable = $("empTable")
    // REMOVE THE EXISTING SET OF ROWS BY REMOVING THE ENTIRE TBODY SECTION
    empTable.tBodies[0].remove()
    // REBUILD THE TBODY FROM SCRATCH
    newTbody = document.createElement('tbody')
    
    // LOOP THROUGH THE ARRAY OF EMPLOYEES
    // REBUILDING THE ROW STRUCTURE
    employeeCount = 0
    let tableContents = ""
    for (let item of employees) {
        let tr = document.createElement('tr')
        // Indices of values
        let id = 0
        let name = 1
        let ext = 2
        let email = 3
        let dept = 4
        // Create delete buttons
        let buttonString = "<button type='button' class='btn btn-danger' style='color:black;'>X</button>"
        let rowString = `<td>${item[id]}</td><td>${item[name]}</td><td>${item[ext]}</td><td>${item[email]}</td><td>${item[dept]}</td>${buttonString}`
        

        tr.innerHTML = rowString
        newTbody.appendChild(tr)
        employeeCount += 1
    }
    // BIND THE TBODY TO THE EMPLOYEE TABLE
    empTable.appendChild(newTbody)
    // UPDATE EMPLOYEE COUNT
    $("empCount").innerText = employeeCount
    // STORE THE ARRAY IN STORAGE
    localStorage.setItem('employees', JSON.stringify(employees))
};