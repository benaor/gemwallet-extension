import { GEM_WALLET } from '../global/global.constant';
import { RequestMessage } from '../message/message.types';
import {
  AcceptNFTOfferRequest,
  BurnNFTRequest,
  CancelNFTOfferRequest,
  CreateNFTOfferRequest,
  CreateOfferRequest,
  MintNFTRequest,
  SendPaymentRequest,
  SendPaymentRequestDeprecated,
  SetAccountRequest,
  SetTrustlineRequest,
  SetTrustlineRequestDeprecated,
  SignMessageRequest,
  WebsiteRequest
} from '../payload/payload.types';

// Event listeners
interface MessageEventData {
  app: typeof GEM_WALLET;
  type: RequestMessage;
  source: 'GEM_WALLET_MSG_REQUEST';
  messageId: number;
  // Not all the MessageEventData have a payload
  payload?:
    | AcceptNFTOfferRequest
    | BurnNFTRequest
    | CancelNFTOfferRequest
    | CreateNFTOfferRequest
    | CreateOfferRequest
    | MintNFTRequest
    | SendPaymentRequest
    | SendPaymentRequestDeprecated
    | SetAccountRequest
    | SetTrustlineRequest
    | SetTrustlineRequestDeprecated
    | SignMessageRequest
    | WebsiteRequest;
}

export interface NetworkEventListener extends MessageEvent<MessageEventData> {
  data: {
    app: typeof GEM_WALLET;
    type: 'REQUEST_GET_NETWORK/V3';
    source: 'GEM_WALLET_MSG_REQUEST';
    messageId: number;
  };
}

export interface NetworkEventListenerDeprecated extends MessageEvent<MessageEventData> {
  data: {
    app: typeof GEM_WALLET;
    type: 'REQUEST_NETWORK';
    source: 'GEM_WALLET_MSG_REQUEST';
    messageId: number;
  };
}

export interface AddressEventListener extends MessageEvent<MessageEventData> {
  data: {
    app: typeof GEM_WALLET;
    type: 'REQUEST_GET_ADDRESS/V3';
    source: 'GEM_WALLET_MSG_REQUEST';
    messageId: number;
    payload: WebsiteRequest;
  };
}

export interface AddressEventListenerDeprecated extends MessageEvent<MessageEventData> {
  data: {
    app: typeof GEM_WALLET;
    type: 'REQUEST_ADDRESS';
    source: 'GEM_WALLET_MSG_REQUEST';
    messageId: number;
    payload: WebsiteRequest;
  };
}

export interface PublicKeyEventListener extends MessageEvent<MessageEventData> {
  data: {
    app: typeof GEM_WALLET;
    type: 'REQUEST_GET_PUBLIC_KEY/V3';
    source: 'GEM_WALLET_MSG_REQUEST';
    messageId: number;
    payload: WebsiteRequest;
  };
}

export interface PublicKeyEventListenerDeprecated extends MessageEvent<MessageEventData> {
  data: {
    app: typeof GEM_WALLET;
    type: 'REQUEST_PUBLIC_KEY';
    source: 'GEM_WALLET_MSG_REQUEST';
    messageId: number;
    payload: WebsiteRequest;
  };
}

export interface GetNFTEventListener extends MessageEvent<MessageEventData> {
  data: {
    app: typeof GEM_WALLET;
    type: 'REQUEST_GET_NFT/V3';
    source: 'GEM_WALLET_MSG_REQUEST';
    messageId: number;
    payload: WebsiteRequest;
  };
}

export interface GetNFTEventListenerDeprecated extends MessageEvent<MessageEventData> {
  data: {
    app: typeof GEM_WALLET;
    type: 'REQUEST_NFT';
    source: 'GEM_WALLET_MSG_REQUEST';
    messageId: number;
    payload: WebsiteRequest;
  };
}

export interface SignMessageListener extends MessageEvent<MessageEventData> {
  data: {
    app: typeof GEM_WALLET;
    type: 'REQUEST_SIGN_MESSAGE/V3';
    source: 'GEM_WALLET_MSG_REQUEST';
    messageId: number;
    payload: SignMessageRequest;
  };
}

export interface SignMessageListenerDeprecated extends MessageEvent<MessageEventData> {
  data: {
    app: typeof GEM_WALLET;
    type: 'REQUEST_SIGN_MESSAGE';
    source: 'GEM_WALLET_MSG_REQUEST';
    messageId: number;
    payload: SignMessageRequest;
  };
}

