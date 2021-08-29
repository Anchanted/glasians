import React from 'react';
import './TradeEn.scss';
import PageStructure from '@/components/pagestructure/PageStructure';
import trade_img from "@/assets/images/trade.jpg";

function TradeZh() {
    return (
        <PageStructure marginal>
            <div className="container">
                <div className="need">
                    <div className="img-wrapper">
                        <img src={trade_img} alt="trade_img" />
                    </div>
                    <div className="need-text">
                        <h1>您需要从国外采购吗？</h1>
                        <h1>您需要在国外销售吗？</h1>
                        <h1>您在国外有任何项目业务需求吗？</h1>
                        <h1>来找我们吧！</h1>
                    </div>
                </div>
            </div>
            <div className="container trade-content">
                <p>
                    因我们对中国和国外市场的熟悉和专业，<b>苏州嘉雅仕信息服务有限公司</b>能在以下领域帮助您：
                </p>
                <ul>
                    <li>从中华人民共和国采购（或出口）</li>
                    <li>在中国人民共和国进口（或销售）</li>
                    <li>在中华人民共和国境内销售贸易</li>
                    <li>在中华人民共和国境内外寻找客户/供应商/产品</li>
                    <li>市场调研</li>
                    <li>行业和商业咨询</li>
                    <li>代理非中国本土的专利和注册商标关于中华人民共和国境内的法律事务和庭审</li>
                </ul>
                <p>
                    <b>注：我们的服务包括提供一次免费的验货</b>
                </p>
            </div>
        </PageStructure>
    );
}

export default TradeZh;