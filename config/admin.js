module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '40dcee5371522118942ea7d57a204643'),
  },
});
