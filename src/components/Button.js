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

const sizes = {
    large: {
        height: '3rem',
        fontSize: '1.25rem',
    },
    medium: {
        height: '2.25rem',
        fontSize: '1rem',
    },
    small: {
        height: '1.75rem',
        fontSize: '0.875rem',
    },
};

const sizeStyles = css`
    /* 크기 sizes 로 리팩토링 */
    ${({ size }) => css`
        height: ${sizes[size].height};
        font-size: ${sizes[size].fontSize};
    `}
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

    /* 나는 이거 안하면 버튼 텍스트가 상단에 박힘 */
    justify-content: center;
    align-items: center;

    /* 리팩토링 */
    ${colorStyles};
    ${sizeStyles};

    /* 기타 */
    & + & {
        margin-left: 1rem;
    }
`;

function Button({ children, color, size, ...rest }) {
    return (
        <StyledButton color={color} size={size} {...rest}>
            {children}
        </StyledButton>
    );
}

Button.defaultProps = {
    color: 'blue',
    size: 'medium',
};

export default Button;
