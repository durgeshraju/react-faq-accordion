import './App.css';
import { faqs } from './data/faq';
import FAQCard from './components/FAQCard';
import FAQItem from './components/FAQItem';

const App = () => {
  return (
    <>
      <main className="page">
        <h1>Accordion App</h1>
          <FAQCard>
              {faqs.map(faq =>
                <FAQItem key={faq.id} question={faq.question} answer={faq.answer} />
              )}
          </FAQCard>
      </main>
    </>
  )
}

export default App