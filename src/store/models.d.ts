export interface Story {
  title: string;
  shortDescription: string;
  frontImage: Object;
  pages: [];
  gallery: JSON;
  slug: string;
}

export interface Service {
  title: string;
  image: Object;
  shortIntro: string;
  description: string;
  additionalDescription: string;
  slug: string;
  orientation: string;
  storyLink: string;
  storyPhoto: Object;
}

export interface AboutMeDescription {
  title: string;
  subTitle: string;
  description: string;
  image: Object;
}
