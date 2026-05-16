import { useState } from "react";
const FAQItem = ({question, answer}) => {
 const [isOpen, setIsOpen] = useState(false);

 const onQuestionHandler = () => {
    setIsOpen((prev) => !prev)
 }

  return (
    <div className={`faq-item ${isOpen ? 'is-open' : ''}`}>
      <div className="faq-question" onClick={onQuestionHandler}>
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
