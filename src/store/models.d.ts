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
  description: string;
  slug: string;
  orientation: string;
}

export interface AboutMeDescription {
  title: string;
  subTitle: string;
  description: string;
}
