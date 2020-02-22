import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projects = [
    {
      name: 'MyMovies',
      description: "A Movie App made with Angular and Clarity Design System for the front end, and Node.js, Express.js, and MongoDB for the back end. This app uses The Movie Database API to display information for movies. Users can find movies by using search terms, filtering by genre, or sort by popular or upcoming. Users can create accounts to store their favorite movies.",
      repoUrl: 'https://github.com/rhiannoncduvall/ionic-todo-app',
      repoName: 'ionic-todo-app',
      liveAppUrl: 'https://rcd-movie-app.netlify.com/',
      liveAppName: 'MyMovies',
      imagePath: '../../assets/images/movie-app-1.png'
    },
    {
      name: 'To Do App',
      description: 'A mobile hybrid To Do app made using MEAN Stack with Ionic that allows users to make a list of their to dos. The user can register and sign in to store their todos for later.',
      repoUrl: 'https://github.com/rhiannoncduvall/ionic-todo-app',
      repoName: 'ionic-todo-app',
      liveAppUrl: null,
      liveAppName: null,
      imagePath: '../../assets/images/todo-app-1.png',
    },
    {
      name: 'Banking App',
      description: 'An Angular app that simulates an ATM terminal. The user can check their balance, make withdrawals and deposits, and check their transaction history.',
      repoUrl: 'https://github.com/rhiannoncduvall/banking-app',
      repoName: 'banking-app',
      liveAppUrl: null,
      liveAppName: null,
      imagePath: '../../assets/images/bank-app.png',
    },
    {
      name: 'Is It A Palindrome?',
      description: 'A vanilla HTML, CSS and Javascript app that takes words or phrases that a user inputs and appends it to a list based on whether or not the phrase is a palindrome.',
      repoUrl: 'https://github.com/rhiannoncduvall/palindrome',
      repoName: 'palindrome',
      liveAppUrl: null,
      liveAppName: null,
      imagePath: '../../assets/images/palindrome.png',
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
