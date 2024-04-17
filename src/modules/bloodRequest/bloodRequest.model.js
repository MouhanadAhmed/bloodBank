import { Schema, model, Types } from "mongoose";

const bloodRequestSchema = new Schema(
    {
        hospital: {
            type: Types.ObjectId,
            ref: "Hospital",
        },
        bloodType: { type: "String" },
        patientStatus: { type: "String" },
        quantity: { type: "Number" },
    },
    { timestamps: true },
);

export const bloodRequestModel = model("BloodRequest", bloodRequestSchema);
