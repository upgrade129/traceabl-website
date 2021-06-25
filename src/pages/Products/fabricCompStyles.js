import styled from "styled-components";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { Button } from "reactstrap";

export const FabricInputLabels = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const FabricInputFields = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.6rem;
  .percentage {
    width: 50% !important;
    margin-left: 2rem;
  }

  .fabric {
    width: 100%;
  }
`;

export const RemoveButton = styled(AiOutlineCloseCircle)`
  font-size: 3rem;
  color: rgb(102, 100, 100) !important;
  margin-left: 0.5rem;
  cursor: pointer;
  &:hover {
    color: rgb(247, 63, 63) !important;
    transition: all 0.3s ease-in-out;
  }
`;

export const AddButton = styled(Button)``;
