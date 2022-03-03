import type { NextApiRequest, NextApiResponse } from 'next';

export default (req: NextApiRequest, res: NextApiResponse) => {
  const { query } = req;
  res.status(200).json({ name: 'John Doe', query });
};
