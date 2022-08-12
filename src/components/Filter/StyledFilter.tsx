import styled from "styled-components";

const StyledFilter = styled.div`
  display: flex;
  justify-content: center;
  gap: 6px;
  margin-bottom: 15px;

  @media (min-width: 699px) {
    display: flex;
    justify-content: flex-end;
    margin-right: 190px;
  }

  details {
    position: relative;
    width: 300px;
    margin-right: 1rem;
  }

  details[open] {
    z-index: 1;
  }

  summary {
    padding: 1rem;
    cursor: pointer;
    border-radius: 5px;
    background-color: #ddd;
    list-style: none;
  }

  summary::-webkit-details-marker {
    display: none;
  }

  details[open] summary:before {
    content: "";
    display: block;
    width: 100vw;
    height: 100vh;
    background: transparent;
    position: fixed;
    top: 0;
    left: 0;
  }

  summary:after {
    content: "";
    display: block;
    float: right;
    width: 0.5rem;
    height: 0.5rem;
    border-bottom: 1px solid currentColor;
    border-left: 1px solid currentColor;
    border-bottom-left-radius: 2px;
    transform: rotate(45deg) translate(50%, 0%);
    transform-origin: center center;
    transition: transform ease-in-out 100ms;
  }

  summary:focus {
    outline: none;
  }

  details[open] summary:after {
    transform: rotate(-45deg) translate(0%, 0%);
  }

  ul {
    width: 100%;
    background: #ddd;
    position: absolute;
    top: calc(100% + 0.5rem);
    left: 0;
    padding: 1rem;
    margin: 0;
    box-sizing: border-box;
    border-radius: 5px;
    max-height: 200px;
    overflow-y: auto;
  }

  li {
    margin: 0;
    padding: 1rem 0;
    border-bottom: 1px solid #ccc;
    list-style: none;
  }

  li:first-child {
    padding-top: 0;
  }

  li:last-child {
    padding-bottom: 0;
    border-bottom: none;
  }

  summary.radios {
    counter-reset: radios;
  }

  summary.radios:before {
    content: var(--selection);
  }

  input[type="radio"] {
    counter-increment: radios;
    appearance: none;
    display: none;
  }

  input[type="radio"]:checked {
    display: inline;
    --display: block;
  }

  input[type="radio"]:after {
    content: attr(title);
    display: inline;
    font-size: 1rem;
  }

  ul.list {
    counter-reset: labels;
  }

  label {
    width: 100%;
    display: flex;
    cursor: pointer;
    justify-content: space-between;
  }

  label span {
    --display: none;
    display: var(--display);
    width: 1rem;
    height: 1rem;
    border: 1px solid #727272;
    border-radius: 3px;
  }
`;

export default StyledFilter;
