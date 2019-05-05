
exports.up = async function(knex, Promise) {
    try {
        const tableExists = await knex.schema.hasTable('users');
        if (!tableExists) {
            return knex.schema.createTable('users', function (table) {
                table.increments();
                table.string('first_name').nullable();
                table.string('last_name').nullable();
                table.string('email', 250).notNullable();
                table.string('password', 250).notNullable();
                table.timestamps();

                table.index('first_name');
                table.index('last_name');
                table.unique('email');
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
