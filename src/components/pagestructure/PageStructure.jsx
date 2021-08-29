import React, { useEffect } from 'react';
import './PageStructure.scss';
import { NavLink, useParams } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import logo from "@/assets/images/logo.png";
import lang_it from "@/assets/images/lang_it.png";
import lang_zh from "@/assets/images/lang_zh.png";
import lang_en from "@/assets/images/lang_en.png";

function PageStructure(props) {
    const params = useParams();
    const lang = params.lang || "en";
    const navName = params.navName || "";
    // console.log(lang)

    const { t, i18n } = useTranslation();

    useEffect(() => {
        i18n.changeLanguage(lang);
        document.title = t('title')
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const sectionArr = ['intro', 'service', 'trade', 'contact'];
    const langArr = [
        {
            name: 'it',
            img: lang_it
        },
        {
            name: 'zh',
            img: lang_zh
        },
        {
            name: 'en',
            img: lang_en
        }
    ]

    return (
        <div className="page">
            <div className="header-wrapper">
                <div className="header">
                    <nav className="header-navbar">
                        <a className="header-navbar-brand" href={`/${lang}`}>
                            <img src={logo} alt="logo" />
                        </a>
                        <ul className="header-navbar-nav">
                            {
                                sectionArr.map(name =>
                                    <li key={name} className="header-navbar-nav-item">
                                        <NavLink exact to={`/${lang}/${name}`}>
                                            <span className={`nav-item ${name === navName ? 'nav-item-active' : ''}`}>{t(`nav.${name}`)}</span>
                                        </NavLink>
                                    </li>
                                )
                            }
                        </ul>
                        <ul className="header-navbar-lang">
                            {
                                langArr.map(e => 
                                    <li key={e.name} className="header-navbar-lang-item">
                                        <a href={`/${e.name}/${navName}`}>
                                            <img src={e.img} alt={`lang_${e.name}`} />
                                        </a>
                                    </li>
                                )
                            }
                        </ul>
                    </nav>
                </div>
            </div>
            <div className={`body ${props.marginal ? 'margin' : ''}`}>
                {props.children}
            </div>
            <div className="footer">
                <p>Copyright &copy; 2020-2021 Glocal Asian Solutions (Suzhou) Co., Ltd. All Rights Reserved.</p>
            </div>
        </div>
    );
}

export default PageStructure;