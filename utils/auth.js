//with there is no session username, have them login. Put this is the start test button later or change it so the buttons don't even appear.
const withAuth = (req, res, next) => {
    if (!req.session.username) {
      res.redirect('/login');
    } else {
      next();
    }
  };
  
  module.exports = withAuth;