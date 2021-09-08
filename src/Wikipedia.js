import styled from 'styled-components';
// import { MEDIA_QUERY_MD, MEDIA_QUERY_LG } from './constants/style';
import logo from './pic/zhwiki2.png';
import { FormattedMessage, IntlProvider } from "react-intl";
import { useState, useEffect } from 'react';
import WikipediaProjects from './WikipediaProjects';
import WikipediaEdu from './WikipediaEdu';
import WikipediaBox from './WikipediaBox';
import WikipediaExperience from './WikipediaExperience';
import WikipediaSkillsAndOthers from './WikipediaSkillsAndOthers';

const WikiWrapper = styled.div`
  display: flex;
  background-color:#f6f6f6;
  // overflow-y: scroll;
`

const WikiLeftBar = styled.div`
  min-width: 160px;
  @media(max-width: 768px) {
    min-width: 100px;
  }
`

const Logo = styled.img`
  width: 135px;
  height: 155px;
  @media(max-width: 768px) {
    width: 101px;
    height: 116px;
  }
`

const WikiLeftBarContent = styled.div`
  font-size: 12px;
  color： #0645ad;
  margin: 0 0.6em 0 0.7em;
  padding: 0.2em 0;
`

const WikiMain = styled.div`
  margin-top: 80px;
  border: 1px solid #a7d7f9;
  border-right-width: 0;
  width: 100%;
  background-color: #ffffff;
  padding: 1em;
  line-height: 1.6;
`

const WikiTitle = styled.div`
  font-size: 28px;
  border-bottom: 1px solid #a2a9b1;
`

const WikiSubTitle = styled.div`
  font-size: 22px;
  border-bottom: 1px solid #a2a9b1;
`

const WikiContent = styled.div`
  margin-top: 12px;
`

const WikiInfoBox= styled.table`
  border: 1px solid #a2a9b1;
  background-color: #f8f9fa;
  color: black;
  padding: 0.2em;
  float: right;
  width: 280px;
  font-size: small;
  line-height: 1.5em;
  margin-bottom: 5px;
`
const WikiBoxTr = styled.tr`
  display: table-row;
  max-width: 20px;
`

const WikiBoxTh = styled.th`
  text-align: center;
  font-weight: bold;
  font-size: 120%;
  background: #d3d3d3;
`

const WikiBoxSubTh = styled.th`
  text-align: center;
  background: #d3d3d3;
`
const WikiBoxSubLeft = styled.th`
  text-align: left;
  white-space: nowrap;
  vertical-align: top;
`

const WikiBoxSubRight = styled.td`
  text-align: left;
`

const WikiBoxSubTh_2 = styled.th`
  text-align: center;
`

const Links = styled.a`
  text-decoration: none;
  color: #0645ad;
`

const ToggleButton = styled.span`
  cursor: pointer;
  color: #0645ad;
  font-size: 10px;
`

const BottomContent = styled.div`
  color: #0645ad;
  text-align: right;
  text-decoration: none;
`

export { 
  ToggleButton, WikiContent, Links, WikiInfoBox,
  WikiBoxTr, WikiBoxTh, WikiBoxSubTh_2, 
  WikiBoxSubTh, WikiBoxSubRight, WikiBoxSubLeft 
}


export default function Wikipedia () {
  const [lang, setLang] = useState('cn')
  const [locale, setLocale] = useState('cn')

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(`./lang/${lang}.json`)
      const data = await res.json()
      setLocale(data)
    }
    fetchData()
  },[lang])

  return (
    <IntlProvider
      messages={locale}
    >
      <WikiWrapper>
        <WikiLeftBar>
          {/* <img src={icon} width="135px" height="155px"/> */}
          <Logo src={logo}/>
          <WikiLeftBarContent>
            <FormattedMessage
              id="wiki.home"
              defaultMessage="首頁"            
            />
          </WikiLeftBarContent>
          <WikiLeftBarContent>
            <select
              value={lang}
              onChange={(e) => {
                setLang(e.target.value);
              }}
            >
              <option value="en">English</option>
              <option value="cn">中文</option>
            </select>
          </WikiLeftBarContent>
        </WikiLeftBar>
        <WikiMain>
          <WikiTitle>
            <FormattedMessage
              id="wiki.title"
              defaultMessage="李彥志 個人履歷"            
            />
          </WikiTitle>
          <h3>應徵職位：110年度研發替代役 - 前端工程師  </h3>
          <WikiContent>
            <p>
              <FormattedMessage
                id="wiki.titleContent"
                defaultMessage="李彥志（ 英語：Yen-Chih Li Jackson，1996年4月4日 -），臺北醫學大學醫學資訊所碩士。大四時曾任前端實習生，碩士在學期間主要研究醫療資訊標準 - FHIR，並協助維護新北市雙和醫院內外科病房的相關儀器、建立該單位的研究記錄系統。在碩士的學習過程中，察覺自己對前端較有興趣，因此在碩二下時報名 Huli 老師的第五期程式導師計劃，透過線上課程精進自己對前端的知識。"            
              />  
            </p>
          </WikiContent>
          {/* personal information box */}
          <WikipediaBox/>
          <WikiSubTitle>
            <FormattedMessage
                  id="wiki.education"
                  defaultMessage="教育程度"            
            />  
          </WikiSubTitle>
          {/* education information box */}
            <WikipediaEdu/>
          <WikiSubTitle>
            <FormattedMessage
              id="wiki.workExperience"
              defaultMessage="工作經歷"            
            />
          </WikiSubTitle>
          {/* work experience information */}
            <WikipediaExperience/>
          <WikiSubTitle>
            <FormattedMessage
              id="wiki.Projects"
              defaultMessage="資訊相關作品及練習"            
            />
          </WikiSubTitle>
          {/* Projects information */}
            <WikipediaProjects/>
            <br/>
          <WikiSubTitle>
            <FormattedMessage
              id="wiki.SkillsAndOthers"
              defaultMessage="專長與其他經歷"            
            />
          </WikiSubTitle>
          {/* Skills and others information */}
            <WikipediaSkillsAndOthers/>
            <br/>
          <WikiSubTitle>
            <FormattedMessage
              id="wiki.Contact"
              defaultMessage="聯絡方式"            
            />
          </WikiSubTitle>
          <WikiContent>
            E-mail：M610108008@tmu.edu.tw <br/>
            Phone：0968090763 <br/>
            LinkedIn : <Links href='https://www.linkedin.com/in/yc-li-7aa68315a/' target="_blank">linkedin.com/in/yc-li-7aa68315a/</Links>
          </WikiContent>
        </WikiMain>
      </WikiWrapper>
      <BottomContent><Links href="https://www.cleanpng.com/png-wikipedia-logo-encyclopedia-wikimedia-foundation-e-1334294/preview.html">logo source</Links></BottomContent>
    </IntlProvider>
  )
}
