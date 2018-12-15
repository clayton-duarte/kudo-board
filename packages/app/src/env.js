

const { NODE_ENV } = process.env;

const config = {
  env: NODE_ENV || 'development',
  development: {
    endPoint: 'http://localhost:4000/',
  },
  production: {
    endPoint: 'http://localhost:4000/',
  },
};

export default config[config.env];
