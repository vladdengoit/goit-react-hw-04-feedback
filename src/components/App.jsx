import { useState } from 'react';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Section from './Section/Section';
import Notification from './Notification/Notification';


const App = () => {
  const [state, setState] = useState({
    good: 0,
    netural: 0,
    bad: 0,
  });

  const totalCount = () => {
    const { good, bad, netural } = state;
    const total = good + bad + netural;
    return total;
  };
  const changeFeedback = option => {
    setState(prevState => ({
      ...prevState,
      [option]: prevState[option] + 1,
    }));
  };

  const countPositiveFeedbackPercentage = () => {
    const positive = state.good;
    const total = totalCount();
    if (!total) {
      return 0;
    }
    const positiveFeedback = ((positive / total) * 100).toFixed(2);
    return positiveFeedback;
  };
  const feedbackOptions = ['good', 'netural', 'bad'];
  const totalShow = totalCount();
  const positivePersentage = countPositiveFeedbackPercentage();

  return (
    <>
      <div>
        <Section title="Please leave feedback!">
          <FeedbackOptions
            props={feedbackOptions}
            changeFeedback={changeFeedback}
          />
        </Section>
      </div>

      <div>
        <Section title="Statistics">
          <div>
            {!totalShow ? (
              <Notification message="There is no feedback" />
            ) : (
              <Statistics
                good={state.good}
                netural={state.netural}
                bad={state.bad}
                total={totalShow}
                positive={positivePersentage}
              />
            )}
          </div>
        </Section>
      </div>
    </>
  );
};

// class App extends Component {

// static feedbackOptions =["good","netural","bad"]

//   state = {
//     good: 0,
//     netural: 0,
//     bad: 0,
// }

// changeFeedback =(option)=>{
//   console.log(option);
//   this.setState((prevState) => {
//     return {
//       [option]: prevState[option] + 1,
//     };
// });
// }
// totalCount=()=>{
// const{good,bad, netural}=this.state
// const total = good+bad+netural
// return total
// }

// countPositiveFeedbackPercentage=()=>{
//   const positive =this.state.good
//   const total=this.totalCount()
//   if (!total){
//     return 0;
//   }
//   const positiveFeedback =(((positive/total)*100).toFixed(2))
//   return positiveFeedback
// }
//   render(){
//  const totalShow=this.totalCount();
//  const positivePersentage =this.countPositiveFeedbackPercentage()
//     return (
//       <>
//       <div>
//         <Section title="Please leave feedback!">
//          <FeedbackOptions props ={App.feedbackOptions} changeFeedback={this.changeFeedback} />
//      </Section>
//       </div>

//       <div>
//       <Section title="Statistics">
//         <div>
//           {!totalShow ? <Notification message="There is no feedback"/>:(<Statistics good ={this.state.good} netural={this.state.netural} bad={this.state.bad} total ={totalShow} positive ={positivePersentage}/> )}
//           </div>
//         </Section>
//        </div>
//       </>
//     );
//   }

// };
export default App;
