import { db } from "../db.js";

export const getProduits = (req, res) => {
  const q =
    "SELECT * FROM produits INNER JOIN categories ON produits.idCat = categories.catId INNER JOIN fabricants ON produits.idFab = fabricants.fabId INNER JOIN designer ON produits.idDesigner = designer.designerId";

  db.query(q, (err, data) => {
    if (err) return res.send(err);

    return res.status(200).json(data);
  });
};

export const getProduit = (req, res) => {
  const q = "SELECT * FROM produits INNER JOIN categories ON produits.idCat = categories.catId INNER JOIN fabricants ON produits.idFab = fabricants.fabId INNER JOIN designer ON produits.idDesigner = designer.designerId WHERE produits.id = ?";

  db.query(q, [req.params.id], (err, data) => {
    if (err) return res.send(err);

    return res.status(200).json(data[0]);
  });
};
