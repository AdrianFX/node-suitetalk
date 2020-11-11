"use strict";

const BaseObject = require("../../baseObject");

class Duration extends BaseObject {

    constructor() {
        super();
        this.field = undefined;
        this.timeSpan = undefined;
        this.unit = "hour";
        this._fieldType = "number";
        this._type = "platformCore";
    }

    _getSoapType() {
        return `${this._type}:${this.field}`;
    }

    _getAttributes() {
        return "";
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

        const subNode = {};
        const subField = "durationUnit";
        const subType = `${this._type}:${subField}`;
        subNode[subType] = {};
        subNode[subType]["$value"] = this.unit;

        node[type]["$timeSpan"] = this.timeSpan;
        node[type]["$unit"] = subNode;

        return node;
    }
}

module.exports = Duration;
