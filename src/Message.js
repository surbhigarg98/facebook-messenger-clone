import { Card, CardContent, Typography } from '@material-ui/core'
import React, { forwardRef } from 'react'
import './Message.css'

const Message = forwardRef(({user,message},ref) =>{
    const isUser = user === message.username;
    return (
        <div ref={ref}  className={`message ${isUser && 'user__messsage'}`} >
        <Card className={isUser ? 'user_card' : 'guest_Card'}>
          <CardContent>
              <Typography
              color='white'
               variant="h5"
                component="h2">
                  {!isUser && `${message.username || 'Unknown User'} :`} {message.text}
              </Typography>
          </CardContent>
        </Card>
        </div>
      
    )
}
)
export {Message}