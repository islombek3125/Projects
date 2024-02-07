import{MultiChatSocket,MultiChatWindow,useMultiChatLogic} from 'react-chat-engine-advanced'

const ChatsPage = (props) => {
    const chatProps = useMultiChatLogic('ae578fa7-e21a-4a18-8529-47b4d9db1453',
    props.user.username,
    props.user.secret
    );
    return (
    <div style = {{height: '100vh'}}>
        <MultiChatSocket {...chatProps}/>
        <MultiChatWindow {...chatProps} style = {{height: '100%' }}/>
        </div>
    )
}

export default ChatsPage