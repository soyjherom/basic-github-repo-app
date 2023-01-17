import React from 'react'
import {FlatList} from 'react-native'
import repositories from '../data/repositories.js'
import RepositoryItem from './RepositoryItem.jsx'

const RepositoryList = () => {
    return (
        <FlatList data={
            //Return a sorted array by language alphabetically
            repositories.sort((a,b)=>{
                let repoA = a.language.toUpperCase()
                let repoB = b.language.toUpperCase()
                return repoA < repoB ? -1 :  repoA > repoB ? 1 : 0}
            )}
            renderItem={({item: repo}) => (
                <RepositoryItem {...repo}/>
            )}>
        </FlatList>
    )   
}

export default RepositoryList