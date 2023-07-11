import React from "react";

import "./PaymentPage.css"

const PaymentPage = () => {
  return (
    <div>
      <h1 className="subs-h1">Choose your subscription plan:</h1>      
<stripe-pricing-table pricing-table-id="prctbl_1ND4L8SGIH8yOTEmrsB0Jzzr"
publishable-key="pk_test_51MvLCOSGIH8yOTEmLmvaQZEV0hD48EaqL9Ukfl2PPOp7rlQcJDqfTHOPVwCEeAHXwfLMFE0tH54U29AFSDWq4Phz00oMP37Ss1">
</stripe-pricing-table>
    </div>
    
  );
}


export default PaymentPage;


/*import { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";

const stripePromise = loadStripe("your_stripe_public_key");

function PostQuestionPage() {
  const [plan, setPlan] = useState(null);
  const [questionTitle, setQuestionTitle] = useState("");
  const [questionBody, setQuestionBody] = useState("");
  const [questionTags, setQuestionTags] = useState("");

  const createSubscription = async (priceId) => {
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

  const handleSubmit = async (e) => {
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
  };
  return (
    <div>
      <h1>Post a Question</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="questionTitle">Title</label>
          <input type="text" id="questionTitle" value={questionTitle} onChange={(e) => setQuestionTitle(e.target.value)} />
        </div>
        <div>
          <label htmlFor="questionBody">Body</label>
          <textarea id="questionBody" value={questionBody} onChange={(e) => setQuestionBody(e.target.value)}></textarea>
        </div>
        <div>
          <label htmlFor="questionTags">Tags</label>
          <input type="text" id="questionTags" value={questionTags} onChange={(e) => setQuestionTags(e.target.value)} />
        </div>
        <div>
          <label htmlFor="freePlan">
            <input type="radio" id="freePlan" name="plan" value="free" checked={plan === "free"} onChange={() => setPlan("free")} />
            Free Plan (1 question/day)
          </label>
        </div>
        <div>
          <label htmlFor="silverPlan">
            <input type="radio" id="silverPlan" name="plan" value="silver" checked={plan === "silver"} onChange={() => setPlan("silver")} />
            Silver Plan (5 questions/day for ₹100/month)
          </label>
        </div>
        <div>
          <label htmlFor="goldPlan">
            <input type="radio" id="goldPlan" name="plan" value="gold" checked={plan === "gold"} onChange={() => setPlan("gold")} />
            Gold Plan (Unlimited questions for ₹1000/month)
          </label>
        </div>
        <button type="submit" >Post Question</button>
      </form>
    </div>
  );
}

  


export default PostQuestionPage;*/


















