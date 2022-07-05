import React from 'react'
import { ChannelList, useChatContext } from 'stream-chat-react'
import Cookies from 'universal-cookie'
import { ChannelSearch,TeamChannelList,TeamChannelPreview } from './'
import balon from '../assets/futbol.jpg'
import LogoutIcon from '../assets/LogoutIcon.jpg'

const cookies=new Cookies()

const SideBar=({logout})=>(
  <div className='channel-list__sidebar' >
    <div className='channel-list__sidebar__icon1' >
      <div className='icon1__inner' >
        <img src={balon} alt="balon" width='30' />
      </div>
    </div>
    <div className='channel-list__sidebar__icon2' >
      <div className='icon1__inner' onClick={logout} >
        <img src={LogoutIcon} alt="balon" width='30' />
      </div>
    </div>
  </div>

)

const CompanyHeader=()=>(
  <div className='channel-list__header__text'>
    <p className='channel-list__header__text'>Panel de Deporte </p>
  </div>
)

const ChannelListContainer = ({isCreating,setIsCreating,setCreateType,setIsEditing}) => {

  const logout=()=>{
        cookies.remove('token')
        cookies.remove('userId')
        cookies.remove('username')
        cookies.remove('fullname')
        cookies.remove('avatarURL')
        cookies.remove('phoneNumber')
        cookies.remove('hashedPassword')

        window.location.reload();
  }

  return (
  <>
    <SideBar logout={logout} />
    <div className='channel-list__list__wrapper'>
      <CompanyHeader/>
      <ChannelSearch/>
      <ChannelList
        filters={{}}
        channelRenderFilterFn={()=>{}}
        List={(listProps)=>(
          <TeamChannelList
            {...listProps}
            type='team'
            isCreating={isCreating} 
            setIsCreating={setIsCreating}
             setCreateType={setCreateType}
              setIsEditing={setIsEditing}
          />
        )}
        Preview={(previewProps)=>(
          <TeamChannelPreview
          {...previewProps}
          type='team'
          />
        )}
      />
      <ChannelList
        filters={{}}
        channelRenderFilterFn={()=>{}}
        List={(listProps)=>(
          <TeamChannelList
            {...listProps}
            type='messaging'
            isCreating={isCreating} 
            setIsCreating={setIsCreating} 
            setCreateType={setCreateType} 
            setIsEditing={setIsEditing}
          />
        )}
        Preview={(previewProps)=>(
          <TeamChannelPreview
          {...previewProps}
          type='messaging'
          />
        )}
      />
    </div>
  </>
  )
}

export default ChannelListContainer