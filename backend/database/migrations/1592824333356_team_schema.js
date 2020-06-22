'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TeamSchema extends Schema {
  up() {
    this.create('teams', (table) => {
      table.increments()
      table
        .integer('user_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('users')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table.string('slug').notNullable().unique()
      table.string('name').notNullable()
      table.timestamps()
    })
  }

  down() {
    this.drop('teams')
  }
}

module.exports = TeamSchema
