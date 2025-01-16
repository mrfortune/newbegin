'use client';

import React from 'react';
import Head from 'next/head';

// /* export const metadata: Metadata = {
//   title: "About Us - Worldshaker",
//   description: "Learn more about Worldshaker, our mission, team, and values.",
// }; */

const About: React.FC = () => {
    return (
        <>
      
        <Head>
        <title>About Us - Worldshaker</title>
        <meta name="description" content="Learn more about Worldshaker, our mission, team, and values." />
    </Head>
        <div>
            <h1>About Us</h1>
            <p>Welcome to Worldshaker! We are a team of passionate individuals dedicated to delivering top-notch digital solutions.</p>
            <h2>Our Mission</h2>
            <p>Our mission is to help businesses thrive in the digital age by providing innovative and effective digital marketing strategies.</p>
            <h2>Our Team</h2>
            <p>We have a diverse team of experts in various fields, including web development, graphic design, content creation, and digital marketing.</p>
            <h2>Our Values</h2>
            <ul>
                <li>Innovation</li>
                <li>Integrity</li>
                <li>Excellence</li>
                <li>Customer Satisfaction</li>
            </ul>
        </div>  
        </>
    );
};

export default About;