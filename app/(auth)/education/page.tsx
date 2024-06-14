export const metadata = {
  title: 'Sign In - Open PRO',
  description: 'Page description',
}

import Link from 'next/link'

export default function Education() {
  return (
    <section>  
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-20 md:py-40">
          {/* Section header */}
          <div className="relative max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h1 style={{ fontFamily: 'Newsreader' }} className="text-black h1 mb-4">Education</h1>
          </div>

          {/* Items */}
          <div className="grid gap-10">

            {/* 1st item */}
            <a href="https://bm.hkust.edu.hk/" target = "_blank">
              <div className="flex items-center pt-4 pb-4 grid grid-cols-6 bg-gray-300 rounded-lg hover:bg-gray-400 hover:rounded-lg " >
                {/* Image */}
                <div className="col-span-1" data-aos="fade-up">
                {/* <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-2 lg:col-span-6 mb-8 md:mb-0 rtl" data-aos="fade-up"> */}
                  <img className="mx-auto" src="images\LOGO_UST_blue_gold.svg" width={50} height={50} alt="HKUST Logo" />
                </div>
                {/* Content */}
                <div className="md:col-span-5  " data-aos="fade-left" >
                  <div className="">
                    <h3 className="text-black h3 mb-2">The Hong Kong University of Science and Technology </h3>
                    <p className="text-2xl text-emerald-700 font-bold">BBA in Information Systems and Finance</p>
                    <p className="text-2xl text-emerald-700 font-bold">Minor in Big Data Technology</p>
                  </div>
                </div>
              </div>  
            </a>
            
            

            {/* 2nd item */}
            <div className="flex items-center pt-4 pb-4 grid grid-cols-6 bg-gray-300 rounded-lg hover:bg-gray-400 hover:rounded-lg">
              {/* Image */}
              <div className="md:col-span-1 " data-aos="fade-up">
                <img className="mx-auto" src="images\kb.png" width={70} height={70} alt="Features 02" />
              </div>
              {/* Content */}
              <div className="md:col-span-5" data-aos="fade-left" >
                <div className="">
                  <h2 className="text-black h3">SMA Kharisma Bangsa</h2>
                  <p className="text-2xl"></p>
                </div>
              </div>
            </div>



          </div>

        </div>
      </div>


      
    </section>
  )
}


