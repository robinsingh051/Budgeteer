import { Knex } from "knex";

const TABLE_NAME = "categories";

/**
 * Create table categories.
 *
 * @param   {Knex} knex
 * @returns {Promise}
 */
export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable(TABLE_NAME, (table) => {
        table.bigIncrements();

        table.string("user_id", 100).nullable().references("id").inTable("users").onDelete("cascade");

        table.string("category_name", 200).notNullable();

        table.timestamp("created_at").notNullable().defaultTo(knex.raw("now()"));

        table.bigInteger("created_by").unsigned().nullable().references("id").inTable(TABLE_NAME);

        table.timestamp("updated_at").nullable();

        table.bigInteger("updated_by").unsigned().references("id").inTable(TABLE_NAME).nullable();
    });
}

/**
 * Drop table categories.
 *
 * @param   {Knex} knex
 * @returns {Promise}
 */
export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable(TABLE_NAME);
}
