import { FormattedMessage } from "react-intl";
import { useState } from 'react';
import { ToggleButton, WikiContent, Links } from './Wikipedia';
import styled from 'styled-components';

const SmallerContent = styled.p`
  font-size: 13px;
`

function SmallProject() {
  return (
    <SmallerContent>
      
        <FormattedMessage
          id="PracticeOfReact"
          defaultMessage="React 實作 (切版及 hooks)"
        /> : <Links href='https://jacksonnnnnnnnnnnn.github.io/react-todo-list/'>Todo List</Links>、<Links href='https://jacksonnnnnnnnnnnn.github.io/react-gomoku/'>五子棋</Links>、<Links href='https://github.com/Jacksonnnnnnnnnnnn/ResumeOfJackson' target="_blank">Resume Website</Links>
      <WikiContent>
        <FormattedMessage
          id="Expo"
          defaultMessage="2020 台灣醫療科技展 - 北醫大展攤之網頁"
        />
        ：
        <Links href='https://treportx.com/' target="_blank">
          TMU - AI Report System for Ultrasound
        </Links> ( jQuery + BootStrap )
      </WikiContent>
      <WikiContent>
      <Links href='https://github.com/Jacksonnnnnnnnnnnn/ncubbm2' target="_blank">
        <FormattedMessage
          id="NCUMobile"
          defaultMessage="雙和醫院研究記錄系統手機版"
        />
      </Links> ( JAVA + PHP )
      </WikiContent>
      <WikiContent>
        <Links href='https://hackmd.io/@B_eycs2AQPm4JU3hALkP8g' target="_blank">HackMD - Notes of FrontEnd</Links>
      </WikiContent>
    </SmallerContent>
  )
}

export default function WikipediaProjects () {
  const [show, setShow] = useState(false)
  
  return (
    <WikiContent>
        <b>
          <Links href='https://tinyurl.com/8tm9t9zt' target="_blank">
            <FormattedMessage
              id="wiki.thesisName"
              defaultMessage="應用 FHIR 格式於臨床報告系統：以頸動脈超音波報告為例。"            
            />
          </Links>
          <br/>( Node.js + HAPI FHIR + MySQL )
        </b>
      <WikiContent>
        <b>
          <Links href='https://github.com/Jacksonnnnnnnnnnnn/recordSystem' target="_blank">
            <FormattedMessage
              id="wiki.NCUSystem"
              defaultMessage="NCU 研究記錄系統"            
            />
          </Links> 
          <br/>( Nuxt.js + Express.js + MySQL )
        </b>
      </WikiContent>
      <WikiContent>
        <b>
          <Links href='https://drive.google.com/file/d/1-6jrlHtse8WB55PplU82RFsY8tYJNhgU/view?usp=sharing' target="_blank">
            <FormattedMessage
              id="TMUCompetition"
              defaultMessage="北醫程式設計競賽"
            /> : 
            <FormattedMessage
              id="TMUCompetitionTopic"
              defaultMessage="微力量的撼動：推特世界的觀察 #TaiwanCanHelp的軟實力 "
            />
          </Links>
          <br/>( Python + Gephi )
        </b>
      </WikiContent>
      <WikiContent>
      <FormattedMessage
        id="smallProjects"
        defaultMessage="小作品及練習"
      /> : <ToggleButton onClick={()=>setShow(!show)}>[show/hide]</ToggleButton></WikiContent>
      {
        show? <SmallProject/> : null
      }
    </WikiContent>
  )
}