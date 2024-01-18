import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Staff } from "./Staff";
import { EmergencyResponse } from "./EmergencyResponse";
import { emergencyResponseRoutes } from "../router/emergencyResponse";

@Entity()
export class StaffEmergency{
    @PrimaryGeneratedColumn({
        comment: '主键：id'
    })
    id: number;

    @ManyToOne(() => Staff, staff => staff.staffEmergency,{
        cascade:true
    })
    staff: Staff;

    @ManyToOne(()=>EmergencyResponse,emergencyResponse=>emergencyResponse.staffEmergency,{
        cascade:true
    })
    emergencyResponse: EmergencyResponse;

    
    constructor(obj?: any) {
        if (obj) {
            Object.assign(this, obj);
        }
    }
 

}