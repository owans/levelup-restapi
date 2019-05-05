
exports.up = async function(knex, Promise) {
    try {
        const tableExists = await knex.schema.hasTable('contact_phones');
        if (!tableExists) {
            return knex.schema.createTable('contact_phones', function (table) {
                table.increments();
                table.integer('contact_id').notNullable();
                table.enum('type', ['home', 'office', 'mobile']).notNullable();
                table.boolean('is_primary').default(false);
                table.string('value', 15).notNullable();
                table.timestamps();
            });
        } else {
            console.log('Table already exist');
            process.exit(1);
        }
    } catch (error) {
        console.log(error);
    }
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('contact_phones');
};
