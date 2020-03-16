export default {
    breakpoints: ['40em', '52em', '64em'],
    fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 72],
    space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
    colors: {
        white: 'hsl(0, 0%, 100%)',
        black: 'hsl(0, 0%, 4%)',
        'white-ter': 'hsl(0, 0%, 96%)',
        'grey-darker': 'hsl(0, 0%, 21%)',
        turquoise: 'hsl(171, 100%, 41%)',
        blue: 'hsl(217, 71%, 53%)',
        cyan: 'hsl(204, 86%, 53%)',
        green: 'hsl(141, 53%, 53%)',
        yellow: 'hsl(48, 100%, 67%)',
        gray: 'rgba(0, 0, 0, 0.7)',
        red: 'hsl(348, 100%, 61%)',
    },
    input: {
        variants: {
            primary: {
                borderColor: 'turquoise',
                '&:focus': {
                    boxShadow: '0 0 0 0.125em rgba(0,209,178,.25)',
                },
            },
            default: {
                borderColor: 'gray',
                '&:focus': {
                    boxShadow: '0 0 0 0.125em rgba(50,115,220,.25)',
                },
            },
            info: {
                borderColor: 'cyan',
                '&:focus': {
                    boxShadow: '0 0 0 0.125em rgba(50,152,220,.25)',
                },
            },
            link: {
                borderColor: 'blue',
                '&:focus': {
                    boxShadow: '0 0 0 0.125em rgba(50,115,220,.25)',
                },
            },
            success: {
                borderColor: 'green',
                '&:focus': {
                    boxShadow: '0 0 0 0.125em rgba(72,199,116,.25)',
                },
            },
            warning: {
                borderColor: 'yellow',
                '&:focus': {
                    boxShadow: '0 0 0 0.125em rgba(255,221,87,.25)',
                },
            },
            danger: {
                borderColor: 'red',
                '&:focus': {
                    boxShadow: '0 0 0 0.125em rgba(241,70,104,.25)',
                },
            },
        },
        sizes: {
            small: {
                'borderRadius': '2px',
                'fontSize': '.75rem'
            },
            medium: {
                'fontSize': '1.25rem'
            },
            large: {
                fontSize: '1.5rem'
            }
        }
    },
    button: {
        variants: {
            primary: {
                borderColor: 'turquoise',
                '&:focus': {
                    boxShadow: '0 0 0 0.125em rgba(0,209,178,.25)',
                },
            },
            default: {
                borderColor: 'gray',
                '&:focus': {
                    boxShadow: '0 0 0 0.125em rgba(50,115,220,.25)',
                },
            },
            info: {
                borderColor: 'cyan',
                '&:focus': {
                    boxShadow: '0 0 0 0.125em rgba(50,152,220,.25)',
                },
            },
            link: {
                borderColor: 'blue',
                '&:focus': {
                    boxShadow: '0 0 0 0.125em rgba(50,115,220,.25)',
                },
            },
            success: {
                borderColor: 'green',
                '&:focus': {
                    boxShadow: '0 0 0 0.125em rgba(72,199,116,.25)',
                },
            },
            warning: {
                borderColor: 'yellow',
                '&:focus': {
                    boxShadow: '0 0 0 0.125em rgba(255,221,87,.25)',
                },
            },
            danger: {
                borderColor: 'red',
                '&:focus': {
                    boxShadow: '0 0 0 0.125em rgba(241,70,104,.25)',
                },
            },
        },
    }

};