import React from 'react';
import './ServiceEn.scss';
import 'antd/dist/antd.css';
import PageStructure from '@/components/pagestructure/PageStructure';
import { Anchor } from 'antd';
import service_img from "@/assets/images/service.jpg";

const { Link } = Anchor;

function ServiceZh() {
    return (
        <PageStructure marginal>
            <div className="anchor-wrapper">
                <div className="anchor-header">
                    <Anchor offsetTop={90}>
                        <Link href="#consultancy" title="综合制造类咨询" />
                        <Link href="#audit" title="技术和社会审核" />
                        <Link href="#qa-assessment" title="供应商链品质控制评估" />
                        <Link href="#supervision" title="生产过程监督" />
                        <Link href="#inspection" title="验货" />
                        <Link href="#qa-assurance" title="质量控制(QA)体系化" />
                        <Link href="#design" title="“意大利风格”设计" />
                    </Anchor>
                </div>
                <div className="anchor-content">
                    <div className="img-wrapper">
                        <img src={service_img} alt="service_img" />
                    </div>
                    <div id="consultancy" className="container">
                        <h2>综合制造类咨询</h2>
                        <div>
                            <p>
                                <b>嘉雅仕信息服务有限公司</b>的专家们用他们的专业知识为您服务，可以为多种行业的产品提供工业、制造、品质和市场方面的咨询，包括：
                            </p>
                            <ul>
                                <li>一般性消费电子产品</li>
                                <li>家用电器</li>
                                <li>综合的电子电器行业</li>
                                <li>能源</li>
                                <li>烟火</li>
                                <li>IT产品</li>
                                <li>生物制药</li>
                                <li>乐器</li>
                                <li>电信</li>
                                <li>玩具</li>
                            </ul>
                        </div>
                    </div>
                    <div id="audit" className="container">
                        <h2>技术和社会审核</h2>
                        <div className="sub-container">
                            <h3>预审评估审核(PAA):</h3>
                            <ul>
                                <li>
                                在开始新的合作关系前，我们的顾客真正需求的就是在合作开始<b>之前</b>，进行这个审核，以对合作伙伴做出可靠的评估。
                                </li>
                            </ul>
                            <p>
                            这类审核通常包含四个方面：<b>制造能力</b>，<b>质量体系可靠性</b>，<b>符合环保要求</b>，<b>符合社会责任要求</b>。有需要的话，还可能加上<b>金融可靠性评估</b>。
                            </p>
                        </div>
                        <div className="sub-container">
                            <h3>工厂技术审核(TFA):</h3> 
                            <p>
                            对于已有良好关系的合作伙伴，此项审核能在<b>制造</b>和<b>品质</b>能力方面提供一个较深入的评估。应该常规化定时进行此项审核。
                            </p>
                        </div>
                        <div className="sub-container">
                            <h3>社会责任&amp;环境要求审核 (SAECA) <font color="#ff0000">*</font>:</h3>
                            <ul>
                                <li>
                                    只对在中华人民共和国境内符合法律规定的实体可进行此项审核。
                                </li>
                                <li>
                                    此项审核是根据国际标准SA8000(ILO)，旨在进行评估劳工权利是否符合了社会责任要求，也包括了工作环境安全性要求和环境保护要求。
                                </li>
                            </ul>
                        </div>
                        <div className="sub-container">
                            <h3>海关-商贸反恐怖联盟(C-TPAT):</h3> 
                            <p>
                                此项审核是由美国海关和边境保护(CBP)发起的一个供应商链安全项目，主要集中目的为私人企业供应商链提供反恐方面的保护。此项审核是美国进口商会要求的审核项目。
                            </p>
                        </div>
                        <div className="sub-container">
                            <h3>良好生产规范(GMP)<font color="#ff0000">*</font>:</h3>
                            <ul>
                                <li>
                                    良好生产规范(GMP)是应对食品和饮料、化妆品、药物、日常用品和医学用品管理机构授权和发放执照要求产生的。该项审核的目的旨在评估生产现场的实际状况。
                                </li>
                            </ul>
                            <p>
                                尽管此类审核被认为是针对上述食品和药物类的，对其他任何种类的消费产品，特别是有明确可考察的制造过程的，都是十分有效和合适的。
                            </p>
                        </div>
                        <div>
                            <p><font color="#ff0000">*</font><i>仅供内部评估使用</i></p>
                        </div>
                    </div>
                    <div id="qa-assessment" className="container">
                        <h2>供应商链品质控制评估</h2>
                        <div>
                            <p>
                                <b>供应商链质量控制评估</b>是一个前期的要求，后续会融合到<b>生产过程监督</b>之中。
                            </p>
                            <ul>
                                <li>
                                    评估现存质量体系供应商链每个环节的效率，以保持生产结果的稳定性;
                                </li>
                                <li>
                                    定位问题，找到解决方案;
                                </li>
                                <li>
                                    在生产过程中监督执行解决方案。
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div id="supervision" className="container">
                        <h2>生产过程监督</h2>
                        <div>
                            <p>
                                <b>生产过程监督</b>，是一项能够大量减少验货被退货风险、从而避免高费用的返工的活动：
                            </p>
                            <ul>
                                <li>
                                    分析整个生产过程;
                                </li>
                                <li>
                                    定位问题，找到解决方案;
                                </li>
                                <li>
                                    在生产过程中监督执行解决方案。
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div id="inspection" className="container">
                        <h2>验货</h2>
                        <div className="sub-container">
                            <h3>执行标准:</h3>
                            <p>
                                有<b>两种</b>途径提供该项服务：
                            </p>
                            <ul>
                                <li>
                                    准备一项列好的检验清单(检查项目表)和相关的根据我们客户要求、指导和期望的AQL;
                                </li>
                                <li>
                                    使用客户提供的检查项目表和AQL进行检验。
                                </li>
                            </ul>
                        </div>
                        <div className="sub-container">
                            <h3>检验担保:</h3>
                            <p>
                                除了跟客户有特定协议之外，由于我们特有的流程，<b>我们的验货报告能为客户提供有法律效力的验货质量担保</b>。
                            </p>
                        </div>
                    </div>
                    <div id="aq-assurance" className="container">
                        <h2>质量控制(QA)体系化</h2>
                        <div>
                            <h3>执行标准:</h3>
                            <ul>
                                <li>
                                    分析、测试和评估现存的生产现场质量体系;
                                </li>
                                <li>
                                    根据客户的要求和指示框架，设计和建立全新的质量控制体系。 
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div id="design" className="container">
                        <h2>“意大利风格”设计</h2>
                        <div>
                            <p>
                                不管您来自哪里，为您的产品加入“意大利风格”元素是帮助您获得市场领先地位的最有效方案！
                                <br />
                                我们的服务能让您合法的为您的产品加上注脚：<b>“<font color="#740B0F">意大利设计</font>”</b>。
                            </p>
                            <ul>
                                <li>
                                    意大利风格的零售箱(彩盒)艺术和功能设计;
                                </li>
                                <li>
                                    意大利风格的消费产品艺术设计。
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </PageStructure>
    );
}

export default ServiceZh;