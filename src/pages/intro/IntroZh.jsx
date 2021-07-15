import React from 'react';
import './IntroEn.scss';
import PageStructure from '@/components/pagestructure/PageStructure';
import logo_vertical from "@/assets/images/logo_vertical.png";

function IntroZh() {
    return (
        <PageStructure marginal>
            <div className="container">
                <div className="img-wrapper">
                    <img src={logo_vertical} alt="logo_vertical" />
                </div>
            </div>
            <div className="container">
                <p><b>苏州嘉雅仕信息服务有限公司</b>是一个于<b>2020</b>年创建的中国企业，管理层是<b>意大利人</b>，拥有<b>超过30年</b>的对国内和海外市场的经验。</p>
                <p>
                    <b>苏州嘉雅仕信息服务有限公司</b>是一个多平台公司，我们提供： <br />
                    - 几乎所有种类商品的进口和出口中国市场，直接贸易或者作为中间商； <br />
                    - 提供制造过程品质方面的行业咨询，品质保证、社会责任等方面的供应商链模拟分析。
                </p>
                <p><b>苏州嘉雅仕信息服务有限公司</b>的商业模式牢固地建立在西方文化传统中，包含了不同种类的商品、活动和不同的商业领域</p>
                <p>我们相信我们拥有独特和点对点的交流方式。<b>苏州嘉雅仕信息服务有限公司</b>的运作灵活有效，富有竞争力。</p>
                <p><b>苏州嘉雅仕信息服务有限公司</b>最重要的目标是将我们的经验和专业服务于客户，让客户的商业更成功，绝不会让客户失望。</p>
            </div>
            <div className="container">
                <h2>常见问题 (F.A.Q.)</h2>
                <div>
                    <h3>您有什么背景依靠吗？</h3>
                    <p>尽管我们的公司不久前才成立，管理层曾在最有影响力的跨国公司工作了几十年，他们根据企业规范的标准、方式和流程运作和决策。</p>
                </div>
                <div>
                    <h3>您能为客户提供什么保证？</h3>
                    <p>
                        每个行业都有各自的特点，因此有着关于它的相应的条件和保证。
                        有一句中国流行语“双赢”在英文中也有对应的词汇“Win-Win”。
                        在合作关系里面，参与方都应获得益处，不应让任何一方失望，这样才能使合作成功地开展，使合作对大家都获利。
                    </p>
                </div>
                <div>
                    <h3>为什么我要选择您作为我的商业伙伴？</h3>
                    <p>因为我们智慧、专业、可靠、诚实，能机动灵活地应对各种问题挑战，最重要的是，充满竞争力。</p>
                </div>
            </div>
        </PageStructure>
    );
}

export default IntroZh;