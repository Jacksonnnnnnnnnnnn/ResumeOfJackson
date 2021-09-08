import { FormattedMessage, IntlProvider } from "react-intl";
import { WikiContent, Links } from './Wikipedia';

export default function WikipediaEdu () {
  return (
    <WikiContent>
    <h3>
      <FormattedMessage
        id="wiki.TMU"
        defaultMessage="臺北醫學大學"            
      />
    </h3>
    <p>
      <Links href='http://gimi.tmu.edu.tw/main.php' target="_blank">
        <FormattedMessage
          id="wiki.GIMI"
          defaultMessage="醫學資訊所碩士"            
        />
      </Links>
    <br/>
    <FormattedMessage
      id="wiki.thesisTitle"
      defaultMessage="畢業論文"            
    /> : <FormattedMessage
      id="wiki.thesisName"
      defaultMessage="應用 FHIR 格式於臨床報告系統：以頸動脈超音波報告為例。"
    />
    <br/>
    2019/09 - 2021/06
    </p>
    <h3>
      <FormattedMessage
        id="wiki.NTUNHS"
        defaultMessage="國立臺北護理健康大學"            
      />
    </h3>
    <p>
      <Links href='https://tinyurl.com/37zv2pxu'>
        <FormattedMessage
          id="wiki.DHCM"
          defaultMessage="健康事業管理系 - 主修醫療資訊學程"            
        />
      </Links>            
    <br/>
    2015/09 - 2019/06
    </p>
    <h3>
      <FormattedMessage
        id="wiki.LWSSS"
        defaultMessage="香港中華傳道會劉永生中學"            
      />
    </h3>
    <p>
      <FormattedMessage
        id="wiki.ICT+ECON"
        defaultMessage="高中選修：資訊與通訊科技、經濟"            
      />
    <br/>
    2009/09 - 2015/06
    </p>
    </WikiContent>
  )
}