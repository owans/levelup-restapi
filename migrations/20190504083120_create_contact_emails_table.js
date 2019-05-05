
exports.up = async function(knex, Promise) {
    try {
        const tableExists = await knex.schema.hasTable('contact_emails');
        if (!tableExists) {
            return knex.schema.createTable('contact_emails', function (table) {
                table.increments();
                table.integer('contact_id').notNullable();
                table.enum('type', ['personal', 'work']).notNullable();
                table.string('value', 250).notNullable();
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
    return knex.schema.dropTableIfExists('contact_email');
};
