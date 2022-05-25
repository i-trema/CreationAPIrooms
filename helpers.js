////////---------fichier qui permet d'éviter le try/catch et de gérer les erreurs
////////--------- -> High Order Function
export const catchErrors = (fn) => (req, res, next) =>
  fn(req, res, next).catch(next);
