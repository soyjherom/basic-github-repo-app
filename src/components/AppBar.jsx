import React from 'react'
import { View, StyleSheet, ScrollView } from 'react-native'
import StyledText from './StyledText.jsx'
import Constants from 'expo-constants'
import theme from '../theme.js'
import { Link, TouchableWithoutFeedback, useLocation } from 'react-router-native'

const styles = StyleSheet.create({
    container:{
        backgroundColor: theme.appBar.primary,
        paddingTop: Constants.statusBarHeight + 10,
        paddingLeft: 10,
        flexDirection: 'row',
    },
    scroll:{
        paddingBottom: 15,
    },
    text:{
        color: theme.appBar.textSecondary,
        paddingHorizontal:10
    },
    active:{
        color: theme.appBar.textPrimary,
    }
})

const AppBarTab =  ({active, children, to}) =>{
    const textStyles = [
        styles.text,
        active && styles.active
    ]
    return(
        <Link to={to} component={TouchableWithoutFeedback}>
            <StyledText weight='bold' style={textStyles}>
                {children}
            </StyledText>
        </Link>
    )
}

const AppBar = () => {
    const { pathname } = useLocation()
    return (
        <View style={styles.container}>
            <ScrollView horizontal
                style={styles.scroll}>
                <AppBarTab active={pathname === '/'} to='/'>Repositories</AppBarTab>
                <AppBarTab active={pathname === '/signin'} to='/signin'>Sign In</AppBarTab>
                <AppBarTab active={pathname === '/signup'} to='/signup'>Sign Up</AppBarTab>
                <AppBarTab active={pathname === '/account'} to='/account'>Account</AppBarTab>
                <AppBarTab active={pathname === '/favorites'} to='/favorites'>My Favorites</AppBarTab>
                <AppBarTab active={pathname === '/repositories'} to='/repositories'>My Repositories</AppBarTab>
            </ScrollView>
        </View>
    )
}

export default AppBar