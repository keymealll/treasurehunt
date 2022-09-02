/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import Navbar from '../../Components/Navigation/navbar'
import Footer from '../../Components/Footer/Footer.js'
import '../NewsPromotion/News.css'

export default function News() {
    return (
        <div>
            <Navbar />

            {/* Newsletter */}
            <div class="h-100 w-100" style={{ boxSizing: 'border-box', backgroundColor: '#2a2a2a', paddingBottom: '6.5rem' }}>
                <div
                    class="news container-xxl mx-auto p-0 position-relative"
                    style={{ fontfamily: 'Poppins, sans-serif' }}
                >
                    <div class="text-center">
                        <h1 class="text-title">Latest</h1>
                        <h1 class="title-text">News & Promotion</h1>
                        <p class="sub-title-text">Do you want to keep up to date with the latest news and promotion from IEC? <br />
                            Enter your e-mail below to subscribe us to get the most recent information.</p>
                    </div>
                    <div class="bbb-wrapper fl-wrap">
                        <div class="subcribe-form fl-wrap">
                            <form id="subscribe" novalidate="true">
                                <input class="enteremail" name="EMAIL" id="subscribe-email" placeholder="Enter your email" spellcheck="false" type="text" />
                                <button type="submit" id="subscribe-button" class="subscribe-button color-bg"><i class="fa fa-rss"></i> Subscribe</button>
                            </form>
                        </div>
                    </div>

                </div>
            </div>

            {/* Latest News */}
            <div
                class="h-100 w-100"
                style={{ boxSizing: 'border-box', backgroundColor: '#2a2a2a' }}
            >

                <div
                    class="content-2-5 container-xxl mx-auto p-0 position-relative"
                    style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                    <div class="header-2-2">
                        <nav class="navbar navbar-expand-lg navbar-dark justify-content-center">

                            <div class="navbar" id="navbarTogglerDemo">
                                <ul class="navbar-nav me-auto mt-2 mt-lg-0 justify-content-center">
                                    <li class="nav-item active">
                                        <a class="nav-link" href="#" style={{ color: '#e7e7e8' }}>All</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="#">News</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="#">Promotion</a>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>

                    <div class="snippet-body">
                        <div class="snippet-body pt-1 pb-2">
                            <div class="container">
                                <div class="row">
                                    <div class="col-12">
                                        <div
                                            id="carouselExampleIndicators2"
                                            class="carousel slide"
                                            data-ride="carousel"
                                        >

                                            <div class="row align-items-center">
                                                <div class="col-md-1">
                                                    <a
                                                        class="rounded-circle btn btn-light mb-3 me-3 p-3"
                                                        href="#carouselExampleIndicators2"
                                                        role="button"
                                                        data-slide="prev"
                                                    >
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width="32"
                                                            height="32"
                                                            fill="currentColor"
                                                            class="bi bi-chevron-left"
                                                            viewBox="0 0 16 16"
                                                        >
                                                            <path
                                                                fill-rule="evenodd"
                                                                d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
                                                            />
                                                        </svg>
                                                    </a>
                                                </div>

                                                <div class="col-md-10">
                                                    <div class="carousel-inner">
                                                        <div class="carousel-item active">
                                                            <div class="row">

                                                                <div class="col-md-4 mb-3">
                                                                    <div class="card">
                                                                        <div class="card-body">
                                                                            <img
                                                                                class="rounded img-fluid flex-grow-1 mx-auto mb-lg-3"
                                                                                alt="100%x280"
                                                                                src="https://images.unsplash.com/photo-1532781914607-2031eca2f00d?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=7c625ea379640da3ef2e24f20df7ce8d"
                                                                            />
                                                                            <p class="card-text">
                                                                                Do treasure hunters still exist? How to be a Treasure Hunter?
                                                                            </p>
                                                                            <a class="read-more justify-content-end" href="#">
                                                                                Read More
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                                <div class="col-md-4 mb-3">
                                                                    <div class="card">
                                                                        <div class="card-body">
                                                                            <img
                                                                                class="rounded img-fluid flex-grow-1 mx-auto mb-lg-3"
                                                                                alt="100%x280"
                                                                                src="https://images.unsplash.com/photo-1532781914607-2031eca2f00d?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=7c625ea379640da3ef2e24f20df7ce8d"
                                                                            />
                                                                            <p class="card-text">
                                                                                Do treasure hunters still exist? How to be a Treasure Hunter?
                                                                            </p>
                                                                            <a class="read-more justify-content-end" href="#">
                                                                                Read More
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                                <div class="col-md-4 mb-3">
                                                                    <div class="card">
                                                                        <div class="card-body">
                                                                            <img
                                                                                class="rounded img-fluid flex-grow-1 mx-auto mb-lg-3"
                                                                                alt="100%x280"
                                                                                src="https://images.unsplash.com/photo-1532781914607-2031eca2f00d?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=7c625ea379640da3ef2e24f20df7ce8d"
                                                                            />
                                                                            <p class="card-text">
                                                                                Do treasure hunters still exist? How to be a Treasure Hunter?
                                                                            </p>
                                                                            <a class="read-more justify-content-end" href="#">
                                                                                Read More
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                            </div>

                                                            <div class="row">

                                                                <div class="col-md-4 mb-3">
                                                                    <div class="card">
                                                                        <div class="card-body">
                                                                            <img
                                                                                class="rounded img-fluid flex-grow-1 mx-auto mb-lg-3"
                                                                                alt="100%x280"
                                                                                src="https://images.unsplash.com/photo-1532781914607-2031eca2f00d?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=7c625ea379640da3ef2e24f20df7ce8d"
                                                                            />
                                                                            <p class="card-text">
                                                                                Do treasure hunters still exist? How to be a Treasure Hunter?
                                                                            </p>
                                                                            <a class="read-more justify-content-end" href="#">
                                                                                Read More
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                                <div class="col-md-4 mb-3">
                                                                    <div class="card">
                                                                        <div class="card-body">
                                                                            <img
                                                                                class="rounded img-fluid flex-grow-1 mx-auto mb-lg-3"
                                                                                alt="100%x280"
                                                                                src="https://images.unsplash.com/photo-1532781914607-2031eca2f00d?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=7c625ea379640da3ef2e24f20df7ce8d"
                                                                            />
                                                                            <p class="card-text">
                                                                                Do treasure hunters still exist? How to be a Treasure Hunter?
                                                                            </p>
                                                                            <a class="read-more justify-content-end" href="#">
                                                                                Read More
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                                <div class="col-md-4 mb-3">
                                                                    <div class="card">
                                                                        <div class="card-body">
                                                                            <img
                                                                                class="rounded img-fluid flex-grow-1 mx-auto mb-lg-3"
                                                                                alt="100%x280"
                                                                                src="https://images.unsplash.com/photo-1532781914607-2031eca2f00d?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=7c625ea379640da3ef2e24f20df7ce8d"
                                                                            />
                                                                            <p class="card-text">
                                                                                Do treasure hunters still exist? How to be a Treasure Hunter?
                                                                            </p>
                                                                            <a class="read-more justify-content-end" href="#">
                                                                                Read More
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="col-md-1">
                                                    <a
                                                        class="rounded-circle btn btn-light mb-3 p-3"
                                                        href="#carouselExampleIndicators2"
                                                        role="button"
                                                        data-slide="next"
                                                    >
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width="32"
                                                            height="32"
                                                            fill="currentColor"
                                                            class="bi bi-chevron-right"
                                                            viewBox="0 0 16 16"
                                                        >
                                                            <path
                                                                fill-rule="evenodd"
                                                                d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                                                            />
                                                        </svg>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >

            <Footer />
        </div >
    )
}
