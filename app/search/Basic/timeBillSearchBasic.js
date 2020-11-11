"use strict";

const SearchBasic = require("./common/searchBasic");

class TimeBillSearchBasic extends SearchBasic {

    constructor() {
        super();
        this._type = "platformCommon";
        this._name = "TimeBillSearchBasic";
    }
}

module.exports = TimeBillSearchBasic;
