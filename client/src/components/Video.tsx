import facesLeft from "../assets/faces-left.png";
import faceRight from "../assets/faces-right.png";
import notions from "../assets/notions.png";
import make from "../assets/make.png";
import coffee from "../assets/coffee.png";
import rakuten from "../assets/rakuten.png";
import glovo from "../assets/glovo.png";
function Video() {
    return (
        <div>
        <div className="flex justify-center items-center py-2 relative max-w-7xl mx-auto">
            {/* Faces image positioned on the left - hidden on mobile */}
            <img 
                src={facesLeft} 
                alt="faces" 
                className="absolute left-4 transform -translate-x-1/2 w-32 lg:w-72 z-10 hidden xl:block"
            />
            {/* Faces image positioned on the right - hidden on mobile */}
            <img
                src={faceRight} 
                alt="faces" 
                className="absolute right-0 top-[-150px] transform translate-x-1/3 w-32 lg:w-[400px] z-10 hidden xl:block"
            />
            <div className="bg-white rounded-lg shadow-2xl border border-gray-200 overflow-hidden max-w-5xl w-full mx-4 sm:mx-10 xl:mx-4 -mt-20 lg:mt-0">
                <div className="bg-white px-4 py-4 flex items-center border-b border-gray-200">
                    <div className="flex space-x-2">
                        <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
                        <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
                        <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
                    </div>
                </div>
                
                <div className="p-2 bg-white">
                    <video
                        src="https://tally.so/videos/demo/intro.mp4#t=15"
                        className="w-full rounded"
                        autoPlay
                        muted
                        loop
                        playsInline
                        width="100%"
                        title="Tailly Demo Video"
                    />
                </div>
            </div>
            
        </div>
            {/* Company testimonial section */}
            <div className="mt-12 text-center">
                <p className="text-lg font-semibold text-gray-700 mb-8">
                    Powering 500,000+ teams at the world's best companies
                </p>
                <div className="flex justify-center items-center gap-8 flex-wrap">
                    <img src={notions} alt="Notion" className="h-8" />
                    <img src={make} alt="Make" className="h-7" />
                    <img src={coffee} alt="Coffee" className="h-8" />
                    <div className="flex  gap-6">
                        <img src={rakuten} alt="Rakuten" className="h-8" />
                        <img src={glovo} alt="Glovo" className="h-8 mt-[-8px]" />
                    </div>
                </div>
            </div>
            </div>
    )
}

export default Video;