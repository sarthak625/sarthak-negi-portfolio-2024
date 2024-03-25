import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectViewerComponent } from './project-viewer.component';

describe('ProjectViewerComponent', () => {
  let component: ProjectViewerComponent;
  let fixture: ComponentFixture<ProjectViewerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectViewerComponent]
    });
    fixture = TestBed.createComponent(ProjectViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
