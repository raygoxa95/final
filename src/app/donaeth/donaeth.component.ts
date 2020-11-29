import { Component, OnInit } from '@angular/core';
import { AuthService} from "../services/auth.service";
@Component({
  selector: 'app-donaeth',
  templateUrl: './donaeth.component.html',
  styleUrls: ['./donaeth.component.scss']
})
export class DonaethComponent implements OnInit {
  FromAddress: string;
  Private: string;
  ToAddress: string;
  Ammount: string;
  constructor(public authService: AuthService) { }
  

  ngOnInit(): void {
  }

  getData(FromAddress,Private,ToAddress,Ammount){
    // console.log(FromAddress,Private,ToAddress,Ammount)
    this.authService.usuarioTransaccion("0x56BF92d9E876A38CC653F05b0B73380fb1e51329","8f3c1b2db329a6a22da39fc5bc055b2c9615c979793911f00e62ab6245e581b3","0x81B047F7Bfc326494AeD189EddBd49f38603265b","1000000000000000").subscribe(res=>{
      console.log(res.json())
    })
    // this.authService.usuarioTransaccion(FromAddress,Private,ToAddress,Ammount).subscribe(res=>{
    //   console.log(res)
    // })
    
  }
}
