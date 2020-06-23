import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Qrcode } from '../models/Qrcode';

@Injectable({
  providedIn: 'root'
})
export class QrcodeService {

  constructor(private storage: Storage) { }

  public async salvar(qrcode: Qrcode){
    if(qrcode.text) {
      await this.storage.set(qrcode.text, qrcode)
      return true;
    } else {
      return false;
    }
  }

  public async busca(text){
    let qrcode: Qrcode;

    await this.storage.get(text).then(valor => {
      if(valor){
        qrcode = valor;
      } else {
        qrcode = null;
      }
    });
  }

  public async buscaTodos() {
    let qrcodes = [];
    
    return await this.storage.forEach((valor, chave, i) => {
      qrcodes.push(valor);
    }).then(() => {
      return qrcodes;
    }).catch(() => {
      qrcodes = [];
    });
  }
}