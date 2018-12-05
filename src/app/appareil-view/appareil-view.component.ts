import { Component, OnInit, OnDestroy } from '@angular/core';
import { AppareilService } from '../services/appareil.service';
import { Subscription } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-appareil-view',
  templateUrl: './appareil-view.component.html',
  styleUrls: ['./appareil-view.component.scss']
})

export class AppareilViewComponent implements OnInit, OnDestroy {

  appareils: any[];
  appareilSubscription: Subscription;

  isAuth = false;

  lastUpdate = new Promise(
    (resolve, reject) => {
      const date = new Date();
      setTimeout(
        () => {
          resolve(date);
        }, 2000
      );
    }
  );

  constructor(private appareilService: AppareilService, private authService: AuthService) {
/*     setTimeout(
      () => {
        this.isAuth = true;
      }, 4000
    ); */
    this.isAuth = this.authService.isAuth;
  }

  ngOnInit() {
    this.appareilSubscription = this.appareilService.appareilsubject.subscribe(
      (appareils: any[]) => {
        this.appareils = appareils;
      }
    );
    this.appareilService.emitAppareilSubject();
  }

  onAllumer() {
    this.appareilService.switchOnAll();
  }
  onEteindre() {
    if (confirm('Etes-vous sûr de vouloir éteindre tous vos appareils ?')) {
      this.appareilService.switchOffAll();
    }
    else {
      return null;
    }
  }

  ngOnDestroy() {
    this.appareilSubscription.unsubscribe();
  }

}
