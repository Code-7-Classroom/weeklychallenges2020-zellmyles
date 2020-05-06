let express = require('express')

let app = express()

let data = require('./employees.json')

app.use(express.json());

const port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})

app.get('/employees', (req,res) => {

    if(!data){
        res.status(404).send(`Couldn't find the employee`)
    }

    res.send(data)

})

app.get('/employees/:id', (req,res) => {

    const employeeData = data.employees.find(function(employee){
        console.log(employee.id)

        return parseInt(req.params.id) === employee.id
    })

    if(!employeeData){
        res.status(404).send(`Couldn't find the employee id`)
    }

    res.send(employeeData)

})

app.post('/api/employees', (req,res) => {
    if(!req.body.name){
        res.status(400).send('Name is required')
        return;
    }

    const employee = {
        id: data.length + 1,
        name: req.body.name
    }
    employees.push(employee);
    res.send(employee);
})

app.put('/api/employees/:id', (req, res) => {
    const employeeData = data.employees.find(function(employee){        // Look up the employee
        console.log(employee.id)                                        // If not existing return 404

        return parseInt(req.params.id) === employee.id
    })

    if(!employeeData){
        res.status(404).send(`Couldn't find the employee id`)
    }


    if(!req.body.name){                                                 // Validate
        res.status(400).send('Name is required')                        // If invalid, return 400 - Bad Request
        return;
    }

    employeeData.name = req.body.name;                                      // Update course
    res.send(employee.data)                                                  // Return updated course
})

app.delete('/api/employees/:id', (req, res) => {
    const employeeData = data.employees.find(function(employee){        // Look up the employee
        console.log(employee.id)                                        // If not existing return 404

        return parseInt(req.params.id) === employee.id
    })

    if(!employeeData){
        res.status(404).send(`Couldn't find the employee id`)
    }

    const index = data.indexOf(employee);                                 // Delete
    employees.splice(index, 1);

    res.send(employee)                                                    // Return
})