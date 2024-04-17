import { addOne, getAll } from "../../utils/handlers/refactor.js";
import { bloodRequestModel } from "./bloodRequest.model.js";

export const addBloodRequest = addOne(bloodRequestModel, "BloodRequest");

export const getAllBloodRequests = getAll(bloodRequestModel, "BloodRequest");
