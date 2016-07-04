import db from '../Infrastructure/db/default.js'
import config from "../../../config.js"
import Featurebase from "./base.js"

import pw from '../Infrastructure/pw.js'
import collections from '../db/collections.js'

export default new class extends Featurebase {

  async GetUser(username, ignoreInactive) {
    await this.connect();

    let user = await db.mongo.findOne(this.db, collections.Users, {
      "name": username
    });

    if (!user)
      return false;

    if (user.deleted)
      return false;

    if (!user.active && !ignoreInactive)
      return false;

    return user;
  }

  async Register(username, options) {
    await this.connect();

    let existingUser = await this.GetUser(username, true);

    console.log(existingUser);

    if (existingUser)
      return false;

    let hasehdPw = pw.GetPwHash(options.password);

    console.log(hasehdPw);

    var res = await db.mongo.insert(this.db, collections.Users, {
      "name": username,
      password: hasehdPw,
      active: true
    });

    console.log(res);

  }

}
