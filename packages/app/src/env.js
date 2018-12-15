

const { NODE_ENV } = process.env;

const config = {
  env: NODE_ENV || 'development',
  development: {
    card_api: 'http://localhost:4000/api/card',
  },
  production: {
    card_api: 'http://localhost:4000/api/card',
  },
};

export default config[config.env];
