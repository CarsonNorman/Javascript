const express = require('express')
const app = express();
const port = 8000;
app.listen(port, () =>{
    console.log(`listening on port ${port}`)
})
app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );

const { faker } = require('@faker-js/faker')


const users = []
const companies = []
const createUser = () => {
    const newUser = {
        id: users.length + 1,
        name: faker.name.fullName(),
        password: faker.internet.password(),
        email: faker.internet.email(),
        phoneNumber: faker.phone.number(),
    }
    return newUser
}
const createCompany = () => {
    const newCompany = {
        id: companies.length + 1,
        name: faker.company.name(),
        address: {
            street: faker.address.street(),
            city: faker.address.city(),
            state: faker.address.state(),
            zipCode: faker.address.zipCode(),
            country: faker.address.country()
        }
    }
    return newCompany
}
app.get('/' , (req, res) =>{
    res.json('This is working')
}
)
app.get("/api/users/new", (req, res) => {
    newUser = createUser()
    users.push(newUser)
    res.json(newUser)
});
app.get("/api/companies/new", (req, res) => {
    newCompany = createCompany()
    companies.push(newCompany)
    res.json(newCompany)
});
app.get("/api/user/company", (req, res) => {
    newCompany = createCompany()
    newUser = createUser()
    companies.push(newCompany)
    users.push(newUser)
    data = {
        company: newCompany,
        user: newUser
    }
    res.json(data)
});

console.log(users)