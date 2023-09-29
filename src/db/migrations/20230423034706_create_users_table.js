/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = (knex) => knex.schema.createTable('users', (table) => {
  table.increments();
  table.string('username').notNullable().unique();
  table.string('password_hash').notNullable();
  table.string('email').notNullable().unique();
  table.string('first_name').notNullable();
  table.string('last_name').notNullable();
  table.string('bio');
  table.string('image');
  table.timestamps(true, true);
});

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = (knex) => knex.schema.dropTable('users');
