import React from 'react';
import { Helmet } from 'react-helmet';

const SEO = () => (
  <Helmet>
    <meta charSet="UTF-8" />
    <meta name="description" content="Journal du Net - Articles de presse quotidiens. Restez informé avec les dernières nouvelles et analyses." />
    <meta name="keywords" content="journal, nouvelles, articles de presse, informations, actualités, analyses" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Article de Presse</title>

    <meta property="og:title" content="Journal du Net - Article de Presse" />
    <meta property="og:description" content="Bienvenue à tous dans notre édition quotidienne. Ce site est en construction. Revenez bientôt pour voir les mises à jour." />
    <meta property="og:image" content="/path/to/journal.jpg" />
    <meta property="og:url" content="http://www.example.com/article-de-presse" />
  </Helmet>
);

export default SEO;
