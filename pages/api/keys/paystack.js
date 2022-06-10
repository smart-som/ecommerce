import nc from "next-connect";
import { isAuth } from "../../../utils/auth";

const handler = nc();
handler.use(isAuth);
handler.get(async (req, res) => {
  const options = {
    // Require the library
    hostname: `api.paystack.co`,
    port: 443,
    path: `/transaction/verify/:reference`,
    method: 'POST',
    headers: {
      Authorization: `Bearer SECRET_KEY`,
      "Content-Type": "application/json",
    },
  };
  request(options, (res) => {
    let data = "";
    res.on("data", (chunk) => {
      data += chunk;
    });
    res.on("end", () => {
      console.log(JSON.parse(data));
      await db.disconnect();
      res.send({ message: 'order paid', order: paidOrder });res.send({ message: 'order delivered', order: deliveredOrder });
    });
  }).on("error", (error) => {
    console.error(error);
    await db.disconnect();
    res.status(404).send({ message: 'order not found' });
 
  });
});

export default handler;