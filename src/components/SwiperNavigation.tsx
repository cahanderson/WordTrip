import { Flex, Heading, Text } from '@chakra-ui/react'
import Link from 'next/link'
import {Swiper , SwiperSlide} from 'swiper/react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css'

export function SwiperNavigation(){
    return(
        <Flex
            w='100%'
            maxWidth='1240px'
            mx='auto'
            h={['250px','450px']}
            mb={['5','10']}
        >
            <Swiper
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              slidesPerView={1}
              navigation
              pagination={{clickable:true}}
              autoplay={{delay:4000}}
              style={{width:'100%', flex:'1'}}
            >
                <SwiperSlide>
                    <Flex
                        w='100%'
                        h='100%'
                        bgImage='url(/europe.svg)'
                        bgRepeat='no-repeat'
                        bgSize='cover'
                        align='center'
                        justify='center'
                        direction='column'
                        textAlign='center'
                        bgPosition='center'
                    >
                        <Link href='/Europe'>
                            <a>
                                <Heading
                                    color='white.500'
                                    fontSize={['3xl','4xl','5xl']}
                                    fontWeight='bold'
                                >
                                    Europa
                                </Heading>

                                <Text
                                    color='gray.300'
                                    fontFamily='Poppins'
                                    fontWeight='bold'
                                    fontSize={['0.8rem','1xl','2xl']}
                                    mt='10px'
                                >
                                    O continente mais antigo
                                </Text>
                            </a>
                        </Link>
                    </Flex>
                </SwiperSlide>
            </Swiper>
        </Flex>
    )
}
