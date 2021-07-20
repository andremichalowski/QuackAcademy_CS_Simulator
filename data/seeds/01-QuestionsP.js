// SQLite3 / DEVELOPMENT
// exports.seed = function(knex) {
//   // Deletes ALL existing entries
//   return knex('questionsP').del()
//     .then(function () {
//       // Inserts seed entries
//       return knex('questionsP').insert([
//         {id: 1, name: 'Appending to Array', question: "How would you add n to the arr?", input: "n=5 arr=[1, 2, 3]", one: "Test", two: "Test", three: "Test", four: "Test", answer: "TestAnswer"},
//         {id: 2, name: 'Appending to Array', question: "How would you add n to the arr?", input: "n=5 arr=[1, 2, 3]", one: "Test", two: "Test", three: "Test", four: "Test", answer: "TestAnswer"},
//         {id: 3, name: 'Appending to Array', question: "How would you add n to the arr?", input: "n=5 arr=[1, 2, 3]", one: "Test", two: "Test", three: "Test", four: "Test", answer: "TestAnswer"},
//       ]);
//     });
// };

// //PG / PRODUCTION (Old V)
// exports.seed = function(knex) {
//   return knex('questionsP').insert([
//     {id: 1, name: 'Appending to Array', question: "How would you add n to the arr?", input: "n=5 arr=[1, 2, 3]", one: "Test", two: "Test", three: "Test", four: "Test", answer: "TestAnswer"},
//     {id: 2, name: 'Appending to Array', question: "How would you add n to the arr?", input: "n=5 arr=[1, 2, 3]", one: "Test", two: "Test", three: "Test", four: "Test", answer: "TestAnswer"},
//     {id: 3, name: 'Appending to Array', question: "How would you add n to the arr?", input: "n=5 arr=[1, 2, 3]", one: "Test", two: "Test", three: "Test", four: "Test", answer: "TestAnswer"},
//   ]);
// };


exports.seed = function(knex) {
  return knex('questionsP').del()
    .then(function () {
      return knex('questionsP').insert([
        {id: 1, name: 'Appending to Array', question: "How would you add n to the arr?", input: "n=5 arr=[1, 2, 3]", one: "Test", two: "Test", three: "Test", four: "Test", answer: "TestAnswer"},
        {id: 2, name: 'Appending to Array', question: "How would you add n to the arr?", input: "n=5 arr=[1, 2, 3]", one: "Test", two: "Test", three: "Test", four: "Test", answer: "TestAnswer"},
        {id: 3, name: 'Appending to Array', question: "How would you add n to the arr?", input: "n=5 arr=[1, 2, 3]", one: "Test", two: "Test", three: "Test", four: "Test", answer: "TestAnswer"},
      ]);
    });
};