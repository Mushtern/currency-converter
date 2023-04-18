import { Box, Grid, GridItem, Spinner, Text } from "@chakra-ui/react";
import { useCurrency } from "../common/hooks/useCurrency";
// import { color } from "framer-motion";
import ConverterHeader from "./Components/ConverterHeader";
import ConverterOption from "./Components/ConverterOption";
import ConverterInput from "./Components/ConverterInput";
import ConverterDisplay from "./Components/ConverterDisplay/ConverterDisplay";
import { RepeatIcon } from "@chakra-ui/icons";

const Converter = () => {

    const {
        amount, 
        setAmount, 
        currencyOne, 
        setCurrencyOne, 
        currencyTwo, 
        setCurrencyTwo, 
        ratesData, 
        symbolsData, 
        currencyList,
        convertedAmount,
        isError,
        isLoading,
        date, 
        time
    } = useCurrency();

    if(isError) {
        return(
            <Text fontWeight={"bold"} fontSize={"3xl"} my={"10"} color={"white"}>
                Something went wrong!
            </Text>
        );
    }

    if(isLoading) 
        return(
            <Spinner 
                margin={"auto 0"} 
                size={"xl"} 
                thickness="4px" 
                speed="0.65s" 
                color="purple.500"
                emptyColor="purple.200"
            />
        );
        return( <Box width={{base: "90vw", sm: "35vw"}} margin= "0 auto">

            {/*Header with title*/}
            <ConverterHeader/>

            <Grid 
                templateColumns='repeat(5, 1fr)'
                templateRows='repeat(2, 1fr)'
                padding={{base: "6", sm: "10"}}
                gap='1rem'
                backgroundColor='white'
                borderRadius='lg'
            >
                <GridItem
                    colSpan={{base:5, sm: 2}}
                    justifySelf='center'
                    alignSelf='center'
                >
                    {/*Main currency*/}
                    <ConverterOption 
                        symbol = {symbolsData.data} 
                        currencyList = {currencyList}
                        onCurrencyChange = {setCurrencyOne}
                        currency = {currencyOne}
                    />
                </GridItem>

                <GridItem
                    display={{base: "none", sm: "block"}}
                    colSpan={1}
                    justifySelf='center'
                    alignSelf='center'
                >
                   <RepeatIcon boxSize='2rem' color='purple.400'/>

                </GridItem>

                <GridItem
                    colSpan={{base:5, sm: 2}}
                    justifySelf='center'
                    alignSelf='center'
                >
                    {/*Main currency*/}
                    <ConverterOption 
                        symbol = {symbolsData.data} 
                        currencyList = {currencyList}
                        onCurrencyChange = {setCurrencyTwo}
                        currency = {currencyTwo}
                    />
                </GridItem>

                <GridItem colSpan={2}>
                    <ConverterInput  
                        onAmountChange = {setAmount}
                    />
                </GridItem>

                <GridItem colSpan={3} justifySelf='right' alignSelf='right'>
                    <ConverterDisplay 
                        currencyOne={currencyOne} 
                        currencyTwo = {currencyTwo} 
                        amount = {amount}
                        convertedAmount = {convertedAmount}
                        date = {date}
                    />
                </GridItem>
                
            </Grid>

            <Text textAlign='center' marginTop='2rem' fontSize='small'>
                Built with 💜 by Francisco Tame using React, React Query, Axios & Chakra-UI
            </Text>
        </Box>
        )
    }

export default Converter;
