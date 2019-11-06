const db = require("../data/db");

module.exports = {
    find,
    findById,
    findSteps,
    add,
    update,
    remove
  };

function find() {
  return db("schemes");
}

function findById(id) {
  return db("schemes").where({ id });
}

function findSteps(id) {
  return db("steps")
    .join("schemes", "schemas.name", "=", "steps.scheme_name")
    .where({ scheme_id: id })
    .select("steps.id", "schemes.scheme_name", "steps.step_number");
}

function add(scheme) {
  return db("schemes").insert(scheme);
}

function update(changes, id) {
  return db("schemes")
    .update(changes)
    .where({ id });
}

function remove(id) {
  return db("schemes")
    .delete()
    .where({ id });
}

