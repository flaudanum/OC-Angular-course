import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class AppareilService {

  appareilsubject = new Subject<any[]>();

  // private appareils = [
  //   {
  //     id: 1,
  //     name: 'Machine à laver',
  //     status: 'éteint'
  //   },
  //   {
  //     id: 2,
  //     name: 'Frigos',
  //     status: 'allumé'
  //   },
  //   {
  //     id:3,
  //     name: 'Ordinateur',
  //     status: 'éteint'
  //   }
  // ];
  private appareils = [];

  constructor(private httpClient: HttpClient) {}

  saveAppareilsToServer() {
    this.httpClient
      .put('https://oc-angular-course-fred.firebaseio.com/appareils.json', this.appareils)
      .subscribe(
        () => {
          console.log('Enregistrement terminé !');
        },
        (error) => {
          console.log('Erreur ! : ' + error);          
        }
      );
  }

  getAppareilsFromServer() {
    this.httpClient
      .get<any[]>('https://oc-angular-course-fred.firebaseio.com/appareils.json')
      .subscribe(
        (response) => {
          this.appareils = response;
          this.emitAppareilSubject();
        },
        (error) => {
          console.log('Erreur ! : ' + error);          
        }
      );
  }

  addAppareil(name: string, status: string) {
    const appareilObject = {
      id: 0,
      name: '',
      status: ''
    };
    appareilObject.name = name;
    appareilObject.status = status;
    appareilObject.id = this.appareils[(this.appareils.length - 1)].id + 1;
    this.appareils.push(appareilObject);
    this.emitAppareilSubject();
  }

  getAppareilById(id: number) {
    const appareil = this.appareils.find(
      (appareilObject) => {
        return appareilObject.id === id;
      }
    );
    return appareil;
  }

  emitAppareilSubject() {
    // Doc: https://github.com/ReactiveX/rxjs/blob/master/doc/subject.md
    this.appareilsubject.next(this.appareils.slice());
  }

  switchOnAll() {
    for (let appareil of this.appareils) {
      appareil.status = 'allumé';
    }
    this.emitAppareilSubject();
  }
  switchOffAll() {
    for (let appareil of this.appareils) {
      appareil.status = 'éteint';
    }
    this.emitAppareilSubject();
  }

  switchOnOne(i: number) {
    this.appareils[i].status = 'allumé';
    this.emitAppareilSubject();
  }
  switchOffOne(i: number) {
    this.appareils[i].status = 'éteint';
    this.emitAppareilSubject();
  }
}
