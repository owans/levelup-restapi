module.exports = class Repository {
    constructor(model) {
        this.model = model;
    }
    /**
     * Fetches all models in repository
     * @returns {Promise<array>}
     */
    all() {
        return this.model.fetchAll();
    }
    /**
     * Fetch a model by it's primary id
     * @param {number} id 
     * @returns {Promise}
     */
    getById(id) {
        return this.model.query(function (qb) {
                qb.where('id', id);
            })
            .fetch();
    }
    /**
     * Create a new model
     * @param {*} attrs 
     */
    create(attrs) {
        return this.model.forge()
            .save(attrs);
    }
    /**
     * Update a model
     * @param {*} id 
     * @param {*} attrs 
     */
    update(id, attrs) {
        return this.model.forge({ id })
            .save(attrs, {
                patch: true,
                require: true
            });
    }
}