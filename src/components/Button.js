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
            ${(props) =>
                props.outline &&
                css`
                    color: ${selected};
                    background: none;
                    border: 1px solid ${selected};
                    &:hover {
                        background: ${selected};
                        color: white;
                    }
                `}
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

const fullWidthStyle = css`
    ${(props) =>
        props.fullWidth &&
        css`
            width: 100%;
            justify-content: center;
            & + & {
                margin-left: 0;
                margin-top: 1rem;
            }
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

    /* 기타 */
    & + & {
        margin-left: 1rem;
    }

    ${colorStyles};
    ${sizeStyles};
    ${fullWidthStyle};
`;

function Button({ children, color, size, outline, fullWidth, ...rest }) {
    return (
        <StyledButton
            color={color}
            size={size}
            outline={outline}
            fullWidth={fullWidth}
            {...rest}
        >
            {children}
        </StyledButton>
    );
}

Button.defaultProps = {
    color: 'blue',
    size: 'medium',
};

export default Button;
