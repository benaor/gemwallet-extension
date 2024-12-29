import {
  NFTokenCreateOfferFlags,
  NFTokenCreateOfferFlagsInterface,
  NFTokenMintFlags,
  NFTokenMintFlagsInterface,
  SubmittableTransaction,
  xrpToDrops
} from 'xrpl';
import { Amount, IssuedCurrencyAmount } from 'xrpl/dist/npm/models/common';

import {
  CreateNFTOfferFlags,
  CreateOfferFlags,
  Memo,
  MintNFTFlags,
  PaymentFlags,
  SetAccountFlags,
  Signer,
  TrustSetFlags
} from '@gemwallet/constants';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const parseArray = (input: Array<any> | string | null): string[] | null => {
  if (!input) {
    return null;
  }

  if (typeof input === 'object') {
    return input;
  }

  // For API version < 3.6
  try {
    const parsed = JSON.parse(input);

    if (Array.isArray(parsed)) {
      return parsed as string[];
    }
  } catch (error) {
    /* empty */
  }

  return null;
};

export const parseAmount = (
  input: Amount | string | null,
  deprecatedCurrencyString: string | null,
  deprecatedIssuerString: string | null,
  messageType: string
): Amount | null => {
  if (!input) {
    return null;
  }

  if (typeof input === 'object') {
    return input;
  }

  try {
    const parsedAmount = JSON.parse(input);

    if (
      typeof parsedAmount === 'object' &&
      parsedAmount !== null &&
      'value' in parsedAmount &&
      'issuer' in parsedAmount &&
      'currency' in parsedAmount
    ) {
      return parsedAmount as { value: string; issuer: string; currency: string };
    }

    if (typeof parsedAmount === 'number') {
      if (deprecatedCurrencyString || deprecatedIssuerString) {
        // Since a deprecated currency or issuer has been provided, we consider the given amount to be a legacy amount
        // of a Token payment. Hence, we wrap it in an object with the deprecated currency and issuer.
        return {
          value: parsedAmount.toString(),
          currency: deprecatedCurrencyString || '',
          issuer: deprecatedIssuerString || ''
        };
      }
      if (messageType === 'SEND_PAYMENT') {
        // Deprecated way of providing a value in currency for an XRP payment.
        // Hence, we need to convert into drops.
        return xrpToDrops(parsedAmount.toString());
      }
      return parsedAmount.toString();
    }
  } catch (error) {
    /* empty */
  }

  return input;
};

export const parseLimitAmount = (
  input: IssuedCurrencyAmount | string | null,
  deprecatedAmountString: string | null,
  deprecatedCurrencyString: string | null,
  deprecatedIssuerString: string | null
): IssuedCurrencyAmount | null => {
  if (!input) {
    if (deprecatedAmountString && deprecatedCurrencyString && deprecatedIssuerString) {
      return {
        value: deprecatedAmountString,
        currency: deprecatedCurrencyString,
        issuer: deprecatedIssuerString
      };
    }

    return null;
  }

  if (typeof input === 'object') {
    return input;
  }

  try {
    const parsedAmount = JSON.parse(input);

    if (
      typeof parsedAmount === 'object' &&
      parsedAmount !== null &&
      'value' in parsedAmount &&
      'issuer' in parsedAmount &&
      'currency' in parsedAmount
    ) {
      return parsedAmount as { value: string; issuer: string; currency: string };
    }
  } catch (error) {
    /* empty */
  }

  return null;
};

export const parseMemos = (input: Memo[] | string | undefined): Memo[] | undefined => {
  if (!input) {
    return;
  }

  if (typeof input === 'object' && Array.isArray(input)) {
    return input;
  }

  // For API version < 3.6
  try {
    const parsedMemos = JSON.parse(input);

    if (Array.isArray(parsedMemos)) {
      return parsedMemos as Memo[];
    }
  } catch (error) {
    /* empty */
  }

  return;
};

export const parseSigners = (input: Signer[] | string | undefined): Signer[] | undefined => {
  if (!input) {
    return;
  }

  if (typeof input === 'object' && Array.isArray(input)) {
    return input;
  }

  // For API version < 3.6
  try {
    const parsedSigners = JSON.parse(input);

    if (Array.isArray(parsedSigners)) {
      return parsedSigners as Signer[];
    }
  } catch (error) {
    /* empty */
  }

  return;
};

export const parsePaymentFlags = (input?: PaymentFlags | string): PaymentFlags | undefined => {
  if (!input) {
    return;
  }

  if (typeof input === 'object' || typeof input === 'number') {
    return input;
  }

  if (Number(input)) {
    return Number(input);
  }

  // For API version < 3.6
  try {
    const parsedFlags = JSON.parse(input);

    if (
      typeof parsedFlags === 'object' &&
      parsedFlags !== null &&
      ('tfNoRippleDirect' in parsedFlags ||
        'tfPartialPayment' in parsedFlags ||
        'tfLimitQuality' in parsedFlags)
    ) {
      return parsedFlags as {
        tfNoRippleDirect?: boolean;
        tfPartialPayment?: boolean;
        tfLimitQuality?: boolean;
      };
    }
  } catch (error) {
    /* empty */
  }

  return;
};

