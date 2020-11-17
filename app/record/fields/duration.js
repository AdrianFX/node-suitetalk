"use strict";

const BaseObject = require("../../baseObject");

class Duration extends BaseObject {

    constructor() {
        super();
        this.type = "duration";
        this.timeSpan = undefined;
        this.unit = "hour";
        this.field = undefined;
    }

    _getSoapType() {
        return `${this._type}:${this.field}`;
    }

    _getAttributes() {

        const attr = {
            "timeSpan": this.timeSpan,
            "unit": this.unit,
            "type": this.type,
            "xsi:type": "platformCore:Duration",
        };

        if (!this.timeSpan) {
            delete attr.timespan;
        }

        if (!this.unit) {
            delete attr.unit;
        }

        if (!this.type) {
            delete attr.type;
        }

//        return attr;
        return "";
    }

    getNode() {

        if (!this.timeSpan || !this.unit) {
            throw new Error("TimeSpan or Unit are not defined");
        }

        const attributes = this._getAttributes();
        const type = this._getSoapType();

        if (!type) {
            throw new Error(`Invalid SOAP type ${type}`);
        }

        const node = {};

        node[type] = {};

        if (attributes) {
//            node[type]["$attributes"] = attributes;
        }
            node[type]["timeSpan"] = this.timeSpan;
            node[type]["unit"] = this.unit;

        return node;
    }
}

module.exports = Duration;
