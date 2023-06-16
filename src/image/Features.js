import React from 'react'

function Features() {
  return (
    <>
  

    {/* <------Feature head-------> */} 
    <section className='features-head bg-primary '>
        <div className='container grid'>
            <div className='left'>
    <h1 className='xl'>Features</h1>
    <p className='lead'>
        Check out the features of loruki that separate 
        us from the competition
    </p>
            </div>
            <img src='data:image/png;base64,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' alt="img" height="auto" width={200}/>
        </div>
    </section>
    
    <section className='features-main my-2' >
    <div className='container grid'>
    
        <div className='flex-box'>
    
    <p>
    Throughout this programme, you will develop the tools to craft stories using frameworks such as narrative structure through plot and setting. The course will look at how stories unfold to engage, fascinate, or tease an audience. It will also explore character and dialogue. All of this will also be done in a way that is practical, non-intellectual, and non-academic so that it accessible to everyone.    
    </p>
    
     </div>
    
      <img src='data:image/png;base64,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'/>
    
    </div>
    
    
    </section>
    <section className='features-card my-2' >
    <div className='container gridthree'>
        <div className=' feature-card'>
    <i className='fas fa-server fa-3x'></i>
    <p>
    No prior knowledge is required for this course and all course materials will be provided. Openness, enthusiasm, support, a sense of humour, and a passion to learn how to explore ideas through writing for the stage is all that is necessary to take part!.
    </p>
        </div>
        <div className=' feature-card'>
    <i className='fas fa-network-wired fa-3x'></i>
    <p>
    No prior knowledge is required for this course and all course materials will be provided. Openness, enthusiasm, support, a sense of humour, and a passion to learn how to explore ideas through writing for the stage is all that is necessary to take part!.
    </p>
        </div>
        <div className=' feature-card'>
    <i className='fas fa-laptop-code fa-3x'></i>
    <p>
    No prior knowledge is required for this course and all course materials will be provided. Openness, enthusiasm, support, a sense of humour, and a passion to learn how to explore ideas through writing for the stage is all that is necessary to take part!.
    </p>
        </div>
        <div className=' feature-card'>
    <i className='fas fa-database fa-3x'></i>
    <p>
    No prior knowledge is required for this course and all course materials will be provided. Openness, enthusiasm, support, a sense of humour, and a passion to learn how to explore ideas through writing for the stage is all that is necessary to take part!.
    </p>
        </div>
        <div className=' feature-card'>
    <i className='fas fa-power-off fa-3x'></i>
    <p>
    No prior knowledge is required for this course and all course materials will be provided. Openness, enthusiasm, support, a sense of humour, and a passion to learn how to explore ideas through writing for the stage is all that is necessary to take part!.
    </p>
        </div>
        <div className=' feature-card'>
    <i className='fas fa-upload fa-3x'></i>
    <p>
    No prior knowledge is required for this course and all course materials will be provided. Openness, enthusiasm, support, a sense of humour, and a passion to learn how to explore ideas through writing for the stage is all that is necessary to take part!.
    </p>
        </div>
    </div>
    
    
    </section>
 
         </>
  )
}

export default Features
