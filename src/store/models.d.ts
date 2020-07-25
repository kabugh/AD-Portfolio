export interface Story {
  title: string;
  shortDescription: string;
  frontImage: string;
  pages: [];
  gallery: JSON;
  slug: string;
}

export interface Service {
  title: string;
  image: string;
  shortIntro: string;
  description: string;
  additionalDescription: string;
  slug: string;
  orientation: string;
  storyLink: string;
  storyPhoto: string;
}

export interface AboutMeDescription {
  title: string;
  subTitle: string;
  description: string;
  image: string;
}
