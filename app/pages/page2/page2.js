import {Page} from 'ionic-angular';
import {CustomNavbar} from '../../components/custom-navbar/custom-navbar';


@Page({
  templateUrl: 'build/pages/page2/page2.html',
  directives: [CustomNavbar]
})
export class Page2 {
  constructor() {

  }
}
