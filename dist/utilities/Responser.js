"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const moment_1 = __importDefault(require("moment"));
const gradient_string_1 = __importDefault(require("gradient-string"));
const current = (0, moment_1.default)().format("YYYY/MMMM/DD hh:mm:ss A");
const Responser = ({ res, status, body, message, devMessage }) => {
    var success, log, dataBody;
    if (status >= 200 && status <= 300) {
        success = true;
        log =
            (0, gradient_string_1.default)("green", "green")("[ SUCCESS ] ") +
                (0, gradient_string_1.default)("green", "white")(`${devMessage}\n${message}\nTime: ${current}`);
        if (body && body !== null) {
            dataBody = body;
        }
        else {
            dataBody = null;
        }
    }
    else if (status >= 400 && status < 500) {
        success = false;
        log =
            (0, gradient_string_1.default)("yellow", "white")("[ CLIENT ERROR ] ") +
                (0, gradient_string_1.default)("yellow", "white")(`${devMessage}\n${message}\nTime: ${current}`);
        dataBody = null;
    }
    else {
        success = false;
        log =
            (0, gradient_string_1.default)("red", "white")("[ SERVER ERROR ] ") +
                (0, gradient_string_1.default)("red", "white")(`${devMessage}\n${message}\nTime: ${current}`);
        dataBody = null;
    }
    var dataModel = {
        meta: {
            success: success,
            message: message,
            devMessage: devMessage,
        },
        body: dataBody,
    };
    console.log(`${log}`);
    return res.status(status).json(dataModel);
};
exports.default = Responser;
//# sourceMappingURL=Responser.js.map