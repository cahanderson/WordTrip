import { Flex } from "@chakra-ui/react";
import { Cities } from "../components/Cities";
import { Content } from "../components/Content";
import { ContinentBanner } from "../components/ContinentBanner";
import { Header } from "../components/Header";

export default function Continent(){
    return(
        <Flex
            direction='column'
            maxWidth='1440px'
        >
            <Header />
            <ContinentBanner />

            <Flex mx='auto' direction='column' maxW='1160px' mb='10' px='1rem'>
                <Content />
                <Cities />
            </Flex>
           
        </Flex>
    )
}