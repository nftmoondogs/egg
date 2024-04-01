// components/AboutSection.js
export default function AboutSection() {
    return (
      <div className="bg-black text-white py-12 px-4">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-0 items-start"> {/* Reduced gap from 8 to 4 */}
          

          
          {/* Right Side */}
          <div className="pt-4">
            <h2 className="font-courier text-2xl font-bold mb-4">Welcome to JustAnEgg, the only cryptocurrency project that’s egg-ceptionally good!🥚</h2>
            <p className="font-simpfxo text-base mb-4">
            Imagine if your breakfast winked back and turned into crypto. JustAnEgg!
Not your average egg pun factory; we're here to fry up the crypto game and poach the top spot among meme coins. Serious security with a side of laughs. Join us, and let’s make web culture egg-straordinary!
            </p>
            <h3 className="font-courier-bold text-xl font-bold">Our goal is to reach the meme coins top 10 by setting high standards, building meaningful partnerships as well as a strong community of supporters. </h3>
            <p className="font-simpfxo text-base mb-4">
            Join us, and let’s make web culture egg-straordinary!
            </p>
            <ul className="font-simpfxo text-base space-y-2">
  
  <li>• Fair Launch using pump.fun</li>
  
  <li>• No Team Tokens just pure fun</li>
  
</ul>

            <div className="space-y-2 mb-4">

              {/* NFT Address and additional content can be added here */}
            </div>
            <a href="https://www.pump.fun/" className="font-courier text-white bg-transparent border border-white py-2 px-4 rounded uppercase">
              Buy now on Pump.fun
            </a>
          </div>
                    {/* Left Side */}
                    <div className="space-y-6 flex justify-center">
            <img src="https://i.ibb.co/rdcDbjp/png.png" alt="A Love Letter To Wen Bros" className="max-w-xs md:max-w-sm" />
          </div>
        </div>
        
      </div>

      

      
    );
  }
  