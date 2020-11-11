"use strict";

const List = require("./common/list");

class TimeEntryList extends List {

    constructor() {
        super();
        this._type = "tranEmp";
        this._name = "TimeEntryList";
        this._listName = "timeEntryList";
    }
}

module.exports = TimeEntryList;
