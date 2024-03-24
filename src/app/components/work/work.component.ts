import { Component, OnInit } from '@angular/core';
interface Skill {
  title: string;
  value: number;
}

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss'],
})
export class WorkComponent implements OnInit {
  skills: Skill[] = [
    {
      title: 'Node js, Express JS, Hapi JS, Nest JS',
      value: 90,
    },
    {
      title: 'Docker',
      value: 80,
    },
    {
      title: 'Kubernetes',
      value: 80,
    },
    {
      title: 'MediaSoup, Jitsi Meet and Janus WebRTC',
      value: 80,
    },
    {
      title:
        'Amazon Web Services - EC2, ALB, Cloudfront, Elastic Transcoder, S3, Lambda, IAM, Cloudwatch, DynamoDB, ECS',
      value: 90,
    },
    {
      title:
        'Google Cloud Platform - GCS, Compute, GKE, Firestore, Speech to Text',
      value: 80,
    },
    {
      title: 'Angular',
      value: 60,
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
