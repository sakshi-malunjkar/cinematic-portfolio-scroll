import {useEffect, useRef} from 'react';
export function useStory() {
 const ref=useRef<HTMLElement>(null);
 useEffect(()=>{
 let disposed=false; let cleanup: (()=>void)|undefined;
 Promise.all([import('gsap'),import('gsap/ScrollTrigger')]).then(([{gsap},{ScrollTrigger}])=>{
 if(disposed || !ref.current) return;
 gsap.registerPlugin(ScrollTrigger);
 const mm=gsap.matchMedia();
 const root=ref.current;
 const ctx=gsap.context(()=>{
 mm.add('(prefers-reduced-motion: no-preference)',()=>{
 gsap.utils.toArray<HTMLElement>('[data-reveal]').forEach(el=>gsap.from(el,{y:40,autoAlpha:0,duration:1.15,ease:'power2.out',scrollTrigger:{trigger:el,start:'top 92%',once:true}}));
 const sequences=Array.from(root.querySelectorAll<HTMLElement>('[data-sequence]'));
 sequences.forEach(sequence=>{
  const panels=Array.from(sequence.querySelectorAll<HTMLElement>('[data-panel]'));
  sequence.classList.add('is-enhanced');
  panels.forEach((panel,i)=>{if(i>0)gsap.set(panel,{autoAlpha:0,clipPath:'inset(0 0 0 100%)'});});
  const timeline=gsap.timeline({scrollTrigger:{trigger:sequence,start:'top top',end:'bottom bottom',scrub:.65,invalidateOnRefresh:true}});
  panels.forEach((panel,i)=>{
   const image=panel.querySelector('.story-image');
   const copy=panel.querySelector('.story-copy');
   const progress=panel.querySelector('[data-progress]');
   if(image)timeline.fromTo(image,{scale:1.12},{scale:1,ease:'none',duration:1.4},i*1.4);
   if(progress)timeline.fromTo(progress,{scaleX:0},{scaleX:1,ease:'none',duration:1.4},i*1.4);
   if(i>0){
    timeline.set(panel,{autoAlpha:1},i*1.4-.45);
    timeline.to(panel,{clipPath:'inset(0 0 0 0%)',duration:.65,ease:'power2.inOut'},i*1.4-.45);
    if(copy)timeline.fromTo(copy,{y:65,autoAlpha:0},{y:0,autoAlpha:1,duration:.55},i*1.4-.15);
    const previous=panels[i-1];
    if(previous)timeline.set(previous,{autoAlpha:0},i*1.4+.2);
   }
  });
 });
 gsap.utils.toArray<HTMLElement>('[data-cover]').forEach(cover=>{
  const image=cover.querySelector('img');
  const copy=cover.querySelector('.cover-copy');
  if(image)gsap.fromTo(image,{scale:1.06},{scale:1.2,yPercent:10,ease:'none',scrollTrigger:{trigger:cover,start:'top top',end:'bottom top',scrub:1}});
  if(copy)gsap.to(copy,{y:-70,autoAlpha:0,ease:'none',scrollTrigger:{trigger:cover,start:'25% top',end:'bottom top',scrub:.6}});
 });
 mm.add('(min-width: 768px)',()=>{
 gsap.to('.hero-image',{yPercent:12,scale:1.04,ease:'none',scrollTrigger:{trigger:'.hero',start:'top top',end:'bottom top',scrub:1}});
 gsap.utils.toArray<HTMLElement>('[data-scene]').forEach(el=>{
 const image=el.querySelector('img');
 if(image) gsap.fromTo(image,{yPercent:-5,scale:1.08},{yPercent:5,scale:1,ease:'none',scrollTrigger:{trigger:el,start:'top bottom',end:'bottom top',scrub:1}});
 gsap.to(el.querySelector('.manifesto-copy'),{y:-35,ease:'none',scrollTrigger:{trigger:el,start:'top top',end:'+=240',pin:true,scrub:1}});
 });
 });
 return()=>{sequences.forEach(sequence=>sequence.classList.remove('is-enhanced'));};
 });
 },ref.current);
 cleanup=()=>{mm.revert();ctx.revert();};
 ScrollTrigger.refresh();
 });
 return()=>{disposed=true;cleanup?.();};
 },[]);
 return ref;
}
