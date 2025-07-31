import { WobbleCard } from './ui/wobble-card'
import Grid1 from '../assets/grid1.png';

function Grid() {
  return (
    <div id="about" className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-5xl mx-auto w-full px-4 py-8 lg:py-12">
      {/* First Card (Full Width on Desktop) */}
      <WobbleCard containerClassName="col-span-1 lg:col-span-3 min-h-[300px] sm:min-h-[400px] lg:min-h-[250px] xl:min-h-[370px] relative overflow-hidden">
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
        containerClassName="col-span-1 lg:col-span-2 h-full min-h-[300px] sm:min-h-[400px] lg:min-h-[450px] relative"
        className=""
      >
        <div className="max-w-xs sm:max-w-sm md:max-w-md p-4 sm:p-6">
          <h2 className="text-left text-balance text-xl font-bold tracking-[-0.015em] text-black">
            Just start typing
          </h2>
          <p className="mt-2 sm:mt-4 text-left ibm-plex-mono-thin text-black text-sm sm:text-base">
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
      <WobbleCard containerClassName="col-span-1 min-h-[250px] sm:min-h-[300px]">
        <div className="p-4 sm:p-6">
          <h2 className="max-w-80 text-left text-balance text-xl sm:text-2xl md:text-3xl ibm-plex-mono-normal tracking-[-0.015em] text-white">
            Would u ever use an AI voice therapist?
          </h2>
          <p className="mt-2 sm:mt-4 text-left ibm-plex-mono-thin text-neutral-200 text-sm sm:text-base">
            Real talk. It&rsquo;s private, always available, and actually cares about what you&rsquo;re saying.
          </p>
        </div>
      </WobbleCard>
    </div>
  )
}

export default Grid;