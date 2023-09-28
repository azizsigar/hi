import React from 'react'
import { useSpeechSynthesis } from 'react-speech-kit'
import { useState } from 'react';
import { Container, Segment} from "sematic-ui-react";

function Question() {
  const [text, setText] = useState(' ')
  const { speak } = useSpeechSynthesis()
  const handleOnClick = () => {
    speak({ text: text })
  }
  return (

    
      <Container>
        <Segment>
          <p>text</p>
          <textarea onChange={(e) => { () => { setText(e.target.value) } }}
          // onClick={listen} 
          // value={Math.floor(Math.random({data.word}))}
          >🔊
          </textarea>
          

            <button
              onClick={() => { handleOnClick() }}
            // onClick={listen} value={Math.floor(Math.random({data.word}))
            >🔊</button>
        </Segment>
      </Container>
  )
}
export default Question