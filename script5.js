// Book Data by Genre
const books = {
    romantic: [
        { title: "It Ends With Us", author: "Colleen Hoover", image: "https://via.placeholder.com/200x250?text=It+Ends+With+Us" },
        { title: "The Notebook", author: "Nicholas Sparks", image: "https://via.placeholder.com/200x250?text=The+Notebook" },
        { title: "Ugly Love", author: "Colleen Hoover", image: "https://via.placeholder.com/200x250?text=Ugly+Love" },
        { title: "Beach Read", author: "Emily Henry", image: "https://via.placeholder.com/200x250?text=Beach+Read" },
        { title: "Red, White & Royal Blue", author: "Casey McQuiston", image: "https://via.placeholder.com/200x250?text=Red,+White+%26+Royal+Blue" },
        { title: "The Time Traveler's Wife", author: "Audrey Niffenegger", image: "https://via.placeholder.com/200x250?text=The+Time+Traveler%27s+Wife" },
        { title: "Me Before You", author: "Jojo Moyes", image: "https://via.placeholder.com/200x250?text=Me+Before+You" },
        { title: "Book Lovers", author: "Emily Henry", image: "https://via.placeholder.com/200x250?text=Book+Lovers" },
        { title: "The Hating Game", author: "Sally Thorne", image: "https://via.placeholder.com/200x250?text=The+Hating+Game" },
        { title: "People We Meet on Vacation", author: "Emily Henry", image: "https://via.placeholder.com/200x250?text=People+We+Meet+on+Vacation" }
    ],
    thriller: [
        { title: "Gone Girl", author: "Gillian Flynn", image: "https://via.placeholder.com/200x250?text=Gone+Girl" },
        { title: "The Silent Patient", author: "Alex Michaelides", image: "https://via.placeholder.com/200x250?text=The+Silent+Patient" },
        { title: "Behind Closed Doors", author: "B.A. Paris", image: "https://via.placeholder.com/200x250?text=Behind+Closed+Doors" },
        { title: "Lock Every Door", author: "Riley Sager", image: "https://via.placeholder.com/200x250?text=Lock+Every+Door" },
        { title: "The Chain", author: "Adrian McKinty", image: "https://via.placeholder.com/200x250?text=The+Chain" },
        { title: "The Turn of the Key", author: "Ruth Ware", image: "https://via.placeholder.com/200x250?text=The+Turn+of+the+Key" },
        { title: "The Girl on the Train", author: "Paula Hawkins", image: "https://via.placeholder.com/200x250?text=The+Girl+on+the+Train" },
        { title: "The Couple Next Door", author: "Shari Lapena", image: "https://via.placeholder.com/200x250?text=The+Couple+Next+Door" },
        { title: "Sharp Objects", author: "Gillian Flynn", image: "https://via.placeholder.com/200x250?text=Sharp+Objects" },
        { title: "Big Little Lies", author: "Liane Moriarty", image: "https://via.placeholder.com/200x250?text=Big+Little+Lies" }
    ],
    mystery: [
        { title: "The Da Vinci Code", author: "Dan Brown", image: "https://via.placeholder.com/200x250?text=The+Da+Vinci+Code" },
        { title: "And Then There Were None", author: "Agatha Christie", image: "https://via.placeholder.com/200x250?text=And+Then+There+Were+None" },
        { title: "The Murder of Roger Ackroyd", author: "Agatha Christie", image: "https://via.placeholder.com/200x250?text=The+Murder+of+Roger+Ackroyd" },
        { title: "The Cuckoo's Calling", author: "Robert Galbraith", image: "https://via.placeholder.com/200x250?text=The+Cuckoo%27s+Calling" },
        { title: "Rebecca", author: "Daphne du Maurier", image: "https://via.placeholder.com/200x250?text=Rebecca" },
        { title: "Magpie Murders", author: "Anthony Horowitz", image: "https://via.placeholder.com/200x250?text=Magpie+Murders" },
        { title: "The Night Circus", author: "Erin Morgenstern", image: "https://via.placeholder.com/200x250?text=The+Night+Circus" },
        { title: "Pretty Girls", author: "Karin Slaughter", image: "https://via.placeholder.com/200x250?text=Pretty+Girls" },
        { title: "The Outsider", author: "Stephen King", image: "https://via.placeholder.com/200x250?text=The+Outsider" },
        { title: "A Good Girl's Guide to Murder", author: "Holly Jackson", image: "https://via.placeholder.com/200x250?text=A+Good+Girl%27s+Guide+to+Murder" }
    ],
    fantasy: [
        { title: "Harry Potter and the Sorcerer's Stone", author: "J.K. Rowling", image: "https://via.placeholder.com/200x250?text=Harry+Potter" },
        { title: "The Hobbit", author: "J.R.R. Tolkien", image: "https://via.placeholder.com/200x250?text=The+Hobbit" },
        { title: "Game of Thrones", author: "George R.R. Martin", image: "https://via.placeholder.com/200x250?text=Game+of+Thrones" },
        { title: "Shadow and Bone", author: "Leigh Bardugo", image: "https://via.placeholder.com/200x250?text=Shadow+and+Bone" },
        { title: "Six of Crows", author: "Leigh Bardugo", image: "https://via.placeholder.com/200x250?text=Six+of+Crows" },
        { title: "The Priory of the Orange Tree", author: "Samantha Shannon", image: "https://via.placeholder.com/200x250?text=The+Priory+of+the+Orange+Tree" },
        { title: "The Cruel Prince", author: "Holly Black", image: "https://via.placeholder.com/200x250?text=The+Cruel+Prince" },
        { title: "A Court of Thorns and Roses", author: "Sarah J. Maas", image: "https://via.placeholder.com/200x250?text=A+Court+of+Thorns+and+Roses" },
        { title: "The Name of the Wind", author: "Patrick Rothfuss", image: "https://via.placeholder.com/200x250?text=The+Name+of+the+Wind" },
        { title: "Throne of Glass", author: "Sarah J. Maas", image: "https://via.placeholder.com/200x250?text=Throne+of+Glass" }
    ],
    sciFi: [
        { title: "Dune", author: "Frank Herbert", image: "https://via.placeholder.com/200x250?text=Dune" },
        { title: "Ender's Game", author: "Orson Scott Card", image: "https://via.placeholder.com/200x250?text=Ender%27s+Game" },
        { title: "Foundation", author: "Isaac Asimov", image: "https://via.placeholder.com/200x250?text=Foundation" },
        { title: "The Martian", author: "Andy Weir", image: "https://via.placeholder.com/200x250?text=The+Martian" },
        { title: "Neuromancer", author: "William Gibson", image: "https://via.placeholder.com/200x250?text=Neuromancer" },
        { title: "Snow Crash", author: "Neal Stephenson", image: "https://via.placeholder.com/200x250?text=Snow+Crash" },
        { title: "Hyperion", author: "Dan Simmons", image: "https://via.placeholder.com/200x250?text=Hyperion" },
        { title: "The Left Hand of Darkness", author: "Ursula K. Le Guin", image: "https://via.placeholder.com/200x250?text=The+Left+Hand+of+Darkness" },
        { title: "I, Robot", author: "Isaac Asimov", image: "https://via.placeholder.com/200x250?text=I,+Robot" },
        { title: "Brave New World", author: "Aldous Huxley", image: "https://via.placeholder.com/200x250?text=Brave+New+World" }
    ]
};

// DOM Elements
const bookList = document.getElementById("bookList");
const genreSelect = document.getElementById("genreSelect");
const searchBar = document.getElementById("searchBar");

// Render Books Function
function renderBooks(filterGenre = "all", filterSearch = "") {
    bookList.innerHTML = "";
    const genresToShow = filterGenre === "all" ? Object.keys(books) : [filterGenre];

    genresToShow.forEach(genre => {
        books[genre]
            .filter(book => book.title.toLowerCase().includes(filterSearch.toLowerCase()))
            .forEach(book => {
                const bookCard = document.createElement("div");
                bookCard.className = "book-card";
                bookCard.innerHTML = `
                    <img src="${book.image}" alt="${book.title}">
                    <div class="book-info">
                        <h3>${book.title}</h3>
                        <p>by ${book.author}</p>
                    </div>
                `;
                bookList.appendChild(bookCard);
            });
    });
}

// Event Listeners
genreSelect.addEventListener("change", () => renderBooks(genreSelect.value, searchBar.value));
searchBar.addEventListener("input", () => renderBooks(genreSelect.value, searchBar.value));

// Initial Render
renderBooks();
