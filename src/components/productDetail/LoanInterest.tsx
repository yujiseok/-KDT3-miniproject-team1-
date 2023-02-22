import React from "react";
import styled from "styled-components";
import colors from "constants/colors";

export interface IItem {
  id: number;
  rateType: string;
  repayType: string;
  minRate: number;
  maxRate: number;
  mortgageType: string;
}

interface ILoanProps {
  item: IItem;
}

const LoanInterest = ({ item }: ILoanProps) => {
  const { rateType, repayType, minRate, maxRate } = item;
  return (
    <Ul>
      <LiCase>{`${rateType}, ${repayType}`}일 경우</LiCase>
      <LiValue>{`최저 금리 ${minRate}% 최고 금리 ${maxRate}%`}</LiValue>
    </Ul>
  );
};

export default LoanInterest;

const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 3px;
`;

const LiCase = styled.li`
  color: ${colors["GRAY-6"]};
  font-size: 14px;
  font-weight: 500;
`;

const LiValue = styled.li`
  color: ${colors["GRAY-7"]};
  font-size: 15px;
`;
