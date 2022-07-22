import { createStackNavigator } from "@react-navigation/stack"
import Notifications from "../screens/Notifications"
import postDetails from "../screens/postDetails"

const screens = {
    Home: {
        screen: Notifications
    },
    postDetails: {
        screen: postDetails
    },
}

const HomeStack = createStackNavigator(screens)

export default createStackNavigator(screens)