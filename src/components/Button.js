import React from 'react';
import styled, { css } from 'styled-components';
import { darken, lighten } from 'polished';

/* 리팩토링 */
const colorStyles = css`
    /* 색상 */
    ${({ theme, color }) => {
        const selected = theme.palette[color];
        return css`
            background: ${selected};
            &:hover {
                background: ${lighten(0.1, selected)};
            }
            &:active {
                background: ${darken(0.1, selected)};
            }
        `;
    }}
`;

const StyledButton = styled.button`
    /* 공통 스타일 */
    display: inline-flex;
    outline: none;
    border: none;
    border-radius: 4px;
    color: white;
    font-weight: bold;
    cursor: pointer;
    padding-left: 1rem;
    padding-right: 1rem;

    padding-top: 0.6rem; /* 나는 이거 안하면 버튼 텍스트가 상단에 박힘 */

    /* 크기 */
    height: 2.25rem;
    font-size: 1rem;

    ${colorStyles}; /* 리팩토링 */

    /* 기타 */
    & + & {
        margin-left: 1rem;
    }
`;

function Button({ children, color, ...rest }) {
    return (
        <StyledButton color={color} {...rest}>
            {children}
        </StyledButton>
    );
}

Button.defaultProps = {
    color: 'blue',
};

export default Button;
