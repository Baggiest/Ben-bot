const { MongoClient } = require('mongodb');

module.exports = class MongoDBModule {
  constructor(dbSettings) {
    this.settings = dbSettings;
  }

  async register() {
    const databaseClient = await new MongoClient(this.settings.URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    await databaseClient.connect();
    this._dbInstance = databaseClient.db(this.settings.name);
  }

  getInstance() {
    return this._dbInstance;
  }
};
