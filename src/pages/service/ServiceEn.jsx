import React from 'react';
import './ServiceEn.scss';
import 'antd/dist/antd.css';
import PageStructure from '@/components/pagestructure/PageStructure';
import { Anchor } from 'antd';

const { Link } = Anchor;

function ServiceEn() {
    return (
        <PageStructure marginal>
            <div className="anchor-wrapper">
                <div className="anchor-header">
                    <Anchor offsetTop={90}>
                        <Link href="#consultancy" title="General manufacturing consultancy" />
                        <Link href="#audit" title="Technical and Social Audits" />
                        <Link href="#qa-assessment" title="QA assessment of Supply Chains" />
                        <Link href="#supervision" title="Manufacturing Process Supervision" />
                        <Link href="#inspection" title="Pre-Shipment Inspections" />
                        <Link href="#qa-assurance" title="Quality Assurance (QA) systematization" />
                        <Link href="#design" title="&#34;Italian Style&#34; Design" />
                    </Anchor>
                </div>
                <div className="anchor-content">
                    <div id="consultancy" className="container">
                        <h2>General manufacturing consultancy</h2>
                        <div>
                            <p>
                                <b>Glocal Asian Solutions’</b> specialists can put their expertise and knowledge at your service, to provide you with industrial, manufacturing, quality and marketing and consultancies concerning various product sectors, including:
                            </p>
                            <ul>
                                <li>Consumer electronics</li>
                                <li>Electric Household Appliances</li>
                                <li>Electromechanics and Engineering Industry in general</li>
                                <li>Energy</li>
                                <li>Fireworks</li>
                                <li>IT products</li>
                                <li>Medicals</li>
                                <li>Musical Instruments</li>
                                <li>Telecommunications</li>
                                <li>Toys</li>
                                <li>Fireworks</li>
                            </ul>
                        </div>
                    </div>
                    <div id="audit" className="container">
                        <h2>Technical and Social Audits</h2>
                        <div className="sub-container">
                            <h3>Preliminary Assessment Audit (PAA):</h3>
                            <ul>
                                <li>
                                    If approaching a possible new business partner, this audit is what our Customer really needs to be in a condition to carry out a reliable evaluation <b>before</b> to start with the business.
                                </li>
                            </ul>
                            <p>
                                This kind of audit mainly concerns 4 aspects: <b>industrial capability</b>, <b>quality system reliablity</b>, <b>environmental compliance</b> and <b>social accountability</b>. On demand, it is possible to add a sketch out of the <b>financial eligibility</b>.
                            </p>
                        </div>
                        <div className="sub-container">
                            <h3>Technical Factory Audit (TFA):</h3> 
                            <p>
                                For well-settled business partners. It aims to assess the <b>industrial and quality capabilities</b> in an in-depth way. It should be repeated at regular intervals.
                            </p>
                        </div>
                        <div className="sub-container">
                            <h3>Social Accountability &amp; Environmental Compliance Audit (SAECA) <font color="#ff0000">*</font>:</h3>
                            <ul>
                                <li>
                                    Only available for legal entities within the territory of the People’s Republic of China.
                                </li>
                            </ul>
                            <p>
                                This audit aims to assess the Social Accountability status in terms of labour and human rights, following the international standards SA8000 (ILO), also including working safety conditions and environmental compliance.
                            </p>
                        </div>
                        <div className="sub-container">
                            <h3>Customs-Trade Partnership Against Terrorism (C-TPAT):</h3> 
                            <p>
                                This audit responds to a supply-chain security program led by U.S.A. Customs and Border Protection (CBP), focused on improving the security of private companies' supply chains with respect to terrorism. This is requested for U.S.A. importers.
                            </p>
                        </div>
                        <div className="sub-container">
                            <h3>Good Manufacturing Practice (GMP) <font color="#ff0000">*</font>:</h3>
                            <ul>
                                <li>
                                    Good manufacturing practices (GMP) are the practices required in order to conform to the guidelines recommended by agencies that control the authorization and licensing of the manufacture and sale of food and beverages, cosmetics, pharmaceutical products, dietary supplements, and medical devices. This audit aims to assess the actual status of the manufacturing site on this purpose.
                                </li>
                            </ul>
                            <p>
                                Although this kind of audit was thought out for the above said purposes of foods and drugs, it is also very much suitable for any other kind of consumer products, especialy as far as the manufacturing traceability ambit is concerned.
                            </p>
                        </div>
                        <div>
                            <p><font color="#ff0000">*</font><i>Audit reports for internal use only.</i></p>
                        </div>
                    </div>
                    <div id="qa-assessment" className="container">
                        <h2>QA assessment of Supply Chains</h2>
                        <div>
                            <p>
                                <b>The QA assessment of a supply chain is a preparatory activity</b> which is to be afterward integrated by the <b>Manufacturing Process Supervision</b>.
                            </p>
                            <ul>
                                <li>
                                    evaluation about the efficiency of the existing quality systems for each piece of the chain and their capability to maintain stability of the manufactìuring result;
                                </li>
                                <li>
                                    problem spotting and working out of solutions;
                                </li>
                            </ul>
                            <p>
                                monitoring the implementing of the solutions in the manufacturing process.
                            </p>
                        </div>
                    </div>
                    <div id="supervision" className="container">
                        <h2>Manufacturing Process Supervision</h2>
                        <div>
                            <p>
                                <b>The manufacturing process supervision, is an activity</b> aimed to drastically reduce the risk of rejections during the PSI and, consequently, to avoid costly reworks:
                            </p>
                            <ul>
                                <li>
                                    analysis of the whole manufacturing process;
                                </li>
                                <li>
                                    problem spotting and working out of solutions;
                                </li>
                            </ul>
                            <p>
                                monitoring the implementing of the solutions in the process.
                            </p>
                        </div>
                    </div>
                    <div id="inspection" className="container">
                        <h2>Pre-Shipment Inspections</h2>
                        <div className="sub-container">
                            <h3>Performance criteria:</h3>
                            <p>
                                There are 2 ways to render this service:
                            </p>
                            <ul>
                                <li>
                                    to prepare a bespoke inspection list (check-list) and related AQL on behalf of our Clients, follwing their requirements, guidelines and expectations;
                                </li>
                                <li>
                                    to use check-list and AQL provided by the Clients.
                                </li>
                            </ul>
                        </div>
                        <div className="sub-container">
                            <h3>Performance guarantees:</h3>
                            <p>
                                Thanks to our special procedure and unless a different agreement has been set with the Customer, <b>our PSI reports provide the Customer with a legally valid guarantee</b> released by the Manufacturer.
                            </p>
                        </div>
                    </div>
                    <div id="aq-assurance" className="container">
                        <h2>Quality Assurance (QA) systematization</h2>
                        <div>
                            <h3>Performance criteria:</h3>
                            <ul>
                                <li>
                                    Analysis, test and evaluation of existing Quality Systems of manufacturing sites;
                                </li>
                                <li>
                                    Designing and setting-up of ex-novo QA Systems, proportionated to the requirements and guidelines of the Customer.
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div id="design" className="container">
                        <h2>"Italian Style" Design</h2>
                        <div>
                            <p>
                                No matter where you are from: adding a touch of  “Italian Style” to your products is one of the most efficacious solutions to gain a leading position in the marketplace.
                                <br />
                                Using our services, you will be enabled to legitimately adorn your products with the wording: <b>"<font color="#740B0F">Designed in Italy</font>"</b>.
                            </p>
                            <ul>
                                <li>
                                    Italian-Style aesthetic and functional design of retail boxes (gift-boxes);
                                </li>
                                <li>
                                    Italian-Style aesthetic design of consumer goods.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </PageStructure>
    );
}

export default ServiceEn;