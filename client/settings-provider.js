module.exports = class SettingsProvider {
  constructor(settings) {
    this.settings = Object.assign(Object.create(null), settings);
  }

  get(key) {
    return this.settings[key];
  }

  set(key, value) {
    this.settings[key] = value;
  }
};
