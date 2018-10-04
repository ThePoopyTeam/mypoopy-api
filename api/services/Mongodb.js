


class MongoDb {

    constructor(model) {
        this.model = model;
    }

    findAll() { console.log('Find all!'); }

    findOne() { console.log('Find one!'); }

    findById() { console.log('Find by Id!'); }

    save(data) {
        console.log('Data -> ', data);
        this.model = data;
        return this.model.save();
    }
}