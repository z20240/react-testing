import styled from 'styled-components';
// import { variant } from 'styled-system';

// const inputColorStyle = variant({ prop: 'variant', key: 'input.variants' });
// const boxSizeStyle = variant({ prop: 'size', key: 'input.sizes' });

const stylButton = styled.a({
    appearance: 'none',
    boxSizing: 'border-box', // 使長寬的數值追隨 border 而非 content.
    maxWidth: '100%',
    width: '100%',
    alignItems: 'center',
    boxShadow: 'none',
    lineHeight: '1.5',

});

export default stylButton;