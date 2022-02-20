import { Service/* , MeQuery, NearbyUser, Picture */ } from '../__generated__/graphql/datamodel.gen';

export type IncomingRequest = MeQuery['me']['incomingRequests'][number];

export type Services = Service[];

// export interface ResolvedNearbyUser extends NearbyUser {
//   pictures: ResolvedUserPicture[];
// }

// export interface ResolvedUserPicture extends Picture {
//   downloadURL?: string;
// }

// export interface ResolvedIncomingRequest extends IncomingRequest {
//   fromUser: NearbyUser;
// }

// export type DeepWriteable<T> = { -readonly [P in keyof T]: DeepWriteable<T[P]> };
