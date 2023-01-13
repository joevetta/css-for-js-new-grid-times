import React from "react";
import styled from "styled-components/macro";
import { Columns, Menu, Search, User } from "react-feather";

import { QUERIES } from "../../constants";

import MaxWidthWrapper from "../MaxWidthWrapper";
import Logo from "../Logo";
import Button from "../Button";

const Header = () => {
  return (
    <header>
      <SuperHeader>
        <Row>
          <ActionGroup>
            <button>
              <Search size={24} />
            </button>
            <button>
              <Menu size={24} />
            </button>
          </ActionGroup>
          <ActionGroup>
            <button>
              <User size={24} />
            </button>
          </ActionGroup>
        </Row>
      </SuperHeader>
      <MainHeader>
        <Logo />
      </MainHeader>
      <DesktopHeader>
        <Row>
          <ActionGroup>
            <button>
              <Search size={24} />
            </button>
            <button>
              <Menu size={24} />
            </button>
          </ActionGroup>
          <Logo />
          <SubscriptionGroup>
            <Button>Subscribe</Button>
            <a href="#">Already a subscriber?</a>
          </SubscriptionGroup>
        </Row>
      </DesktopHeader>
    </header>
  );
};

const SuperHeader = styled.div`
  padding: 16px 0;
  background: var(--color-gray-900);
  color: white;

  @media ${QUERIES.desktopAndUp} {
    display: none;
  }
`;

const Row = styled(MaxWidthWrapper)`
  display: flex;
  justify-content: space-between;
`;

const ActionGroup = styled.div`
  display: flex;
  gap: 24px;

  /*
    FIX: Remove the inline spacing that comes with
    react-feather icons.
  */
  svg {
    display: block;
  }
`;

const MainHeader = styled(MaxWidthWrapper)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 32px;
  margin-bottom: 48px;

  @media ${QUERIES.desktopAndUp} {
    display: none;
  }
`;

const DesktopHeader = styled.div`
  display: none;

  @media ${QUERIES.desktopAndUp} {
    display: block;
    margin-top: 16px;
    margin-bottom: 81px;
  }
`;

const SubscriptionGroup = styled(ActionGroup)`
  flex-direction: column;
  gap: 8px;
  justify-content: flex-end;
  align-items: center;

  & > a {
    font-style: italic;
    font-size: ${14 / 16}rem;
  }
`;
export default Header;
