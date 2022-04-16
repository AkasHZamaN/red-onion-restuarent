import React from 'react';
import logo from '../../images/logo.png';

const Footer = () => {
    return (
        <section className='bg-success bg-opacity-75 mt-5'>
            <article className='container mx-auto d-flex justify-content-between align-items-center row row-cols-1 row-cols-lg-3 g-4'>
            <article>
                <img className='w-50' src={logo} alt="" />
            </article>
            <article className='d-flex text-white '>
                <article className='me-5'>
                    <p>About Online food</p>
                    <p>Read our blod</p>
                    <p>Sign up to deliver</p>
                    <p>Add your restaurant</p>
                </article>
                <article>
                    <p>Get help</p>
                    <p>Read FAQs</p>
                    <p>View all cities</p>
                    <p>Restaurants near me</p>
                </article>
            </article>
            </article>
        </section>
    );
};

export default Footer;