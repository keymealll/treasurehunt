/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import Footer from '../../Components/Footer/Footer'
import Navbar from '../../Components/Navigation/navbar'
import WestMalay from '/Users/abdullahkamil/Documents/IUKL/Project/treasurehunt/src/SVG/west malaysia.svg'
import ArrowEnquiry from '/Users/abdullahkamil/Documents/IUKL/Project/treasurehunt/src/SVG/Arrowenquiry.svg'
import GoldElement from '../About/gold element 1000px.png'
import '../About/About.css'

export default function About() {
    return (
        <div>
            <Navbar />

            {/* Hero */}
            <div
                class="h-100 w-100"
                style={{ boxSizing: 'border-box', backgroundColor: '#2a2a2a', paddingTop: '2rem', paddingBottom: '11rem', overflow: 'hidden' }}
            >

                <div
                    class="content-2-3 container-xxl mx-auto p-0 position-relative"
                    style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                    <div class="container-md justify-content-end">
                        <img class="gold-element-top" src={GoldElement} alt='goldelement' />
                    </div>

                    <div class="text-center">
                        <h1 class="text-title-about">IEC International Sdn Bhd</h1>
                        <h1 class="title-text-about"><span style={{ color: '#ffffff' }}>I</span>mpressive <span style={{ color: '#ffffff' }}>E</span>vents <span style={{ color: '#ffffff' }}>C</span>orporation</h1>
                        <p class="sub-title-text-about">IEC is equal to Infinite Excitement & Cheers, we will be the immaculate organizer for all kind of Treasure Hunt Events and Team Building activities open to public besides corporate. In future, IEC would be the leading brand in the region for total event management, as well as social sports and leisure & entertainment affairs.</p>
                        <div class="wrapper">
                            <div class="icon-list pt-2 me-3">
                                {/* <!-- Instagram --> */}
                                <a class="icon" href="#"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg></a>

                                {/* <!-- Facebook --> */}
                                <a class="icon" href="#"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" /></svg></a>

                                {/* <!-- Twitter --> */}
                                <a class="icon" href="#"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" /></svg></a>

                                {/* <!-- Linkedin --> */}
                                <a class="icon" href="#"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg></a>
                            </div>
                        </div>
                    </div>

                    <div class="container-md justify-content-end">
                        <img class="gold-element-bottom" src={GoldElement} alt='goldelement' />
                    </div>
                </div>
            </div>

            {/* What We Do */}
            <div
                class="h-100 w-100"
                style={{ boxSizing: 'border-box', backgroundColor: '#2a2a2a' }}
            >
                <div
                    class="container-xxl mx-auto p-0 position-relative header-2-3"
                    style={{ fontFamily: 'Poppins, sans-serif' }}
                >

                    <div>
                        <div class="mx-auto d-flex flex-lg-row flex-column hero">
                            {/* <!-- Left Column --> */}
                            <div
                                class="left-column1 text-center d-flex justify-content-center pe-0"
                            >
                                <img
                                    id="leftcolumn-image"
                                    className="island-image h-auto"
                                    style={{ width: '80%' }}
                                    src={WestMalay}
                                    alt="island"
                                />
                            </div>

                            {/* <!-- Right Column --> */}
                            <div
                                class="right-column1 d-flex flex-lg-grow-1 flex-column align-items-lg-start text-lg-start align-items-center"
                            >
                                <div class="title-text-about-big1">
                                    WHAT WE DO
                                </div>
                                <div class="text-caption-about">
                                    IEC aims to provide memorable treasure hunting experiences in various forms, for example in the following categories: Each treasure hunt will have the prizes and souvenirs along the given route!
                                </div>
                                <ol class="text-list">
                                    <li>Containerized PASS-THRU Mission (Penang)</li>
                                    <li>Unesco Heritage Walk Around Hunt (Penang, Melaka)</li>
                                    <li>City Tour-Bus Hip-Hop Hunt (Kuala Lumpur)</li>
                                    <li>Interior Mall Hunt (Genting Highland, Kuala Lumpur)</li>
                                    <li>MRT Hunt (Kuala Lumpur)</li>
                                    <li>Hidden Fortune Beach Hunting (Port Dickson)</li>
                                    <li>Cycle Hunt (Pulau PangKor)</li>
                                    <li>Amazing Car Hunt (Langkawi, KL-Kuantan)</li>
                                </ol>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* Enquiry */}
            <div
                class="h-100 w-100"
                style={{ boxSizing: 'border-box', backgroundColor: '#2a2a2a' }}
            >

                <div
                    class="container-xxl mx-auto p-0 position-relative header-2-6"
                    style={{ fontFamily: 'Poppins, sans-serif' }}
                >

                    <div>
                        <div class="mx-auto d-flex flex-lg-row flex-column hero">
                            {/* <!-- Left Column --> */}
                            <div
                                class="left-column justify-content-center pe-0 mt-3"
                            >
                                <div class="text-caption">
                                    Last but not least, IEC has the expertise and resources for effective planning, management and implementation of all kinds of creative yet challenging events that are suited to the needs of a particular organization. Any enquiry or tailored made<br />
                                    <span class="title-text-about-big1">“Treasure Hunt Team Building Activities”</span><br />
                                    are most welcomed.
                                </div>
                                <div class="text-quote">
                                    <p class="quote">Custom questions set perhaps incorporated with your technical training, along with easier and funny one, your company get away or team bonding trips will be taken care of. Please do not hesitate to contact us for your best quotation for corporate packages!</p>
                                </div>
                                <div class="container text-center align-content-center">
                                    <div class="arrow-enquiry my-4">
                                        <img src={ArrowEnquiry} alt='arrow-enquiry' />
                                    </div>
                                    <button class="btn d-inline-flex mb-md-0 btn-join border-0">
                                        Make an Enquiry
                                    </button>
                                </div>
                            </div>

                            {/* <!-- Right Column --> */}
                            <div
                                class="right-column d-flex flex-lg-grow-1 flex-column align-items-lg-start text-lg-start"
                            >
                                <div class="container w-100">

                                    <div class="row">
                                        <div class="col-md-19 mb-4">
                                            <img src={require('../About/Collage/1.png')} width="100%" alt='img1' />
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-4">
                                            <div class="row mb-4">
                                                <div class="col">
                                                    <img src={require('../About/Collage/2.png')} width="100%" alt='img1' />
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col image-mobile">
                                                    <img src={require('../About/Collage/3.png')} width="100%" alt='img1' />
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-8">
                                            <img src={require('../About/Collage/4.png')} width="100%" alt='img1' />

                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <Footer />
        </div >
    )
}
