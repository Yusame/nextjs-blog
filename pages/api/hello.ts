import { NextApiRequest, NextApiResponse } from 'next';

export default function handler (req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ text: 'Hello' });
  //The API Route code will not be part of your client bundle, so you can safely write server-side code
  const email = req.body.email;
  // Then save email to your database, etc...
}