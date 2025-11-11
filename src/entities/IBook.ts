export interface IBook {
  title: string;
  author: string;
  publishYear: number;
  ISBN: string;
}

// class BookEntity {
//   private quantity = 0
//   private rentedBooks = 0

//   constructor(private readonly name: string, private readonly author: string) {}

//   getName(): string {
//     return this.name
//   }

//   addBook(): void {
//     this.quantity += 1
//   }

//   getQuantity(): number {
//     return this.quantity
//   }

//   getAvailableBooks(): number {
//     return this.quantity - this.rentedBooks
//   }

//   rentalBook(): void {
//     if (this.getAvailableBooks() <= 0) {
//       throw new Error('Livro não disponÍvel')
//     }

//     this.rentedBooks += 1
//   }

//   returnBook(): void {
//     this.rentedBooks = this.rentedBooks - 1
//   }
// }

// const pequenoPrincipe = new BookEntity('Pequeno Principe', "La France")
// console.log(pequenoPrincipe.getName())
// console.log(pequenoPrincipe.addBook())
// console.log(pequenoPrincipe.addBook())
// console.log(pequenoPrincipe.addBook())
// console.log(pequenoPrincipe.addBook())
// console.log(pequenoPrincipe.getQuantity())
