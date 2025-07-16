import serviceVuelo from "../services/Services.js";

const detectarColision = (req, res, next) => {
  const { id, xa, ya, za } = req.body;

  function calcularDistancia(v1, v2) {
    return Math.sqrt(
      Math.pow(v1.xa - v2.xa, 2) +
      Math.pow(v1.ya - v2.ya, 2) +
      Math.pow(v1.za - v2.za, 2)
    );
  }

  const vueloActual = { id, xa, ya, za };
  const otrosVuelos = serviceVuelo.data.filter(f => f.id !== id);

  if (otrosVuelos.length === 0) {
    return next();
  }

  const hayColision = otrosVuelos.some(
    vuelo => calcularDistancia(vuelo, vueloActual) < 500
  );

  if (hayColision) {
    return res.status(409).json({
      errorMsg: "COLISIÓN detectada con otro vuelo"
    });
  }

  next();
};

export default detectarColision;
