import { createStackNavigator } from "react-navigation";
import Home  from "./pages/Home";
import Friends from "./pages/Friends";

const AppNavigator = createStackNavigator({
    Home: { screen: Home },
    Friends :{ screen: Friends }
});

export default AppNavigator;