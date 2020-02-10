import React from "react"

import {
  StoryBoardContainer,
  Container,
  StoryBoardTitle,
  StepContainer,
  StoryImg,
  StepDesc,
  StoryTitle,
  AccentTitle,
  StoryText,
  StoryBorder
} from "./StoryBoard.styles"

import schedule from "../../../assets/schedule.svg"
import perfect from "../../../assets/perfect.svg"
import done from "../../../assets/done.svg"

const StoryBoard = () => (
  <StoryBoardContainer>
    <Container>
      <StoryBoardTitle>How it works</StoryBoardTitle>
      <StepContainer>
        <StoryImg width={372} height={304} src={schedule} />
        <StepDesc left={90}>
          <StoryTitle>Schedule a Quix project</StoryTitle>
          <AccentTitle>Tell us what you need done.</AccentTitle>
          <StoryText>
            Add detailed information about your Quix project, like location,
            budget, deadline, etc.
          </StoryText>
        </StepDesc>
      </StepContainer>
      <StepContainer>
        <StepDesc>
          <StoryTitle>Find the perfect match</StoryTitle>
          <AccentTitle>Receive bids from Quixers.</AccentTitle>
          <StoryText>
            Pick the right person that fits within your budget and all your
            requirements.
          </StoryText>
        </StepDesc>
        <StoryImg width={198} height={222} src={perfect} left={330} />
      </StepContainer>
      <StepContainer>
        <StoryImg width={290} height={211} src={done} />
        <StepDesc left={90}>
          <StoryTitle>Get it done</StoryTitle>
          <AccentTitle>Relax, enjoy life</AccentTitle>
          <StoryText>
            While your Quixer gets the job done. Pay securely and support your
            Quixer by leaving a review.
          </StoryText>
        </StepDesc>
      </StepContainer>
    </Container>
    <StoryBorder />
  </StoryBoardContainer>
)

export default StoryBoard
