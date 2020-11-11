"use strict";

const Line = require("./common/line");

class TimeBill extends Line {

    constructor() {
        super();
        this._type = "tranEmp";
        this._name = "TimeBill";
        this._listName = "timeBill";
    }
}

module.exports = TimeBill;
