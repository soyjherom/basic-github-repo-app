import React from 'react'
import { View, Text } from 'react-native'
import RepositoryList from './RepositoryList.jsx'
import AppBar from './AppBar.jsx'
import {Routes, Route} from 'react-router-native'

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