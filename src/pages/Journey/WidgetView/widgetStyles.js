import { CardText, CardTitle } from "reactstrap";
import styled from "styled-components";

const black_color = "rgba(0, 0, 0, 0.8)";

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ProductImage = styled.img`
  height: 180px;
  width: 150px;
  background-size: cover;
  object-fit: contain;
`;
export const ProductNumber = styled(CardText)`
  color: ${black_color};
  font-weight: 500;
  font-size: 13px;
`;
export const ProductType = styled(CardText)`
  color: ${black_color};
  font-weight: 500;
  font-size: 13px;
`;

export const ProductName = styled(CardTitle)`
  font-weight: 600;
  color: ${black_color};
  font-size: 14px;
`;
export const SkuId = styled(CardText)`
  font-size: 12px;
  color: rgba(0, 0, 0, 0.5);
`;
