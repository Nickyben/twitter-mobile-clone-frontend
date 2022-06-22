export interface IUser {
  username: string;
  email: string;
  phoneNumber: string;
  password: string;
  fullName: string;
  bio?: string;
  location?: string;
  dateOfBirth?: string;
  avatarUrl?: string;
  headerUrl?: string;
  websiteUrl?: string;
  joined: string;
  setting?: any;
  isProfessional?: boolean;
  isVerified?: boolean;
  tweets: Array<any>;
  likes: Array<any>;
  retweets: Array<any>;
  replies: Array<any>;
  followers?: Array<any> | any;
  following?: Array<any> | any;
  followersCount: number;
  followingCount: number;
  lists: Array<any>;
  groups: Array<any>;
  messages: Array<any>;
  notifications: [];
  passwordResetToken?: string;
  passwordResetTokenExpiration?: Date;
  createdAt?: any;
  updatedAt?: any;
  _doc?: any;
}