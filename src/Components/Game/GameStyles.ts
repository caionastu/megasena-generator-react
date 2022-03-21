import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  margin-top: 5px;

  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
`

export const Number = styled.div`
  width: 45px;
  height: 45px;
  margin-right: 3px;
  font-size: 1.5em;
  border-radius: 50%;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: green;
  color: white;

  &:last-child {
    margin-right: 0;
  }
`
