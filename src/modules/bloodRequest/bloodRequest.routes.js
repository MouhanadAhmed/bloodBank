import express from "express";
import { protectedRoutes } from "../auth/auth.controller.js";
import { validation } from "../../utils/middleware/validation.js";
import * as bloodRequestController from "./bloodRequest.controller.js";
import { bloodRequestSchema } from "./bloodRequest.validator.js";

const BloodRequestRouter = express.Router();

BloodRequestRouter.route("/")
    .post(validation(bloodRequestSchema), bloodRequestController.addBloodRequest)
    .get(protectedRoutes, bloodRequestController.getAllBloodRequests);

export default BloodRequestRouter;
