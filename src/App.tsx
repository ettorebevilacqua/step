import React, { Suspense, useState } from 'react';
import loadable from '@loadable/component'
import './App.css'

/* */

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
// const step = 3
// const Page = loadable(() => import('./step/' + step+'/page'));


const AsyncPage = loadable((props:{page:string}) => import(`./step/${props.page}/page/`), {
  cacheKey: props => props.page,
})


function App() {
  const [step, setStep] = useState(3)

  return (
    <div className="mainContainer">
      <aside className="aside">
      <h3>Steps {step}</h3>
      {[1,2,3,4,5,6,7,8,9,10,11].map((val=><>
      <br />
      <a href="#" key={val} onClick={()=>setStep(val)} >
         {val}
      </a>
      </>))}
      </aside>
      <article className="fullHeight98">
        <Suspense fallback={<div>Loading...</div>}>
          <AsyncPage page={step.toString()} />
        </Suspense>

      </article>
    </div>
  )
}

export default App
