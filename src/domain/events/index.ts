import { CreateMembershipEvent } from './create-membership.event.js';
import { CreditBalanceEvent } from './credit-balance.event.js';
import { DebitBalanceEvent } from './debit-balance.event.js';

export type EventTypes =
  | CreateMembershipEvent['type']
  | CreditBalanceEvent['type']
  | DebitBalanceEvent['type'];
