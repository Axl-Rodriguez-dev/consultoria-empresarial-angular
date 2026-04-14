import { Component, OnInit, signal, computed } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { DataService } from '../../services/data.service';
import { Service } from '../../models/models';

@Component({
  selector: 'app-service-detail',
  imports: [RouterLink],
  templateUrl: './service-detail.component.html',
  styleUrl: './service-detail.component.css'
})
export class ServiceDetailComponent implements OnInit {
  service = signal<Service | null>(null);
  loading = signal(true);
  notFound = signal(false);

  constructor(private route: ActivatedRoute, private dataService: DataService) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const slug = params.get('slug') ?? '';
      this.loadService(slug);
    });
  }

  private loadService(slug: string): void {
    this.loading.set(true);
    this.notFound.set(false);
    this.dataService.getServices().subscribe({
      next: (services) => {
        const found = services.find(s => s.slug === slug);
        this.service.set(found && found.hasDetail ? found : null);
        this.notFound.set(!this.service());
        this.loading.set(false);
      },
      error: () => { this.notFound.set(true); this.loading.set(false); }
    });
  }
}
