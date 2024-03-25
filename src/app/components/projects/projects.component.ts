import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProjectViewerComponent } from '../project-viewer/project-viewer.component';
import { ProjectData } from 'src/@types/types';
import { projectData } from 'src/constants/project';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent {
  projects: ProjectData[];

  constructor(private dialog: MatDialog) {
    this.projects = projectData;
  }

  openDialog(dialogData: ProjectData) {
    this.dialog.open(ProjectViewerComponent, {
      width: '80%',
      height: '80%',
      data: dialogData,
    });
  }
}
