import { FormattedMessage } from "react-intl";
import { WikiInfoBox, WikiBoxTr, WikiBoxTh, WikiBoxSubTh_2, WikiBoxSubTh, WikiBoxSubRight, WikiBoxSubLeft } from './Wikipedia';
import styled from 'styled-components';
import myIcon from './pic/me.jpg';

const Span = styled.span`
  margin-right: 4px;
`

export default function WikipediaBox() {
  return (
    <WikiInfoBox>
      <tbody>
      <WikiBoxTr>
        <WikiBoxTh colSpan={2}>
          <FormattedMessage
            id="wiki.boxTitle"
            defaultMessage="李彥志"            
          />
        </WikiBoxTh>
      </WikiBoxTr>
      <WikiBoxTr>
        <WikiBoxSubTh_2 colSpan={2}>
          <img src={myIcon} width="200px" height="250px"/>
        </WikiBoxSubTh_2>
      </WikiBoxTr>
      <WikiBoxTr>
        <WikiBoxSubTh colSpan={2}>
          <FormattedMessage
            id="wiki.boxSubtitle"
            defaultMessage="萬芳醫院 - 前端工程師"            
          />
        </WikiBoxSubTh>
      </WikiBoxTr>
      <WikiBoxTr>
        <WikiBoxSubLeft>
          <FormattedMessage
            id="wiki.boxLeftName"
            defaultMessage="英文姓名"            
          />
        </WikiBoxSubLeft>
        <WikiBoxSubRight>
          <FormattedMessage
            id="wiki.boxRightName"
            defaultMessage="Yen-Chih Li, Jackson"            
          />
        </WikiBoxSubRight>
      </WikiBoxTr>
      <WikiBoxTr>
        <WikiBoxSubLeft scope={"row"}>
          <FormattedMessage
            id="wiki.boxLeftNationality"
            defaultMessage="國籍"            
          />
        </WikiBoxSubLeft>
        <WikiBoxSubRight>
          <Span>
            <img src={"https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Flag_of_the_Republic_of_China.svg/33px-Flag_of_the_Republic_of_China.svg.png"}  width={"22"} height={"15"}/>
          </Span>
          <FormattedMessage
            id="wiki.Taiwan"
            defaultMessage="台灣"            
          />
        </WikiBoxSubRight>
      </WikiBoxTr>
      <WikiBoxTr>
        <WikiBoxSubLeft>
          <FormattedMessage
            id="wiki.boxLeftBorn"
            defaultMessage="出生"            
          />
        </WikiBoxSubLeft>
        <WikiBoxSubRight>
          <Span>
            <img src={"https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Flag_of_Hong_Kong.svg/33px-Flag_of_Hong_Kong.svg.png"}  width={"22"} height={"15"}/>
          </Span>
          <FormattedMessage
            id="wiki.BornHongKong"
            defaultMessage="香港"            
          />
        </WikiBoxSubRight>
      </WikiBoxTr>
      <WikiBoxTr>
        <WikiBoxSubLeft>
          <FormattedMessage
            id="wiki.language"
            defaultMessage="語言"            
          />
        </WikiBoxSubLeft>
        <WikiBoxSubRight>
          <FormattedMessage
            id="wiki.boxRightLanguage"
            defaultMessage="粵語、英語、國語"            
          />                
        </WikiBoxSubRight>
      </WikiBoxTr>
      <WikiBoxTr>
        <WikiBoxSubLeft>
          <FormattedMessage
            id="wiki.boxLeftAlmaMater"
            defaultMessage="學歷"            
          />   
        </WikiBoxSubLeft>
        <WikiBoxSubRight>
          <FormattedMessage
            id="wiki.boxRightAlmaMater"
            defaultMessage="臺北醫學大學醫學資訊所"            
          />   
        </WikiBoxSubRight>
      </WikiBoxTr>
      <WikiBoxTr>
        <WikiBoxSubLeft>
          <FormattedMessage
            id="wiki.boxLeftReligion"
            defaultMessage="信仰"            
          />   
        </WikiBoxSubLeft>
        <WikiBoxSubRight>
          <FormattedMessage
            id="wiki.boxRightReligion"
            defaultMessage="基督教"            
          />   
        </WikiBoxSubRight>
      </WikiBoxTr>
      </tbody>
    </WikiInfoBox>
  )
}