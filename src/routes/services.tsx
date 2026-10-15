import {createFileRoute,Link} from '@tanstack/react-router';
import {ArrowUpRight} from 'lucide-react';
import {projects,services,pageHead} from '@/lib/portfolio';
import {EnquiryBand,Process} from '@/components/studio';
import {useStory} from '@/hooks/use-story';
export const Route=createFileRoute('/services')({head:()=>pageHead('Our services','Residential interior design, commercial spaces, and styling with FORME Studio. From first concept to finishing touches.'),component:Services});
function Services(){const ref=useStory();return <main ref={ref}><div className="page-title"><p className="eyebrow">What we do</p><h1>Your vision.<br/>Our <em>perspective.</em></h1><p className="body-copy">A thoughtful partnership, from the big picture to the smallest detail.</p></div>{services.map(([title,description],i)=><section key={title} className="section services-grid border-t border-border"><div data-reveal><p className="eyebrow mb-6">0{i+1}</p><h2 className="section-heading">{title}</h2><p className="body-copy mt-6">{description}</p><p className="body-copy mt-5">{projects[i]?.scope}</p><Link to="/contact" className="text-link mt-8">Discuss your project <ArrowUpRight size={16}/></Link></div><div className="project-image" data-reveal><img src={projects[i]?.image} alt={projects[i]?.alt} width={1536} height={1024} loading="lazy"/></div></section>)}<Process/><EnquiryBand/></main>;}
