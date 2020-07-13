const doctorAuthorizer = require('./doctor-authorizer');

module.exports.handler = (event, context, callback) => {
  (async () => {
    try {
      const doctorAuthorizerResult = await new Promise((resolve) => {
        doctorAuthorizer.handler(event, context, (err, result) => {
          resolve(err || result);
        });
      });

      if (typeof doctorAuthorizerResult === 'string') return callback(doctorAuthorizerResult);

      const user = JSON.parse(doctorAuthorizerResult.context.consumer);
      if (user && (!user.master && !user.admin)) {
        return callback('Unauthorized');
      }
      return callback(null, doctorAuthorizerResult);
    } catch (err) {
      console.error('AdminAuthorizerError', err);
      return callback('Error');
    }
  })();
};
