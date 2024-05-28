import Image from 'next/image'
import ChatBotLogoVariant from '../../public/images/chatBotLogoVariant.png'

const SideBar = () => {
  return (
    <div className='bg-appcolors-secondaryBg flex flex-col items-center h-full p-4 w-1/5 border-appcolors-darkGray/10 border-r-[0.5px] shadow-xl'>
      <Image
        width={130}
        height={130}
        src={ChatBotLogoVariant}
        className='object-contain aspect-square'
        alt='Chatbot logo'
      />
    </div>
  )
}
export default SideBar
