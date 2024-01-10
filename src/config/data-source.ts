import "reflect-metadata";
import { DataSource } from "typeorm";
import { Activity } from "../entity/Activity";
import { General } from "../entity/General";
import { Staff } from "../entity/Staff";
import { HealthRecord } from "../entity/HealthRecord";
import { AppointmentService } from "../entity/AppointmentService";
import { Feedback } from "../entity/Feedback";
import { Notification } from "../entity/Notification";
import { EmergencyResponse } from "../entity/EmergencyResponse";
import { User } from "../entity/User";
import { ActivityGeneral } from "../entity/ActivityGeneral";

export const AppDataSource = new DataSource({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "root",
  password: "123456",
  database: "old",
  synchronize: true,
  //logging: true,
  entities: [ActivityGeneral, Activity, General, Staff,HealthRecord,AppointmentService,Feedback,Notification,EmergencyResponse,User],
  migrations: [],
  subscribers: [],
  poolSize: 10,
  connectorPackage: "mysql2",
  extra: {
    // authPlugin: "sha256_password",
  },
});
