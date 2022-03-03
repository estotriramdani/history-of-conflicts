import type { NextApiRequest, NextApiResponse } from 'next';
import transformedData from '../../../data/transformed-data.json';
import startEndIndexFinder from '../../../utils/startEndIndexFinder';

export default (req: NextApiRequest, res: NextApiResponse) => {
  const querySection = req.query.section || '1';
  const itemsPerSection = 10;
  const { endIndex, section, startIndex } = startEndIndexFinder({
    querySection,
    itemsPerSection,
  });
  const maxSection = Math.ceil(transformedData.length / itemsPerSection);
  if (+querySection > maxSection) {
    res.status(404).json({
      status: false,
      message: 'No more sections',
      data: {
        itemsPerSection,
        maxSection,
      },
    });
  }
  const data = transformedData
    .map((item, index) => {
      if (index >= startIndex && index <= endIndex) {
        return {
          id: index + 1,
          name: 'Part 1',
          from: item[0].Date,
          to: item[item.length - 1].Date,
          link: `/api/parts/${index + 1}`,
        };
      }
      return;
    })
    .filter((item) => item);
  res.status(200).json({
    status: true,
    message: 'Sections of parts were successfully fetched',
    data: {
      itemsPerSection,
      section,
      startIndex,
      endIndex,
      maxSection,
      data,
    },
  });
};
