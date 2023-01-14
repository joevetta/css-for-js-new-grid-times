import React from "react";
import styled from "styled-components/macro";

import { MAIN_STORY, OPINION_STORIES, SECONDARY_STORIES } from "../../data";

import SectionTitle from "../SectionTitle";
import MainStory from "../MainStory";
import SecondaryStory from "../SecondaryStory";
import OpinionStory from "../OpinionStory";
import Advertisement from "../Advertisement";
import { COLORS, QUERIES } from "../../constants";

const MainStoryGrid = () => {
  return (
    <Wrapper>
      <MainStorySection>
        <MainStory {...MAIN_STORY} />
      </MainStorySection>

      <SecondaryStorySection>
        <StoryList>
          {SECONDARY_STORIES.map((story, index) => (
            <SecondaryStory key={story.id} {...story} />
          ))}
        </StoryList>
      </SecondaryStorySection>

      <OpinionSection>
        <SectionTitle>Opinion</SectionTitle>
        <StoryList>
          {OPINION_STORIES.map((story, index) => (
            <OpinionStory key={story.id} {...story} />
          ))}
        </StoryList>
      </OpinionSection>

      <AdvertisementSection>
        <Advertisement />
      </AdvertisementSection>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-areas:
    "main-story"
    "secondary-stories"
    "opinion-stories"
    "advertisement";
  gap: 48px;
  margin-bottom: 48px;

  @media ${QUERIES.tabletOnly} {
    grid-template-columns: 1fr 250px;
    grid-template-areas:
      "main-story secondary-stories"
      "advertisement advertisement"
      "opinion-stories opinion-stories";
  }

  @media ${QUERIES.tabletAndUp} {
    gap: 2px;
  }

  @media ${QUERIES.laptopAndUp} {
    grid-template-columns: 1.25fr 1fr 300px;
    grid-template-areas:
      "main-story secondary-stories opinion-stories"
      "main-story advertisement advertisement";
  }
`;

const MainStorySection = styled.section`
  grid-area: main-story;

  @media ${QUERIES.tabletAndUp} {
    border-right: 1px solid var(--color-gray-300);
  }
`;

const SecondaryStorySection = styled.section`
  grid-area: secondary-stories;

  @media ${QUERIES.tabletAndUp} {
    padding: 0px 16px;
  }
`;

const StoryList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  & > *:not(:last-of-type) {
    --separator-spacing: 16px;
    padding-bottom: var(--separator-spacing);
    margin-bottom: var(--separator-spacing);
    border-bottom: 1px solid var(--color-gray-300);
  }

  @media ${QUERIES.tabletOnly} {
    height: 100%;
  }

  @media ${QUERIES.laptopAndUp} {
    justify-content: space-between;
  }
`;

const OpinionSection = styled.section`
  grid-area: opinion-stories;

  @media ${QUERIES.tabletOnly} {
    padding: 24px;

    & ${StoryList} {
      display: flex;
      flex-direction: row;
      flex: 1;
      gap: 32px;
    }
    & ${StoryList} > * {
      border-bottom: revert;
      flex: 1;
    }
  }

  @media ${QUERIES.tabletAndUp} {
    padding-left: 16px;
  }

  @media ${QUERIES.laptopAndUp} {
    border-left: 1px solid var(--color-gray-300);
    & ${StoryList} {
      margin-top: -1rem;
      padding-bottom: 0px;
    }
  }
`;

const AdvertisementSection = styled.section`
  grid-area: advertisement;

  @media ${QUERIES.tabletAndUp} {
    padding-top: 16px;
    padding-left: 16px;
  }
`;

export default MainStoryGrid;
