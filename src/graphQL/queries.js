import { gql } from "@apollo/client";
// GraphQL query to fetch all book items
export const BOOK_QUERY = gql`
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
    }
  }
`;