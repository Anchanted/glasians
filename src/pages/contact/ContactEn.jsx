import React from 'react';
import './ContactEn.scss';
import PageStructure from '@/components/pagestructure/PageStructure';

function ContactEn() {
    return (
        <PageStructure marginal>
            <div className="container contact">
                <h1>Glocal Asian Solutions (Suzhou) Co., Ltd.</h1>
                <p>
                    Suite 3211, 3rd Fl., Bldg. 13, no. 35 Dongfu Road,<br />
                    Suzhou Industrial Park, Suzhou, Jiangsu prov.,<br />
                    People's Republic of China 215123<br />
                    +86 (0)512 62825261 / +86 153 7181 8939
                </p>
            </div>
        </PageStructure>
    );
}

export default ContactEn;