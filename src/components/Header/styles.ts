import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 50px 0;

  @media screen and (max-width: 414px) {
    flex-direction: column;
    justify-content: center;
    gap: 1rem;
    margin: 3rem 0 2rem 0;
    a:last-child {
      align-self: flex-end;
    }
  }

  a {
    transition: opacity 0.2s;

    &:hover {
      opacity: 0.7;
    }

    img {
      width: 100%;
    }
  }
`;

export const Cart = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;

  div {
    text-align: right;
    margin-right: 10px;

    strong {
      display: block;
      color: #fff;
    }

    span {
      font-size: 0.75rem;
      color: #999;
    }
  }
`;
