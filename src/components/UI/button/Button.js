import React from "react";
import { Button as MuiButton } from "@mui/material";
import styled from "styled-components";

const StyledMuiButton = styled(MuiButton)`
  &.MuiButton-root {
    font: inherit;
    border: 1px solid #4f005f;
    background: #4f005f;
    color: white;
    padding: 0.75rem 3.5rem;
    cursor: pointer;
    font-size: 0.8rem;
    border-radius: 4px;

    &:hover,
    &:active {
      background: #dd0db0;
      border-color: #dd0db0;
    }

    &:disabled,
    &:focus:disabled,
    &:hover:disabled,
    &:active:disabled {
      pointer-events: auto;
      background: #ccc;
      border-color: #ccc;
      color: #666666;
      cursor: not-allowed;
    }
  }
`;

function Button(props) {
  const { children, classes, fullWidth, ...other } = props;
  return (
    <StyledMuiButton
      fullWidth={fullWidth}
      classes={classes}
      type={props.type || "button"}
      {...other}
    >
      {children}
    </StyledMuiButton>
  );
}

export default Button;
