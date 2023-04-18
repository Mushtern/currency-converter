import { Box, Text } from '@chakra-ui/react'
import React from 'react'

const ConverterDisplay = ({currencyOne, currencyTwo, amount, convertedAmount, date}) => {
  return (
    <Box textAlign='right'>
        <Text fontWeight='bold' fontSize='lg'> 
            {amount} {currencyOne}
        </Text>
        <Text fontWeight='bold' fontSize='2xl' color='purple.500'> 
            {convertedAmount} {currencyTwo}
        </Text>
        <Text fontSize='xs' color='gray.400'>
            Market rates collected - {date}
        </Text>
    </Box>
  )
}

export default ConverterDisplay