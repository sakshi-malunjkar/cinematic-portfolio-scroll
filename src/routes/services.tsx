import {createFileRoute} from '@tanstack/react-router';
import {opening,pageHead} from '@/lib/portfolio';
import {SceneSequence} from '@/components/scene-sequence';
import {EnquiryBand,Process} from '@/components/studio';
import {useStory} from '@/hooks/use-story';
export const Route=createFileRoute('/services')({head:()=>pageHead('Our services','Residential interior design, commercial spaces, and styling with FORME Studio. From first concept to finishing touches.'),component:Services});
function Services(){const ref=useStory();return <main ref={ref}><section className="chapter-cover" data-cover><img src={opening} alt="Garden-facing interior with sculptural furnishings" width={1920} height={1088} fetchPriority="high"/><div className="story-shade"/><div className="cover-copy"><p className="eyebrow">The art of making a space</p><h1>Your vision.<br/>Our <em>perspective.</em></h1><p className="story-description">A thoughtful partnership, from the big picture to the smallest detail.</p></div><a href="#expertise" className="cover-cue">Our expertise <span className="scroll-line"/></a></section><div id="expertise"><SceneSequence mode="services"/></div><Process/><EnquiryBand/></main>;}
