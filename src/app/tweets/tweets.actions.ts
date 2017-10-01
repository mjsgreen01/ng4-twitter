/* tslint:disable: member-ordering */
import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { Action } from '@ngrx/store';

import { Tweet } from './tweet.model';

@Injectable()

export class TweetsActions {

  static ADD_TWEET = '[Tweet] Add Tweet';
  addTweet(tweet: Tweet): Action {
    return {
      type: TweetsActions.ADD_TWEET,
      payload: tweet
    };
  }

  static DELETE_TWEET = '[Tweet] Delete Tweet';
  deleteTweet({id= ''}: {id: string}): Action {
    return {
      type: TweetsActions.DELETE_TWEET,
      payload: {tweetId: id}
    };
  }

}
