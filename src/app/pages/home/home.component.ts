import { Component, OnInit, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DataService } from '../../services/data.service';
import { Service } from '../../models/models';
import { ServiceCardComponent } from '../../components/service-card/service-card.component';

@Component({
  selector: 'app-home',
  imports: [RouterLink, ServiceCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  services = signal<Service[]>([]);
  loading = signal(true);

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getServices().subscribe({
      next: (data) => {
        this.services.set(data);
        this.loading.set(false);
      },
      error: () => {
        this.loading.set(false);
      },
    });
  }
}
