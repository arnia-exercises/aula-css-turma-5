import styled from "styled-components";

const Div = styled.div`
  position: relative;
  margin-bottom: 35px;

  &.active {
    input {
      border-color: #00C247;
      
      ~ label {
        color: #00C247;
      }
    }
  }
  &.error {
    input {
      border-color: red !important;

      ~ label {
        color: red !important;
      }
    }
  }
`

const Label = styled.label`
  position: absolute;
  line-height: 19.6px;
  font-size: 14px;
  letter-spacing: .2px;
  top: -9px;
  left: 10px;
  background: #fff;
  padding: 0 8px;
  color: #757575;
`

const Input = styled.input`
  border: 1px solid #E0E0E0;
  height: 56px;
  background-color: #fff;
  border-radius: 16px;
  width: 100%;
  padding: 0 16px;
  outline: none;
  color: #757575;

  &::placeholder {
    color: #BDBDBD;
  }

  &:focus, &:hover {
    border-color: #00C247;
    outline-color: #00C247;

    ~ label {
      color: #00C247;
    }
  }
`

const Icon = styled.div`
  position: absolute;
  right: 16px;
  top: 50%;
  margin-top: -12px;
  color: #BDBDBD;
  cursor: pointer;

  svg {
    width: 24px;
    height: 24px;
  }
`

export default {
  Div, Label, Input, Icon
}
