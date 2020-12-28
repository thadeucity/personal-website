import { NextApiRequest, NextApiResponse } from 'next';

export default async (
  req: NextApiRequest,
  res: NextApiResponse,
): Promise<void> => {
  return res.status(200).json({ myEmail: process.env.MY_EMAIL || '@mail' });
};
