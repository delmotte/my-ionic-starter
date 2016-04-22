import {Component} from "angular2/core";
import {NavController, Platform} from 'ionic-angular';
import {IONIC_DIRECTIVES} from 'ionic-angular';
import {MessagesPage} from '../../pages/messages/messages';
import {Test} from '../../providers/test/test';

@Component({
    selector: 'custom-navbar',
    templateUrl: 'build/components/custom-navbar/custom-navbar.html',
    inputs: ['title'],
    directives: [IONIC_DIRECTIVES]
    
})
export class CustomNavbar {

    static get parameters() {
        return [[NavController], [Platform], [Test]];
    }

    constructor(nav, platform, testService) {
        this.nav = nav;
        this.isIOS = (platform.is('ios'));
        this.testService = testService;
        this.data = testService.getData();
    }

    showMessages() {
        document.body.classList.add('hide-tabs');
        setTimeout(() => {
            this.nav.push(MessagesPage, {});
        }, 100);

    }
}
