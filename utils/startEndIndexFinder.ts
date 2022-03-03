export default function startEndIndexFinder({
  querySection,
  itemsPerSection,
}: {
  querySection: string | string[];
  itemsPerSection: number;
}): { startIndex: number; endIndex: number; section } {
  const section = +querySection < 1 ? 1 : +querySection;
  const startIndex = (section - 1) * itemsPerSection;
  const endIndex = section * itemsPerSection - 1;
  return { section, startIndex, endIndex };
}
