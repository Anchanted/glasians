import React from 'react';
import './ContactEn.scss';
import PageStructure from '@/components/pagestructure/PageStructure';

function ContactEn() {
    return (
        <PageStructure marginal>
            <div className="container contact">
                <div className="contact-address">
                    <h1 className="contact-address-header">Contact Us</h1>
                    <p className="contact-address-content">
                        Suite 3211, 3rd Fl., Bldg. 13, no. 35 Dongfu Road,<br />
                        Suzhou Industrial Park, Suzhou, Jiangsu prov.,<br />
                        People's Republic of China<br />
                        +86 (0)512 62825261 / +86 153 7181 8939<br />
                        215123
                    </p>
                </div>
                <iframe title="Embedded Wufoo Form" id="wufooFormzipgx0h14q99pp" className="wufoo-form-container contact-form" height="1292" allowtransparency="true" frameBorder="0" scrolling="no" style={{width: '100%', border: 'none'}} src="https://glasians.wufoo.com/embed/zipgx0h14q99pp/def/embedKey=zipgx0h14q99pp838224&amp;entsource=&amp;referrer=http%3Awuslashwuslashwww.glasians.comwuslash">
                    <a href="https://glasians.wufoo.com/forms/zipgx0h14q99pp/" title="html form">Fill out my Wufoo form!</a>
                </iframe>
            </div>
        </PageStructure>
    );
}

export default ContactEn;