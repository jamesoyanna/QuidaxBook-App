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
       genres {
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



const SINGLE_BOOK_QUERY = gql`
  query book($id: ID!) {
    book(id: $id) {
      id
      created_at
      updated_at
      title
      publisher
      release_date
      number_of_purchases
      likes
      rating
      image_url
      available_copies
      full_description
      genres {
        name
      }
      tags {
        name
      }
    }
  }
`;

export { FILTERED_BOOKS, BOOK_QUERY, SINGLE_BOOK_QUERY };