import styled from 'styled-components'
import Button from '../Button'

export const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  flex-direction: column;
`
export const Form = styled.div`
  padding: 10px;
`
export const FormContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  & div {
    width: 80px;
  }
  & div:first-child {
    margin-right: 10px;
  }

  & label {
    text-align: center;
  }

  & label,
  input {
    display: block;
    margin-bottom: 5px;
    width: 100%;
  }
`

export const FormButtons = styled.div`
  display: flex;
  & button:first-child {
    margin-right: 10px;
  }
`
