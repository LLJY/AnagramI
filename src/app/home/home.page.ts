import { Component, OnInit } from '@angular/core';
import {MaterialModule} from '../material.module';
import {from, Observable, Subject, pipe, range} from 'rxjs';
import {AnagramCruncherService} from '../anagram-cruncher.service';
import { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } from 'constants';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  ngOnInit(){
  }
  public resultShowing = false;
  public isLoading = false;
  public anagramChars = "";
  constructor(private service: AnagramCruncherService) {
  }
  public validateText(){
    // could've used regex but laze.
    var acceptedChars="QWERTYUIOPASDFGHJKLZXCVBNM";
    var processed = "";
    this.anagramChars = this.anagramChars.toUpperCase();
    for(var i =0; i<this.anagramChars.length; i++){
      // add the character if it is in the list of accepted chars
      if(acceptedChars.includes(this.anagramChars.charAt(i))){
        processed = `${processed}${this.anagramChars.charAt(i)}`
      }
    }
    this.anagramChars = processed;
  }
  public generateClick(){
    // TODO call the service and calculate the anagram
  }
  // generates 10 chars
  public randomClick(){
    // just mash the damn keyboard and get all the letters to pick from
    var chars="QWERTYUIOPASDFGHJKLZXCVBNM";
    var returnChars = "";
    // pick any 10 random characters
    for(var i =0; i<10; i++){
      var randomChar = chars[Math.floor(Math.random()*chars.length)];
      if(!returnChars.includes(randomChar)){
        // add the character if it does not already exist
        returnChars = `${returnChars}${randomChar}`
      }else{
        i--;
      }
    }
    this.anagramChars = returnChars;
  }

}
