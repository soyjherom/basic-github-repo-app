import React from 'react'
import { Platform, View, Text } from 'react-native'
import RepositoryList from './RepositoryList.jsx'
import {Routes, Route} from 'react-router-native'
import AppBar from './AppBar'
import { LoginPage } from '../pages/Login'

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
                        <LoginPage/>
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