import React from 'react'
import { View, Image, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    centeredRow: {
        flex: 0,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    image:{
        width: 48,
        height: 48,
        borderRadius: 4,
    }
})

const RepositoryOwnerImage = ({imageUri}) => {
    return (
        <View style={styles.centeredRow}>
            <Image style={styles.image} 
            source={{uri: imageUri}}/>
        </View>
    )
}

export default RepositoryOwnerImage