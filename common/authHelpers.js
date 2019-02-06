const jwt = require('jsonwebtoken');

module.exports = {
   generateToken: user => {
      const payload = {
         username: user.username,
         password: user.password,
         firstName: user.firstName,
         lastName: user.lastName,
         email: user.email,
         phone: user.phone,
      };

      const secret = process.env.JWT_SECRET;

      const options = {
         expiresIn: '60m',
      };

      return jwt.sign(payload, secret, options);
   },

   protected: (req, res, next) => {
      const token = req.headers.authorization;
      console.log('protected mw, token:', token);

      if (token) {
         jwt.verify(token, process.env.JWT_SECRET, (err, decodedToken) => {
            if (err) {
               res.status(401).json({ message: 'Invalid token' });
            } else {
               req.token = decodedToken;
               next();
            }
         });
      } else {
         res.status(401).json({ message: 'Unauthorized: No token provided' });
      }
   },
};
