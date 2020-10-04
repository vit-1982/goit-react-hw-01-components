import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Table = styled.table`
  margin: 50px auto;
  box-shadow: 0 0 15px rgba(200, 200, 200, 5);
`;

const HeadTitle = styled.thead`
  text-transform: uppercase;
  font-weight: 600;
  background: #8cdaf5;
  color: #f7f7f7;
`;

const HeadTitleItem = styled.th`
  width: 200px;
  height: 60px;
`;

const Body = styled.tbody`
  color: gray;
`;

const BodyRow = styled.tr`
  background: ${(props) => props.background};
`;

const BodyItem = styled.th`
  width: 200px;
  height: 60px;
  font-weight: 100;
  text-transform: ${(props) => props.textTransform};
`;

function TransactionHistory({ items }) {
  return (
    <Table>
      <HeadTitle>
        <tr>
          <HeadTitleItem>Type</HeadTitleItem>
          <HeadTitleItem>Amount</HeadTitleItem>
          <HeadTitleItem>Currency</HeadTitleItem>
        </tr>
      </HeadTitle>
      <Body>
        {items.map(({ id, type, amount, currency }, idx) => (
          <BodyRow key={id} background={idx % 2 === 0 ? "#f7f7f7" : "#f0f2f2"}>
            <BodyItem textTransform="capitalize">{type}</BodyItem>
            <BodyItem>{amount}</BodyItem>
            <BodyItem>{currency}</BodyItem>
          </BodyRow>
        ))}
      </Body>
    </Table>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default TransactionHistory;
