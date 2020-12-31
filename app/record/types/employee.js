"use strict";

const Record = require("./common/record");

class Employee extends Record {

    constructor() {
        super();
        this._type = "listRel";
        this._name = "Employee";
    }
}

module.exports = Employee;
