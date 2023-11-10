import { BalanceAggregate } from './balance.aggregate.js';
import { MembershipAggregate } from './membership.aggregate.js';

export type AggregateTypes =
  | MembershipAggregate['type']
  | BalanceAggregate['type'];
