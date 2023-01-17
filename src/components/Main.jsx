import React from 'react'
import { Platform, View, Text } from 'react-native'
import RepositoryList from './RepositoryList.jsx'
import {Routes, Route} from 'react-router-native'

//How to select a specific component per platform
const AppBar = Platform.select({
    ios: () => require('./IosAppBar.jsx').default,
    default: () => require('./AppBar.jsx').default,
})()

const Main = () =>{
    return (
        <View style={{flex: 1}}>
            <AppBar />
            <Routes>
                <Route path='/'
                    element={
                        <RepositoryList/>
                    }
                />
                <Route path='/signin'
                    element={
                        <Text>Sign in</Text>
                    }
                />
                <Route path='/signup'
                    element={
                        <Text>Sign up</Text>
                    }
                />
                <Route path='/account'
                    element={
                        <Text>Account</Text>
                    }
                />
                <Route path='/favorites'
                    element={
                        <Text>My Favorites</Text>
                    }
                />
                <Route path='/myrepos'
                    element={
                        <Text>My Repos</Text>
                    }
                />
            </Routes>
        </View>
    )
}

export default Main