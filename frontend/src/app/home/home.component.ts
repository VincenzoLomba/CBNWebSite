import { Component , OnInit} from '@angular/core';
import { DataService } from '../services/data.service';
import { env } from '../env';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private dataService: DataService) {};
  public data(): DataService { return this.dataService; }
  formattedTime: string = '00:00:00';
  days: number = 0;
  private countdownDate: Date = new Date('2024-05-09T00:00:00'); // Data di fine conto alla rovescia
  private countdownInterval: any;

  ngOnInit() {
    this.startCountdown();
  }

  private startCountdown() {
    this.updateTime(); // Aggiorna il tempo all'inizio per evitare un ritardo di un secondo

    this.countdownInterval = setInterval(() => {
      this.updateTime();
    }, 1000);
  }

  private updateTime() {
    const now = new Date();
    const timeDifference = this.countdownDate.getTime() - now.getTime();

    if (timeDifference > 0) {
      const seconds = Math.floor(timeDifference / 1000) % 60;
      const minutes = Math.floor(timeDifference / (1000 * 60)) % 60;
      const hours = Math.floor(timeDifference / (1000 * 60 * 60)) % 24;
      this.days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

      this.formattedTime =
        this.formatTimeUnit(this.days) + ' giorni ' +
        this.formatTimeUnit(hours) + ' ore ' +
        this.formatTimeUnit(minutes) + ' minuti e ' +
        this.formatTimeUnit(seconds)+ ' secondi';
    } else {
      clearInterval(this.countdownInterval);
      this.formattedTime = '00:00:00'; // Mostra 00:00:00 quando il conto alla rovescia è terminato
    }
  }

  private formatTimeUnit(unit: number): string {
    return unit < 10 ? '0' + unit : unit.toString();
  }
}
