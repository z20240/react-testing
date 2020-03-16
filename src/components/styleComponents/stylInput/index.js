import styled from 'styled-components';
import { variant } from 'styled-system';

const inputColorStyle = variant({ prop: 'variant', key: 'input.variants' });
const boxSizeStyle = variant({ prop: 'size', key: 'input.sizes' });

const stylInput = styled.input(
    {
        appearance: 'none',
        boxSizing: 'border-box', // 使長寬的數值追隨 border 而非 content.
        maxWidth: '100%',
        width: '100%',
        alignItems: 'center',
        border: '1px solid #dbdbdb',
        borderRadius: '4px',
        boxShadow: 'none',
        display: 'inline-flex',
        fontSize: '1rem',
        justifyContent: 'flex-start',
        lineHeight: '1.5',
        paddingBottom: 'calc(0.5em - 1px)',
        paddingLeft: 'calc(0.75em - 1px)',
        paddingRight: 'calc(0.75em - 1px)',
        paddingTop: 'calc(0.5em - 1px)',
        position: 'relative',
        verticalAlign: 'top',
        outline: 'none',

        backgroundColor: 'white',
        color: '#363636',
        '&:focus': {
            boxShadow: '0 0 0 0.125em rgba(50,115,220,.25)',
        },

        '&[disabled]': {
            cursor: 'not-allowed'
        }
    },
    inputColorStyle,
    boxSizeStyle
);

export default stylInput;