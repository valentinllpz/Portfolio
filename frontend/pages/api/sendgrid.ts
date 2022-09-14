import sendgrid from "@sendgrid/mail";
import { NextApiRequest, NextApiResponse } from "next";

export default async function (req : NextApiRequest, res : NextApiResponse) {
  sendgrid.setApiKey(process.env.SENDGRID_API_KEY as string);
  const msg = {
    to: "lugandlopez.valentin@gmail.com",
    from: "vll.letstalk@gmail.com",
    subject: `[SendGrid] New request from ${req.body.name}`,
    text: req.body.message + " | Sent from: " + req.body.email,
    html: `<div>${req.body.message}</div><p>Sent from:
		${req.body.email}</p>`,
  };
  return new Promise<void>((resolve) => {
    sendgrid
      .send(msg)
      .then(() => {
        console.log(`Email from ${req.body.email} sent sucessfully`);
        res.status(200).end();
        resolve();
      })
      .catch((error) => {
        console.error(error, msg);
        res.status(500).end();
        resolve();
      });
  });
}
