import { gql } from '@apollo/client';

export const QUERY_SNIPPETS = gql`
  query getSnippets($category: ID) {
    snippets {
      _id
      snippetTitle
      snippetDescription
      snippetText
    }
  }
`;

export const QUERY_CHECKOUT = gql`
  query getCheckout($products: [ID]!) {
    checkout(products: $products) {
      session
    }
  }
`;

export const QUERY_ALL_PRODUCTS = gql`
  {
    products {
      _id
      name
      description
      price
      quantity
      category {
        name
      }
    }
  }
`;

export const QUERY_CATEGORIES = gql`
  {
    categories {
      _id
      name
    }
  }
`;

export const QUERY_USER = gql`
  {
    user {
      orders {
        _id
        purchaseDate
        snippets {
          _id
          snippetTitle
          snippetDescription
          snippetText
        }
      }
    }
  }
`;
