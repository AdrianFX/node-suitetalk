"use strict";

const Line = require("./common/line");

class TimeEntry extends Line {

    constructor() {
        super();
        this._type = "tranEmp";
        this._name = "TimeEntry";
        this._listName = "timeEntry";
    }
}

module.exports = TimeEntry;
