import { Flex, Image, Grid, Icon } from "@chakra-ui/react";
import {RiArrowLeftSLine} from 'react-icons/ri'
import Link from "next/link";
import { useRouter } from "next/router";

export function Header(){
    const {asPath} = useRouter()
    const notHome = asPath !== '/'
    return(
        <Flex
            as = 'header'
            w='100%'
            h={['50px','100px']}
            bgColor='whiteAlpha.800'
            mx='auto'
            px='auto'
            align='center'
            justify='center'
        >   
            <Grid
                h='100%'
                mx='auto'
                w='100%'
                maxW='1160px'
                alignItems='center'
                templateColumns='repeat(3, 1fr)'
                justifyContent='center'
            >
                {notHome&&(
                    <Link href='/'>
                        <a>
                            <Icon as={RiArrowLeftSLine} fontSize={[20, 40]} justifySelf='start' />      
                        </a>
                    </Link>
                )}
                <Image
                    w={['81px' ,'184px']} 
                    src='Logo.svg' 
                    alt="Logo com nome WordTrip e um desenho de um avião" 
                    justifySelf='center'
                    gridColumn='2'
                /> 
                    
            </Grid>
            
       </Flex>
    )
}