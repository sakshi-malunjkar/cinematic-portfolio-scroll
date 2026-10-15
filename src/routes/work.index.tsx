import {createFileRoute} from '@tanstack/react-router';
import {useState} from 'react';
import {projects,pageHead} from '@/lib/portfolio';
import {ProjectCard,EnquiryBand} from '@/components/studio';
import {Button} from '@/components/ui/button';
import {useStory} from '@/hooks/use-story';
export const Route=createFileRoute('/work/')({head:()=>pageHead('Selected work','Explore FORME Studio’s residential, commercial, and styling concept portfolio.'),component:Work});
function Work(){const [filter,setFilter]=useState('All');const ref=useStory();return <main ref={ref}><div className="page-title"><p className="eyebrow">Our portfolio</p><h1>A sense of <em>place.</em></h1><p className="body-copy">Different spaces. A shared belief in thoughtful design.</p></div><section className="section pt-4"><div className="filter-bar" aria-label="Filter projects">{['All','Residential','Commercial','Styling'].map(f=><Button variant={filter===f?'default':'ghost'} key={f} onClick={()=>setFilter(f)} aria-pressed={filter===f}>{f}</Button>)}</div><div className="project-grid">{projects.filter(p=>filter==='All'||p.category===filter).map((p,i)=><ProjectCard project={p} index={i} key={p.slug}/>)}</div><p className="text-xs text-muted-foreground mt-10">All projects are generated design concepts, not completed client work.</p></section><EnquiryBand/></main>;}
