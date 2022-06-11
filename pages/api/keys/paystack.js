import nc from "next-connect";
import { isAuth } from "../../../utils/auth";
import Paystack from "paystack";

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
    });
  }).on("error", (error) => {
    console.error(error);
  });
});

export default handler;