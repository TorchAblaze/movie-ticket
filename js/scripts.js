// Business Logic for Ticket Object
function MovieTicket(movies, age, times) {
  this.movies = movies;
  this.age = age;
  this.times = times;
}
MovieTicket.prototype.ticketPrice = function () {
  let movieTicket = 10;
  if (this.movies === "Tremors") {
    movieTicket -= 3;
  }
};
