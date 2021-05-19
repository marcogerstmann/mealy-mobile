/**
 * Learn more about createBottomTabNavigator:
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */

import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import GroceryListScreen from '../screens/GroceryListScreen';
import DishesScreen from '../screens/DishesScreen';
import { BottomTabParamList, GroceryListTabParamList, DishesTabParamList } from '../types';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="TabOne"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}>
      <BottomTab.Screen
        name="TabOne"
        component={GroceryListTabNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="checkbox" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="TabTwo"
        component={DishesTabNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="book" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: React.ComponentProps<typeof Ionicons>['name']; color: string }) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const GroceryListTabStack = createStackNavigator<GroceryListTabParamList>();

function GroceryListTabNavigator() {
  return (
    <GroceryListTabStack.Navigator>
      <GroceryListTabStack.Screen
        name="GroceryListScreen"
        component={GroceryListScreen}
        options={{ headerTitle: 'Einkaufsliste' }}
      />
    </GroceryListTabStack.Navigator>
  );
}

const DishesTabStack = createStackNavigator<DishesTabParamList>();

function DishesTabNavigator() {
  return (
    <DishesTabStack.Navigator>
      <DishesTabStack.Screen
        name="DishesScreen"
        component={DishesScreen}
        options={{ headerTitle: 'Gerichte' }}
      />
    </DishesTabStack.Navigator>
  );
}