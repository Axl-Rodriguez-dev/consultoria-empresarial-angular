import { Component, OnInit, signal, computed } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DataService } from '../../services/data.service';
import { Service } from '../../models/models';
import { ServiceCardComponent } from '../../components/service-card/service-card.component';

@Component({
  selector: 'app-services',
  imports: [ServiceCardComponent, FormsModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css',
})
export class ServicesComponent implements OnInit {
  public allServices = signal<Service[]>([]);
  loading = signal(true);

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getServices().subscribe({
      next: (data) => {
        this.allServices.set(data);
        this.loading.set(false);
      },
      error: () => {
        this.loading.set(false);
      },
    });
  }
}
