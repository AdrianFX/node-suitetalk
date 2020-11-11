"use strict";

const Record = require("./common/record");

class TimeEntry extends Record {

    constructor() {
        super();
        this._type = "tranEmp";
        this._name = "TimeEntry";
    }
}

module.exports = TimeEntry;
