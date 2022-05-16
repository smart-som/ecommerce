import nc from 'next-connect';
import { isAuth } from '../../../utils/auth';

const handler = nc();
handler.use(isAuth);
handler.get(async (req, res) => {
  const Paystack = require( Paystack-endpoint)(process.env.secret)
});

export default handler;

