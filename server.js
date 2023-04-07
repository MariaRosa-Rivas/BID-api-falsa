const { faker } = require('@faker-js/faker');

const express = require("express");
const app = express();
const port = 8000;


class users {
    constructor() {
        this._id = faker.datatype.uuid();
        this.name = faker.internet.userName();
        this.lastName = faker.name.fullName();
        this.email = faker.internet.email();
        this.password = faker.internet.password();
        this.phone = faker.phone.number();
    }
}
console.log(new users());

app.get("/api/users/new", (req, res) => {
    res.json(users);
});
    class companies {
        constructor() {
            this._id = faker.datatype.uuid();
            this.name = faker.company.name();
            this.address =faker.address.direction(
                [
                    this.calle = faker.address.street(),
                    this.city = faker.address.city(),
                    this.estado = faker.address.state(),
                    this.CodigoPostal = faker.address.zipCode(),
                    this.pais = faker.address.country(),
                ]
            );
        }
    }
console.log(new companies());


app.get("/api/companies/new", (req, res) => {
    res.json(companies);
});

app.get("/api/user/company", (req, res) => {
    res.json( users, companies);
});


app.listen( port, () => console.log(`Listening on port: ${port}`) );