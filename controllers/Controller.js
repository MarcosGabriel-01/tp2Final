class Controller {
  constructor(service) {
    this.service = service;
  }

  getAll = async (req, res) => {
    try {
      const vuelos = await this.service.getAll();
      res.status(200).json(vuelos);
    } catch {
      res.status(500).json({ errorMsg: "Error interno" });
    }
  };

  getById = async (req, res) => {
    try {
      const { id } = req.params;
      const vuelo = await this.service.getById(id);
      if (!vuelo)
        return res.status(404).json({ errorMsg: "Vuelo no encontrado" });
      res.status(200).json(vuelo);
    } catch {
      res.status(500).json({ errorMsg: "Error interno" });
    }
  };

  create = async (req, res) => {
    try {
      const { id, xa, ya, za } = req.body;
      await this.service.create({ id, xa, ya, za });

      res.status(201).json({
        message: "Vuelo registrado correctamente",
      });
    } catch (error) {
      res.status(400).json({
        errorMsg: error.message,
      });
    }
  };
}

export default Controller;
