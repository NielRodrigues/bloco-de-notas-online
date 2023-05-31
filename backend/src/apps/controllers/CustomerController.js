import Customer from "../models/Customer";

class CustomerController {
  async index(request, response) {
    const customers = await Customer.findAll({ order: ["id"] });

    return response.json(customers);
  }

  async show(request, response) {
    const { id } = request.params;

    const customer = await Customer.findByPk(id);

    if (!customer) {
      return response.status(404).json({ message: "Customer not found!" });
    }

    return response.status(200).json(customer);
  }

  // async create(request, response) {
  //   const { name, email, situacao } = request.query;

  //   const newCustomer = await Customer.create({
  //     name,
  //     email,
  //     situacao,
  //   });

  //   return response.status(201).json(newCustomer);
  // }

  async create(request, response) {
    try {
      const newCustomer = await Customer.create(request.body);

      return response.status(201).json(newCustomer);
    } catch {
      return response
        .status(400)
        .json({ message: "Error to create customer." });
    }
  }

  async update(request, response) {
    const { id } = request.params;

    await Customer.update(request.body, {
      where: { id },
    });

    return response
      .status(200)
      .json({ message: `Customer ${id} was updated.` });
  }

  async delete(request, response) {
    const { id } = request.params;

    await Customer.destroy({ where: { id } });

    return response
      .status(200)
      .json({ message: `Customer ${id} was deleted.` });
  }
}

export default new CustomerController();
