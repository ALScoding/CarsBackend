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
var app_1 = require("../app");
var typeorm_1 = require("typeorm");
var request = require("supertest");
var emails_service_1 = require("../_services/emails.service");
var CarRepository_1 = require("../src/repository/CarRepository");
// test is working as expected
describe('Self-send an email message with and without /emails', function () {
    var result;
    var connection;
    var carRepo;
    var foundCar;
    var newEmail;
    var carMessage;
    var service = 'gmail';
    var user = 'als';
    var emptypass = '';
    var sender = user + '@' + service + '.com';
    var receiver = sender;
    beforeAll(function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, typeorm_1.createConnection()
                    // Searches the car in the database
                ];
                case 1:
                    connection = _a.sent();
                    // Searches the car in the database
                    carRepo = new CarRepository_1.CarRepository();
                    return [4 /*yield*/, carRepo.findByUserId(24)
                        // create test message for email
                    ];
                case 2:
                    // user Id 24 for testing
                    foundCar = _a.sent();
                    // create test message for email
                    carMessage = foundCar.lease + ', ' + foundCar.seats + ', ' + foundCar.year + ', ' + foundCar.make + ', ' + foundCar.model + ', ' + foundCar.trim + ', ' + foundCar.specs;
                    return [2 /*return*/];
            }
        });
    }); });
    afterAll(function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, connection.close()];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    test('Find car that belongs to user but do not provide email password', function (done) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, emails_service_1.sendgmail(service, user, emptypass, sender, receiver, carMessage)];
                case 1:
                    newEmail = _a.sent();
                    expect(newEmail).toEqual('Email cannot be sent');
                    done();
                    return [2 /*return*/];
            }
        });
    }); });
    test('Find car that belongs to user then email', function (done) { return __awaiter(void 0, void 0, void 0, function () {
        var password;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    password = 'myPassword999';
                    return [4 /*yield*/, emails_service_1.sendgmail(service, user, password, sender, receiver, carMessage)];
                case 1:
                    newEmail = _a.sent();
                    expect(newEmail).toEqual('Email info validated');
                    done();
                    return [2 /*return*/];
            }
        });
    }); });
    test('Find car that belongs to user then email via /emails', function (done) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, request(app_1.default).post('/emails').send({
                        service: 'gmail',
                        user: 'als',
                        password: 'secretPassword',
                        sender: 'als@gmail.com',
                        receiver: 'als@gmail.com',
                        userId: 24
                    })];
                case 1:
                    result = _a.sent();
                    expect(result.text).toEqual('Email event has been logged');
                    expect(result.status).toEqual(200);
                    done();
                    return [2 /*return*/];
            }
        });
    }); });
});
//# sourceMappingURL=email.test.js.map