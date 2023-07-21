// pages/index.js
import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';

const HomePage = () => {
    return (
        <div>
            <Head>
                <title>Cyber Fluent - Home</title>
            </Head>
            <Header />
            <main style={{ textAlign: 'center', padding: '50px 0' }}>
                <h1 style={{ fontSize: '36px' }}>Welcome to Cyber Fluent</h1>
                <p style={{ fontSize: '20px', opacity: 0.7 }}>Your Cyber Journey Begins Here</p>
            </main>
            <Footer />
        </div>
    );
};

export default HomePage;