const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

// Configuración de Passport
passport.use(new GoogleStrategy({
    clientID: 'TU_CLIENT_ID',
    clientSecret: 'TU_CLIENT_SECRET',
    callbackURL: '/auth/google/callback' // Ajusta la URL de redireccionamiento según tus configuraciones
  },
  (accessToken, refreshToken, profile, done) => {
    // Aquí puedes realizar acciones adicionales con los datos del perfil de usuario
    return done(null, profile);
  }
));

// Ruta de inicio de sesión con Google
exports.loginWithGoogle = passport.authenticate('google', { scope: ['profile', 'email'] });

// Ruta de redireccionamiento después de la autorización de Google
exports.callbackGoogleLogin = passport.authenticate('google', { failureRedirect: '/login' }),
  (req, res) => {
    // Verificar el dominio del correo electrónico
    const emailDomain = req.user.emails[0].value.split('@')[1];
    if (emailDomain === 'tecsup.edu.pe') {
      // El correo es corporativo de Tecsup
      // Aquí puedes realizar acciones adicionales después de la autenticación exitosa
      res.redirect('/');
    } else {
      // El correo no es válido
      res.redirect('/login');
    }
  };
