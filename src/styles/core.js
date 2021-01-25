import styled from 'styled-components';

export const Title = styled.h1`
  font-size: 2em;
  text-align: center;
`;

export const Subtitle = styled.h2`
  font-size: 1em;
  text-align: center;
`;

export const StyledFlex = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledSelect = styled.select`
  width: 274px;
  height: 40px;
  background: white;
  font-size: 14px;
  border-width: thin;
  padding: 10px;
  margin: 5px;
  line-height: 50px;

  option {
    color: black;
    display: flex;
    white-space: pre;
    text-align: center;
  }
`;

export const StyledInput = styled.input`
  padding: 10px;
  margin: 3px;
  width: 250px;
`;

export const StyledButton = styled.button`
  background: ${(props) => props.theme.color.main};
  border-radius: 7px;
  color: white;
  cursor: pointer;
  text-shadow: 2px 2px 4px #000000;
  width: 274px;
  height: 40px;

  &:hover {
    opacity: 0.75;
  }
`;

export const StyledContainer = styled.ul`
  display: flex;
  flex-flow: column;
  width: 95%;
`;

export const ListContainer = styled.span`
  display: flex;
  flex-flow: column;
  width: 100%;
  margin-top: 30px;
`;

export const ListElement = styled.li`
  list-style-type: none;
  margin: 10px;
`;

export const StyledTable = styled.table`
  border: none;
  border-collapse: collapse;

  td,
  th {
    border: 1px solid;
  }

  td {
    padding: 5px 10px;
  }

  tbody tr {
    :nth-of-type(odd) {
      background-color: #efefef;
    }
    :hover {
      background-color: lightgreen;
    }
  }
  thead > tr {
    text-transform: capitalize;
    background-color: #c2c2c2;
    height: 80px;
  }
`;

export const NavbarList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  padding-left: 5px;
  padding-right: 20px;
  overflow: hidden;
  background-color: ${(props) => props.theme.color.main};
`;

export const NavbarElement = styled.li`
  float: ${(props) => props.float};

  a {
    display: block;
    color: white;
    text-align: center;
    padding: 15px 20px;
    text-decoration: none;
    font-weight: bold;
    font-size: 30px;
    text-shadow: 2px 2px 4px #000000;
  }

  a:hover {
    opacity: 0.75;
  }
`;

NavbarElement.defaultProps = {
  float: 'left',
};
