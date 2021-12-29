import { gql } from "@apollo/client";
// GraphQL query to fetch all book items
 const BOOK_QUERY = gql`
  {
    books {
      id
      title
      subtitle
      publisher
      release_date
      number_of_purchases
      rating
      price
      image_url
      available_copies
      likes
      tags {
        name
      }
    }
  }
`;


const FILTERED_BOOKS = gql`
  query books($limit: Int) {
    books(limit: $limit) {
      id
      title
    }
  }
`;

export { FILTERED_BOOKS, BOOK_QUERY };