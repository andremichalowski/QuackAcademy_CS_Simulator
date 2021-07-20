const db = require('../data/db-config.js');

module.exports = {
    getAll,
	findById,
    add,
    update,
    remove,
    getUserPosts,
};

function getAll() {
    return db("questionsP");
}

function findById(id) {
    return db("questionsP").where({ id }).first();
}

function add(question) {
    return db("questionsP")
        .insert(question)
        .returning('id')
        .then(ids => findById(ids[0]))
}

function update(id, changes) {
    return db("questionsP").where({ id }).update(changes);
}

function remove(id) {
    return db("questionsP").where({ id }).del();
}
