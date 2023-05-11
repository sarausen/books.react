class Book {
    amount = 10 
    itsTaken = 0 
    name = ""; 
  
    constructor(name) {
      this.name = name;
    }
  
    give() {
      if (this.amount > 0) {
        this.amount--;
        this.itsTaken++;
      } else {
        console.log("Все книги уже выданы");
      }
    }
  
    takeBack() {
      if (this.itsTaken > 0) {
        this.amount++;
        this.itsTaken--;
      } else {
        console.log("Никто еще не взял книгу"); 
      }
    }
  
    getInfo() {
      console.log(`Название "${this.name}". Всего книг доступно: ${this.amount}. Книгу брали ${this.itsTaken} раз`);
    }
  }
  
  const harry = new Book('Harry Potter')
  
  harry.give()
  harry.takeBack()
  
  harry.getInfo() 
 
  const warAndPeace = new Book('War and Peace')
  
  warAndPeace.give()
  warAndPeace.give()
  warAndPeace.takeBack()
  warAndPeace.give()
  warAndPeace.give()
  warAndPeace.give()
  warAndPeace.takeBack()
  warAndPeace.give()
  warAndPeace.takeBack()
  
  warAndPeace.getInfo() 
   
  


