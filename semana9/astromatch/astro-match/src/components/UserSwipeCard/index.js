import PropTypes from 'prop-types'
import React, { Component } from 'react'

import {
  BlurredBackground,
  InfoWrapper,
  ProfilePicture,
  TitleWrapper,
  UserAge,
  UserCardWrapper,
  UserName,
} from './styled'


class UserSwipeCard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentAnimation: null,
    }
  }


  render() {
    const { arrayProfiles, animationDirection: animation } = this.props

    return (
      <UserCardWrapper animation={animation}>
        <BlurredBackground photo={arrayProfiles.photo}/>
        <ProfilePicture src={arrayProfiles.photo}/>
        <InfoWrapper>
          <TitleWrapper>
            <UserName>{arrayProfiles.name},</UserName>
            <UserAge>{arrayProfiles.age}</UserAge>
          </TitleWrapper>
        </InfoWrapper>
      </UserCardWrapper>)
  }
}


export default UserSwipeCard

UserSwipeCard.propTypes = {
  userToSwipe: PropTypes.object
}