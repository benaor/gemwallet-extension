import { GEM_WALLET, SEND_PAYMENT, MessageListenerEvent } from '../types';
import { sendMessageToContentScript } from '../helpers/extensionMessaging';
import { Payment, PaymentResponse } from './sendPayment.types';

export const sendPayment = async (payment: Payment) => {
  try {
    const message: MessageListenerEvent = {
      app: GEM_WALLET,
      type: SEND_PAYMENT,
      payload: payment
    };
    const response: PaymentResponse = await sendMessageToContentScript(message);

    const { hash, error } = response;

    if (error) {
      throw new Error(error);
    }
    return hash;
  } catch (error) {
    throw error;
  }
};
