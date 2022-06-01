import styled from "styled-components";

const StyledNavbar = styled.div`
  display: flex;
  position: sticky;

  ul {
    display: flex;
    list-style: none;
    justify-content: space-between;
    padding-left: 10px;
    padding-right: 10px;
    margin-bottom: 0px;
    position: fixed;
    bottom: 10px;
    width: 97.4vw;
    border-radius: 4rem;
    box-shadow: 0px 11px 35px 2px rgba(0, 0, 0, 0.14);
    background-color: #fafafa;
    align-items: center;
  }

  li {
    text-align: center;
    padding: 10px;
  }

  img {
    width: 60px;
    height: 60px;
  }
`;

export default StyledNavbar;
