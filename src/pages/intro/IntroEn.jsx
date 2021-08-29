import React from 'react';
import './IntroEn.scss';
import PageStructure from '@/components/pagestructure/PageStructure';
import logo_vertical from "@/assets/images/logo_vertical.png";

function IntroEn() {
    return (
        <PageStructure marginal>
            <div className="container intro-img">
                <div className="img-wrapper">
                    <img src={logo_vertical} alt="logo_vertical" />
                </div>
            </div>
            <div className="container intro-content">
                <p><b>Glocal Asian Solutions</b> is a Chinese company established in 2020, headed by Italian Management who boasts an <b>over thirty years' experience</b> in dealing with Chinese and overseas markets.</p>
                <p>
                    <b>Glocal Asian Solutions</b> is a <b>multiform</b> enterprise, who can: <br />
                    - <b>trade</b> and/or be a <b>broker</b> both in <b>import</b> and <b>export</b> from/to the P.R.C. for almost any kind ofcommodity; <br />
                    - <b>provide industrial consultancies</b> in terms of <b>quality</b> of the manufacturing process, supply chain monitoring for <b>quality assurance</b>, <b>social accountability</b>, etc.
                </p>
                <p><b>Glocal Asian Solutions'</b> business model is well founded on the <b>western culture</b>, concerning various commodities, activities and different business fields.</p>
                <p>We believe we have a distinctive and personal approach. <b>Glocal Asian Solutions'</b> operation will be <b>flexible</b> and <b>competitive</b>.</p>
                <p><b>Glocal Asian Solutions'</b> most important aim is to put <b>experience</b> and <b>knowledge</b> to the service of its customers, enhancing their business, with no disappointment.</p>
            </div>
            <div className="container intro-other">
                <h2>F.A.Q.</h2>
                <div>
                    <h3>Which are your references?</h3>
                    <p>Although our company has been established recently, our Managers have been working for decades on behalf of some of the most significant multinational companies and their work and decisions are marked by principles and rules which are peculiar to criteria, modalities and procedures of a structured organization.</p>
                </div>
                <div>
                    <h3>Which guarantees are you able to offer to your customers?</h3>
                    <p>
                        Each business has its own characteristics and, therefore, each business will be carried out under its own appropriate conditions and guarantees. <br />
                        A famous Chinese saying, goes: 双赢 <i>(pron. shuān gyíng)</i> an it is also known as "WIN-WIN" in English. <br />
                        In a business relationship, all concurrent parts shall be satisfied without letdowns, if they want the business to be successful and proficuous for everyone.
                    </p>
                </div>
                <div>
                    <h3>Why shoud I choose you as a partner for my business?</h3>
                    <p>Because we are damn smart and expert, reliable and honest, quick and flexible, competent and, most of all, very much competitive.</p>
                </div>
            </div>
        </PageStructure>
    );
}

export default IntroEn;