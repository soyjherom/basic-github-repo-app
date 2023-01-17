import React from 'react'
import { View, StyleSheet } from 'react-native'
import RepositoryItemHeader from './RepositoryItemHeader.jsx'
import RepositoryStats from './RepositoryStats.jsx'

const styles = StyleSheet.create({
    container: {
        padding: 20,
        paddingBottom: 5,
        paddingTop: 5
    },
    strong: {
        marginBottom: 5
    },
})

const RepositoryItem = (props) => {
    return (
        <View style={styles.container} key={props.id}>
            <RepositoryItemHeader { ...{
                ownerAvatarUrl: props.ownerAvatarUrl,
                language: props.language,
                fullName: props.fullName,
                description: props.description
            }}/>
            <RepositoryStats { ...props} />
        </View>
    )   
}

export default RepositoryItem