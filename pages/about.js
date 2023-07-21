// src/about.js

import React from "react";
import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";

const AboutPage = () => {
    return (
        <div>
            <Head>
                <title>Cyber Fluent -=- About</title>
            </Head>
            <Header />
            <main style={{ textAlign: "center", padding: "50px 0" }}>
                <h1 style={{ fontSize: "36px" }}>About Us</h1>
                <p style={{ fontSize: "20px", opacity: 0.7 }}>
                    We are your Cyber experts.
                </p>
            </main>
            <Footer />
        </div>
    );
};

export default AboutPage;