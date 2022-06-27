import * as mongoose from "mongoose";

import {User} from "./user.interface";

export const UserSchema = new mongoose.Schema<User>(
  {
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true, select: false},
    failedLoginAttempts: {type: Number, default: 0},
    disableReason: {type: String, default: ""},
    role: {type: String, default: "User"},
    uuid: {type: String, require: false, unique: true},
    metamaskAccountPublicKey:[{}]
    passwordResetToken: String,
    passwordResetExpires: Date,
    isActive: {type: Boolean, default: false},
    activationToken: String,
    activationExpires: Date,
  },
  {timestamps: true},
);

/**
 * Methods.
 */
UserSchema.methods.getPublicData = function () {
  const {id, email, isActive} = this;
  return {id, email, isActive};
};
