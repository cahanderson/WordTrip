import { Flex, Heading, useBreakpointValue } from "@chakra-ui/react";
import { Banner } from "../components/Banner";
import { Header } from "../components/Header";
import { SwiperNavigation } from "../components/SwiperNavigation";
import { Tracer } from "../components/Tracer";
import Caracteristicas from "../components/TravelTypes";

export default function Home() {

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  })

  return (
    <Flex
      direction='column'
      maxWidth={1440}
      display='flex'  
    >
      <Header />
      <Banner showAirplane={isWideVersion} />
      <Caracteristicas />
      <Tracer />

      <Heading
        textAlign='center'
        fontWeight='500'
        mb={['5','14']}
        fontSize={['lg','3xl','4xl']}
      >
        Vamos nessa?<br />
        Então escolhe seu continente.
      </Heading>

      <SwiperNavigation />
      
      
    </Flex>
      
    
  )
}
