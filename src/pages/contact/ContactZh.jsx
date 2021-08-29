import React from 'react';
import './ContactEn.scss';
import PageStructure from '@/components/pagestructure/PageStructure';

function ContactEn() {
    return (
        <PageStructure marginal>
            <div className="container contact">
                <div className="contact-address">
                    <h1 className="contact-address-header">联系我们</h1>
                    <p className="contact-address-content">
                        苏州工业园区东富路35号1号楼三层3211室<br />
                        邮编：215123<br />
                        +86 (0)512 62825261 / +86 153 7181 8939
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