
import {
  Component, OnInit, Directive, forwardRef,
  Attribute, OnChanges, SimpleChanges, Input
} from '@angular/core';





@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  mailText: string = "";
  email: string = '';
  message: string = '';
  name: string = '';
  emailError: boolean = false;
  ngOnInit() {


  }
  changeEmail(e) {
    this.email = e.target.value;
  }
  changeName(e) {
    this.name = e.target.value;
  }
  changeMessage(e) {
    this.message = e.target.value;
  }

  mailMe() {
    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    if (reg.test(this.email) == false) {
      console.log(1)
      this.emailError = true;
    } else {
      console.log(2)
      this.emailError = false;
      const mailBody = this.message
      this.mailText = "mailto:rp@seqato.com?subject=Question from " + this.name + " - " + this.email + "&body=" + mailBody; // add the links to body
      window.location.href = this.mailText;
    }
  }
}
