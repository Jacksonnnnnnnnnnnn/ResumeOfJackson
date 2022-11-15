import { FormattedMessage } from "react-intl";
import { WikiContent, Links } from './Wikipedia';

export default function WikipediaSkillsAndOthers() {
  return (
    <WikiContent>
        <b>
          <FormattedMessage
            id="wiki.Skills"
            defaultMessage="電腦技能"            
          />
        </b> : HTML、CSS、JavaScript、Node.js、React.js、jQuery、Bootstrap、Git、MySQL、Gephi
      <WikiContent>
        <b>
          <FormattedMessage
            id="wiki.license"
            defaultMessage="證照"            
          />
        </b> : TOEIC 835（2021）、MOS EXCEL（2016）、醫療資訊管理師證照（2018）
      </WikiContent>
      <WikiContent>
        <b>
          <FormattedMessage
            id="wiki.competition"
            defaultMessage="競賽"            
          />
        </b>：<Links href='https://tinyurl.com/bkb26k2n' target="_blank">2020 臺北醫學大學程式設計競賽（特優）</Links>、2021 全國醫學盃足球比賽（冠軍）、2020 全國醫學盃足球比賽（冠軍）、2016 全國醫管盃羽球團體賽（亞軍）、國北護 105 學年系際盃桌球團體賽（冠軍）、國北護 105 學年系際盃桌球團體賽（亞軍）
      </WikiContent>
      <WikiContent>
        <b>
          <FormattedMessage
            id="wiki.language"
            defaultMessage="語言"            
          />
        </b> : <FormattedMessage
            id="wiki.Cantonese"
            defaultMessage="粵語（精通）"            
          />、
          <FormattedMessage
            id="wiki.MandarinChinese"
            defaultMessage="國語（精通）"            
          />、
          <FormattedMessage
            id="wiki.English"
            defaultMessage="英語（中上）"            
          />、
          <FormattedMessage
            id="wiki.TaiwaneseHokkien"
            defaultMessage="台語（略懂）"            
          />
      </WikiContent>
      <WikiContent>
        <b>
          <FormattedMessage
            id="wiki.society"
            defaultMessage="社團/幹部"            
          />
        </b> : 校園團契同工、系學會美宣組、副班代、體育股長
      </WikiContent>
    </WikiContent>
  )
}
