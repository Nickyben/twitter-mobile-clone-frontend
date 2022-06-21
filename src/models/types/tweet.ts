import { IUser } from "./user";

export enum TweetMethod {
  DIRECT = "direct",
  QUOTE = "quote",
  REPLY = "reply",
}

export enum TweetFile {
  IMAGE = "image",
  VIDEO = "video",
  WEBPAGE = "webpage",
  NONE = "none",
}

export interface ITweet {
  _id?: any;
  id?: string;
  tweetMethod: TweetMethod;
  fileType: TweetFile;
  author: Partial<IUser>;
  contentText?: string;
  imageUrls?: Array<string> | null;
  videoUrl?: string;
  webpageUrl?: string;
  likes?: Array<any> | any;
  retweets?: Array<any>;
  tags?: Array<any>;
  quotedTweet?: any;
  parentTweet?: any;
  quotes?: Array<any>;
  replies?: Array<any>;
  likesCount: number;
  retweetsCount: number;
  repliesCount: number;
  updatedAt?: any;
  createdAt?: any;
}
