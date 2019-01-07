import { createStackNavigator, createAppContainer } from "react-navigation";
import HomeScreen from './../../navigation/HomeScreen/HomeScreen';
import DetailShoe from './../../navigation/DetailShoe/DetailShoe';
import ListShoe from './../../navigation/ListShoe/ListShoe';
import SearchListShoe from './../../navigation/ListShoe/SearchListShoe';

export default RouteConfig = createStackNavigator({
  Home: HomeScreen,
  DetailShoe: DetailShoe,
  ListShoe: ListShoe,
  SearchListShoe: SearchListShoe
},
  {
    initialRouteName: 'Home',
    navigationOptions:
    {
      header: null
    }
  },

);
