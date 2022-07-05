import React,{useState} from 'react'
import { useChatContext } from 'stream-chat-react'

import {UserList} from './'
import {CloseCreateChannel} from '../assets/CloseCreateChannel'

const ChannelNameInput=({channelName='',setChannelName})=>{

    const handleChange=(e)=>{
        e.preventDefault()

        setChannelName(e.target.value)
    }

    return(
        <div className='channel-name-input__wrapper' >
            <p>Nombre</p>
            <input value={channelName} onChange={handleChange} placeholder='Nombre del Canal' type="text" />
            <p>Añade Miembros</p>
        </div>
    )
}

const CreateChannel = ({createType,setIsCreating}) => {

    const [channelName, setChannelName] = useState('')

  return (
    <div className='create-channel__container' >
     <div className='create-channel__header' >
        <p>{createType ==='team' ? 'Crea un nuevo canal' : 'Envia un mensaje Directo'} </p>
        <CloseCreateChannel setIsCreating={setIsCreating} />
     </div>
     {createType === 'team' && <ChannelNameInput channelName={channelName} setChannelName={setChannelName} />}
    </div>
  )
}

export default CreateChannel