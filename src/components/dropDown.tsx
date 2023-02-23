import { useEffect, useState } from "react";
import styled from "styled-components";

const DropDown = ({
  visibility,
  children,
}: {
  visibility: boolean;
  children: React.ReactNode;
}) => {
  const [visibilityAnimation, setVisibilityAnimation] = useState(false);
  const [repeat, setRepeat] = useState(null);

  useEffect(() => {
    if (visibility) {
      setRepeat(null);
      setVisibilityAnimation(true);
    } else {
      setVisibilityAnimation(false);
    }
  }, [visibility]);
  return (
    <Article
      className={`components-dropdown ${
        visibility ? "slide-fade-in-dropdown" : "slide-fade-out-dropdown"
      }`}
    >
      {visibilityAnimation && children}
    </Article>
  );
};

const Article = styled.article`
  text-align: center;
  margin-top: 5px;
  .slide-fade-in-dropdown {
    overflow: hidden;
    ul {
      animation: slide-fade-in-dropdown-animation 0.4s ease;
    }
  }
  .slide-fade-out-dropdown {
    overflow: hidden;
    ul {
      animation: slide-fade-out-dropdown-animation 0.4s ease;
      animation-fill-mode: forwards;
    }
  }
  .components-dropdown {
    ul {
      position: relative;
      top: 5px;
      margin-top: 0;
      margin-bottom: 5px;
      padding-left: 0;
      list-style: none;
    }
  }
`;

export default DropDown;
