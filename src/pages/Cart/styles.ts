import styled from 'styled-components';
import { darken, lighten } from 'polished';

export const Container = styled.div`
  padding: 30px;
  background: var(--shape);
  border-radius: 4px;

  h2 {
    margin-bottom: 5px;
    color: var(--blue)
  }

  footer {
    margin-top: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media screen and (max-width: 655px){
      margin-top: 1rem;
      flex-direction: column-reverse;
      gap: 0.5rem;
      button {
       width: 100%; 
      }
    }

    button {
      background: var(--blue);
      color: var(--shape);
      border: 0;
      border-radius: 4px;
      padding: 12px 20px;
      font-weight: bold;
      text-transform: uppercase;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.06, '#7159c1')};
      }
    }
  }
`;

export const CartMobile = styled.ul`
  display: none;
  grid-template-columns: 1fr;
  list-style: none;

  @media screen and (max-width: 655px){
    display: grid;
  }

  li {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    background: var(--shape);
    padding: 20px;
    margin-bottom: 20px;
    border: 1px solid rgba(125,125,125, 0.2);

    img {
      align-self: center;
      max-width: 150px;
    }

    > strong {
      font-size: 16px;
      line-height: 20px;
      color: #333;
      margin-top: 5px;
    }

    > span {
      font-size: 21px;
      font-weight: bold;
      margin: 5px 0 20px;
    }

    div {
      display: flex;
      align-items: center;

      input {
        border: 1px solid #ddd;
        border-radius: 4px;
        color: #666;
        padding: 6px;
        width: 50px;
      }
    }

    button {
      background: none;
      border: 0;
      padding: 6px;

      svg {
        color: var(--blue);
        transition: color 0.2s;
      }

      &:hover {
        svg {
          color: ${darken(0.06, '#7159c1')};
        }
      }

      &:disabled {
        svg {
          color: ${lighten(0.25, '#7159c1')};
          cursor: not-allowed;
        }
      }
    }
  }
`;

export const ProductTable = styled.table`
  width: 100%;

  @media screen and (max-width: 655px){
    display: none;
  }

  thead th {
    color: #999;
    text-align: left;
    padding: 12px;
  }

  tbody td {
    padding: 12px;
    border-bottom: 1px solid #eee;
  }

  img {
    height: 100px;
  }

  strong {
    color: #333;
    display: block;
  }

  span {
    display: block;
    margin-top: 5px;
    font-size: 18px;
    font-weight: bold;
  }

  div {
    display: flex;
    align-items: center;

    input {
      border: 1px solid #ddd;
      border-radius: 4px;
      color: #666;
      padding: 6px;
      width: 50px;
    }
  }

  button {
    background: none;
    border: 0;
    padding: 6px;

    svg {
      color: var(--blue);
      transition: color 0.2s;
    }

    &:hover {
      svg {
        color: ${darken(0.06, '#7159c1')};
      }
    }

    &:disabled {
      svg {
        color: ${lighten(0.25, '#7159c1')};
        cursor: not-allowed;
      }
    }
  }
`;

export const Total = styled.div`
  display: flex;
  align-items: baseline;

  span {
    color: #999;
    font-weight: bold;
  }

  strong {
    font-size: 28px;
    margin-left: 5px;
  }
`;
