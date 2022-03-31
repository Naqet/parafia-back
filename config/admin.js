module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '316ad4b0356dee4e7dc952b70c7880cc'),
  },
});
