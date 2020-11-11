"use strict";

const List = require("./common/list");

class TimeBillList extends List {

    constructor() {
        super();
        this._type = "tranEmp";
        this._name = "TimeBillList";
        this._listName = "timeBillList";
    }
}

module.exports = TimeBillList;
