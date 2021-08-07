
import React from "react";
import { Helmet } from "react-helmet";

import StructuredDataVictor from "./structuredData.js"

const FullHelmet = ({ path }) => {
    const host = "https://victorsesma.com"
    const title = {
        "/contact-me": "Contact Me - Victor Sesma",
        "/curriculum-vitae": "Curriculum Vitae - Victor Sesma",
        "/": "Home - Victor Sesma",
    }
    const description = {
        "/contact-me": "Different ways to get in touch with Victor Sesma",
        "/curriculum-vitae": "Victor Sesma's CV online",
        "/": "Who is Victor Sesma and on what he is an expert on",
    }
    const image = 'victorSesma.png'


    return (
        <Helmet>
            <title>{title[path]}</title>
            <link rel="canonical" href={host + path} />
            <meta property="og:locale" content="en_GB" />
            <meta property="og:path" content={host + path} />
            <meta property="og:title" content={title[path]} />
            <meta property="og:description" content={description[path]} />
            <meta property="og:type" content="profile" />
            <meta property="og:profile:first_name" content="Victor" />
            <meta property="og:profile:last_name" content="Sesma" />
            <meta property="og:profile:gender" content="Male" />
            <meta property="og:image" content={host + '/' + image} />
            <script className='structured-data-list' type="application/ld+json">{StructuredDataVictor()}</script>
        </Helmet>
    )
};

export default FullHelmet;