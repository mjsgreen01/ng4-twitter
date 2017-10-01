/* tslint:disable: no-switch-case-fall-through */
import { Action } from '@ngrx/store';

import { TweetsActions } from './tweets.actions';
import { Tweet } from './tweet.model';

export interface TweetsState {
  tweets: Array<Tweet>;
}

export const initialState: TweetsState = {
  tweets: []
};

export function tweetsReducer(state = initialState, action: Action): TweetsState {
  switch (action.type) {

    case TweetsActions.ADD_TWEET: {
      return {
        ...state,
        tweets: [action.payload, ...state.tweets]
      };
    }

    case TweetsActions.DELETE_TWEET: {
      return {
        ...state,
        tweets: state.tweets.filter(tweet => tweet.id !== action.payload.tweetId)
      };
    }

    default: {
      return state;
    }
  }
}
