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
      link.onerror = (e) => {
        console.log(`Failed to preload asset: ${urlObj.url}`, e);
        resolve();
      };
      document.head.appendChild(link);
    });
  }

  loadAssets() {
    const urlsToPreload: Array<PreloadURLObject> = [
      // {
      //   url: '/assets/fonts/Alegreya.ttf',
      //   as: 'font',
      // },
      // {
      //   url: '/assets/fonts/Ubuntu-Regular.ttf',
      //   as: 'font',
      // },
      // {
      //   url: '/assets/fonts/Ubuntu-Medium.ttf',
      //   as: 'font',
      // },
    ];

    const promises = urlsToPreload.map((urlObj) => this.preloadAsset(urlObj));
    Promise.all(promises).then(() => {
      console.log(`Preloaded all`);
      // All assets are preloaded
      this.isLoaded = true;
    });
  }
}
