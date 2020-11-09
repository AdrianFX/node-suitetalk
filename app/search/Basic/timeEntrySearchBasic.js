"use strict";

const SearchBasic = require("./common/searchBasic");

class timeEntrySearchBasic extends SearchBasic {

    constructor() {
        super();
        this._type = "platformCommon";
        this._name = "TimeEntrySearchBasic";
    }
}

module.exports = TimeEntrySearchBasic;
