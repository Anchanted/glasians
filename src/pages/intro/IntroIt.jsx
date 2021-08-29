import React from 'react';
import './IntroEn.scss';
import PageStructure from '@/components/pagestructure/PageStructure';
import logo_vertical from "@/assets/images/logo_vertical.png";

function IntroIt() {
    return (
        <PageStructure marginal>
            <div className="container intro-img">
                <div className="img-wrapper">
                    <img src={logo_vertical} alt="logo_vertical" />
                </div>
            </div>
            <div className="container intro-content">
                <p><b>Glocal Asian Solutions</b> è un'azienda cinese nata nel 2020, ma diretta da Management italiano che vanta <b>oltre trent'anni</b> di esperienza nella gestione di operazioni industriali e commerciali in Cina e sui mercati esteri.</p>
                <p>
                    <b>Glocal Asian Solutions</b> è un'azienda <b>poliedrica</b>, che può: <br />
                    - <b>commerciare</b> e/o fare <b>mediazioni</b> sia in <b>import</b>, sia in <b>export</b>, da/verso la Repubblica Popolare Cinese, per svariate merceologie; <br />
                    - <b>fornire consulenze industriali</b> riguardo i processi produttivi in Cina, incluso il monitoraggio delle catene di fornitura ai fini del <b>controllo qualità</b> e della <b>responsabilità sociale</b> (<b>SA8000</b>, <b>ILO</b>, ecc.);
                </p>
                <p>Il modello di business di <b>Glocal Asian Solutions</b> riguarda molteplici merceologie ed altre diversificate attività in  vari settori e si fonda saldamente sulla <b>cultura occidentale</b>;</p>
                <p>Grazie alla peculiarità dei propri sistemi, l'operatività di <b>Glocal Asian Solutions'</b> è <b>flessibile</b> e <b>competitiva</b>.</p>
                <p><b>Glocal Asian Solutions</b> ha come obiettivo quello di mettere la propria <b>esperienza</b> e la propria <b>conoscenza</b> al completo servizio dei Clienti, per migliorare il loro business, senza delusioni.</p>
            </div>
            <div className="container intro-other">
                <h2>F.A.Q.</h2>
                <div>
                    <h3>Quali sono le vostre referenze?</h3>
                    <p>Nonostante la nostra azienda sia stata fondata nel Marzo 2020, i nostri Manager hanno prestato la propria opera in Cina, per decenni, a favore di gruppi multinazionali. Pertanto, il loro operato si ispira ai principi, alle regole, ai criteri, alle modalità ed alle procedure delle grandi organizzazioni strutturate.</p>
                </div>
                <div>
                    <h3>Quali garanzie potete offrire ai vostri clienti?</h3>
                    <p>
                        Ogni operazione ha le proprie caratteristiche, per cui, ogni volta, si deve operare secondo le condizioni e le garanzie che quel tipo di operazione richiede. <br />
                        Un famoso detto cinese, recita: 双赢 <i>(pron. shuān gyíng)</i> che significa, più o meno, "doppia vittoria" in italiano, cioè a dire che le due parti di un confronto escono entrambe vincitrici. <br />
                        Infatti, se si vuole che tutti restino soddisfatti, ogni operazione di affari deve essere condotta in modo che nessuna delle parti debba patire delusioni o compromessi vessatori, perché ciò provocherebbe, sul medio o lungo termine, una reazione che potrebbe danneggiare gravemente l'operazione.
                    </p>
                </div>
                <div>
                    <h3>Perché dovrei scegliere voi come partner per il mio lavoro?</h3>
                    <p>Perché siamo esperti, scaltri, affidabili ed onesti, rapidi e flessibili, ma, soprattutto, estremamente competitivi.</p>
                </div>
            </div>
        </PageStructure>
    );
}

export default IntroIt;