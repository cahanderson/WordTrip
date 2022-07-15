import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";

interface BannerProps{
    showAirplane: boolean
}

export function Banner({showAirplane}:BannerProps){
    return(
        <Flex 
            w='100%' 
            h={['163px', '250px','250px', '335px']} 
            bgImage="url('/europe.svg')"
            bgRepeat='no-repeat'
            bgSize='cover'    
        >
            <Flex
                justify={['center', 'space-between']}
                align='center'
                w='100%'
                mx='auto'
                px={['4','10','15','20','36']}
            >
                <div>
                    <Heading
                        color='white.500'
                        fontSize='36px'
                        fontWeight='500'
                    >
                        5 Continentes<br /> Infinitas possibilidades.
                    </Heading>
                    <Text
                        color='white.300'
                        mt='5'
                        maxW={['100%','100%','100%','550px']}
                        fontSize={['0.8rem','xl']}
                    >
                        Chegou a hora de tirar do papel a viagem que você sempre sonhou. 
                    </Text>
                    </div>
                    <Image 
                        display={['none', 'flex']}
                        src='/Airplane.svg'
                        alt='Avião amarelo voando em meio a algumas nuvens.'
                        ml='8'
                        w={['300px','300px','300px','430px']}
                        transform='translateY(48px)'
                    />
            </Flex>
      </Flex>
    )
}