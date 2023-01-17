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

const AppBarTab =  ({children, to}) =>{
    const { pathname } = useLocation()
    const active = pathname === to
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
    return (
        <View style={styles.container}>
            <ScrollView horizontal
                style={styles.scroll}>
                <AppBarTab to='/'>Repositories</AppBarTab>
                <AppBarTab to='/signin'>Sign In</AppBarTab>
            </ScrollView>
        </View>
    )
}

export default AppBar