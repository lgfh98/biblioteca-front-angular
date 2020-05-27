import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  librosDisponibles = [];
  librosReservados = [];
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    let obs = this.http.get(
      'http://localhost:8080/biblioteca/libros/listarLibrosDisponibles'
    );

    obs.subscribe((response: any[]) => {
      console.log(response);
      this.librosDisponibles = response;
    });

    let obs1 = this.http.get(
      'http://localhost:8080/biblioteca/libros/listarLibrosReservados'
    );

    obs1.subscribe((response: any[]) => {
      console.log(response);
      this.librosReservados = response;
    });
  }
}
