import Image from 'next/image'
import ChatBotLogo from '../../public/images/chatBotLogo.png'
import CustomTypeWriter from '@/components/TypeWriter'
export default function Home() {
  return (
    <div className='flex flex-col gap-y-4 p-8 w-full h-full'>
      <div className='w-4/5 flex items-center gap-x-3 p-6 bg-appcolors-secondaryBg rounded-2xl'>
        <div className='bg-blue-300 rounded-full p-2 w-fit'>
          <Image
            width={30}
            height={30}
            src={ChatBotLogo}
            className='object-cover aspect-square'
            alt='Chatbot logo'
          />
        </div>

        <CustomTypeWriter
          words={['Welcome to ChatBot.AI, start typing a question!']}
        />
      </div>
    </div>
  )
}

