import { Flex } from "@chakra-ui/react"
import Converter from "../components/Converter/Converter"

function App() {

  return (
    <>
    <Flex bgGradient="linear(to-t,#7b4397 , #dc2430 )" height="100vh" justifyContent="center">
      <Converter/>
    </Flex>
    </>
  )
}

export default App
