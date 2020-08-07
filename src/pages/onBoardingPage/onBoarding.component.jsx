import React, { useState, useEffect } from "react"
// import { editProfile } from "../../redux/actions"

import SideNav from "../../components/SideNav/SideNav.component"
import Map from "../../components/GoogleMaps/GoogleMaps.component"

import { MAPCONFIG } from "./googleMapsVariables"

import "./onBoarding.styles.scss"

import {
  OnboardingContainer,
  OnboardingContent,
  Top,
  CompleteContainer,
  Title,
  Form,
  AddressInput,
  Submit,
  AvatarContainer,
  Avatar,
  MapContainer,
} from "./onBoardingPage.styles"

const { googleMapURL } = MAPCONFIG

const OnBoardingPage = props => {
  const [token, setToken] = useState("")
  const [loading, setLoading] = useState(true)
  const [address, setAdress] = useState("")

  useEffect(() => {
    setTimeout(async () => {
      await setToken(localStorage.getItem("idToken"))
      setLoading(false)
    }, 3000)
  }, [])

  const onSubmit = e => {
    e.preventDefault()
    props.editProfile(address)
  }
  return (
    <OnboardingContainer className={`${loading ? "skeleton" : ""}`}>
      {token && (
        <>
          <SideNav />
          <OnboardingContent>
            <Top>
              <CompleteContainer>
                <Title>Complete your profile</Title>
                <Form onSubmit={onSubmit}>
                  <AddressInput
                    onChange={e => setAdress(e.target.value)}
                    type="text"
                    placeholder="Enter your address...."
                    value={address}
                  />
                  <Submit value="Submit" type="submit" />
                </Form>
              </CompleteContainer>
              <AvatarContainer>
                <Avatar />
              </AvatarContainer>
            </Top>
            <MapContainer>
              <Map
                googleMapURL={googleMapURL}
                loadingElement={<div style={{ height: "100%" }} />}
                containerElement={<div style={{ height: "100%" }} />}
                mapElement={<div style={{ height: "100%" }} />}
              />
            </MapContainer>
          </OnboardingContent>
        </>
      )}
    </OnboardingContainer>
  )
}

// const mapStateToProps = ({ editProfileReducer }) => {
//   return {
//     editing: editProfileReducer.editing,
//     user: editProfileReducer.user,
//   }
// }

export default OnBoardingPage
