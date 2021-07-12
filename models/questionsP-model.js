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
    return db("questions");
}

function getById(id) {
    return db("questions").where({ id }).first();
}

function add(user) {
    return db("questions")
        .insert(question, "id")
        .then(ids => {
            const id = ids[0];
            return getById(id);
        });
}

function update(id, changes) {
    return db("questions").where({ id }).update(changes);
}

function remove(id) {
    return db("questions").where({ id }).del();
}

function getUserPosts(id) {
    return db("questions").where("question_id", id);
}