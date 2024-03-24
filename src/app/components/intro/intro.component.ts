import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ResumeDialogComponent } from '../resume-dialog/resume-dialog.component';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss'],
})
export class IntroComponent implements OnInit {
  constructor(private dialog: MatDialog) {}
  ngOnInit(): void {}

  openPdfDialog() {
    this.dialog.open(ResumeDialogComponent, {
      width: '80%',
      height: '80%',
    });
  }

  downloadResume() {
    const fileName = 'Sarthak_Negi_Resume.pdf';
    const assetUrl = `assets/pdf/${fileName}`; // Adjust the file path based on your project structure
    const downloadLink = document.createElement('a');
    downloadLink.href = assetUrl;
    downloadLink.setAttribute('download', fileName);
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  }
}
