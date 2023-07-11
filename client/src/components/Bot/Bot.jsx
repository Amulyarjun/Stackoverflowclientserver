import React, { useState } from "react";
import ChatBot from "react-simple-chatbot";
import { ThemeProvider } from "styled-components";
import Review from "./Review";
import OTPBot from './OTPBot';



const theme = {
  background: "#f5f8fb",
  fontFamily: "Roboto",
  headerBgColor: "#ef8236",  
  headerFontColor: "#fff",
  headerFontSize: "15px",
  botBubbleColor: "#ef8236",
  botFontColor: "#fff",
  userBubbleColor: "#fff",
  userFontColor: "#4a4a4a",
};

const config = {
  width: "450px",
  height: "600px",
  floating: true,
};


const Bot = () => {
  
  const [ verify, setVerify] = useState(null);

  const CallBack = (childData) => {
    setVerify(childData);
  }
  //console.log(verify)


  const steps1 = [
    {
      id: '0',
      component: <OTPBot handleCallback={CallBack}/>, 
      asMessage: true,
      trigger: 'v', 
    },
    {
      id: 'v',
      message: 'After verification send a message',
      trigger: 'v1',
    },
    {
      id: 'v1',
      user: true,
      trigger: 'failed',
    },
    {
      id: 'v12',
      message: '{previousValue}',
      trigger: () => ( true ? 'success' : 'failed'),
    },
    {
      id: 'success', 
      component: ( 
        <div>              
          <h3>Verification successful</h3>              
          <p>Welcome { true ? 'Verified' : 'unknown'}</p>
        </div>
      ),
      trigger: '1',
    },
    {
      id: 'failed',
      //message: 'Verification Failed!',
      message: 'You need to verify!',
      trigger: '0',
    },
    {
      id: '1',
      message: 'Hi! Write your question',
      trigger: 'name',
    },
    {
      id: 'name',
      user: true,
      trigger: '3',
    },
    {
      id: '3',
      delay: 6000,
      component: <Review />,
      asMessage: true,
      trigger: 'name',
    },
    {
      id: 'update',
      message: 'Do you have any question?',
      trigger: 'update-question',
    },
    {
      id: 'update-question',
      options: [
        { value: 'yes', label: 'Yes', trigger: 'typing' },
        { value: 'no', label: 'No', trigger: 'end-message' },
      ],
      
    },
    {
      id: 'typing',
      message: 'Write your question',
      trigger: 'name',
    },
    {
      id: 'end-message',
      message: 'Thankyou! Have a nice day.',
      end: true,
    },
   ];

   const steps2=[
    {
      id: '1',
      message: 'Hi! Write your question',
      trigger: 'name',
    },
    {
      id: 'name',
      user: true,
      trigger: '3',
    },
    {
      id: '3',
      delay: 6000,
      component: <Review />,
      asMessage: true,
      trigger: 'name',
    },
   ];


  return (
    <div>
    <ThemeProvider theme={theme}>
    { !verify &&
      <ChatBot steps={steps1}{...config}/> 
    }

    { verify &&
    <ChatBot steps={steps2}{...config}/>
    }
    </ThemeProvider>
    </div>
  );
};

export default Bot;
