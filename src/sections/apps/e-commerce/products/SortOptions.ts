// types
import { SortOptionsProps } from 'types/e-commerce';

// ==============================|| PRODUCT GRID - SORT FILTER ||============================== //

const SortOptions: SortOptionsProps[] = [
  {
    value: 'high',
    label: 'Tequila'
  },
  {
    value: 'low',
    label: 'Beers'
  },
  {
    value: 'popularity',
    label: 'By the glass'
  },
  {
    value: 'discount',
    label: 'Wine'
  },
  {
    value: 'new',
    label: 'Cocktails'
  }
];

export default SortOptions;
