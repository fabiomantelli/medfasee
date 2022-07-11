import { Flex } from '@chakra-ui/react'
import type { NextPage } from 'next'
import { Header } from '../Components/Header'
import { List } from '../Components/List'
import { Map } from '../Components/Map'

const Home: NextPage = () => {
  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      width="100vw"
      height="100vh"
      maxWidth="100vw"
      maxHeight="100vh"
      position="relative"
    >
      {/* <Header /> */}
      {/* <List /> */}
      <Map />
    </Flex>
  )
}

export default Home
