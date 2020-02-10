import styled from "styled-components"
import storyBorder from "../../../assets/story_border.svg"

export const StoryBoardContainer = styled.div`
  width: 100%;
  height: auto;
  background-color: #fff;
  margin: 0;
  padding: 0;
  padding-bottom: 6rem;
  position: relative;
`

export const Container = styled.div`
  width: 1100px;
  max-width: 1100px;
  margin: 0 auto;
  padding: 0;

  @media (max-width: 850px) {
    width: 768px;
    min-width: 768px;
  }

  @media (max-width: 768px) {
    width: 560px;
    min-width: 768px;
  }
`

export const StoryBoardTitle = styled.h2`
  font-size: 3.2rem;
  font-weight: 600;
  color: #232829;
  margin: 0;
  margin-bottom: 6rem;
`

export const StepContainer = styled.div`
  width: 100%;
  height: auto;
  display: grid;
  grid-template-columns: repeat(2, 4fr);
  justify-items: space-between;
  align-items: center;
  margin-bottom: 8rem;
`

export const StoryImg = styled.img`
  width: ${props => props.width}px;
  height: ${props => props.height}px;
  background: url(${props => props.src}) no-repeat center center;
  margin-left: ${props => (props.left ? `${props.left}px` : `0px`)};
  margin-right: ${props => (props.right ? `${props.right}px` : `0px`)};
`

export const StepDesc = styled.div`
  width: 462px;
  height: auto;
  margin-left: ${props => (props.left ? `${props.left}px` : `0px`)};
  margin-right: ${props => (props.right ? `${props.right}px` : `0px`)};
`

export const StoryTitle = styled.h3`
  font-size: 1.9rem;
  color: #014045;
  font-weight: 800;
  margin: 0;
  margin-bottom: 10px;
`

export const AccentTitle = styled.h4`
  font-size: 3.2rem;
  color: #ffa714;
  font-weight: 400;
  margin: 0;
  margin-bottom: 10px;
`

export const StoryText = styled.p`
  font-size: 1.7rem;
  color: #898c8c;
  line-height: 1.7;
  font-weight: 400;
  margin: 0;
`

export const StoryBorder = styled.span`
  background: url(${storyBorder}) no-repeat;
  background-size: cover;
  padding: 0;
  margin: 0;
  position: absolute;
  border: none;
  width: 100%;
  height: 160px;
  bottom: 0px;
`
