import User from "../models/User";

class UserConbtroller {
  async index(request, response) {
    const users = await User.findAll({ order: ["id"] });

    return response.status(200).json(users);
  }

  async show(request, response) {
    const { id } = request.params;
    const user = await User.findByPk(id);

    return response.status(200).json(user);
  }

  async create(request, response) {
    const { email } = request.body;
    const users = (await User.findAll()).map((user) => user.email);

    if (users.includes(email)) {
      return response
        .status(400)
        .json({ message: "This email was been sign up." });
    }

    const user = await User.create(request.body);
    return response.status(200).json(user);
  }

  async update(request, response) {
    const { id } = request.params;

     try {
        await User.update(request.body, {
          where: { id },
        });

        return response.status(200).json({ message: "User was been updated." });
     } catch (error) {
        response.status(400).json({ error });
     }
  }

  async delete(request, response) {
    const { id } = request.params;

    await User.destroy({ where: { id } });

    return response.status(200).json({ message: "User was been deleted." });
  }
}

export default new UserConbtroller();
