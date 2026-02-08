import jwt from "jsonwebtoken";

export default (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization)
    return res.status(401).json({
      errors: ["Login necessario"]
    });

  /*eslint-disable-next-line */
  const [texto, token] = authorization.split(" ");

  try {
    const data = jwt.verify(token, process.env.TOKEN_SECRET_KEY);
    const { id, email } = data;
    req.userId = id;
    req.userEmail = email;

    return next();
  } catch (e) {
    console.log(`erro: ${e}`);
    return res.status(401).json({
      errors: ["Token expirado ou invalido"]
    });
  }
};
