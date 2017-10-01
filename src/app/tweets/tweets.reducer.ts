/* tslint:disable: no-switch-case-fall-through */
import { Action } from '@ngrx/store';

import { TweetsActions } from './tweets.actions';
import { Tweet } from './tweet.model';

export interface UserState {
  tweets: Array<Tweet>;
}

export const initialState: UserState = {
  tweets: []
};

export function userReducer(state = initialState, action: Action): UserState {
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
