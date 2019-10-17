import { storeBotMsg } from '../stores/messages.js';
import { get } from 'svelte/store';
import { storeSessionId, sessionId } from '../stores/session.js';
import { BOT } from '../constants/author.js';
import { MSG_TYPE_TEXT } from '../constants/msgType.js';
import { INTENT_PATH } from '../constants/paths.js';

export const detectIntent = async requestData => {
  const body = { message: requestData, sessionId: get(sessionId) };

  const headers = new Headers({
    'Content-Type': 'application/json',
    charset: 'utf-8'
  });

  try {
    const response = await fetch(INTENT_PATH, {
      method: 'POST',
      headers,
      body: JSON.stringify(body)
    });

    const resp = await response.json();

    storeBotMsg(resp.message.type, resp.message.reply);
    storeSession(resp.sessionId);
  } catch (e) {
    storeBotMsg(MSG_TYPE_TEXT, 'Woops');
  }
};
