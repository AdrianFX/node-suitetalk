"use strict";

const Record = require("./common/record");

class TimeBill extends Record {

    constructor() {
        super();
        this._type = "tranEmp";
        this._name = "TimeBill";
    }
}

module.exports = TimeBill;