export interface PaymentEventListener extends MessageEvent<MessageEventData> {
  data: {
    app: typeof GEM_WALLET;
    type: 'REQUEST_SEND_PAYMENT/V3';
    source: 'GEM_WALLET_MSG_REQUEST';
    messageId: number;
    payload: SendPaymentRequest;
  };
}

export interface PaymentEventListenerDeprecated extends MessageEvent<MessageEventData> {
  data: {
    app: typeof GEM_WALLET;
    type: 'SEND_PAYMENT';
    source: 'GEM_WALLET_MSG_REQUEST';
    messageId: number;
    payload: SendPaymentRequestDeprecated;
  };
}

export interface MintNFTEventListener extends MessageEvent<MessageEventData> {
  data: {
    app: typeof GEM_WALLET;
    type: 'REQUEST_MINT_NFT/V3';
    source: 'GEM_WALLET_MSG_REQUEST';
    messageId: number;
    payload: MintNFTRequest;
  };
}

export interface SetTrustlineEventListener extends MessageEvent<MessageEventData> {
  data: {
    app: typeof GEM_WALLET;
    type: 'REQUEST_SET_TRUSTLINE/V3';
    source: 'GEM_WALLET_MSG_REQUEST';
    messageId: number;
    payload: SetTrustlineRequest;
  };
}

export interface CreateNFTOfferEventListener extends MessageEvent<MessageEventData> {
  data: {
    app: typeof GEM_WALLET;
    type: 'REQUEST_CREATE_NFT_OFFER/V3';
    source: 'GEM_WALLET_MSG_REQUEST';
    messageId: number;
    payload: CreateNFTOfferRequest;
  };
}

export interface CancelNFTOfferEventListener extends MessageEvent<MessageEventData> {
  data: {
    app: typeof GEM_WALLET;
    type: 'REQUEST_CANCEL_NFT_OFFER/V3';
    source: 'GEM_WALLET_MSG_REQUEST';
    messageId: number;
    payload: CancelNFTOfferRequest;
  };
}

export interface AcceptNFTOfferEventListener extends MessageEvent<MessageEventData> {
  data: {
    app: typeof GEM_WALLET;
    type: 'REQUEST_ACCEPT_NFT_OFFER/V3';
    source: 'GEM_WALLET_MSG_REQUEST';
    messageId: number;
    payload: AcceptNFTOfferRequest;
  };
}

export interface BurnNFTEventListener extends MessageEvent<MessageEventData> {
  data: {
    app: typeof GEM_WALLET;
    type: 'REQUEST_BURN_NFT/V3';
    source: 'GEM_WALLET_MSG_REQUEST';
    messageId: number;
    payload: BurnNFTRequest;
  };
}

export interface SetTrustlineEventListenerDeprecated extends MessageEvent<MessageEventData> {
  data: {
    app: typeof GEM_WALLET;
    type: 'REQUEST_ADD_TRUSTLINE';
    source: 'GEM_WALLET_MSG_REQUEST';
    messageId: number;
    payload: SetTrustlineRequestDeprecated;
  };
}

export interface SetAccountEventListener extends MessageEvent<MessageEventData> {
  data: {
    app: typeof GEM_WALLET;
    type: 'REQUEST_SET_ACCOUNT/V3';
    source: 'GEM_WALLET_MSG_REQUEST';
    messageId: number;
    payload: SetAccountRequest;
  };
}

export interface CreateOfferEventListener extends MessageEvent<MessageEventData> {
  data: {
    app: typeof GEM_WALLET;
    type: 'REQUEST_CREATE_OFFER/V3';
    source: 'GEM_WALLET_MSG_REQUEST';
    messageId: number;
    payload: CreateOfferRequest;
  };
}

export type EventListener =
  | AcceptNFTOfferEventListener
  | AddressEventListener
  | AddressEventListenerDeprecated
  | BurnNFTEventListener
  | CancelNFTOfferEventListener
  | CreateNFTOfferEventListener
  | CreateOfferEventListener
  | GetNFTEventListener
  | GetNFTEventListenerDeprecated
  | MintNFTEventListener
  | NetworkEventListener
  | NetworkEventListenerDeprecated
  | PublicKeyEventListener
  | PublicKeyEventListenerDeprecated
  | PaymentEventListener
  | PaymentEventListenerDeprecated
  | SetAccountEventListener
  | SetTrustlineEventListener
  | SetTrustlineEventListenerDeprecated
  | SignMessageListener
  | SignMessageListenerDeprecated;
