import groq from 'groq';

import {MODULES} from '../modules';
import {SEO} from '../seo';

export const SHOP_PAGE = groq`
  _id,
  colorTheme,
  modules[] {
    ${MODULES}
  },
  ${SEO},
  sortOrder,
  title,
  "slug": slug.current
`;
