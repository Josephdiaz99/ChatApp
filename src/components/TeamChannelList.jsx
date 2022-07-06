import React from 'react'
import {AddChannel} from '../assets/AddChannel'


const TeamChannelList = ({children,error=false,loading,type,isCreating,setIsCreating,setCreateType,setIsEditing, setToggleContainer}) => {

    if(error){
        return type==='team'? (
            <div className='team-channel-list' >
                <p className='team-channel-list__message' >
                    Error de conexión, por favor espera un momento e intentalo de nuevo.
                </p>
            </div>
        ):null;
    }

    if(loading){
        return (
            <div className='team-channel-list' >
            <p className='team-channel-list__message loading ' >
                {type==='team'?'Canales' : 'Mensajes'} cargando...
            </p>
        </div>
        )
    }


  return (
    <div className='team-channel-list' >
        <div className='team-channel-list__header' >
            <p className='team-channel-list__header__title' >
            {type=== 'team' ? 'Canales' : ' Mensajes Directos'}
            </p>
            <AddChannel
                  isCreating={isCreating}
                    setIsCreating={setIsCreating}
                    setCreateType={setCreateType} 
                    setIsEditing={setIsEditing}
                    type={type === 'team' ? 'team' : 'messaging'}
                    setToggleContainer={setToggleContainer}
            />
        </div>
        {children}
    </div>
  )
}

export default TeamChannelList