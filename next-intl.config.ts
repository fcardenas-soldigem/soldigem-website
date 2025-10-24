import {defineRouting} from 'next-intl/routing';

export default defineRouting({
  locales: ['es', 'en'],
  defaultLocale: 'es',
  localePrefix: 'always',
  localeDetection: false
});


