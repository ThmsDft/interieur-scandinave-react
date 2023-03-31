import { db } from "../db.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const login = (req, res) => {
  const q = "SELECT * FROM admin WHERE login = ?";

  db.query(q, [req.body.login], (err, data) => {
    if (err) return res.json(err);

    //Check login
    if (data.length === 0)
      return res.status(404).json("Wrong login or password !");

    //Check password
    const isPasswordCorrect = bcrypt.compareSync(
      req.body.password,
      data[0].password
    );

    if (!isPasswordCorrect)
      return res.status(404).json("Wrong login or password !");

    const token = jwt.sign({ login: data[0].login }, "jwtkey");
    const { password, ...other } = data[0];

    res
      .cookie("access_token", token, {
        httpOnly: true,
      })
      .status(200)
      .json(other);
  });
};

export const logout = (req, res) => {};
