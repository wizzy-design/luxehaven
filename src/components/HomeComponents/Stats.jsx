import { styled } from "styled-components";

const Stats = () => {
  return (
    <Parent>
      <div className="grid-1">
        By the Numbers:
        <br />
        Our Effect
      </div>
      <div className="grid-4">
        <div className="stat">
          <div className="nos">48</div>
          <div className="label">Total Buildings</div>
        </div>
        <div className="stat">
          <div className="nos">644</div>
          <div className="label">Total Units</div>
        </div>
        <div className="stat">
          <div className="nos">200%</div>
          <div className="label">Customer Satisfaction</div>
        </div>
        <div className="stat">
          <div className="nos">89k</div>
          <div className="label">M2 Built</div>
        </div>
      </div>
    </Parent>
  );
};

// Styled components

const Parent = styled.div`
  display: grid;
  padding: 10rem 4rem;
  color: #fff;
  background: #101010;
  grid-template-columns: 2;
`;

export default Stats;
