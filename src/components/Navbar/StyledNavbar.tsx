import styled from "styled-components";

const StyledNavbar = styled.div`
  display: flex;
  position: sticky;
  bottom: 0;

  ul {
    display: flex;
    list-style: none;
    justify-content: space-between;
    padding-left: 10px;
    padding-right: 10px;
    padding-top: 10px;
    margin-bottom: 0px;
    position: sticky;
    bottom: 0px;
    width: 100%;
    border-radius: 3rem 3rem 0 0;
    box-shadow: 0px 11px 35px 2px rgba(0, 0, 0, 0.14);
    background-color: #fafafa;
    align-items: center;
  }

  li {
    text-align: center;
    padding: 10px;
  }

  img {
    width: 40px;
    height: 40px;

    @media (min-width: 699px) {
      display: none;
    }
  }

  .info-navbar {
    @media (max-width: 699px) {
      display: none;
    }

    @media (min-width: 699px) {
      position: relative;
      right: 620px;
    }
  }
`;

export default StyledNavbar;
