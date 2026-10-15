import {useEffect, useRef} from 'react';
export function useStory() {
 const ref=useRef<HTMLDivElement>(null);
 useEffect(()=>{
 let disposed=false; let cleanup: (()=>void)|undefined;
 Promise.all([import('gsap'),import('gsap/ScrollTrigger')]).then(([{gsap},{ScrollTrigger}])=>{
 if(disposed || !ref.current) return;
 gsap.registerPlugin(ScrollTrigger);
 const mm=gsap.matchMedia();
 const ctx=gsap.context(()=>{
 mm.add('(prefers-reduced-motion: no-preference)',()=>{
 gsap.utils.toArray<HTMLElement>('[data-reveal]').forEach(el=>gsap.from(el,{y:40,autoAlpha:0,duration:1.15,ease:'power2.out',scrollTrigger:{trigger:el,start:'top 92%',once:true}}));
 mm.add('(min-width: 768px)',()=>{
 gsap.to('.hero-image',{yPercent:12,scale:1.04,ease:'none',scrollTrigger:{trigger:'.hero',start:'top top',end:'bottom top',scrub:1}});
 gsap.utils.toArray<HTMLElement>('[data-scene]').forEach(el=>{
 const image=el.querySelector('img');
 if(image) gsap.fromTo(image,{yPercent:-5,scale:1.08},{yPercent:5,scale:1,ease:'none',scrollTrigger:{trigger:el,start:'top bottom',end:'bottom top',scrub:1}});
 gsap.to(el.querySelector('.manifesto-copy'),{y:-35,ease:'none',scrollTrigger:{trigger:el,start:'top top',end:'+=240',pin:true,scrub:1}});
 });
 });
 });
 },ref.current);
 cleanup=()=>{mm.revert();ctx.revert();};
 ScrollTrigger.refresh();
 });
 return()=>{disposed=true;cleanup?.();};
 },[]);
 return ref;
}
