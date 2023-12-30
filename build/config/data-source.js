"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
require("reflect-metadata");
var typeorm_1 = require("typeorm");
var Activity_1 = require("../entity/Activity");
var General_1 = require("../entity/General");
var Staff_1 = require("../entity/Staff");
var HealthRecord_1 = require("../entity/HealthRecord");
var Service_1 = require("../entity/Service");
var Appointment_1 = require("../entity/Appointment");
var Feedback_1 = require("../entity/Feedback");
var Notification_1 = require("../entity/Notification");
var EmergencyResponse_1 = require("../entity/EmergencyResponse");
exports.AppDataSource = new typeorm_1.DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "123456",
    database: "old",
    synchronize: true,
    // logging: true,
    entities: [Activity_1.Activity, General_1.General, Staff_1.Staff, HealthRecord_1.HealthRecord, Service_1.Service, Appointment_1.Appointment, Feedback_1.Feedback, Notification_1.Notification, EmergencyResponse_1.EmergencyResponse],
    migrations: [],
    subscribers: [],
    poolSize: 10,
    connectorPackage: "mysql2",
    extra: {
    // authPlugin: "sha256_password",
    },
});
//# sourceMappingURL=data-source.js.map