import smartImage from '../assets/smart.png';
import pinkmark from '../assets/pinkmark.png';
import smartImage3 from '../assets/smart-3.png';
function FormsInfo() {
  return (
    <div className="max-w-5xl mx-auto p-4 h-screen mt-20">
        <div className="flex items-center gap-8">
            <div className="flex-1">
                <div className="relative inline-block">
                    <h1 className="text-4xl font-bold">Craft intelligent forms</h1>
                    <img 
                        src={pinkmark} 
                        alt="underline" 
                        className="absolute left-[190px] transform -translate-x-1/2 mt-1 w-20 lg:w-40"
                        style={{ top: '95%' }}
                    />
                </div>
                <p className="text-2xl font-normal text-muted-foreground w-full max-w-md mt-4">Our smart features make it easy to turn your forms into a tailored experience for every respondent.</p>
            </div>
            <div className="flex-shrink-0">
                <img src={smartImage} alt="Smart forms illustration" className="w-96 h-auto" />
            </div>
        </div>
        
        {/* Main container with conditional logic */}
        <div className="border-2 border-gray-300 rounded-lg mb-8 overflow-hidden">
            <div className='px-8 mt-10'>
          <h2 className="text-xl font-bold mb-2">Conditional logic</h2>
          <p className="text-md text-gray-600 mb-6">
            Build dynamic forms that adapt based on prior inputs or external data. Show and hide blocks, insert branching, or calculate values to create a personalized form experience.
          </p>
          </div>
          <div className="w-full border border-gray-200 rounded-t-lg overflow-hidden mx-8 mt-2">
            {/* Mac-style header */}
            <div className="bg-white px-4 py-3 flex items-center border-b border-gray-200">
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
                <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
                <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
              </div>
            </div>
            {/* Image without bottom border */}
            <div className="border-b-0 rounded-b-none">
              <img src={smartImage3} alt="Conditional logic illustration" className="w-full h-auto block" />
            </div>
          </div>
        </div>

        {/* Two side-by-side containers */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* First container */}
          <div className="border-2 border-gray-300 rounded-lg p-6 overflow-hidden">
            <h3 className="text-xl font-bold mb-3">Smart Features</h3>
            <p className="text-gray-600 mb-4">
              Enhance your forms with intelligent features that make data collection more efficient and user-friendly.
            </p>
            {/* Mac-style header */}
            <div className="border border-gray-200 rounded-t-lg overflow-hidden mx-8">
              <div className="bg-white px-4 py-3 flex items-center border-b border-gray-200">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
                  <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
                  <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
                </div>
              </div>
              {/* Image without bottom and right borders */}
              <div className="border-b-0 border-r-0">
                <img src={smartImage} alt="Smart features" className="w-full h-auto block" />
              </div>
            </div>
          </div>

          {/* Second container */}
          <div className="border-2 border-gray-300 rounded-lg p-6 overflow-hidden">
            <h3 className="text-xl font-bold mb-3">Advanced Analytics</h3>
            <p className="text-gray-600 mb-4">
              Get detailed insights into form performance and user behavior with our comprehensive analytics dashboard.
            </p>
            {/* Mac-style header */}
            <div className="border border-gray-200 rounded-t-lg overflow-hidden mx-8">
              <div className="bg-white px-4 py-3 flex items-center border-b border-gray-200">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
                  <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
                  <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
                </div>
              </div>
              {/* Image without bottom and right borders */}
              <div className="border-b-0 border-r-0">
                <img src={smartImage} alt="Analytics dashboard" className="w-full h-auto block" />
              </div>
            </div>
          </div>
        </div>
    </div>
  );
}

export default FormsInfo;