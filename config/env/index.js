const env = {
  test: {
    db: {
      storage: ':memory:',
      dialect: 'sqlite',
      logging: false,
      isForce: true
    }
  },
  development: {
    db: {
      storage: 'dev-database.sqlite',
      dialect: 'sqlite',
      logging: console.log,
      isForce: true
    }
  },
  production: {
    db: {
      storage: 'prod-database.sqlite',
      dialect: 'sqlite',
      logging: false,
      isForce: false
    }
  }
}
const envName = process.env.NODE_ENV || 'development';
module.exports = env[envName];
