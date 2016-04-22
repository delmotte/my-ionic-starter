import {Page} from "ionic-angular";
import {CustomNavbar} from '../../components/custom-navbar/custom-navbar';
import {Test} from '../../providers/test/test';

@Page({
    templateUrl: 'build/pages/page1/page1.html',
    directives: [CustomNavbar]
})
export class Page1 {
    static get parameters() {
        return [[Test]];
    }

    constructor(testService) {
        this.testService = testService;
        this.data = this.testService.getData();
    }

    addData() {
        this.testService.pushData();
    }
}
