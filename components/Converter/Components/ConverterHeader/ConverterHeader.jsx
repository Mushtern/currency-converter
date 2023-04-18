import { Text, Box } from '@chakra-ui/react'
import React from 'react'


const ConverterHeader = () => {
    return (
            <Box textAlign="center" marginTop="20" color="white" marginBottom="10">
                <Text fontWeight="bold" fontSize="3xl">
                    Currency Converter & Exchange Rates
                </Text>
                <Text fontWeight="light" fontSize="2xl">
                    Up to date FX rates
                </Text>
            </Box>
    )
}

export default ConverterHeader