import styled from "styled-components";

export const AppWrapper = styled.div`
  background-color: ${(props) => props.bgColor};
  min-height: 100vh;
  padding: 20px;
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    padding: 15px;
    flex-direction: column;
  }

  @media (max-width: 480px) {
    padding: 10px;
  }
`;

export const Title = styled.h1`
  color: #ffffff;
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.8rem;
  }
`;
export const Contain = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Wrapper = styled.div`
  padding: 20px;
  display: flex;
  align-items: center;
`;
export const ErrorMessage = styled.p`
  color: #ff6347;
  font-size: 1.2rem;
  background-color: #ffffff;
  padding: 10px 15px;
  border-radius: 8px;
  margin-top: 20px;
`;
