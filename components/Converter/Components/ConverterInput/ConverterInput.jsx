import { FormLabel, Input } from '@chakra-ui/react'
import React from 'react'

const ConverterInput = ({onAmountChange}) => {
  return (
    <>
        <FormLabel htmlFor='amount' color='purple.300'> Amount </FormLabel>
        {/*Same ID so when we click on Amount it takes us to the Input*/}
        <Input 
            id='amount' 
            size='lg' 
            min={0} 
            onChange={(e) => onAmountChange(e.target.value)}
            placeholder='0'
        /> 
    </>
  )
}

export default ConverterInput