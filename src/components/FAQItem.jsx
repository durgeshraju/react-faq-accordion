import React from 'react'

const FAQItem = ({question, answer}) => {
  return (
    <div className="faq-item">
      <div className="faq-question">
        <h2>{question}</h2>
        <span className="icon"></span>
      </div>      
      <div className="faq-answer">
        <p>
          {answer}
        </p>
      </div>
    </div>
  )
}

export default FAQItem
