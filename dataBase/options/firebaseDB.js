const admin = require('firebase-admin');
const serviceAccount = require('./coder-segunda-entrega-firebase-adminsdk-jwe6b-38608cd08f.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'https://coder-segunda-entrega-default-rtdb.firebaseio.com'
})
const FieldValue = admin.firestore.FieldValue;

const db = admin.firestore();
const queryCarritos = db.collection('carritos');
const queryProductos = db.collection('productos');

module.exports = {
    queryCarritos,
    queryProductos,
    FieldValue
};