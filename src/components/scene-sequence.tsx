import {Link} from '@tanstack/react-router';
import {ArrowUpRight} from 'lucide-react';
import {Button} from '@/components/ui/button';
import {projects,services} from '@/lib/portfolio';

export function SceneSequence({mode='work'}:{mode?:'work'|'services'}) {
 return <section className="scene-sequence" data-sequence aria-label={mode==='work'?'Selected concept interiors':'Interior design services'}>
  <div className="scene-stage">
   {projects.map((project,i)=><article className="story-panel" data-panel key={project.slug}>
    <img className="story-image" src={project.image} alt={project.alt} width={1536} height={1024} loading="lazy"/>
    <div className="story-shade"/>
    <div className="scene-label"><span>FORME / {mode==='work'?'Selected spaces':'Our expertise'}</span><span>0{i+1} — 03</span></div>
    <div className="story-copy">
     <p className="eyebrow">{project.category} · Design concept</p>
     <h2>{mode==='work'?project.title:services[i]?.[0]}</h2>
     <p className="story-description">{mode==='work'?project.summary:services[i]?.[1]}</p>
     <Button asChild variant="editorial" className="story-link">{mode==='work'?<Link to="/work/$slug" params={{slug:project.slug}}>Enter this space <ArrowUpRight/></Link>:<Link to="/contact">Discuss your project <ArrowUpRight/></Link>}</Button>
    </div>
    <div className="scene-bottom"><span>{project.material}</span><div className="scene-track"><span data-progress/></div><span>{mode==='work'?'Concept collection':'Design & curation'}</span></div>
   </article>)}
  </div>
 </section>;
}