export const parseTrustSetFlags = (input?: TrustSetFlags | string): TrustSetFlags | null => {
  if (!input) {
    return null;
  }

  if (typeof input === 'object' || typeof input === 'number') {
    return input;
  }

  if (Number(input)) {
    return Number(input);
  }

  // For API version < 3.6
  try {
    const parsedFlags = JSON.parse(input);

    if (
      typeof parsedFlags === 'object' &&
      parsedFlags !== null &&
      ('tfSetfAuth' in parsedFlags ||
        'tfSetNoRipple' in parsedFlags ||
        'tfClearNoRipple' in parsedFlags ||
        'tfSetFreeze' in parsedFlags ||
        'tfClearFreeze' in parsedFlags)
    ) {
      return parsedFlags as {
        tfSetfAuth?: boolean;
        tfSetNoRipple?: boolean;
        tfClearNoRipple?: boolean;
        tfSetFreeze?: boolean;
        tfClearFreeze?: boolean;
      };
    }
  } catch (error) {
    /* empty */
  }

  return null;
};

export const parseSetAccountFlags = (input?: SetAccountFlags | string): SetAccountFlags | null => {
  if (!input) {
    return null;
  }

  if (typeof input === 'object' || typeof input === 'number') {
    return input;
  }

  if (Number(input)) {
    return Number(input);
  }

  // For API version < 3.6
  try {
    const parsedFlags = JSON.parse(input);

    if (
      typeof parsedFlags === 'object' &&
      parsedFlags !== null &&
      ('tfRequireDestTag' in parsedFlags ||
        'tfOptionalDestTag' in parsedFlags ||
        'tfRequireAuth' in parsedFlags ||
        'tfOptionalAuth' in parsedFlags ||
        'tfDisallowXRP' in parsedFlags ||
        'tfAllowXRP' in parsedFlags)
    ) {
      return parsedFlags as {
        tfRequireDestTag?: boolean;
        tfOptionalDestTag?: boolean;
        tfRequireAuth?: boolean;
        tfOptionalAuth?: boolean;
        tfDisallowXRP?: boolean;
        tfAllowXRP?: boolean;
      };
    }
  } catch (error) {
    /* empty */
  }

  return null;
};

export const parseMintNFTFlags = (input?: MintNFTFlags | string): MintNFTFlags | null => {
  if (!input) {
    return null;
  }

  if (typeof input === 'object' || typeof input === 'number') {
    return input;
  }

  if (Number(input)) {
    return Number(input);
  }

  // For API version < 3.6
  try {
    const parsedFlags = JSON.parse(input);

    if (
      typeof parsedFlags === 'object' &&
      parsedFlags !== null &&
      ('tfBurnable' in parsedFlags ||
        'tfOnlyXRP' in parsedFlags ||
        'tfTrustLine' in parsedFlags ||
        'tfTransferable' in parsedFlags)
    ) {
      return parsedFlags as {
        tfBurnable?: boolean;
        tfOnlyXRP?: boolean;
        tfTrustLine?: boolean;
        tfTransferable?: boolean;
      };
    }
  } catch (error) {
    /* empty */
  }

  return null;
};

export const parseCreateNFTOfferFlags = (
  input?: CreateNFTOfferFlags | string
): CreateNFTOfferFlags | null => {
  if (!input) {
    return null;
  }

  if (typeof input === 'object' || typeof input === 'number') {
    return input;
  }

  if (Number(input)) {
    return Number(input);
  }

  // For API version < 3.6
  try {
    const parsedFlags = JSON.parse(input);

    if (typeof parsedFlags === 'object' && parsedFlags !== null && 'tfSellNFToken' in parsedFlags) {
      return parsedFlags as {
        tfSellNFToken?: boolean;
      };
    }
  } catch (error) {
    /* empty */
  }

  return null;
};

export const parseCreateOfferFlags = (
  input?: CreateOfferFlags | string
): CreateOfferFlags | null => {
  if (!input) {
    return null;
  }

  if (typeof input === 'object' || typeof input === 'number') {
    return input;
  }

  if (Number(input)) {
    return Number(input);
  }

  // For API version < 3.6
  try {
    const parsedFlags = JSON.parse(input);

    if (
      typeof parsedFlags === 'object' &&
      parsedFlags !== null &&
      ('tfPassive' in parsedFlags ||
        'tfImmediateOrCancel' in parsedFlags ||
        'tfFillOrKill' in parsedFlags ||
        'tfSell' in parsedFlags)
    ) {
      return parsedFlags as {
        tfPassive?: boolean;
        tfImmediateOrCancel?: boolean;
        tfFillOrKill?: boolean;
        tfSell?: boolean;
      };
    }
  } catch (error) {
    /* empty */
  }

  return null;
};

export const mintNFTFlagsToNumber = (flags: NFTokenMintFlagsInterface): number => {
  let result = 0;
  if (flags.tfBurnable) {
    result |= NFTokenMintFlags.tfBurnable;
  }
  if (flags.tfOnlyXRP) {
    result |= NFTokenMintFlags.tfOnlyXRP;
  }
  if (flags.tfTrustLine) {
    result |= NFTokenMintFlags.tfTrustLine;
  }
  if (flags.tfTransferable) {
    result |= NFTokenMintFlags.tfTransferable;
  }

  return result;
};

export const createNFTOfferFlagsToNumber = (flags: NFTokenCreateOfferFlagsInterface): number => {
  let result = 0;
  if (flags.tfSellNFToken) {
    result |= NFTokenCreateOfferFlags.tfSellNFToken;
  }

  return result;
};

export const parseTransactionParam = (
  input: SubmittableTransaction | string | null
): SubmittableTransaction | null => {
  if (!input) {
    return null;
  }

  if (typeof input === 'object') {
    return input;
  }

  // For API version < 3.6
  try {
    const parsedTransaction = JSON.parse(input);

    if (typeof parsedTransaction === 'object' && parsedTransaction !== null) {
      return parsedTransaction as SubmittableTransaction;
    }
  } catch (error) {
    return null;
  }

  return null;
};
