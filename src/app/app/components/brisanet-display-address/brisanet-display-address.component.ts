import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-brisanet-display-address' ,
  templateUrl: './brisanet-display-address.component.html',
  styleUrls: ['./brisanet-display-address.component.less'],


})
export class BrisanetDisplayAddressComponent implements OnInit {

  addressIcon = "../../../../assets/address.svg"
  deleteIcon = "../../../../assets/delete.svg"
  address: string = 'Avenida Jacinto Gomes Filho, 627, Planalto Universitário';
  state: string = 'Quixadá-CE • CEP 63902-025';



  constructor() { }

  ngOnInit(): void {
  }

}
