export class Ordinateur {
      id: number;
      modele: string;
      marque: string;
      type: string;
      category: string;
      prixAchat: number;
      prixVente: number;
      dateEntreStock: string;
      constructor(id: number = null, modele: string = null,marque:string = null, type: string = null,category: string = null, prixAchat: number = null,prixVente: number = null,dateEntreStock: string = null) {
      this.id = id;
      this.modele = modele;
      this.marque = marque;
      this.type = type;
      this.category = category;
      this.prixAchat = prixAchat;
      this.prixVente= prixVente;
      this.dateEntreStock= dateEntreStock;
      }
}

