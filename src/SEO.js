import React from "react"
import { Helmet } from "react-helmet"

const SEO = ({ title }) => (
    <Helmet>
        <title>{title}</title>
        <meta name="description" content="Seize the day" />
        {/* Open Graph Protocol */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content="Seize the day" />
        <meta property="og:type" content="website" />
        {/* Twitter */}
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content="Seize the day" />
    </Helmet>
)

export default SEO
