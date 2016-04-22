import {Page, NavController} from "ionic-angular";

/*
 Generated class for the MessagesPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Page({
    templateUrl: 'build/pages/messages/messages.html'
})
export class MessagesPage {

    static get parameters() {
        return [[NavController]];
    }

    constructor(nav) {
        this.nav = nav;
        this.loading = true;
        this.messages = [
            {id: 0, content: 'hey', user: 'Jean-yves'},
            {id: 1, content: 'ho', user: 'Sylvain'},
            {id: 2, content: 'yep', user: 'Antho'},
            {id: 3, content: 'hipi', user: 'Loïc'}
        ];
        setTimeout(() => {
            this.loading = false;
        }, 1000);
    }

    ngOnDestroy() {
        document.body.classList.remove('hide-tabs');
    }
}
