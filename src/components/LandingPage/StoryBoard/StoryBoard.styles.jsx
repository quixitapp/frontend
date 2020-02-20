import styled from "styled-components"
import storyBorder from "../../../assets/story_border.svg"

export const StoryBoardContainer = styled.div`
  margin: 0;
  padding: 0;
  width: 100%;
  height: auto;
  position: relative;
  padding-bottom: 6rem;
  background-color: #fff;
`

export const Container = styled.div`
  padding: 0;
  width: 1100px;
  margin: 0 auto;
  max-width: 1100px;

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
  margin: 0;
  color: #232829;
  font-weight: 600;
  font-size: 3.2rem;
  margin-bottom: 6rem;
`

export const StepContainer = styled.div`
  width: 100%;
  height: auto;
  display: grid;
  align-items: center;
  margin-bottom: 8rem;
  justify-items: space-between;
  grid-template-columns: repeat(2, 4fr);
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
  margin: 0;
  color: #014045;
  font-weight: 800;
  font-size: 1.9rem;
  margin-bottom: 10px;
`

export const AccentTitle = styled.h4`
  margin: 0;
  color: #ffa714;
  font-weight: 400;
  font-size: 3.2rem;
  margin-bottom: 10px;
`

export const StoryText = styled.p`
  margin: 0;
  color: #898c8c;
  line-height: 1.7;
  font-weight: 400;
  font-size: 1.7rem;
`

export const StoryBorder = styled.span`
  margin: 0;
  padding: 0;
  width: 100%;
  bottom: 0px;
  border: none;
  height: 160px;
  position: absolute;
  background: url(${storyBorder}) no-repeat;
  background-size: cover;
`
