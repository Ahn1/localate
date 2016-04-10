import {
    uid
} from 'rand-token'
import winston from 'winston';

import mongo from '../db/mongo.js'

import config from "../../../config.js"

import users from "./users.js"
import Featurebase from "./base.js"


require('datejs')

export default new class Auth extends Featurebase {

    async Login(username, password) {

        winston.debug(`Try to login "${username}"`)

        await this.connect();

        var user = await users.GetUser(username);

        if (!user) {
            winston.debug(`Login failed. User not found`)
            return false;
        }

        let token = uid(35).toString();
        await mongo.insert(this.db, "auth", {
            "username": username,
            token,
            expireAt: new Date().addMonths(12)
        });

        winston.debug(`Got a token and logged in. ${token}`)

        return token;
    }
}
