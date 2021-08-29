import React from 'react';
import './TradeEn.scss';
import PageStructure from '@/components/pagestructure/PageStructure';
import trade_img from "@/assets/images/trade.jpg";

function TradeEn() {
    return (
        <PageStructure marginal>
            <div className="container">
                <div className="need">
                    <div className="img-wrapper">
                        <img src={trade_img} alt="trade_img" />
                    </div>
                    <div className="need-text">
                        <h1>Do you need to buy in China?</h1>
                        <h1>Do you need to sell in China?</h1>
                        <h1>Do you have a project to be carried out in China?</h1>
                        <h1>Ask us.</h1>
                    </div>
                </div>
            </div>
            <div className="container trade-content">
                <p>
                    Thanks to our deep knowledge and expertise about the Chinese market, Glocal Asian Solutions is able to support you in these ambits:
                </p>
                <ul>
                    <li>Purchases (exportations) from the P.R.C.;</li>
                    <li>Importations (sales) to the P.R.C.;</li>
                    <li>Sales and/or purchases within the P.R.C.;</li>
                    <li>Scouting for customers/suppliers/products in the P.R.C.;</li>
                    <li>Market researches;</li>
                    <li>Feasibility studies for the setting up of branch offices in the People's Republic of China;</li>
                    <li>Industrial and commercial consultancies;</li>
                </ul>
                <p>
                    Power to represent non-Chinese owners of patents and registered trademarks in the P.R.C. courts and lawsuits.
                </p>
                <p>
                    <b>NB: All of our supplies include a free of charge quality control inspection before the shipment.</b>
                </p>
            </div>
        </PageStructure>
    );
}

export default TradeEn;