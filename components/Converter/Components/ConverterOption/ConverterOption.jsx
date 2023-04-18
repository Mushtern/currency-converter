import { Avatar, Flex, Select } from '@chakra-ui/react'
import React from 'react'
import { useFlags } from '../../../common/hooks/useFlags'

const ConverterOption = ({symbol, currencyList, onCurrencyChange, currency}) => {

  //We send the currency symbol to fetch the flag icon of its respective country.
  const {flagUrl} = useFlags(currency);

  return (
    <Flex gap='1rem' shadow='md' padding='1rem' borderRadius='lg'>
      <Avatar src={flagUrl} size='xs'/>
        {/*We set the state of the currency to the option selected (e.target.value) */}
        <Select 
            variant='unstyled' 
            size='md' defaultValue={currency} 
            onChange={(e) => onCurrencyChange(e.target.value)}>

                {currencyList.map((currency) => (
                    <option key={currency} value={currency}>
                        {currency} - {symbol[currency]}
                    </option>
                ))}
        </Select>
    </Flex>
  )
}

export default ConverterOption