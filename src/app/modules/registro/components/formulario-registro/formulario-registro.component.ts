import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-formulario-registro',
  templateUrl: './formulario-registro.component.html',
  styleUrls: ['./formulario-registro.component.css'],
})
export class FormularioRegistroComponent implements OnInit {
  formulario: FormGroup;
  success: Boolean;
  idLibro: number;
  idCliente: number;

  constructor(
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private http: HttpClient
  ) {
    this.success = false;
    this.formulario = this.formBuilder.group({
      cedula: [],
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      console.log(params);
      this.idLibro = params.bookId;
    });
  }

  onSubmit(data) {
    let obs = this.http.get(
      `http://localhost:8080/biblioteca/prestamos/prestarLibro?idLibro=${this.idLibro}&idCliente=${data.cedula}`
    );
    console.log(this);
    obs.subscribe((res: Object) => {
      this.success = true;
      console.log(res);
    });
  }
}
