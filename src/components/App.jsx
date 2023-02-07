import React, { useState } from 'react';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Section } from 'components/Section/Section';
import { Statistics } from 'components/Statistics//Statistics';

const FEEDBACK_OPTIONS  = ["good", "neutral", "bad"];

function App() {
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);

    function handleCountFeedback({ target }) {
        const { feedback } = target.dataset;

        switch (feedback) {
            case 'good':
                setGood(prevState => prevState + 1);
                break;

            case 'neutral':
                setNeutral(prevState => prevState + 1);
                break;

            case 'bad':
                setBad(prevState => prevState + 1);
                break;

            default:
                return;
        }
    }

    function countTotalFeedback() {
    const total = good + neutral + bad; 
    return total;
    }

    function positiveCountFeedback(total) {
        return total ? Math.round((good / total) * 100) : 0;
    }

    const total = countTotalFeedback();
    const positivePercentage= positiveCountFeedback(total);
      
      return (
          <div style ={{
            display: 'flex',
            textAlign: 'center',
            alignItems: 'center',
            height: '100vh',
            flexDirection: 'column',
            fontSize: 40,
          }}
          >
              <Section title="Please leave feedback ">
                  <FeedbackOptions
                      options={FEEDBACK_OPTIONS}
                      onLeaveFeedback={handleCountFeedback}
                  />
              </Section>
              <Section title="Statistics">
                  <Statistics
                      good={good}
                      neutral={neutral}
                      bad={bad}
                      total={total}
                      positivePercentage={positivePercentage}
                  />
              </Section>
          </div>
      );
  }

export default App;
