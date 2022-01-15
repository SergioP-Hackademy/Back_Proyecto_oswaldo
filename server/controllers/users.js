require('dotenv').config();
const Sequelize = require('sequelize');
const { Op } = Sequelize;

const users = require('../../server/models/index').users;

/**
 * Crea un nuevo registro de un usuario
 * @module create
 * @param {Object} req Peticion del cliente
 * @param {Object} res Respuesta enviada al cliente
 * @returns {JSON} Informacion sobre la consulta realizada
 */
exports.create = async (req, res) => {
  try {
    /** * @description Deconstrucción de los datos de la peticion */
    const body  = req.body;

    /** * @description Creacion de registro */
    const data = await users.create(body);

    res.status(200).send({ message: 'Registro creado correctamente', data });
  } catch (err) {
    console.log(err)
    res.status(500).send({ message: 'Error al hacer el registro' });
  }
};
