import {gsap} from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLayoutEffect,useRef } from 'react';
gsap.registerPlugin(ScrollTrigger);
function App() {
  const bg1=useRef(null);
  const img_container=useRef(null);
  const img=useRef(null);
  const text1=useRef(null);
  const text2=useRef(null);
  const container=useRef(null);
  useLayoutEffect(()=> {
      let ctx = gsap.context(()=> {
        ScrollTrigger.create({
          trigger:bg1.current,
          pin:bg1.current,
          pinSpacing:false,
          start:"top top",
          endTrigger:".last",
          end:"bottom bottom",
        });
        gsap.set(container.current,{marginTop:-container.current.offsetHeight,});
        gsap.timeline({
          scrollTrigger:{
            trigger:img_container.current,
          pin:img_container.current,
          scrub:1,
          start:"0% 0%",
          }
        }).to(img.current, {transform: "translateZ(2200px)"},0)
        .to(text1.current, {y:-800},0.05,"<")
        .to(text2.current, {y:-800},0.08,"<")
        .fromTo(container.current,{yPercent:100,scaleY:2},{yPercent:0,scaleY:1})
      });
      return ()=> ctx.revert();
  },[]);
  return (
    <>
      <div className="relative">
      <div className="bg bg-[#141414] absolute h-screen w-screen z-[-1]"></div>
          <section>
          <div ref={img_container}className="img-container perspective flex items-center justify-center h-screen">
            <img ref={img} src="/public/bg.jpg" alt="Test" className="image" />
            <div className="text-white absolute flex flex-col items-center justify-center">
              <h1 ref={text1} className="kalnia text-[170px] text-white">
                <span className="text-stroke">
                  Outlook
                </span>
                &nbsp;Above
              </h1>
              <p ref={text2} className="opacity-50 w-48 text-[13px] text-center">A Showcase of the world&apos;s best aerial photography</p>
            </div>
          </div>
          <div  ref={container} className="container py-12 flex flex-wrap items-center justify-around">
            <div className="col-1 flex flex-col gap-16 translate-y-[30%] pb-8">
              <img className="w-[450px] h-[350px]" src="/public/1.jpeg" alt="" />
              <img className="w-[400px] h-[400px]" src="/public/2.jpeg" alt="" />
            </div>
            <div className="col-2 flex flex-col gap-16">
              <img className="w-[600px] h-[400px]" src="/public/3.jpg" alt="" />
              <img className="w-[400px] h-[400px] last" src="/public/4.jpeg" alt="" />
            </div>
          </div>
          </section>
      </div>
    </>
  )
}

export default App
