import { FormattedMessage } from "react-intl";
import { WikiContent, Links, Title } from './Wikipedia';

export default function WikipediaEdu () {
  return (
    <WikiContent>
    <Title>
      <FormattedMessage
        id="wiki.TMU"
        defaultMessage="臺北醫學大學"            
      />
    </Title>
    <p>
      <Links href='https://gibi.tmu.edu.tw/' target="_blank">
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
    <Title>
      <FormattedMessage
        id="wiki.NTUNHS"
        defaultMessage="國立臺北護理健康大學"            
      />
    </Title>
    <p>
      <Links href='https://tinyurl.com/v87v6rwa' target="_blank">
        <FormattedMessage
          id="wiki.DHCM"
          defaultMessage="健康事業管理系 - 主修醫療資訊學程"            
        />
      </Links>            
    <br/>
    2015/09 - 2019/06
    </p>
    <Title>
      <FormattedMessage
        id="wiki.LWSSS"
        defaultMessage="香港中華傳道會劉永生中學"            
      />
    </Title>
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