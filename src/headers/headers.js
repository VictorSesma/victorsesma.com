export const structuredDataVictor = () => {

    let data = {
        '@context': 'https://schema.org',
        '@type': 'Person',
        'address': {
            '@type': 'PostalAddress',
            'addressLocality': 'London'
        },
        'email': 'hi@victorsesma.com',
        'image': 'public/victorSesma.png',
        'jobTitle': 'Software Engineer',
        'name': 'Victor Sesma',
        'alumniOf': 'Colegio Don Bosco Alicante',
        'birthPlace': 'Alicante, Spain',
        'birthDate': '1989-11-28',
        'height': '163cm',
        'gender': 'male',
        'Description': 'Software Engineer',
        'nationality': 'Spanish',
        'url': 'https://victorsesma.com',
        'sameAs': ['https://www.linkedin.com/in/victor-sesma-3b2291104/',
            'https://twitter.com/victorsesma_']
    };
    
    return JSON.stringify(data);
};

export default structuredDataVictor