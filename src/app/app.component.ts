import { Component } from '@angular/core';
import { NgForm } from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  flat_id: number = Math.floor(Math.random()*10000, 0);
  randomUser: number = 0;
  visabilityLogin: boolean = false;
  visabilityRegister: boolean = false;
  visabilityCreateFlat: boolean = false;
  visabilityShowAll: boolean = false;

  messageLogin:string = '';
  messageRegister:string = '';
  messageFlat: string = '';

  user ={
    name: '',
    surname: '',
    email: '',
    password: '',
    is_blocked: ''
  }

  users = [
    {
      name: 'Uliana',
      surname: 'Kozla',
      email: 'hello@net.com',
      password: '1111',
      is_blocked: true
    },
    {
      name: 'Ira',
      surname: 'Vitia',
      email: 'byebye@gmail.com',
      password: 'byebye',
      is_blocked: false
    },
    {
      name: 'Oleh',
      surname: 'Derkach',
      email: 'derkach@gmail.com',
      password: '11111',
      is_blocked: false
    },
    {
      name: 'Ihor',
      surname: 'Bardach',
      email: 'bardach@ukr.net',
      password: 'bardach',
      is_blocked: false
    }
  ]

  flat = {
    id: this.flat_id,
    city: '',
    sqM: '',
    price: '',
    roomcount: '',
    owner: {}
  }


  flats = [
    {
      id: this.flat_id,
      city: "Lviv",
      sqM: 80,
      price: 100000,
      roomcount: 2,
      owner: this.users[0]
    },
    {
      id: this.flat_id,
      city: "Kyiv",
      sqM: 60,
      price: 110000,
      roomcount: 1,
      owner: this.users[1]
    },
    {
      id: this.flat_id,
      city: "Odesa",
      sqM: 120,
      price: 125000,
      roomcount: 3,
      owner: this.users[2]
    },
    {
      id: this.flat_id,
      city: "Ternopil",
      sqM: 60,
      price: 40000,
      roomcount: 2,
      owner: this.users[3]
    }
  ]

  renderLogin() {
    this.visabilityLogin = !this.visabilityLogin;
    this.visabilityRegister = false;
    this.visabilityCreateFlat = false;
    this.visabilityShowAll = false;
  }

  renderRegister() {
    this.visabilityRegister = !this.visabilityRegister;
    this.visabilityLogin = false;
    this.visabilityCreateFlat = false;
    this.visabilityShowAll = false;
  }

  renderCreateFlat() {
    this.visabilityCreateFlat = !this.visabilityCreateFlat;
    this.visabilityRegister = false;
    this.visabilityLogin = false;
    this.visabilityShowAll = false;
  }

  renderShowAll() {
    this.visabilityShowAll = !this.visabilityShowAll;
    this.visabilityRegister = false;
    this.visabilityLogin = false;
    this.visabilityCreateFlat = false;
  }

  register() {
    this.users.push(this.user);
    this.messageRegister = 'User was created';
    console.log(this.user);
  }

  login() {
    const loginedUser = this.users.find( logUser => {
      return logUser.email === this.user.email && logUser.password === this.user.password
    });
    loginedUser ? this.messageLogin = 'Welcome' : this.messageLogin = 'User is not found'
    console.log(loginedUser);
  }

  createFlat() {
    this.randomUser = Math.floor(Math.random() * (this.users.length - 1), 0);
    this.flat.owner = this.users[this.randomUser];
    this.flats.push(this.flat);
    this.messageFlat = 'Flat was created';
  }

 }
