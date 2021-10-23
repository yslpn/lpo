import React from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async';

import favicon from '../../assets/images/lpoLogo.png'

const Head = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Либертарианский проектный офис</title>
        <link rel="shortcut icon" href={favicon} type="image/x-icon" />
      </Helmet>
    </HelmetProvider>
  )
}

export default Head
