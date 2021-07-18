const db = require('../data/db-config.js');

module.exports = {
    getAll,
	getById,
    add,
    update,
    remove,
    getUserPosts,
};

function getAll() {
    return db("questionsP");
}

function getById(id) {
    return db("questionsP").where({ id }).first();
}

function add(question) {
    return db("questionsP").insert(question, 'id')
        .then(ids => {
            const id = ids[0];
            return getById(id);
        });
}

function update(id, changes) {
    return db("questionsP").where({ id }).update(changes);
}

function remove(id) {
    return db("questionsP").where({ id }).del();
}

function getUserPosts(id) {
    return db("questionsP").where("question_id", id);
}