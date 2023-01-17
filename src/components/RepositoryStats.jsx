import React from 'react'
import { View } from 'react-native'
import StyledText from './StyledText.jsx'
import theme from '../theme.js'

const parseThousands = value => {
    return value >= 1000 
        ? `${Math.round(value/100)/10}k`
        : String(value)
}

const RepositoryStats = props => {
    return (
        <View style={theme.spacedRow}>
            <View>
                <StyledText align='center' weight='bold'>{parseThousands(props.stargazersCount)}</StyledText>
                <StyledText align='center'>Stars</StyledText>
            </View>
            <View>
                <StyledText align='center' weight='bold'>{parseThousands(props.forksCount)}</StyledText>
                <StyledText align='center'>Forks</StyledText>
            </View>
            <View>
                <StyledText align='center' weight='bold'>{parseThousands(props.reviewCount)}</StyledText>
                <StyledText align='center'>Reviews</StyledText>
            </View>
            <View>
                <StyledText align='center' weight='bold'>{parseThousands(props.ratingAverage)}</StyledText>
                <StyledText align='center'>Rating</StyledText>
            </View>
        </View>
    )
}

export default RepositoryStats