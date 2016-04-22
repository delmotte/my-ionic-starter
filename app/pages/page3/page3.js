import {Page} from 'ionic-angular';
import {CustomNavbar} from '../../components/custom-navbar/custom-navbar';


@Page({
  templateUrl: 'build/pages/page3/page3.html',
  directives: [CustomNavbar]
})
export class Page3 {
  constructor() {

  }
}
