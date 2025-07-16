const esVueloValido = (id) => {
  if (typeof id !== "string" || id.length !== 6) return false;

  const letras = id.slice(0, 3);
  const numeros = id.slice(3);

  if (![...letras].every(c => c >= "A" && c <= "Z")) return false;
  if (![...numeros].every(c => c >= "0" && c <= "9")) return false;

  return true;
};

const validarVuelo = (req, res, next) => {
  const { id, xa, ya, za } = req.body;
  if (!esVueloValido(id) || [xa, ya, za].some(cord => typeof cord !== "number")) {
    return res.status(400).json({ errorMsg: "datos no válidos" });
  }
  next();
};

export default validarVuelo;
