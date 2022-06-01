export interface InterestItem {
  interest: string;
  isSelected: boolean;
}

export interface InterestCategories {
  title: string;
  list: Array<InterestItem>;
}

export const initialInterestCategoriesData: Array<InterestCategories> = [
  {
    title: "Trending on Twitter",
    list: [
      "Nick Iyke",
      "React Native",
      "Peter Obi",
      "Nodejs",
      "Solar System",
      "Tech",
      "Space missions",
      "Elon Musk",
      "Buhari",
      "Nigeria",
      "Canada",
      "NFT",
    ].map((i) => ({ interest: i, isSelected: false })),
  },
  {
    title: "For you",
    list: [
      "Viral Tweets",
      "Nicholas",
      "Ikechukwu",
      "Football",
      "Man Utd",
      "Funny Tweets",
      "Bitcoin",
      "Crypto",
      "Solar System",
      "Tech",
      "Space missions",
      "Elon Musk",
    ].map((i) => ({ interest: i, isSelected: false })),
  },
  {
    title: "Gaming",
    list: [
      "Video games",
      "PlayStation 6",
      "Nickyben",
      "Ikay",
      "NBA",
      "Funny Tweets",
      "Bitcoin",
      "Crypto",
      "Solar System",
      "Tech",
      "Space missions",
      "Elon Musk",
    ].map((i) => ({ interest: i, isSelected: false })),
  },
];
