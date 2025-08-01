import { WobbleCard } from './ui/wobble-card'
import Grid1 from '../assets/grid1.png';

function Grid() {
  return (
    <div>
    <div id="about" className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-5xl mx-auto w-full px-4 py-8 lg:py-12 mt-20 lg:mt-32">
      {/* First Card (Full Width on Desktop) */}
      <WobbleCard containerClassName="border-2 border-pink-500 shadow-lg shadow-pink-500/30 col-span-1 lg:col-span-3 min-h-[300px] sm:min-h-[400px] lg:min-h-[340px] xl:min-h-[370px] relative overflow-hidden">
        <div className="max-w-sm sm:max-w-md md:max-w-xl p-2">
          <h2 className="text-left text-xl sm:text-2xl md:text-3xl font-semibold tracking-[-0.015em] text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-400">
            Unlimited forms and submissions for free
          </h2>

          <p className="mt-2 sm:mt-4 text-left ibm-plex-mono-thin text-black text-sm sm:text-base tracking-tighter">
            Paywalls getting in the way? Not anymore. Tally gives you unlimited forms and submissions, completely free, as long as you stay within our fair usage guidelines.
          </p>
        </div>

        <img
          src={Grid1}
          width={200}
          height={200}
          alt="arrow"
          className="absolute bottom-0 w-full -mx-10 -my-8"
        />
      </WobbleCard>

        {/* Second Card (Double Width on Desktop) */}
      <WobbleCard
        containerClassName="border-2 col-span-1 lg:col-span-2 h-full min-h-[300px] sm:min-h-[400px] lg:min-h-[450px] relative"
      >
        <div className="max-w-xs sm:max-w-sm md:max-w-md p-4 sm:p-6">
          <h2 className="text-left text-balance text-xl font-bold tracking-[-0.015em] text-black">
            Just start typing
          </h2>
          <p className="mt-2 sm:mt-4 text-left text-black text-sm sm:text-base">
            Tally is a new type of online form builder that works like a text document. Just start typing on the page and insert blocks same as Notion.
          </p>
        </div>
        <video
          src="https://tally.so/videos/demo/just-type-card.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="absolute w-72 lg:w-96 xl:w-96 object-contain rounded-2xl"
        />
      </WobbleCard>

      {/* Third Card */}
      <WobbleCard containerClassName="border-2 col-span-1 min-h-[250px] sm:min-h-[300px]">
        <div className="mt-7 p-4 lg:p-0">
          <h2 className="max-w-80 text-left text-md font-bold tracking-[-0.015em] text-black">
            Privacy-friendly form builder
          </h2>
          <p className="mt-2 sm:mt-4 text-left text-black text-sm sm:text-base">
            Your data privacy and security are our top priorities. We are GDPR compliant and treat your data with care and confidentiality.
          </p>
          <p className="mt-2 sm:mt-4 text-left text-black text-sm sm:text-base">
            Tally is hosted in Europe, we don't use cookie-tracking, and all form data is securely stored, and encrypted both in transit and at rest. Learn more about Tally & GDPR.
          </p>
        </div>
      </WobbleCard>

     
    </div>
    <div className='w-full max-w-4xl lg:mx-auto p-5 lg:text-center'>
      <h2 className='text-transparent bg-clip-text bg-gradient-to-r from-gray-500 to-gray-500 font-bold text-xl sm:text-2xl lg:text-3xl lg:tracking-tighter mb-4'>Loving Tailly! Not sure why I only started using it now, so good!</h2>
      <div className='flex items-center lg:justify-center gap-3 mt-4'>
        <img src="https://tally.so/images/demo/v2/quote-ben.jpg" alt="ben" className='w-10 h-10 rounded-full object-cover' />
        <div>
          <h4 className='font-bold text-start text-sm text-gray-800'>Ben Lang</h4>
          <p className='text-xs text-gray-600'>Angel investor, previously at Notion</p>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Grid;