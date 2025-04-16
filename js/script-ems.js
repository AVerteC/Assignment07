// CREATE AN ARRAY OF EMPLOYEES
let employees = [
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
let form = $("addForm") 
form.addEventListener('submit', (e) => {
    addEmployee(e, employees)
    function addEmployee(e, employees) {
        // PREVENT FORM SUBMISSION
        e.preventDefault()
        // GET THE VALUES FROM THE TEXT BOXES
        let id = $('id').value;
        let name = $('name').value;
        let extension = $('extension').value;
        let department = $('department').value;
        let email = $('email').value;
        // ADD THE NEW EMPLOYEE TO A NEW ARRAY OBJECT
        let newEmployee = [id, name, extension, email, department]
        // PUSH THE NEW ARRAY TO THE *EXISTING* EMPLOYEES ARRAY
        employees.push(newEmployee)
        // BUILD THE GRID
        buildGrid()
        // RESET THE FORM
        form.reset()
        // SET FOCUS BACK TO THE ID TEXT BOX
        $('id').focus()
    }
});

// DELETE EMPLOYEE
empTable.addEventListener('click', (e) => {
    deleteEmployee(e,employees)
    function deleteEmployee(e, employees) {
        if (e.target.tagName === "BUTTON") {
            // CONFIRM THE DELETE
            if (confirm("Are you sure you want to delete this employee?")) {
                // GET THE SELECTED ROWINDEX FOR THE TR (PARENTNODE)
                let row = e.target.parentNode
                // console.log(row)  // Current row of click event
                // console.log(row.parentNode) // The entire table
                
                // Row index starts at 1 in HTML
                let index = row.rowIndex - 1        
                employees.splice(index, 1)
                // BUILD THE GRID 
                buildGrid()
            }
        }
    }
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
    employeeCount = employees.length
    let tableContents = ""
    for (let item of employees) {
        let tr = document.createElement('tr')
        // Indices of values
        let id = item[0]
        let name = item[1]
        let ext = item[2]
        let email = item[3]
        let dept = item[4]
        // Create delete button HTML
        let button = "<button type='button' class='btn btn-danger' style='color:black;'>X</button>"
        // Create row HTML
        let rowString = `<td>${id}</td><td>${name}</td><td>${ext}</td><td>${email}</td><td>${dept}</td>${button}`
        
        // Set HTML of table row
        tr.innerHTML = rowString
        // Add row to table
        newTbody.appendChild(tr)
    }
    // BIND THE TBODY TO THE EMPLOYEE TABLE
    empTable.appendChild(newTbody)
    // UPDATE EMPLOYEE COUNT
    $("empCount").innerText = employeeCount
    // STORE THE ARRAY IN STORAGE
    localStorage.setItem('employees', JSON.stringify(employees))
};