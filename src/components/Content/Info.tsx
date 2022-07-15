import { Flex, Heading, Icon, Popover, PopoverBody, PopoverCloseButton, PopoverContent, PopoverTrigger, Text } from "@chakra-ui/react";
import {RiInformationLine} from 'react-icons/ri'

export function Info(){
    return(
        <Flex align='center' justify='space-between'>
            <Flex direction='column' justify='center' align={['flex-start','flex-start','center']}>
                <Heading fontSize={['2xl','5xl']} color='yellow.400' fontWeight='500'>50</Heading>
                <Text fontWeight={600} fontSize={['md','xl']} color='gray.700'>países</Text>
            </Flex>
            <Flex direction='column' justify='center' align={['flex-start','flex-start','center']}>
                <Heading fontSize={['2xl','5xl']} color='yellow.400' fontWeight='500'>60</Heading>
                <Text fontWeight={600} fontSize={['md','xl']} color='gray.700'>línguas</Text>
            </Flex>
            <Flex direction='column' justify='center' align={['flex-start','flex-start','center']}>
                <Heading fontSize={['2xl','5xl']} color='yellow.400' fontWeight='500'>27</Heading>
                <Text fontWeight={600} fontSize={['md','xl']} color='gray.700'>
                    cidades +100
                    <Popover>
                        <PopoverTrigger>
                            <Icon cursor='pointer' as={RiInformationLine} ml='1' color='gray.400' w={['10px','16px']} h={['10px', '16px']} />
                        </PopoverTrigger>
                        <PopoverContent>
                            <PopoverCloseButton />
                            <PopoverBody>
                                <span>
                                    Paris, Europa, Chile, Canada, China
                                </span>
                            </PopoverBody>
                        </PopoverContent>
                    </Popover>
                </Text>
            </Flex>
        </Flex>
    )
}