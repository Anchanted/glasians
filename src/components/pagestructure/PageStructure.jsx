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
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div className="page">
            <div className="header-wrapper">
                <div className="header">
                    <nav className="header-navbar">
                        <a className="header-navbar-brand" href={`/${lang}`}>
                            <img src={logo} alt="logo" />
                        </a>
                        <ul className="header-navbar-nav">
                            <li className="header-navbar-nav-item">
                                <NavLink exact to={`/${lang}/intro`}>
                                    <span>{t("nav.intro")}</span>
                                </NavLink>
                            </li>
                            <li className="header-navbar-nav-item">
                                <NavLink exact to={`/${lang}/service`}>
                                    <span>{t("nav.service")}</span>
                                </NavLink>
                            </li>
                            <li className="header-navbar-nav-item">
                                <NavLink exact to={`/${lang}/trade`}>
                                    <span>{t("nav.trade")}</span>
                                </NavLink>
                            </li>
                            <li className="header-navbar-nav-item">
                                <NavLink exact to={`/${lang}/contact`}>
                                    <span>{t("nav.contact")}</span>
                                </NavLink>
                            </li>
                        </ul>
                        <ul className="header-navbar-lang">
                            <li className="header-navbar-lang-item">
                                <a href={`/it/${navName}`}>
                                    <img src={lang_it} alt="lang_it" />
                                </a>
                            </li>
                            <li className="header-navbar-lang-item">
                                <a href={`/zh/${navName}`}>
                                    <img src={lang_zh} alt="lang_zh" />
                                </a>
                            </li>
                            <li className="header-navbar-lang-item">
                                <a href={`/en/${navName}`}>
                                    <img src={lang_en} alt="lang_en" />
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
            <div className={`body ${props.marginal ? "margin" : null}`}>
                {props.children}
            </div>
            <div className="footer">
                <p>Copyright &copy; 2020-2021 Glocal Asian Solutions (Suzhou) Co., Ltd. All Rights Reserved.</p>
            </div>
        </div>
    );
}

export default PageStructure;