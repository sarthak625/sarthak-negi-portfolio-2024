import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProjectData } from 'src/@types/types';

@Component({
  selector: 'app-project-viewer',
  templateUrl: './project-viewer.component.html',
  styleUrls: ['./project-viewer.component.scss'],
})
export class ProjectViewerComponent implements OnInit {
  public projectInfo: ProjectData;
  constructor(
    private dialogRef: MatDialogRef<ProjectViewerComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ProjectData
  ) {
    this.projectInfo = this.data;
  }

  ngOnInit(): void {}

  closeDialog(): void {
    this.dialogRef.close();
  }

  navigateTo(url: string) {
    window.open(url, '_blank');
  }
}
