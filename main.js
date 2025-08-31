// Step 1: Create a Base Class
class LibraryItem {
    constructor(title, id){    //constructor takes three parameters and assigns them to the object's properties
        this.title = title;    //'this.title' creates a property called 'title' and assigns the parameter value to it
        this.id = id;
        this.isAvailable = true;
    }
    checkOut() {     //method that handles checking out library items
        if (this.isAvailable) {
            this.isAvailable = false;
            console.log(`${this.title} has been checked out.`);
        } else {
            console.log(`${this.title} is not available.`);
        }
    }    
    returnItem() {      //method that handles returning library items
        this.isAvailable = true;     //set the item back to available status
        console.log(`${this.title} has been returned.`);
    }
}

// Step 2: Extend the Base Class
class Book extends LibraryItem {   //'extends LibraryItem' means Book inherits all properties and methods from LibraryItem
    constructor(title, id, isAvailable, author, genre) {
        super(title, id, isAvailable);    //'super()' calls the parent class constructor to set up basic properties
        this.author = author;
        this.genre = genre;
    }
    describe() {     //method to provide detailed information about the book
        console.log(`${this.title} is a ${this.genre} book, written by ${this.author}.`)
        if (this.isAvailable) {
            console.log(`${this.title} is currently available for checkout.`);
        } else{
            console.log(`${this.title} is currently unavailable.`);
        }
    }
}
class DVD extends LibraryItem {
    constructor(title, id, isAvailable, director, duration, genre) {
        super(title, id, isAvailable);
        this.director = director;
        this.duration = duration;
        this.genre = genre;
    }
    describe() {       //method to describe specific to DVDs (this was missing in the original code)
        console.log(`${this.title} is a DVD directed by ${this.director}, with a runtime of ${this.duration}.`);
        if (this.isAvailable) {
            console.log(`${this.title} is currently available for checkout.`);
        } else {
            console.log(`${this.title} is currently unavailable.`);
        }
    }
}
class Magazine extends LibraryItem {
    constructor(title, id, isAvailable, issueNumber, publisher) {
        super(title, id, isAvailable);
        this.issueNumber = issueNumber;
        this.publisher = publisher;
    }
    describe() {     //describe method for magazines (this was missing in the original code) 
        console.log(`${this.title} is a magazine published by ${this.publisher}, Issue #${this.issueNumber}.`);
        if (this.isAvailable) {
            console.log(`${this.title} is currently available for checkout.`);
        } else {
            console.log(`${this.title} is currently unavailable.`);
        }
    }
}

//Step 3: Create objects (instances) of each class
let book1 = new Book("Star Wars: Tempest Breaker", "B001", true, "Cavan Scott", "Fiction");   //'new Book()' creates a new Book object with the specified parameters
let dvd1 = new DVD("Adaptation", "D001", true, "Spike Jonze", "115 Minutes");
let magazine1 = new Magazine("Debug Magazine", "M103", false, 56, "Debug Media LTD");

// Step 4: Test the Inheritance
console.log("\n*Testing checkout functionality");    //test the checkout functionality with a new header
book1.checkOut();    //check out the book (should succeed since it's available)
dvd1.checkOut();     //check out the DVD (should succeed since it's available)
magazine1.checkOut();    //check out the magazine (should fail since it's already unavailable)

console.log("\n*Testing return functionality");    //test the return functionality
book1.returnItem();    //return each item (will mark each as available again)
dvd1.returnItem();
magazine1.returnItem();

console.log(`Book: ${book1.title} by ${book1.author}, Genre: ${book1.genre}`);    // Test accessing unique properties
console.log(`DVD: ${dvd1.title} directed by ${dvd1.director}, Duration: ${dvd1.duration}`);
console.log(`Magazine: ${magazine1.title}, Issue #${magazine1.issueNumber}, Publisher: ${magazine1.publisher}`);

