import React, { useRef, useState, useEffect } from "react";
//import PropTypes from "prop-types";
import axios from "axios";

const Review = (props) => {
  const [qna, setQna] = useState([{ value: "" }]);
  const isSent = useRef(false);

  useEffect(() => {
    const { steps } = props;
    const { name } = steps;
    handleSend(name.value); // eslint-disable-next-line
  }, [props]);

  const updateQNA = (value) => {
    setQna((qna) => [...qna, { value }]);
  };

  const handleSend = (question) => {
    if (!isSent.current) {
      isSent.current = true;

      //updateQNA(question);

      axios
        .post("http://localhost:5000/chat", {
          question,
        })
        .then((response) => {
          updateQNA(response.data.answer);
        });
    }
  };

  const renderContent = (qna) => {
    const value = qna.value;
    if (Array.isArray(value)) {
      return value.map((v) => <div key={v}>{v}</div>);
    }

    return <div key={value}>{value}</div>;
  };

  return (
    <main style={{ width: "100%" }}>
      <div>
        {qna.map((qna, index) => {
          return <div key={index}>{renderContent(qna)}</div>;
          //return <div key={index}>{qna.value}</div>;
        })}
      </div>
    </main>
  );
};

// Review.propTypes = {
//   steps: PropTypes.object,
// };

// Review.defaultProps = {
//   steps: undefined,
// };

export default Review;
