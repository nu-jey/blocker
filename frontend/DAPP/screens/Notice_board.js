import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
import { createDrawerNavigator,DrawerActions } from "@react-navigation/drawer";
import Ionicons from "@expo/vector-icons/Ionicons";

import Three_Contracts from "./Three_Contracts";
import Login from "./Login";
const Drawer = createDrawerNavigator();

function Main() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "lightgrey",
      }}
    >
      <Text>게시판</Text>
    </View>
  );
}

function MyPage() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>마이페이지</Text>
      
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text>Log out</Text>
      </TouchableOpacity>

    </View>
  );
}

function Notice_board() {
  return (
    <Drawer.Navigator
      useLegacyImplementation
      screenOptions={{
        headerStyle: { height: 110, backgroundColor: "black" },
        headerTitleStyle: { color: "#0DF9FF", fontSize: 25 ,},
        drawerPosition:'left',
        headerTintColor:"white",
        drawerActiveBackgroundColor: "#0DF9FF",
        drawerInactiveTintColor:"white",
        drawerActiveTintColor: "black",
        drawerStyle:{backgroundColor:'black',width:200,},
      }}
    >
      <Drawer.Screen name="Notice Board" component={Main} options={{drawerIcon:({color,size,focuced})=>( 
          <Ionicons
            name={"home"}
            size={size}
            color={color}
          />),}} />
      <Drawer.Screen name="Contracts" component={Three_Contracts} options={{drawerIcon:({color,size,focuced})=>( 
          <Ionicons
            name={"rocket"}
            size={size}
            color={color}
          />),}} />
      <Drawer.Screen name="My Page" component={MyPage} options={{drawerIcon:({color,size,focuced})=>( 
          <Ionicons
            name={"pause"}
            size={size}
            color={color}
          />),}} />
          <Drawer.Screen name="Log out" component={MyPage} options={{drawerIcon:({color,size,focuced})=>( 
              <Ionicons
                name={"pause"}
                size={size}
                color={color}
              />),}} />
    </Drawer.Navigator>
  );
}

export default Notice_board;
