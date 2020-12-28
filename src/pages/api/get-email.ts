import { NextApiRequest, NextApiResponse } from 'next';
import Cors from 'cors';

const whiteList = [
  `${process.env.WEBSITE_URL || 'http://localhost:3000/'}contact`,
];

// Initializing the cors middleware
const cors = Cors({
  origin: (origin, callback) => {
    if (!!origin && whiteList.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
});

// Helper method to wait for a middleware to execute before continuing
// And to throw an error when an error happens in a middleware
function runMiddleware(
  req: NextApiRequest,
  res: NextApiResponse,
  fn: any,
): any {
  return new Promise((resolve, reject) => {
    fn(req, res, (result: any) => {
      if (result instanceof Error) {
        return reject(result);
      }

      return resolve(result);
    });
  });
}

export default async (
  req: NextApiRequest,
  res: NextApiResponse,
): Promise<void> => {
  try {
    req.headers.origin = req.headers.referer;
    await runMiddleware(req, res, cors);
  } catch (err) {
    return res.status(200).json({ error: 'not Available' });
  }

  return res.status(200).json({ myEmail: process.env.MY_EMAIL || '@mail' });
};
