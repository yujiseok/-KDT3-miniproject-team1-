import colors from "constants/colors";
import styled, { keyframes } from "styled-components";

interface SkeletonProp {
  length: number;
}

interface SkeletonStyleProps {
  width?: string;
  height?: string;
  marginTop?: string;
}

const Skeleton = ({ length }: SkeletonProp) => {
  return (
    <>
      {Array(length)
        .fill(1)
        .map((_, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <SkeletonCard key={index}>
            <PictureSkeleton />
            <SkeletonWrapper>
              <ProductSkeleton />
              <ProductSkeleton />
              <ProductSkeleton width="40%" height="24px" />
              <ProductSkeleton width="30%" height="18px" marginTop="8px" />
            </SkeletonWrapper>
          </SkeletonCard>
        ))}
    </>
  );
};

const skeletonKeyframes = keyframes`
  0% {
    background-position: -200px 0;
  }
  100% {
    background-position: calc(200px + 100%) 0;
  }
`;

const SkeletonCard = styled.li`
  width: 342px;
  display: flex;
  gap: 24px;
  border: 1px solid ${colors["GRAY-2"]};
  padding: 16px;
  margin-bottom: 16px;
`;

const SkeletonWrapper = styled.div`
  width: 100%;
`;

const ProductSkeleton = styled.div<SkeletonStyleProps>`
  height: ${(props) => props.height || "14px"};
  width: ${(props) => props.width || "80%"};
  animation: ${skeletonKeyframes} 1300ms ease-in-out infinite;
  background-color: #eee;
  background-image: linear-gradient(90deg, #eee, #f5f5f5, #eee);
  /* background-color: ${colors["GRAY-2"]};
  background-image: linear-gradient(90deg, #eee, #f5f5f5, #eee); */
  background-size: 200px 100%;
  background-repeat: no-repeat;
  border-radius: 4px;
  margin-bottom: 8px;
  margin-top: ${(props) => props.marginTop || "0"};
`;

const PictureSkeleton = styled(ProductSkeleton)`
  width: 40px;
  height: 40px;
  min-height: 40px;
  min-width: 40px;
  border-radius: 50%;
`;

export default Skeleton;
