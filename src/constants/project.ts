import { ProjectData } from 'src/@types/types';

export const projectData: ProjectData[] = [
  {
    id: 'chess-ui',
    name: 'Chess UI',
    description:
      'A Chess Platform that uses a Node.JS Backend to play chess online',
    url: 'https://chess.sarthaknegi.com',
    assetUrl: 'assets/images/chess.png',
    detailedDescription:
      'A Chess application that is built using Angular and is connected to a backend running on Node JS and Nest JS. It sends the FEN string of the current position to the backend and the backend suggests the ideal FEN string for the next position',
  },
  {
    id: 'vcfw',
    name: 'Video Calling With Friends',
    description:
      'WebRTC based video calling application that uses P2P to establish video calling',
    url: 'https://video.sarthaknegi.com',
    assetUrl: 'assets/images/vcfw.png',
    detailedDescription:
      'A video calling application build on WebRTC that connects two peers over P2P by using a public STUN server',
  },
];
