import React from 'react'
import { View, StyleSheet } from 'react-native'
import StyledText from './StyledText.jsx'
import RepositoryOwnerImage from './RepositoryOwnerImage.jsx'
import theme from '../theme.js'

const styles = StyleSheet.create({
    language: {
        padding: 4,
        color: theme.colors.white,
        backgroundColor: Platform.select({
            android: theme.colors.primary,
            ios: 'orange',
            default: 'purple'
        }),
        alignSelf: 'flex-start',
        marginVertical: 4,
        borderRadius: 4,
        overflow: 'hidden'
    },
    image: {
        width: 48,
        height: 48,
        borderRadius: 4
    }
})

const RepositoryItemHeader = ({
    ownerAvatarUrl,
    language,
    fullName,
    description
}) => {
    return (
        <View style={{flexDirection: 'row', paddingBottom: 2,}}>
            <RepositoryOwnerImage {...{imageUri:ownerAvatarUrl}}/>
            <View style={{paddingLeft: 10, flex: 1, justifyContent: 'center'}}>
                <StyledText style={styles.language}>{language}</StyledText>    
                <StyledText size='subheading' weight='bold'>{fullName}</StyledText>
                <StyledText color='secondary'>{description}</StyledText>
            </View>
        </View>
    )
}

export default RepositoryItemHeader