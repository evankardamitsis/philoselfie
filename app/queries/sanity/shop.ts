import groq from 'groq';

import {SHOP_PAGE} from './fragments/pages/shop';

export const SHOP_PAGE_QUERY = groq`
  *[_type == 'shopPage' && slug.current == $slug][0]{
    ${SHOP_PAGE}
  }
`;
