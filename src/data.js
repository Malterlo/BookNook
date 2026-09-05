const books = [
  {
    id: 1,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    description: "A classic American novel set in the Jazz Age",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/7/7a/The_Great_Gatsby_Cover_1925_Retouched.jpg",
    price: 10.99,
  },
  {
    id: 2,
    title: "Pride and Prejudice",
    author: "Jane Austen",
    description: "A witty romance about manners, family, and first impressions",
    image: "https://covers.openlibrary.org/b/isbn/9780141439518-L.jpg",
    price: 12.49,
  },
  {
    id: 3,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    description:
      "A coming-of-age story about justice and compassion in the American South",
    image: "https://covers.openlibrary.org/b/isbn/9780061120084-L.jpg",
    price: 14.99,
  },
  {
    id: 4,
    title: "1984",
    author: "George Orwell",
    description:
      "A dystopian warning about surveillance, propaganda, and totalitarian power",
    image: "https://covers.openlibrary.org/b/isbn/9780451524935-L.jpg",
    price: 11.75,
  },
  {
    id: 5,
    title: "Jane Eyre",
    author: "Charlotte Bronte",
    description:
      "An independent young woman searches for love, identity, and belonging",
    image: "https://covers.openlibrary.org/b/isbn/9780141441146-L.jpg",
    price: 9.99,
  },
  {
    id: 6,
    title: "Moby-Dick",
    author: "Herman Melville",
    description:
      "A sailor joins Captain Ahab on his obsessive hunt for a great white whale",
    image: "https://covers.openlibrary.org/b/isbn/9780142437247-L.jpg",
    price: 16.25,
  },
  {
    id: 7,
    title: "The Catcher in the Rye",
    author: "J. D. Salinger",
    description:
      "A troubled teenager wanders New York while searching for authenticity",
    image: "https://covers.openlibrary.org/b/isbn/9780316769488-L.jpg",
    price: 13.5,
  },
  {
    id: 8,
    title: "Wuthering Heights",
    author: "Emily Bronte",
    description:
      "A passionate and haunting tale of love, revenge, and the Yorkshire moors",
    image: "https://covers.openlibrary.org/b/isbn/9780141439556-L.jpg",
    price: 10.25,
  },
  {
    id: 9,
    title: "The Odyssey",
    author: "Homer",
    description:
      "Odysseus faces monsters, gods, and temptations on his long journey home",
    image: "https://covers.openlibrary.org/b/isbn/9780140268867-L.jpg",
    price: 15.99,
  },
  {
    id: 10,
    title: "The Picture of Dorian Gray",
    author: "Oscar Wilde",
    description:
      "A beautiful young man trades his conscience for eternal youth",
    image: "https://covers.openlibrary.org/b/isbn/9780141439570-L.jpg",
    price: 8.75,
  },
  {
    id: 11,
    title: "Little Women",
    author: "Louisa May Alcott",
    description:
      "Four sisters grow up, find their voices, and build lives during the Civil War era",
    image: "https://covers.openlibrary.org/b/isbn/9780147514011-L.jpg",
    price: 12.0,
  },
  {
    id: 12,
    title: "The Count of Monte Cristo",
    author: "Alexandre Dumas",
    description:
      "A wrongfully imprisoned sailor escapes and plots an elaborate revenge",
    image: "https://covers.openlibrary.org/b/isbn/9780140449266-L.jpg",
    price: 18.49,
  },
  {
    id: 13,
    title: "Frankenstein",
    author: "Mary Shelley",
    description:
      "A scientist creates life and confronts the consequences of abandoning his creation",
    image: "https://covers.openlibrary.org/b/isbn/9780141439471-L.jpg",
    price: 10.5,
  },
  {
    id: 14,
    title: "The Adventures of Huckleberry Finn",
    author: "Mark Twain",
    description:
      "A boy and an escaped man travel down the Mississippi River seeking freedom",
    image: "https://covers.openlibrary.org/b/isbn/9780142437179-L.jpg",
    price: 13.25,
  },
  {
    id: 15,
    title: "The Grapes of Wrath",
    author: "John Steinbeck",
    description:
      "A family travels west during the Great Depression in search of a better life",
    image: "https://covers.openlibrary.org/b/isbn/9780143039433-L.jpg",
    price: 17.99,
  },
  {
    id: 16,
    title: "The Secret Garden",
    author: "Frances Hodgson Burnett",
    description:
      "Three lonely children restore a hidden garden and discover the healing power of nature",
    image: "https://covers.openlibrary.org/b/isbn/9780064401883-L.jpg",
    price: 9.5,
  },
  {
    id: 17,
    title: "Dracula",
    author: "Bram Stoker",
    description:
      "A group of friends confronts an ancient vampire and his growing influence",
    image: "https://covers.openlibrary.org/b/isbn/9780141439846-L.jpg",
    price: 14.25,
  },
  {
    id: 18,
    title: "The Scarlet Letter",
    author: "Nathaniel Hawthorne",
    description:
      "A woman faces public judgment and finds strength in a strict Puritan community",
    image: "https://covers.openlibrary.org/b/isbn/9780142437261-L.jpg",
    price: 11.49,
  },
  {
    id: 19,
    title: "The Old Man and the Sea",
    author: "Ernest Hemingway",
    description:
      "An aging fisherman battles the sea in a spare story of courage and endurance",
    image: "https://covers.openlibrary.org/b/isbn/9780684801223-L.jpg",
    price: 7.99,
  },
  {
    id: 20,
    title: "The Iliad",
    author: "Homer",
    description:
      "Heroes and gods clash during the final days of the Trojan War",
    image: "https://covers.openlibrary.org/b/isbn/9780140275360-L.jpg",
    price: 16.75,
  },
  {
    id: 21,
    title: "A Tale of Two Cities",
    author: "Charles Dickens",
    description:
      "Love and sacrifice unfold between London and Paris during the French Revolution",
    image: "https://covers.openlibrary.org/b/isbn/9780141439600-L.jpg",
    price: 13.99,
  },
];

export { books };