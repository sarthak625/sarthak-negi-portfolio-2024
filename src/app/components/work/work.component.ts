import { Component, OnInit } from '@angular/core';
import { Skill } from 'src/@types/types';
import { skillsData } from 'src/constants/skills';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss'],
})
export class WorkComponent implements OnInit {
  skills: Skill[];
  constructor() {
    this.skills = skillsData;
  }

  ngOnInit(): void {}
}
