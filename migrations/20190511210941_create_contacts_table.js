
exports.up = async function(knex, Promise) {
    try {
        const tableExists = await knex.schema.hasTable('contacts');
        if (!tableExists) {
            return knex.schema.createTable('contacts', function (table) {
                table.increments();
                table.integer('user_id').notNullable();
                table.string('profile_photo').default('https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png');
                table.string('first_name').notNullable();
                table.string('middle_name').nullable();
                table.string('last_name').notNullable();
                table.enum('gender', ['male', 'female', 'binary', 'undefined', 'n/a']);
                table.date('dob').nullable();
                table.string('organization', 250).nullable();
                table.string('title').nullable()
                table.timestamps();
                
                table.index('first_name');
                table.index('last_name');
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
    return knex.schema.dropTableIfExists('contacts');
};