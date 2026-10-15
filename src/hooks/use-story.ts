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
 const targets=Array.from(root.querySelectorAll<HTMLElement>('[data-reveal], .page-title > *, .intro h2, .intro .body-copy, .contact-layout > div, .contact-form > label, .contact-form > button, .gallery-grid img, .enquiry-circle'));
 targets.filter(el=>!el.parentElement?.closest('[data-reveal]')).forEach((el,i)=>gsap.from(el,{y:55,opacity:0,duration:1.2,delay:(i%3)*.07,ease:'power3.out',scrollTrigger:{trigger:el,start:'top 94%',once:true}}));
 const entry=root.querySelector('.hero-copy, .cover-copy');
 if(entry)gsap.from(entry.children,{y:45,autoAlpha:0,stagger:.13,duration:1.35,ease:'power3.out'});
 gsap.utils.toArray<HTMLElement>('.project-image, .page-photo').forEach(image=>gsap.from(image,{clipPath:'inset(12% 0 12% 0)',duration:1.5,ease:'power3.inOut',scrollTrigger:{trigger:image,start:'top 92%',once:true}}));
 const stacks=Array.from(root.querySelectorAll<HTMLElement>('[data-stack]'));
 stacks.forEach(stack=>{
  stack.classList.add('is-stacking');
  const steps=Array.from(stack.querySelectorAll<HTMLElement>('.process-step'));
  steps.forEach((step,i)=>{
   const next=steps[i+1];
   if(next)gsap.to(step,{scale:.94,y:-16,scrollTrigger:{trigger:next,start:'top 75%',end:'top 22%',scrub:.7}});
   gsap.from(step.children,{y:35,autoAlpha:0,stagger:.12,duration:.9,ease:'power3.out',scrollTrigger:{trigger:step,start:'top 88%',once:true}});
  });
 });
 const sequences=Array.from(root.querySelectorAll<HTMLElement>('[data-sequence]'));
 sequences.forEach(sequence=>{
  const panels=Array.from(sequence.querySelectorAll<HTMLElement>('[data-panel]'));
  sequence.classList.add('is-enhanced');
  panels.forEach((panel,i)=>{if(i>0)gsap.set(panel,{autoAlpha:0,yPercent:100});});
  const timeline=gsap.timeline({scrollTrigger:{trigger:sequence,start:'top top',end:'bottom bottom',scrub:.65,invalidateOnRefresh:true}});
  panels.forEach((panel,i)=>{
   const image=panel.querySelector('.story-image');
   const copy=panel.querySelector('.story-copy');
   const progress=panel.querySelector('[data-progress]');
   if(image)timeline.fromTo(image,{scale:1.12},{scale:1,ease:'none',duration:1.4},i*1.4);
   if(progress)timeline.fromTo(progress,{scaleX:0},{scaleX:1,ease:'none',duration:1.4},i*1.4);
   if(i>0){
    timeline.set(panel,{autoAlpha:1},i*1.4-.45);
    timeline.to(panel,{yPercent:0,duration:.65,ease:'power2.inOut'},i*1.4-.45);
    if(copy)timeline.fromTo(copy.children,{y:55,autoAlpha:0},{y:0,autoAlpha:1,duration:.45,stagger:.06},i*1.4-.15);
    const previous=panels[i-1];
    if(previous){timeline.to(previous,{scale:.93,duration:.65,ease:'power2.inOut'},i*1.4-.45);timeline.set(previous,{autoAlpha:0},i*1.4+.2);}
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
 const hero=root.querySelector('.hero');
 if(hero){
 const image=hero.querySelector('.hero-image');const copy=hero.querySelector('.hero-copy');
 if(image)gsap.to(image,{yPercent:12,scale:1.12,ease:'none',scrollTrigger:{trigger:hero,start:'top top',end:'bottom top',scrub:1}});
 if(copy)gsap.to(copy,{y:100,autoAlpha:0,ease:'none',scrollTrigger:{trigger:hero,start:'20% top',end:'bottom top',scrub:1}});
 }
 gsap.utils.toArray<HTMLElement>('[data-scene]').forEach(el=>{
 const image=el.querySelector('img');
 if(image) gsap.fromTo(image,{yPercent:-5,scale:1.08},{yPercent:5,scale:1,ease:'none',scrollTrigger:{trigger:el,start:'top bottom',end:'bottom top',scrub:1}});
 gsap.to(el.querySelector('.manifesto-copy'),{y:-35,ease:'none',scrollTrigger:{trigger:el,start:'top top',end:'+=240',pin:true,scrub:1}});
 });
 });
 return()=>{sequences.forEach(sequence=>sequence.classList.remove('is-enhanced'));stacks.forEach(stack=>stack.classList.remove('is-stacking'));};
 });
 },ref.current);
 cleanup=()=>{mm.revert();ctx.revert();};
 ScrollTrigger.refresh();
 });
 return()=>{disposed=true;cleanup?.();};
 },[]);
 return ref;
}
