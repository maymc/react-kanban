
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('tasks').del()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        { title: "Eat breakfast", body: "Most important meal of the day!", priority: "High", status: "Done", createdBy: "May", assignedTo: "May" },

        { title: "Wash the car", body: "superrrr dirty", priority: "Medium", status: "Queue", createdBy: "Bob", assignedTo: "May" },

        { title: "Finish kanban assignment", body: "due saturday", priority: "Medium", status: "In Progress", createdBy: "May", assignedTo: "May" },

        { title: "Feed the cat", body: "dry food", priority: "Low", status: "Queue", createdBy: "May", assignedTo: "Mom" }
      ]);
    });
};
