import {useState} from 'react';

import {FeedbackOptions} from '../FeedbackOptions/FeedbackOptions.jsx';
import {Statistics} from '../Statistics/Statistics.jsx';
import {Section} from '../Section/Section.jsx';
import {Notification} from '../Notification/Notification.jsx';

import css from './FeedbackForm.module.css';


export const FeedbackForm = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
 
  const countTotalFeedback = good + neutral + bad;
  const countPositiveFeedbackPercentage = Math.round((good / countTotalFeedback) * 100);
  
  function handleCounter(event) {    
    switch (event.target.name) {
      case 'good':
      setGood ((prevGood) => prevGood + 1);      
      break;

      case 'neutral':
      setNeutral ((neutral) => neutral + 1);
      break;

      case 'bad':
      setBad (bad + 1);
      break;
/*різні варіанти залишаю собі на згадку*/ 
      default:
      break
    }
 }
        
 return (
        <div >
          <div className={css.container}>
          <Section title="Please leave feedback">
            <FeedbackOptions              
              options={{good, neutral, bad}}
              onLeaveFeedback={handleCounter}
            />
          </Section>
          <Section title="Statistics">
            {countTotalFeedback === 0 ? (
              <Notification message="There is no feedback" />
            ) : (
              <Statistics
                good={good}
                neutral={neutral}
                bad={bad}
                total={countTotalFeedback}
                positivePercentage={countPositiveFeedbackPercentage}
              />
            )}
          </Section>
        </div>
            
      </div>
    )
  } 
  
