import jwt from 'jsonwebtoken';

export default function isAuthed(req, res, next) {
if (req.headers['authorization']) {
const token = req.headers.authorization.split(' ')[1];

jwt.verify(token, 'betkoks', (err, result) => {

  if (err) return res.status(400).send({ err: 'Neteisingas prisijungimas' })
req.token = result
next()
})
} else {
console.log('Klaida')
res.status(404).send({ err: 'Tokenas nerastas' })

}

}