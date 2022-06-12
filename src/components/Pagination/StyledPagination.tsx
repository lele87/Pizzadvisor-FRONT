import styled from "styled-components";

const StyledPagination = styled.div`
  .loadmore-button {
    width: 200px;
    height: 50px;
    color: #fff;
    display: block;
    text-align: center;
    margin: 20px auto;
    margin-top: 30px;
    padding: 10px;
    border-radius: 4rem;
    border: 1px solid transparent;
    background-color: blue;
    transition: 0.3s;
    box-shadow: 0px 11px 35px 2px rgba(0, 0, 0, 0.14);
    font-size: 18px;
  }
  #loadmore-button:hover {
    color: blue;
    background-color: #fff;
    border: 1px solid blue;
    text-decoration: none;
  }
`;

export default StyledPagination;
