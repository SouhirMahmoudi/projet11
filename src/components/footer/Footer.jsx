import React from 'react';
import './footer.scss';
import footerBanner from 'assets/logoFooter.png'

export default function Footer() {

    return (
        <div className="footer">
            <img src={footerBanner} alt="Kasa LOGO" />
            <p>© 2020 Kasa. All rights reserved</p>
        </div>
    )

}