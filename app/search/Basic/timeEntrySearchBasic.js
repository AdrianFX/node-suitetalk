"use strict";

const SearchBasic = require("./common/searchBasic");

class TimeEntrySearchBasic extends SearchBasic {

    constructor() {
        super();
        this._type = "platformCommon";
        this._name = "TimeEntrySearchBasic";
    }
}

module.exports = TimeEntrySearchBasic;
