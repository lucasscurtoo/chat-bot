import { useChat } from "ai/react";


const Chat = () => {
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    api: 'api/openai'
  });

  return (
    <>
     {
      messages.map((message, i) => (
        <div key={i}>
          {message.role === 'system' ? (
            <div>
              {message.content}
            </div>
          ) : (
            <div>
              {message.content}
            </div>
          )}
        </div>
      ))
     }
     <form onSubmit={handleSubmit}>
      <input type="text" onChange={handleInputChange} placeholder="Say..." value={input} />
      <button type="submit">
        send
        </button>
     </form>
    </>
  )

}