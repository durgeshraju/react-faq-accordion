import React from 'react'

const FAQCard = ({children}) => {
  return (
    <section className="faq-card">
        <div className="faq-heading">
            <span className="star">✦</span>
            <h1>FAQs</h1>
        </div>
        <div className="faq-list">
            {children}
        </div>
    </section>
  )
}

export default FAQCard;