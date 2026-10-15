import opening from '@/assets/studio-opening.jpg';
import residence from '@/assets/quiet-residence.jpg';
import social from '@/assets/atelier-social.jpg';
import collected from '@/assets/collected-home.jpg';
export { opening };
export const projects = [
 {slug:'the-quiet-residence',title:'The Quiet Residence',category:'Residential',image:residence,alt:'Light-filled coastal living room with limestone arches and an olive tree',summary:'A quieter rhythm of living. Natural stone, sculptural furniture, and a seamless connection to the landscape create a home that feels instinctively at ease.',scope:'Spatial planning · Interior design · Furniture selection',material:'Limestone, oak, linen',detail:opening},
 {slug:'atelier-social',title:'Atelier Social',category:'Commercial',image:social,alt:'Restaurant with burgundy banquettes and a green tiled bar',summary:'A place to gather, and a reason to stay. Rich textures and intimate proportions turn a restaurant into a warm, memorable social space.',scope:'Concept design · Hospitality interiors · Lighting',material:'Walnut, glazed tile, brushed metal',detail:collected},
 {slug:'a-collected-home',title:'A Collected Home',category:'Styling',image:collected,alt:'Sculptural dining room with rust-colored chairs and geometric art',summary:'An ongoing conversation between objects, art, and everyday life. A considered collection brings individuality and a little unexpected beauty to the familiar.',scope:'Art direction · Furniture curation · Interior styling',material:'Dark oak, chrome, textured fabric',detail:residence},
];
export function pageHead(title:string, description:string) { return {meta:[{title:`${title} — FORME Studio`},{name:'description',content:description},{property:'og:title',content:`${title} — FORME Studio`},{property:'og:description',content:description},{property:'og:type',content:'website'},{name:'twitter:card',content:'summary_large_image'}]}; }
export const services = [
 ['Residential interiors','Homes that reflect the people within them. From spatial planning to the smallest finishing detail, a thoughtful approach to everyday living.'],
 ['Commercial spaces','Distinctive spaces with purpose and personality. Hospitality, retail, and workplaces shaped around the way people connect.'],
 ['Styling & curation','The final layer that makes a space yours. A considered selection of furniture, lighting, objects, and art.'],
];
export const process = [['Discover','We start with a conversation. Your routines, aspirations, and the way you want a space to feel.'],['Imagine','Ideas take shape through mood, material, and a clear creative direction.'],['Refine','Every proportion and detail is considered, bringing the vision into focus.'],['Realize','Selections, coordination, and finishing touches bring the space to life.']];
