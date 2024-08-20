const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import Starter from "./screens/Starter";
import RectangleVector from "./components/RectangleVector";
import Property1Advanced from "./components/Property1Advanced";
import FaceIDImage from "./components/FaceIDImage";
import Property1Home from "./components/Property1Home";
import Property1WithoutProfile from "./components/Property1WithoutProfile";
import Dashboard from "./screens/Dashboard";
import AIPage from "./screens/AIPage";
import ApplicationProcessPage from "./screens/ApplicationProcessPage";
import TransferText from "./components/TransferText";
import AccommodationText from "./screens/AccommodationText";
import Vector from "./components/Vector";
import ReservationPage from "./screens/ReservationPage";
import Vector1 from "./components/Vector1";
import Vector2 from "./components/Vector2";
import AppDoc from "./screens/AppDoc";
import Fliter from "./screens/Fliter";
import Accommodation from "./screens/Accommodation";
import FinalPage from "./screens/FinalPage";
import AxxountSavedDialougeBox from "./screens/AxxountSavedDialougeBox";
import AkarIconschevronLeft from "./components/AkarIconschevronLeft";
import LoginLink from "./screens/LoginLink";
import ForgotPassword from "./screens/ForgotPassword";
import ActivationLink from "./screens/ActivationLink";
import OTPLogin from "./screens/OTPLogin";
import JoinUs from "./screens/JoinUs";
import Start3 from "./screens/Start3";
import Start1 from "./screens/Start1";
import Start2 from "./screens/Start2";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);
  const [fontsLoaded, error] = useFonts({
    "Nunito-Regular": require("./assets/fonts/Nunito-Regular.ttf"),
    "Poppins-Regular": require("./assets/fonts/Poppins-Regular.ttf"),
    "Poppins-Medium": require("./assets/fonts/Poppins-Medium.ttf"),
    "Poppins-SemiBold": require("./assets/fonts/Poppins-SemiBold.ttf"),
    "Poppins-Bold": require("./assets/fonts/Poppins-Bold.ttf"),
    "Poppins-ExtraBold": require("./assets/fonts/Poppins-ExtraBold.ttf"),
    "Actor-Regular": require("./assets/fonts/Actor-Regular.ttf"),
    "DMSans-Regular": require("./assets/fonts/DMSans-Regular.ttf"),
    "DMSans-Bold": require("./assets/fonts/DMSans-Bold.ttf"),
    "CrimsonPro-Regular": require("./assets/fonts/CrimsonPro-Regular.ttf"),
    "CrimsonPro-Bold": require("./assets/fonts/CrimsonPro-Bold.ttf"),
    "CroissantOne-Regular": require("./assets/fonts/CroissantOne-Regular.ttf"),
    "Inter-Bold": require("./assets/fonts/Inter-Bold.ttf"),
    "Poly-Regular": require("./assets/fonts/Poly-Regular.ttf"),
    "OpenSans-SemiBold": require("./assets/fonts/OpenSans-SemiBold.ttf"),
    "OpenSans-Bold": require("./assets/fonts/OpenSans-Bold.ttf"),
    "PortLligatSans-Regular": require("./assets/fonts/PortLligatSans-Regular.ttf"),
    "PortLligatSlab-Regular": require("./assets/fonts/PortLligatSlab-Regular.ttf"),
    "Calibri-Bold": require("./assets/fonts/Calibri-Bold.otf"),
    "DoppioOne-Regular": require("./assets/fonts/DoppioOne-Regular.ttf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="Starter"
              component={Starter}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Dashboard"
              component={Dashboard}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AIPage"
              component={AIPage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ApplicationProcessPage"
              component={ApplicationProcessPage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AccommodationText"
              component={AccommodationText}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ReservationPage"
              component={ReservationPage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AppDoc"
              component={AppDoc}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Fliter"
              component={Fliter}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Accommodation"
              component={Accommodation}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="FinalPage"
              component={FinalPage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AxxountSavedDialougeBox"
              component={AxxountSavedDialougeBox}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="LoginLink"
              component={LoginLink}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ForgotPassword"
              component={ForgotPassword}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ActivationLink"
              component={ActivationLink}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="OTPLogin"
              component={OTPLogin}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="JoinUs"
              component={JoinUs}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Start3"
              component={Start3}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Start1"
              component={Start1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Start2"
              component={Start2}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
