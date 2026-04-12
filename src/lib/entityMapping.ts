// src/lib/entityMapping.ts

export interface EntityReference {
  name: string;
  wikiUrl?: string;
  wikidataUrl?: string;
}

export const ENTITY_MAP: Record<string, EntityReference> = {
  'nail-art': {
    name: 'Nail Art',
    wikiUrl: 'https://en.wikipedia.org/wiki/Nail_art',
    wikidataUrl: 'https://www.wikidata.org/wiki/Q1568446'
  },
  'christmas': {
    name: 'Christmas',
    wikiUrl: 'https://en.wikipedia.org/wiki/Christmas',
    wikidataUrl: 'https://www.wikidata.org/wiki/Q19809'
  },
  'halloween': {
    name: 'Halloween',
    wikiUrl: 'https://en.wikipedia.org/wiki/Halloween',
    wikidataUrl: 'https://www.wikidata.org/wiki/Q133716'
  },
  'thanksgiving': {
    name: 'Thanksgiving',
    wikiUrl: 'https://en.wikipedia.org/wiki/Thanksgiving',
    wikidataUrl: 'https://www.wikidata.org/wiki/Q13998'
  },
  'valentine': {
    name: "Valentine's Day",
    wikiUrl: 'https://en.wikipedia.org/wiki/Valentine%27s_Day',
    wikidataUrl: 'https://www.wikidata.org/wiki/Q10972'
  },
  'manicure': {
    name: 'Manicure',
    wikiUrl: 'https://en.wikipedia.org/wiki/Manicure',
    wikidataUrl: 'https://www.wikidata.org/wiki/Q583732'
  },
  'gel-polish': {
    name: 'Gel Nail Polish',
    wikiUrl: 'https://en.wikipedia.org/wiki/Gel_polish'
  },
  'acrylic-nails': {
    name: 'Acrylic Nails',
    wikiUrl: 'https://en.wikipedia.org/wiki/Artificial_nails'
  },
  'winter': {
    name: 'Winter',
    wikiUrl: 'https://en.wikipedia.org/wiki/Winter',
    wikidataUrl: 'https://www.wikidata.org/wiki/Q1006'
  },
  'wedding': {
    name: 'Wedding',
    wikiUrl: 'https://en.wikipedia.org/wiki/Wedding',
    wikidataUrl: 'https://www.wikidata.org/wiki/Q235341'
  },
  'beauty': {
    name: 'Beauty',
    wikiUrl: 'https://en.wikipedia.org/wiki/Beauty',
    wikidataUrl: 'https://www.wikidata.org/wiki/Q7242'
  },
  'fashion': {
    name: 'Fashion',
    wikiUrl: 'https://en.wikipedia.org/wiki/Fashion',
    wikidataUrl: 'https://www.wikidata.org/wiki/Q11460'
  },
  'new-year': {
    name: 'New Year',
    wikiUrl: 'https://en.wikipedia.org/wiki/New_Year',
    wikidataUrl: 'https://www.wikidata.org/wiki/Q34812'
  },
  'fall': {
    name: 'Autumn',
    wikiUrl: 'https://en.wikipedia.org/wiki/Autumn',
    wikidataUrl: 'https://www.wikidata.org/wiki/Q1314'
  }
};

export function generateAboutEntities(tags: string[]): any[] {
  return tags
    .filter(tag => {
      const normalizedTag = tag.toLowerCase().replace(/\s+/g, '-');
      return ENTITY_MAP[normalizedTag];
    })
    .map(tag => {
      const normalizedTag = tag.toLowerCase().replace(/\s+/g, '-');
      const entity = ENTITY_MAP[normalizedTag];
      
      const aboutEntity: any = {
        '@type': 'Thing',
        'name': entity.name
      };
      
      const sameAs: string[] = [];
      if (entity.wikiUrl) sameAs.push(entity.wikiUrl);
      if (entity.wikidataUrl) sameAs.push(entity.wikidataUrl);
      
      if (sameAs.length > 0) {
        aboutEntity.sameAs = sameAs;
      }
      
      return aboutEntity;
    });
}

export function addEntity(key: string, entity: EntityReference): void {
  ENTITY_MAP[key] = entity;
}
