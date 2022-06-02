export interface InterestItem {
  interest: string;
  isSelected: boolean;
  id:string
}

export interface InterestCategories {
  title: string;
  list: Array<InterestItem>;
}

export interface FollowUser{
 userId: string;
  name: string;
  username: string;
  avatar: string;
  bio: string;
  isVerified:boolean
  isFollowedByMe: boolean;
  isMyFollower: boolean;
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
    ].map((i) => ({ interest: i, isSelected: false, id: i })),
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
    ].map((i) => ({ interest: i, isSelected: false, id: i })),
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
    ].map((i) => ({ interest: i, isSelected: false, id: i })),
  },
];

export const initialSuggestedFollows: Array<FollowUser> = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 0,
].map((_) => ({
  userId: "a very fake user id",
  name: "IK_NICK",
  username: "ikNickyben",
  avatar: "",
  bio: "Fullstack Mobile App Developer • @ManUtd fan • Prospective #SoftwareEngineer • #ReactNative • #TypeScript • #Nodejs •  #Python • #ML• Plays Piano",
  isVerified: true,
  isFollowedByMe: false,
  isMyFollower:false,
})); 