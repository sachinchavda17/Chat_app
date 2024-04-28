import { useEffect } from 'react'
import { useSocketContext } from '../contexts/SocketContext'
import useConversation from '../zustand/useConversation'
import notificationSound from "../assets/notification.mp3";
const useListenMessages = () => {
    const { socket } = useSocketContext()
    const { messages, setMessages } = useConversation()
    useEffect(() => {
        socket?.on("newMessage", (newMessage) => {
            newMessage.shouldShake = true;
            const sound = new Audio(notificationSound)
            sound.play()
            setMessages([...messages, newMessage])
        })
        return () => socket?.off("newMessage")  // cleanup on unmount bcoz without this line  the listener will keep aplaying sound here i mean dont close 
    }, [socket, messages, setMessages])
}

export default useListenMessages
