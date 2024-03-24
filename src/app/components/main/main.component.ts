import { Component } from '@angular/core';
import { PreloadURLObject } from 'src/@types/types';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent {
  isLoaded = false;

  constructor() {
    this.loadAssets();
  }

  preloadAsset(urlObj: PreloadURLObject) {
    return new Promise<void>((resolve, reject) => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = urlObj.url;
      link.as = urlObj.as;
      link.onload = () => resolve();
      link.onerror = () =>
        reject(new Error(`Failed to preload asset: ${urlObj.url}`));
      document.head.appendChild(link);
    });
  }

  loadAssets() {
    const urlsToPreload: Array<PreloadURLObject> = [
      {
        url: '/assets/fonts/Alegreya.ttf',
        as: 'font',
      },
      {
        url: '/assets/fonts/Alfa Slab One.ttf',
        as: 'font',
      },
    ];

    const promises = urlsToPreload.map((urlObj) => this.preloadAsset(urlObj));
    Promise.all(promises).then(() => {
      console.log(`Preloaded all`);
      // All assets are preloaded
      this.isLoaded = true;
    });
  }
}
