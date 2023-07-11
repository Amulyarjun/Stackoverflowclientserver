import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
/*import axios from "axios";*/

import "./AskQuestion.css";
import { askQuestion } from "../../actions/question";

/*const stripePromise = loadStripe("your_stripe_public_key");*/

const AskQuestion = () => {
  const [questionTitle, setQuestionTitle] = useState("");
  const [questionBody, setQuestionBody] = useState("");
  const [questionTags, setQuestionTags] = useState("");
  /*const [plan, setPlan] = useState(null);*/

  const dispatch = useDispatch();
  const User = useSelector((state) => state.currentUserReducer);
  const navigate = useNavigate();
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (User) {
      if (questionTitle && questionBody && questionTags) {
        dispatch(
          askQuestion(
            {
              questionTitle,
              questionBody,
              questionTags,
              userPosted: User.result.name,
              userId: User?.result?._id
            },
            
            navigate
          )
        );
      } else alert("Please enter all the fields");
    } else alert("Login to ask question");
  };


  /*const createSubscription = async (priceId) => {
    const stripe = await stripePromise;

    // Call the backend API to create a checkout session
    const response = await axios.post("/api/checkout/create-session", { priceId });

    // Redirect user to Stripe checkout page
    const result = await stripe.redirectToCheckout({
      sessionId: response.data.id
    });
    if (result.error) {
      console.log(result.error.message);
    }
  };

 const handlePlanSubmit= async (e) =>{
  e.preventDefault();
if (!plan) {
      alert("Please select a plan");
      return;
    }
    // Check if user has already reached the daily limit
    const questionsPostedToday = await getQuestionsPostedToday(); // Implement this function to get number of questions posted today
    if (plan === "free" && questionsPostedToday >= 1) {
      alert("You have exceeded the daily limit for free plan");
      return;
    }

    if (plan === "silver" && questionsPostedToday >= 5) {
      alert("You have exceeded the daily limit for silver plan");
      return;
    }

    if (plan === "gold") {
      // No limits for gold plan
    }

    // Create a subscription based on the selected plan
    if (plan === "free") {
      // Post question with free plan
      const response = await axios.post("/api/questions", {
        plan,
        questionTitle,
        questionBody,
        questionTags
      });
      alert(response.data.message);
    } else if (plan === "silver") {
      createSubscription("price_12345"); // Replace with actual price ID for silver plan
    } else if (plan === "gold") {
      createSubscription("price_67890"); // Replace with actual price ID for gold plan
    }
  };*/



   const handleEnter = (e) => {
    if(e.key === "Enter"){
      setQuestionBody(questionBody + "\n");
    }
   };

  return (
        <div className="ask-question">
          <div className="ask-ques-container">
            <h1>Ask a public Question</h1>
            

             <form onSubmit = {handleSubmit}>
              <div className="ask-form-container">
                <label htmlFor="ask-ques-title">
                   <h4>Title</h4>
                   <p>
                    Be specific and imagine you're asking a question to another person
                  </p>
                   <input 
                   type="text" 
                   id="ask-ques-title" 
                   onChange = {(e) => {
                    setQuestionTitle(e.target.value);
                    }} 
                   placeholder="e.g. is there an R function for finding the index of an element in a vector?"/>            
                </label>
                <label htmlFor="ask-ques-body">
                   <h4>Body</h4>
                   <p>
                    Include all the information someone would need to answer your question
                    </p>
                   <textarea
                    name=""
                     id="ask-ques-body" 
                     onChange = {(e) => {setQuestionBody(e.target.value);
                    }}
                     cols="30" 
                     row="10" 
                   onKeyPress={handleEnter}
                   ></textarea>          
                </label>
                <label htmlFor="ask-ques-tags">
                   <h4>Tags</h4>
                   <p>Add up to 5 tags to describe what your question is about </p>
                   <input 
                   type="text"
                    id="ask-ques-tags"
                     onChange = {(e) => {
                      setQuestionTags(e.target.value.split(" "));
                      }} placeholder="e.g.(xml typescript wordpress)"
                      />            
                </label> 
              </div>
              <input type="submit"
               value="Review your question" 
               className="review-btn"
               />
               
             </form>
          </div>

        </div>
    
  );
  };
export default AskQuestion;



/*/ App.js

import React, { useState, useEffect } from "react";

const App = () => {
  const [userPlan, setUserPlan] = useState(""); // State to store user's plan
  const [questionsPosted, setQuestionsPosted] = useState(0); // State to store number of questions posted

  // Function to handle posting a question
  const handlePostQuestion = () => {
    // Check user's plan and limit questions based on plan
    if (userPlan === "free" && questionsPosted >= 1) {
      alert("Free plan allows only 1 question per day!");
    } else if (userPlan === "silver" && questionsPosted >= 5) {
      alert("Silver plan allows only 5 questions per day!");
    } else {
      // Make API call to post question
      // Update questionsPosted state after successful API call
      setQuestionsPosted(questionsPosted + 1);
      alert("Question posted successfully!");
    }
  };

  return (
    <div>
      <h1>Question Posting App</h1>
      <h2>Current Plan: {userPlan}</h2>
      <h2>Questions Posted Today: {questionsPosted}</h2>
      <div>
        <button onClick={() => setUserPlan("free")}>Free Plan</button>
        <button onClick={() => setUserPlan("silver")}>Silver Plan</button>
        <button onClick={() => setUserPlan("gold")}>Gold Plan</button>
      </div>
      <button onClick={handlePostQuestion}>Post Question</button>
    </div>
  );
};

export default App;*/

           /*<Link to="/Subscribe" style={{ 
              padding: "5px 15px",
              backgroundColor: "#009dff",
              border:"none",
              borderRadius: "4px",
              textDecoration: "none",
              color: "white",
               }}>
            Subscribe
            </Link>*/