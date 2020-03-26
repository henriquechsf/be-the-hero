import React from 'react'

// vai por volta de toda aplicação
import { NavigationContainer } from '@react-navigation/native'
// navegação
import { createStackNavigator } from '@react-navigation/stack'
const AppStack = createStackNavigator()

import Incidents from './pages/Incidents'
import Detail from './pages/Detail'

function Routes() {
    return (
        <NavigationContainer>
            <AppStack.Navigator screenOptions={{ headerShown: false }}>
                {/* Rotas para as telas do app */}
                <AppStack.Screen name="Incidents" component={Incidents} />
                <AppStack.Screen name="Detail" component={Detail} />
            </AppStack.Navigator>
        </NavigationContainer>
    )
}

export default Routes;