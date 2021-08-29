import React from 'react';
import './TradeEn.scss';
import PageStructure from '@/components/pagestructure/PageStructure';
import trade_img from "@/assets/images/trade.jpg";

function TradeIt() {
    return (
        <PageStructure marginal>
            <div className="container">
                <div className="need">
                    <div className="img-wrapper">
                        <img src={trade_img} alt="trade_img" />
                    </div>
                    <div className="need-text">
                        <h1>Volete acquistare in Cina?</h1>
                        <h1>Volete vendere in Cina?</h1>
                        <h1>Avete un progetto da realizzare in Cina?</h1>
                        <h1>Chiedete a noi.</h1>
                    </div>
                </div>
            </div>
            <div className="container trade-content">
                <p>
                    Grazie alla profonda conoscenza ed esperienza sul mercato cinese, Glocal Asian Solutions può fornire il proprio supporto in questi ambiti:
                </p>
                <ul>
                    <li>Acquisti nella Repubblica Popolare Cinese (export);</li>
                    <li>Vendere in Cina (import);</li>
                    <li>Acquisti e vendite all'interno della Repubblica Popolare Cinese;</li>
                    <li>Ricerca e selezione potenziali clienti / fornitori / prodotti nella Repubblica Popolare Cinese;</li>
                    <li>Ricerche di mercato;</li>
                    <li>Consulenze industriali e commerciali;</li>
                    <li>Studi di fattibilità per la realizzazione di filiali nella Repubblica Popolare Cinese;</li>
                    <li>Facoltà di rappresentare legalmente proprietari non cinesi di brevetti e marchi.</li>
                </ul>
                <p>
                    <b>NB: In acquisto dalla Cina, tutte le nostre forniture comprendono gratuitamente l'ispezione di controllo qualità prima della spedizione.</b>
                </p>
            </div>
        </PageStructure>
    );
}

export default TradeIt;