module.exports = ({ env }) => ({
  // ...
  email: {
    provider: 'amazon-ses',
    providerOptions: {
      key: env('AWS_SES_KEY'),
      secret: env('AWS_SES_SECRET'),
      amazon: 'https://email.eu-west-1.amazonaws.com',
    },
    settings: {
      defaultFrom: 'eilif@lykkesdigitalt.no',
      defaultReplyTo: 'eilif@lykkesdigitalt.no',
    },
  },
  // ...
});