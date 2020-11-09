"use strict";

const SearchBasic = require("./common/searchBasic");

class EmployeeSearchBasic extends SearchBasic {

    constructor() {
        super();
        this._type = "platformCommon";
        this._name = "EmployeeSearchBasic";
    }
}

module.exports = EmployeeSearchBasic;
