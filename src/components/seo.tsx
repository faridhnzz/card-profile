import { NextSeo, SocialProfileJsonLd } from 'next-seo';
import config from '../../config.json';

const SEO = () => {
  return (
    <>
      <NextSeo
        title="Farid Nizam | Network Engineering"
        description="I'm a who can code and network, but the internet allows me to do anything"
        canonical={config.siteUrl}
        additionalMetaTags={[
          {
            name: 'keywords',
            content: 'farid nizam, farid, nizam, yuiistic, yui matcha',
          },
          {
            name: 'theme-color',
            content: '#faae2b',
          },
        ]}
        additionalLinkTags={[
          {
            rel: 'icon',
            href: '/favicon.ico',
          },
          {
            rel: 'apple-touch-icon',
            href: '/favicon.ico',
          },
          {
            rel: 'manifest',
            href: '/manifest.json',
          },
          {
            rel: 'stylesheet',
            href: 'https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@5.15.4/css/all.min.css',
          },
        ]}
        openGraph={{
          url: config.siteUrl,
          title: 'Farid Nizam | Network Engineering',
          description: "I'm a who can code and network, but the internet allows me to do anything.",
          images: [
            {
              url: 'https://cdn.statically.io/og/Farid%20Nizam.png',
            },
          ],
          site_name: config.domain,
        }}
        twitter={{
          handle: '@faridhnzz',
          site: '@faridhnzz',
          cardType: 'summary',
        }}
      />

      <SocialProfileJsonLd type="Person" name="Farid Nizam" url={config.siteUrl} sameAs={['https://instagram.com/faridhnzz', 'https://twitter.com/faridhnzz', 'https://soundcloud.com/yuiistic']} />
    </>
  );
};

export default SEO;
