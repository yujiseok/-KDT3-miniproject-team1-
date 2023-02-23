export interface Item {
  productId?: string;
  bankImgPath?: string;
  bankName: string;
  productName: string;
  loanRateList: LoanRateList[];
  loanLimit: string;
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
