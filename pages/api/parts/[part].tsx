import type { NextApiRequest, NextApiResponse } from 'next';
import transformedData from '../../../data/transformed-data.json';

export default (req: NextApiRequest, res: NextApiResponse) => {
  const { query } = req;
  const part = query.part ? +query.part - 1 : 1;
  if (part > transformedData.length - 1) {
    res.status(404).json({ status: false, message: 'No more parts' });
  }
  res.status(200).json({
    status: true,
    message: 'List of parts was successfully fetched',
    data: transformedData[part],
  });
};
