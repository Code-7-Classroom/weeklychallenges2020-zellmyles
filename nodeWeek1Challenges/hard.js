let express = require('express')

let app = express()

let data = require('./employees.json')

const port = process.env.PORT || 4000;

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

    const sData = data.employees.find(function(employee){
        console.log(employee.id)

        return parseInt(req.params.id) === employee.id
    })

    if(!sData){
        res.status(404).send(`Couldn't find the employee id`)
    }

    res.send(sData)

})