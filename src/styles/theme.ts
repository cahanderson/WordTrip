import { extendTheme} from '@chakra-ui/react'

export const theme = extendTheme({
    colors:{
        white:{
            "500": "#F5F8FA",
            "300": "#DADADA",
        },
        black:{
            "500":"#47585B"
        }

    },
    fonts:{
        heading: 'Poppins',
        body:'Poppins',
    }
})