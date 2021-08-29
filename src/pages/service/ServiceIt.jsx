import React from 'react';
import './ServiceEn.scss';
import 'antd/dist/antd.css';
import PageStructure from '@/components/pagestructure/PageStructure';
import { Anchor } from 'antd';
import service_img from "@/assets/images/service.jpg";

const { Link } = Anchor;

function ServiceIt() {
    return (
        <PageStructure marginal>
            <div className="anchor-wrapper">
                <div className="anchor-header">
                    <Anchor offsetTop={90}>
                        <Link href="#consultancy" title="Consulenza Manifatturiera Generale" />
                        <Link href="#audit" title="Audit tecnici e di responsabilità sociale" />
                        <Link href="#qa-assessment" title="Valutazione QA della catena di fornitura" />
                        <Link href="#supervision" title="Supervisione del processo produttivo" />
                        <Link href="#inspection" title="Controllo qualità prima della spedizione" />
                        <Link href="#qa-assurance" title="Sistematizzazione dei processi di Quality Assurance" />
                        <Link href="#design" title="Design &#34;Italian Style&#34;" />
                    </Anchor>
                </div>
                <div className="anchor-content">
                    <div className="img-wrapper">
                        <img src={service_img} alt="service_img" />
                    </div>
                    <div id="consultancy" className="container">
                        <h2>Consulenza Manifatturiera Generale</h2>
                        <div>
                            <p>
                                Gli specialisti di <b>Glocal Asian Solutions'</b> possono mettere al vostro servizio la propria esperienza e conoscenza, per fornirvi consulenze in ambito industriale, manifatturiero, qualità e marketing in riferimento ai seguenti settori merceologici:
                            </p>
                            <ul>
                                <li>Elettronica di consumo</li>
                                <li>Elettrodomestici</li>
                                <li>Industria elettromeccanica in generale</li>
                                <li>Energie rinnovabili</li>
                                <li>Prodotti pirotecnici</li>
                                <li>Prodotti IT (computer e simili)</li>
                                <li>Medicali</li>
                                <li>Strumenti musicali</li>
                                <li>Telecominicazioni</li>
                                <li>Giocattoli</li>
                            </ul>
                        </div>
                    </div>
                    <div id="audit" className="container">
                        <h2>Audit Tecnici e di Responsabilità Sociale</h2>
                        <div className="sub-container">
                            <h3>Preliminary Assessment Audit (PAA):</h3>
                            <ul>
                                <li>
                                    Questo audit si fa al momento che ci si avvicina ad un potenziale nuovo partner, per verificarne la potenzialità <b>prima</b> di iniziare ad operare con esso.
                                </li>
                            </ul>
                            <p>
                                L'audit tocca 4 aspetti: <b>adeguatezza industriale</b>, <b>solidità del sistema di qualità</b>, <b>conformità ambientale</b>, <b>responsabilità sociale</b>. Su richiesta, è possibile includere un tratteggio di massima della <b>situazione finanziaria</b> in termini di affidabilità.
                            </p>
                        </div>
                        <div className="sub-container">
                            <h3>Technical Factory Audit (TFA):</h3> 
                            <p>
                                Questo audit è specifico per partner consolidati. L'audit ha come scopo quello di accertare in modo approfondito le <b>capacità industriali</b> e di <b>controllo della qualità</b>. Audit da ripetere ad intervalli regolari.
                            </p>
                        </div>
                        <div className="sub-container">
                            <h3>Social Accountability &amp; Environmental Compliance Audit (SAECA) <font color="#ff0000">*</font>:</h3>
                            <ul>
                                <li>
                                    Questo audit è disponibile unicamente per entità della Repubblica Popolare Cinese.
                                </li>
                            </ul>
                            <p>
                                L'audit mira ad accertare lo stato di responsabilità sociale secondo i diritti umani e del lavoro, conformemente alle disposizioni dello standard internazionale SA8000 (ILO), includendo altresì un'analisi della situazione relativa alla conformità ambientale.
                            </p>
                        </div>
                        <div className="sub-container">
                            <h3>Customs-Trade Partnership Against Terrorism (C-TPAT):</h3> 
                            <p>
                                Audit ideato dal Customs and Border Protection (CBP) degli Stati Uniti, nell'ambito di un programma per la sicurezza anti-terrorismo nelle catene di fornitura. L'audit si prefigge di incentivare le aziende sottoposte ad audit a rafforzare I propri sistemi di sicurezza ed è attualmente richiesto solo per gli importatori degli U.S.A.
                            </p>
                        </div>
                        <div className="sub-container">
                            <h3>Good Manufacturing Practice (GMP) <font color="#ff0000">*</font>:</h3>
                            <ul>
                                <li>
                                    Le cosiddette "Good Manufacturing Practices (GMP)" sono quelle procedure richieste dagli enti preposti al controllo della produzione e della vendita di alimenti e bevande, di prodotti cosmetici e farmaceutici e dei dispositivi medicali. Questo audit si prefigge, infatti, di verificare la conformità dei siti produttivi a tali regole.
                                </li>
                            </ul>
                            <p>
                                Tuttavia, nonostante questo audit sia pensato per le merceologie di cui sopra, si rivela oltremodo adatto per ogni altro tipo di prodotto, specialmente quando sia richiesta una garanzia di tracciabilità della produzione.
                            </p>
                        </div>
                        <div>
                            <p><font color="#ff0000">*</font><i>I report di questi audit sono solo per uso interno del committente.</i></p>
                        </div>
                    </div>
                    <div id="qa-assessment" className="container">
                        <h2>Valutazione dei sistemi di qualità nella catena di fornitura</h2>
                        <div>
                            <p>
                                <b>La valutazione dei sistemi di qualità in una catena di fornitura è un'attività preparatoria</b> che deve essere, successivamente, integrata dalla <b>Supervisione del Processo Produttivo</b>.
                            </p>
                            <ul>
                                <li>
                                    Valutazione dell'efficienza dei sistemi di qualità esistenti in ogni anello della catena e della relativa capacità, per ognuno, di mantenere stabile la qualità del prodotto;
                                </li>
                                <li>
                                    Individuazione dei problemi e approntamento delle soluzioni necessarie;
                                </li>
                                <li>
                                    Monitoraggio sull'effettiva messa in atto delle soluzioni indicate.
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div id="supervision" className="container">
                        <h2>Supervisione del Processo Produttivo</h2>
                        <div>
                            <p>
                                <b>La Supervisione del Processo Produttivo</b> è un'attività che si prefigge di ridurre drasticamente il rischio di produrre merce difettosa e, conseguentemente, di evitare onerosi costi di rilavorazione o, nel caso particolare di prodotti non rilavorabili, addirittura la distruzione della merce:
                            </p>
                            <ul>
                                <li>
                                    Analisi dell'intero processo manifatturiero;
                                </li>
                                <li>
                                    Individuazione dei problemi e approntamento delle soluzioni necessarie;
                                </li>
                                <li>
                                    Monitoraggio sull'effettiva messa in atto delle soluzioni indicate.
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div id="inspection" className="container">
                        <h2>Controllo Qualità Prima della Spedizione (PSI)</h2>
                        <div className="sub-container">
                            <h3>Criteri di resa del servizio:</h3>
                            <p>
                                Ci sono <b>2 modi</b> per rendere questo servizio:
                            </p>
                            <ul>
                                <li>
                                    Preparare una lista di controllo (check-list) personalizzata, basandosi sulle linee guida, sulle richieste e sulle aspettative (AQL) del Cliente;
                                </li>
                                <li>
                                    Usare la lista di controllo (check-list) già esistente e fornita dal Cliente.
                                </li>
                            </ul>
                        </div>
                        <div className="sub-container">
                            <h3>Garanzia del servizio di ispezione:</h3>
                            <p>
                                Grazie alla particolarità delle nostre procedure e salvo diversi accordi presi con il Cliente, <b>i nostri rapporti di ispezione sono sempre accompagnati da garanzie legalmente valide</b> emesse dal fabbricante.
                            </p>
                        </div>
                    </div>
                    <div id="aq-assurance" className="container">
                        <h2>Sistematizzazione dei processi di Quality Assurance</h2>
                        <div>
                            <h3>Criteri di resa del servizio:</h3>
                            <ul>
                                <li>
                                    Analisi, verifica e valutazione dei sistemi di qualità esistenti presso unità manifatturiere;
                                </li>
                                <li>
                                    Progettazione e realizzazione ex-novo di sistemi di qualità presso unità manifatturiere che ne siano prive, o che intendano sostituirli, seguendo le richieste e le linee guida del Cliente.
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div id="design" className="container">
                        <h2>Design "Italian Style"</h2>
                        <div>
                            <p>
                                Non importa di dove siate, né a quale cultura apparteniate: aggiungere un tocco di "Italian Style" ai vostri prodotti è una delle soluzioni più efficaci per guadagnare posizioni di prestigio sul mercato.
                                <br />
                                Grazie ai nostri servizi di design, in caso di produzioni non italiane, potrete comunque adornare legittimamente i vostri articoli della dicitura <b>"<font color="#740B0F">Designed in Italy</font>"</b>.
                            </p>
                            <ul>
                                <li>
                                    Design Italian-Style, funzionale ed estetico, delle confezioni di vendita al dettaglio (gift-boxes);
                                </li>
                                <li>
                                    Design Italian-Style per prodotti di consumo.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </PageStructure>
    );
}

export default ServiceIt;