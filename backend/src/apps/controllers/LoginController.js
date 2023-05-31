// eslint-disable-next-line import/no-extraneous-dependencies
import bcrypt from "bcryptjs";
import User from "../models/User";

class LoginController {
  async index(request, response) {
    const { email, password, password_hash } = request.body;
    const users = await User.findAll({ order: ["id"] });

    if (email && (await users.map((user) => user.email).includes(email))) {
      const user = users.filter((item) => item.email === email)[0];

      if (password && (await bcrypt.compare(password, user.password_hash))) {
        return response.status(200).json(user);
      }

      if (password_hash && user.password_hash === password_hash) {
        return response.status(200).json(user);
      }

      return response.status(400).json({ message: "Password is wrong." });
    }

    return response.status(404).json({ message: "User not found." });
  }
}

export default new LoginController();
