import {
  createStackNavigator,
} from 'react-navigation';
import QuestionList from '../question-list/question-list.component';

const App = createStackNavigator({
  Home: { 
    screen: QuestionList
  }
},{
  initialRouteName: 'Home'
});

export default App;