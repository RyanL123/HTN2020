import React from "react"
import { Helmet } from "react-helmet"

const SEO = ({ title }) => (
    <Helmet>
        <title>{title}</title>
        <meta
            name="description"
            content="Systematically sending you voice reminders to help you be aware of your time"
        />
        {/* Open Graph Protocol */}
        <meta property="og:title" content={title} />
        <meta
            property="og:description"
            content="Systematically sending you voice reminders to help you be aware of your time"
        />
        <meta property="og:type" content="website" />
        {/* Twitter */}
        <meta property="twitter:title" content={title} />
        <meta
            property="twitter:description"
            content="Systematically sending you voice reminders to help you be aware of your time"
        />
    </Helmet>
)

export default SEO
