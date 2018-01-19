// const router = require('express').Router();
// const passport = require('passport');

// // if user clicks nav bar login
// // or if user clicks save trip and is not logged in
// // { user: req.user } second parameter to render?
// router.get('/login', (req, res) => {
//   res.render('login', { user: req.user });
// });

// // auth with google+
// router.get('/google', passport.authenticate('google', {
//   scope: ['profile'],
// }));

// router.get('/google/redirect', passport.authenticate('google'), (req, res) => {
//   res.send('you reached the redirect URI');
//   res.redirect('home');
// });

// module.exports = router;

// // // auth logout
// // router.get('/logout', (req, res) => {
// //     // handle with passport
// //     res.send('logging out');
// // });
