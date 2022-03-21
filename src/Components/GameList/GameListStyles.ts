import styled from 'styled-components'

export const Container = styled.div`
  padding: 10px;
  max-width: 60%;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;

  background-color: #fff;
  border-radius: 5px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
`

export const Item = styled.div`
  padding: 10px;
  margin-bottom: 15px;

  background-color: #fff;
  border-radius: 5px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
`

export const ItemHeader = styled.div`
  display: flex;
  flex-direction: rows;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`

export const Title = styled.p`
  width: 30px;
  text-align: center;
  color: black;
  border-radius: 10px;
  background-color: #f3f3f3;
`

export const ContainerButtons = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: flex-end;
  & button:first-child {
    margin-right: 10px;
  }
`
