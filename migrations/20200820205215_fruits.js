const { table } = require("../data/config");

exports.up = async function(knex) {
    //translates to CREATE TABLE "fruits"
    await knex.schema.createTableIfNotExists("fruits", (table) => {
        // translates to "id" INTEGER NOT NULL UNIQUE PRIMARY KEY
        //table.integer("id").notNull().unique().primary()
        // OR
        table.increments("id") // autoincrementing id
        table.text("name").notNull().unique()
        table.float("avgWeightOz").notNull()
        table.boolean("delicious").defaultTo(true)
    })
};

exports.down = async function(knex) {
    // the down function should always reverse the up function
    await knex.schema.dropTableIfExists("fruits")
};
