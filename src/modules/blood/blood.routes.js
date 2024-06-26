import express from "express";
import { protectedRoutes } from "../auth/auth.controller.js";
import * as bloodControllers from "./blood.controller.js";
// import {
//     createUserSchema,
//     deleteUserSchema,
//     getUserByIdSchema,
//     updateUserSchema,
// } from "./user.validator.js";
const BloodRouter = express.Router();
/**
 * @swagger
 * components:
 *   schemas:
 *   User:
 *
 * '/User':
 *  post:
 *     tags:
 *     - User-controller
 *     summary: Create a User using Token
 *     parameters:
 *         - in: header
 *           name: token
 *           required: true
 *           description: User-token from meetus vr database
 *           schema:
 *             type: string
 *             example: e80822b2-da36-4009-8ed1-211cb57f37a3
 *     responses:
 *      200:
 *        description: Success
 *        content:
 *         application/json:
 *            example:
 *                "message": "Success"
 *                "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiVHNlcHBhcyBVc2VyIiwiZW1haWwiOiJhZG1pbkBtZWV0dXN2ci5jb20iLCJ1c2VySWQiOiI2NWExYTlmZDJmNTgwZTljZjhmMzAzYmQiLCJvcmdhbml6YXRpb25faWQiOiIyIiwiaXNBZ2VudCI6dHJ1ZSwiaWF0IjoxNzA1MDkzOTkwfQ.Qn0aPYLozlE9CA8ElGiHGWVrd7shJpOCW-PryeOet_E"
 *      401:
 *        description: Unauthorized --> (Expired token)
 *        content:
 *         application/json:
 *            example:
 *                "error": "Unauthorized"
 */
BloodRouter.route("/")
    .post(protectedRoutes, bloodControllers.addBlood)
    .get(bloodControllers.getAllBlood);

// BloodRouter.route("/:id")
// .get(validation(getUserByIdSchema), userControllers.getUserById)
// .put(validation(updateUserSchema), userControllers.updateUser)
// .delete(validation(deleteUserSchema), userControllers.deleteUser);

// BloodRouter.route("/changePassword/:id").patch(userControllers.changePassword);
export default BloodRouter;
