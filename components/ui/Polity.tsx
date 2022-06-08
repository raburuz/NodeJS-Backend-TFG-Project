import React, { useEffect, useState } from 'react'
import style from './Polity.module.css'


export const Polity = () => {
    return (
        <div className={style.contPolity}>
        <header className={style.headerPolity}>
            <h1 className={style.titlePolity}>Privacy Policy</h1>
        </header>
        <div className={style.infoPolity}>
            <h1 className={style.h1}>About us</h1>
            <p>Our website address is: https://.</p>

            <h1 className={style.h1}>Comments</h1>
            <p>When visitors leave comments on the website, we collect the data displayed in the comment form, as well as the visitor's IP address and browser user agent string to help spam detection.</p>
            <p>An anonymous string created from your email address (also called a hash) may be provided to the Gravatar service to see if you are using it. The privacy policy for the Gravatar service is available here: https://automattic.com/privacy/. After approval of your comment, your profile picture is visible to the public in the context of your comment.</p>

            <h1 className={style.h1}>Media</h1>
            <p>If you upload images to the web, you should avoid uploading images with location data (EXIF GPS) included. Visitors to the web can download and extract any location data from images on the web.</p>

            <h1 className={style.h1}>Cookies</h1>
            <p>If you leave a comment on our site you can choose to save your name, email address and website in cookies. This is for your convenience, so you don't have to fill in your details again when you leave another comment. These cookies will last for one year.</p>
            <p>If you have an account and connect to this site, we will set a temporary cookie to determine if your browser accepts cookies. This cookie does not contain personal data and is deleted when the browser is closed.</p>
            <p>When you sign in, we will also set several cookies to save your login information and screen display options. Access cookies last for two days, and screen options cookies last for one year. If you select "Remember Me", your access will last for two weeks. If you log out of your account, access cookies will be deleted.</p>
            <p>If you edit or publish an article, an additional cookie will be saved in your browser. This cookie does not include personal data and simply indicates the ID of the article you just edited. It expires after 1 day.</p>

            <h1 className={style.h1}>Embedded content from other websites</h1>
            <p>Articles on this site may include embedded content (eg, videos, images, articles, etc.). Embedded content from other websites behaves in exactly the same way as if the visitor had visited the other website.</p>
            <p>These websites may collect data about you, use cookies, embed additional third-party tracking, and monitor your interaction with that embedded content, including tracking your interaction with the embedded content if you have an account and are logged in to that website..</p>

            <h1 className={style.h1}>With whom we share your data</h1>
            <p>If you request a password reset, your IP address will be included in the reset email.</p>

            <h1 className={style.h1}>How long we keep your data</h1>
            <p>If you leave a comment, the comment and its metadata are retained indefinitely. This is so we can recognize and approve follow-up comments automatically, instead of holding them in a moderation queue.</p>
            <p>Of users who register on our website (if any), we also store the personal information they provide in their user profile. All users can view, edit, or delete their personal information at any time (except they can't change their username). Webmasters can also view and edit that information.</p>

            <h1 className={style.h1}>What rights do you have over your data</h1>
            <p>If you have an account or have left comments on this website, you can request to receive an export file of the personal data we hold about you, including any data you have provided to us. You can also request that we delete any personal data we hold about you. This does not include any data that we are required to keep for administrative, legal, or security purposes.</p>
            
            <h1 className={style.h1}>Where do we send your data</h1>
            <p>Visitor comments may be checked by an automated spam detection service.</p>
        </div>
    </div>
    );
};