import { ChainKey, Coin, Route, Step, TokenAmount, TokenWithAmounts } from '@lifinance/sdk'
import { TableColumnType } from 'antd'
import BigNumber from 'bignumber.js'

import { ExtendedTransactionRequest } from '../services/routingService'

export interface TokenAmountList {
  [ChainKey: string]: Array<TokenWithAmounts>
}

export interface SwapPageStartParams {
  depositChain?: ChainKey
  depositToken?: string
  depositAmount: BigNumber
  withdrawChain?: ChainKey
  withdrawToken?: string
}

export interface Amounts {
  amount_coin: BigNumber
  amount_usd: BigNumber
}

export interface DataType {
  [key: string]: string | number | Amounts | Coin // kind of deactivating typing for DataType; last resort?
  key: React.Key
  coin: Coin
  portfolio: Amounts
}

export function chainKeysToObject(val: any) {
  const result: { [ChainKey: string]: any } = {}
  for (const key in ChainKey) {
    result[key.toLowerCase()] = JSON.parse(JSON.stringify(val))
  }
  return result
}

export interface ColomnType extends TableColumnType<DataType> {
  children?: Array<ColomnType>
}

export interface Wallet {
  address: string
  loading: boolean
  portfolio: { [ChainKey: string]: Array<TokenAmount> }
}

export enum Currencies {
  USD = 'usd',
  EUR = 'eur',
}

export interface SummaryAmounts {
  amount_usd: BigNumber
  percentage_of_portfolio: BigNumber
}

export interface WalletSummary {
  wallet: string
  chains: {
    [ChainKey: string]: SummaryAmounts
  }
}

export interface WalletConnectInfo {
  accounts: string[]
  bridge: string
  chainId: number
  clientId: string
  clientMeta: { [k: string]: any } // not important as of now
  connected: boolean
  handshakeId: number
  handshakeTopic: string
  key: string
  peerId: string
  peerMeta: { [k: string]: any } // not important as of now
}

export interface ExtendedRoute {
  lifiRoute: Route
  gasStep: Step
  stakingStep: Step
}

export interface ExtendedRouteOptional {
  lifiRoute?: Route
  gasStep?: Step
  stakingStep?: Step
  simpleTransfer?: ExtendedTransactionRequest
}
