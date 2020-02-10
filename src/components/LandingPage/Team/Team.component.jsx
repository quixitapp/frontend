import React from "react"

import {
  TeamContainer,
  Container,
  TeamGrid,
  TeamCard,
  TeamTitle,
  MemberImg,
  MemberName,
  Role,
  Links,
  Touch,
  LinkImg,
  TeamBorder
} from "./Team.styles"

import hamza from "../../../assets/hamza.png"
import guillaume from "../../../assets/headshot_guillaume.png"
import tyler from "../../../assets/tyler.png"
import sharan from "../../../assets/sharan.png"
import spencer from "../../../assets/spencer.png"
import gitHub from "../../../assets/github-alt-brands.svg"
import linkedIn from "../../../assets/linkedin-brands.svg"

const Team = () => (
  <TeamContainer>
    <Container>
      <TeamTitle top={20}>Meet the Team</TeamTitle>
      <TeamGrid>
        <TeamCard>
          <MemberImg src={hamza} />
          <MemberName>Hamza Elkhoudiri</MemberName>
          <Role>Team Lead</Role>
          <Links>
            <Touch to="#">
              <LinkImg src={gitHub} />
            </Touch>
            <Touch to="#">
              <LinkImg src={linkedIn} />
            </Touch>
          </Links>
        </TeamCard>
        <TeamCard>
          <MemberImg src={guillaume} />
          <MemberName>Guillaume Savy</MemberName>
          <Role>Software Engineer</Role>
          <Links>
            <Touch to="#">
              <LinkImg src={gitHub} />
            </Touch>
            <Touch to="#">
              <LinkImg src={linkedIn} />
            </Touch>
          </Links>
        </TeamCard>
        <TeamCard>
          <MemberImg src={tyler} />
          <MemberName>Tyler Forman</MemberName>
          <Role>Software Engineer</Role>
          <Links>
            <Touch to="#">
              <LinkImg src={gitHub} />
            </Touch>
            <Touch to="#">
              <LinkImg src={linkedIn} />
            </Touch>
          </Links>
        </TeamCard>
        <TeamCard>
          <MemberImg src={sharan} />
          <MemberName>Sharanjit Sandhu</MemberName>
          <Role>Software Engineer</Role>
          <Links>
            <Touch to="#">
              <LinkImg src={gitHub} />
            </Touch>
            <Touch to="#">
              <LinkImg src={linkedIn} />
            </Touch>
          </Links>
        </TeamCard>
        <TeamCard>
          <MemberImg src={spencer} />
          <MemberName>Spencer Meredith</MemberName>
          <Role>Software Engineer</Role>
          <Links>
            <Touch to="#">
              <LinkImg src={gitHub} />
            </Touch>
            <Touch to="#">
              <LinkImg src={linkedIn} />
            </Touch>
          </Links>
        </TeamCard>
      </TeamGrid>
    </Container>
    <TeamBorder />
  </TeamContainer>
)

export default Team
