"use strict";

const BaseObject = require("../../baseObject");
const Field = require("./common/field");

class Duration extends BaseObject {

    constructor() {
        super();
        this.field = undefined;
        this.timeSpan = undefined;
        this._fieldType = "number";
    }

    _getSoapType() {
        return `${this._type}:${this.field}`;
    }

    _getAttributes() {

        const attr = {
            "type": "duration",
            "xsi:type": "platformCore:Duration",
        };

        return attr;
    }

    getNode() {

        if (!this.field) {
            throw new Error("Field name not defined");
        }

        if (typeof this.timeSpan !== this._fieldType) {
            throw new Error(`Invalid type value ${typeof this.value} for field ${this.field}`);
        }

        const attributes = this._getAttributes();
        const type = this._getSoapType();

        if (!type) {
            throw new Error(`Invalid SOAP type ${type}`);
        }

        const node = {};

        node[type] = {};

        if (attributes) {
            node[type]["$attributes"] = attributes;
        }

        const unit = new Field();
        unit.field = "unit";
        unit.value = "hour";

        node[type]["timeSpan"] = this.timeSpan;
        node[type]["unit"] = unit;

        return node;
    }
}

module.exports = Duration;
