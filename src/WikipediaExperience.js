import { FormattedMessage } from "react-intl";
import { WikiContent, Links, Title } from './Wikipedia';

export default function WikipediaExperience() {
  return (
    <WikiContent>
    <div>
      <Title>
        <FormattedMessage
          id="FE"
          defaultMessage="前端工程師"            
        />
      </Title>
      <p>
      <FormattedMessage
        id="WFH-IT"
        defaultMessage="臺北市立萬芳醫院 資訊室"            
      /><br/> 2022/05 - present 
      </p> 
    </div>  
    <div>
      <Title>
        <FormattedMessage
          id="wiki.RA"
          defaultMessage="研究助理"            
        />
      </Title>
      <p>
      <FormattedMessage
        id="wiki.TMU"
        defaultMessage="臺北醫學大學"            
      /><br/> 2020/02 - 2021/06 
      </p>
      
    </div>
    <div>
      <Title>
        <FormattedMessage
          id="wiki.frontEndIntern"
          defaultMessage="前端實習生"            
        />
      </Title>
      <p>
        <FormattedMessage
          id="wiki.Foxconn"
          defaultMessage="鴻海科技集團健康事業群(佳綸生技股份有限公司)"            
        />
        <br/>
        <FormattedMessage
          id="wiki.1stSem"
          defaultMessage="上半年"            
        />
        <Links href='https://www.youtube.com/watch?v=gYgu5_E9CAM' target="_blank"> : <b>UI editing - React Native for APP UI</b>
        </Links>
        <br/>
        <FormattedMessage
          id="wiki.2ndSem"
          defaultMessage="下半年"            
        /> : <b>Website upgrading - From Angular.js to Angular 7</b>
        <br/>
        2018/09 - 2019/06
      </p>
    </div>
    </WikiContent>
  )
}