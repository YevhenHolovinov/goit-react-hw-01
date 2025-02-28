import BookList from "./BookList";

// export default function App() {    
//   return (
//     <div>
//       <h1>Best selling</h1>

//       <Product
//         name="Tacos With Lime"
//         imgUrl="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640"
//         price={10.99}
//       />
//       <Product
//         name="Fries and Burger"
//         imgUrl="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?dpr=2&h=480&w=640"
//         price={14.29}
//       />
//     </div>
//   );
// }
const favBooks = [
    { id: "id-1", name: "JS for beginners", reiting: "5.5" },
    { id: "id-2", name: "React basics", reiting: "4.5" },
    { id: "id-3", name: "React Router overview", reiting: "8.5" },
    { id: "id-4", name: "JS for beginners", reiting: "9.5" },
    { id: "id-5", name: "React basics", reiting: "7.5" },
    { id: "id-6", name: "React Router overview", reiting: "1.5" },
    { id: "id-7", name: "JS for beginners", reiting: "3.5" },
    { id: "id-8", name: "React basics", reiting: "9.5" },
    { id: "id-9", name: "React Router overview", reiting: "2.5" }
  ];
const reitingBooks = favBooks.filter((book) => book.reiting > 5);
export default function App  () {
    return (
      <>
        <h1>Books of the week</h1>
        <BookList books={favBooks} />
        <h2>REITING</h2>
        <BookList books={reitingBooks} />
      </>
    );

  };