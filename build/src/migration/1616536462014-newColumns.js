"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var newColumns1616536462014 = /** @class */ (function () {
    function newColumns1616536462014() {
        this.name = 'newColumns1616536462014';
    }
    newColumns1616536462014.prototype.up = function (queryRunner) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, queryRunner.query('CREATE TABLE  "user " ( "id " SERIAL NOT NULL,  "email " character varying NOT NULL,  "password " character varying NOT NULL,  "firstName " character varying NOT NULL,  "lastName " character varying NOT NULL,  "license " integer NOT NULL, CONSTRAINT  "PK_cace4a159ff9f2512dd42373760 " PRIMARY KEY ( "id "))')];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query('CREATE TABLE  "car " ( "id " SERIAL NOT NULL,  "lease " boolean NOT NULL,  "seats " integer NOT NULL,  "year " integer NOT NULL,  "make " character varying NOT NULL,  "model " character varying NOT NULL,  "trim " character varying NOT NULL,  "specs " character varying NOT NULL,  "userId " integer, CONSTRAINT  "PK_55bbdeb14e0b1d7ab417d11ee6d " PRIMARY KEY ( "id "))')];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query('ALTER TABLE  "car " ADD CONSTRAINT  "FK_a4f3cb1b950608959ba75e8df36 " FOREIGN KEY ( "userId ") REFERENCES  "user "( "id ") ON DELETE NO ACTION ON UPDATE NO ACTION')];
                    case 3:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    newColumns1616536462014.prototype.down = function (queryRunner) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, queryRunner.query('ALTER TABLE  "car " DROP CONSTRAINT  "FK_a4f3cb1b950608959ba75e8df36 "')];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query('DROP TABLE  "car "')];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query('DROP TABLE  "user "')];
                    case 3:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return newColumns1616536462014;
}());
exports.newColumns1616536462014 = newColumns1616536462014;
//# sourceMappingURL=1616536462014-newColumns.js.map