import { writable } from 'svelte/store';
import { BOT, HUMAN } from '../constants/author';
import { MSG_TYPE_TEXT, MSG_TYPE_QUICK_REPLY, MSG_TYPE_CAROUSEL } from '../constants/msgType';

export const messages = writable([
  {
    type: MSG_TYPE_TEXT,
    author: BOT,
    text: 'Welcome! You may be exactly where you need to be now.'
  },
  {
    type: MSG_TYPE_TEXT,
    author: BOT,
    text: 'First things first. Where are you heading to?'
  },
  {
    type: MSG_TYPE_TEXT,
    author: HUMAN,
    text: 'Lisbon'
  },
  {
    type: MSG_TYPE_TEXT,
    author: BOT,
    text: "And you'll be there to..."
  },
  {
    type: MSG_TYPE_TEXT,
    author: HUMAN,
    text: 'To party my brains out'
  },
  {
    type: MSG_TYPE_TEXT,
    author: BOT,
    text: 'Any travel companions coming with you?'
  },
  {
    type: MSG_TYPE_TEXT,
    author: HUMAN,
    text: 'One of my mates. No wives allowed :)'
  },
  {
    type: MSG_TYPE_TEXT,
    author: BOT,
    text: "I see. What's most important for you on this trip?"
  },
  {
    type: MSG_TYPE_TEXT,
    author: HUMAN,
    text: 'I want the roof to be on fire'
  },
  {
    type: MSG_TYPE_TEXT,
    author: BOT,
    text: "Hmm. Let's see..."
  },
  {
    type: MSG_TYPE_TEXT,
    author: BOT,
    text: 'H you go love. How about these'
  },
  {
    type: MSG_TYPE_CAROUSEL,
    author: BOT,
    replies: [
      {
        src:
          'https://www.stlmag.com/downloads/291284/download/0219_Elmwood_0016.jpg?cb=05f56521ae049e15a8f3d244cafb3822&w=640',
        title: 'Slide 1',
        description:
          'Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      },
      {
        src: 'https://media.timeout.com/images/105239239/image.jpg',
        title: 'Slide 2',
        description:
          'Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      },
      {
        src: 'http://cdn.cnn.com/cnnnext/dam/assets/190710135245-12-waterfront-restaurants.jpg',
        title: 'Slide 3',
        description:
          'Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      },
      {
        src:
          'https://static.standard.co.uk/s3fs-public/thumbnails/image/2019/03/21/14/sexy-fish-2103-pwf.jpg?width=1000&height=614&fit=bounds&format=pjpg&auto=webp&quality=70&crop=16:9,offset-y0.5',
        title: 'Slide 4',
        description:
          'Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      }
    ]
  },
  {
    type: MSG_TYPE_TEXT,
    author: BOT,
    text: 'Anything you liked or would you like me to dig deeper?'
  },
  {
    type: MSG_TYPE_QUICK_REPLY,
    author: BOT,
    replies: ['No. I only need to buy you a drink now', 'Please dig deeper']
  }
]);
