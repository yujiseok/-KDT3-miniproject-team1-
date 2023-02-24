export interface Auth {
  id: number;
  name: string;
  email: string;
  password: null;
  birth: string;
  asset: number;
  income: number;
  job: string | null;
  region: string | null;
  joinType: number;
}

export interface Item {
  productId: string;
  avg_rate: string;
  type?: string;
  id?: string;
  cartId?: number;
  likeId?: number;
  loanLimit: string;
  productName: string;
  bankName: string;
  bankImgPath: string;
  productType?: string;
  loanRateList: LoanRateList[];
}

export interface LoanRateList {
  id: number;
  rateType: string;
  repayType: string;
  minRate: number;
  maxRate: number;
  avgRate: number;
  mortgageType: string;
}

export interface ItemDetail extends Item {
  categoryName: string;
  joinWay: string;
  loanIncidentalExpenses: string;
  earlyRepayFee: string;
  delayRate: string;
  disclosureStartDay: string;
  disclosureEndDay: string;
}
