class Service {
  constructor() {
    this.data = [{ id: "AEI123", xa: 2000, ya: 3500, za: 600 }];
  }

  async create(vuelo) {
    const index = this.data.findIndex((f) => f.id === vuelo.id);
    if (index !== -1) {
      this.data[index] = vuelo;
      return this.data[index];
    }

    this.data.push(vuelo);
    return vuelo;
  }

  async getAll() {
    return this.data;
  }

  async getById(id) {
    return this.data.find((f) => f.id === id);
  }
}
const vueloService = new Service();
export default vueloService;