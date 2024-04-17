import Joi from "joi";

/**
 * This is Create User validation Schema - validates the following fields :
 * - hospital (string) : required
 * - bloodType (string) : required
 * - patientStatus (string) : required
 * - quantity (Number) : minimum 10   ---------------------> required  
 */
export const bloodRequestSchema = Joi.object({
    hospital: Joi.string().required(),
    bloodType: Joi.string().required(),
    patientStatus: Joi.string().required(),
    quantity: Joi.number().min(10).required()
});