import { FormattedMessage, IntlProvider } from "react-intl";
import { WikiContent, Links } from './Wikipedia';

export default function WikipediaExperience() {
  return (
    <WikiContent>
    <div>
      <h3>
        <FormattedMessage
          id="wiki.RA"
          defaultMessage="研究助理"            
        />
      </h3>
      <p>
      <FormattedMessage
        id="wiki.TMU"
        defaultMessage="臺北醫學大學"            
      /><br/>
        2019/02 - 2021/06
      </p>
      
    </div>
    <div>
      <h3>
        <FormattedMessage
          id="wiki.frontEndIntern"
          defaultMessage="前端實習生"            
        />
      </h3>
      <p>
        <FormattedMessage
          id="wiki.Foxconn"
          defaultMessage="鴻海科技集團健康事業群(桂綸生技股份有限公司)"            
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