import { createSelector } from 'reselect';
import { AppState } from '../reducers';

import * as tweetsSelectors from '../tweets/tweets.selectors';


export const getTweetsState = (state: AppState) => state.tweets;

export const getTweets = createSelector(getTweetsState, tweetsSelectors.getTweets);
