import React from 'react';
import './ContactEn.scss';
import PageStructure from '@/components/pagestructure/PageStructure';

function ContactEn() {
    return (
        <PageStructure marginal>
            <div className="container contact">
                <h1>苏州嘉雅仕信息服务有限公司</h1>
                <p>
                    苏州工业园区东富路35号1号楼三层3211室,<br />
                    邮编：215123<br />
                    +86 (0)512 62825261 / +86 153 7181 8939
                </p>
            </div>
        </PageStructure>
    );
}

export default ContactEn;