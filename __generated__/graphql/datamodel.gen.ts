import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
};

export type ActionResult = {
  readonly __typename?: 'ActionResult';
  readonly reason?: Maybe<Scalars['String']>;
  readonly success: Scalars['Boolean'];
};

export type Admin = {
  readonly __typename?: 'Admin';
  readonly firebaseId: Scalars['String'];
  readonly id: Scalars['ID'];
  readonly isAdmin: Scalars['Boolean'];
};

export type Amount = {
  readonly __typename?: 'Amount';
  readonly amount: Scalars['Float'];
  readonly concept?: Maybe<Scalars['String']>;
  readonly id: Scalars['ID'];
  readonly vat: Scalars['Float'];
};

export type AmountInput = {
  readonly amount: Scalars['Float'];
  readonly concept?: Maybe<Scalars['String']>;
  readonly id?: Maybe<Scalars['ID']>;
  readonly vat: Scalars['Float'];
};

export type Budget = {
  readonly __typename?: 'Budget';
  readonly attendedBy: Scalars['String'];
  readonly client: Client;
  readonly company: Company;
  readonly contact?: Maybe<Contact>;
  readonly creationDate: Scalars['String'];
  readonly id: Scalars['ID'];
  readonly itineraries: ReadonlyArray<Itinerary>;
  readonly metThrough?: Maybe<BudgetMetThrough>;
  readonly readableId: Scalars['String'];
  readonly reference?: Maybe<Scalars['String']>;
  readonly requestSource?: Maybe<BudgetRequestSource>;
  readonly status: BudgetStatus;
  readonly templateBody?: Maybe<Scalars['String']>;
  readonly templateHeading?: Maybe<Scalars['String']>;
  readonly validityPeriodEnd: Scalars['String'];
  readonly validityPeriodStart: Scalars['String'];
};

export type BudgetConfig = {
  readonly __typename?: 'BudgetConfig';
  readonly companies: ReadonlyArray<Company>;
  readonly driverFeatures: ReadonlyArray<ItineraryFeature>;
  readonly metThrough: ReadonlyArray<BudgetMetThrough>;
  readonly requestSource: ReadonlyArray<BudgetRequestSource>;
  readonly status: ReadonlyArray<BudgetStatus>;
  readonly templates: ReadonlyArray<BudgetTemplate>;
  readonly vatTypes: ReadonlyArray<Vat>;
  readonly vehicleFeatures: ReadonlyArray<ItineraryFeature>;
};

export type BudgetMetThrough = {
  readonly __typename?: 'BudgetMetThrough';
  readonly code: Scalars['String'];
  readonly locale: ReadonlyArray<Locale>;
};

export type BudgetRequestSource = {
  readonly __typename?: 'BudgetRequestSource';
  readonly code: Scalars['String'];
  readonly locale: ReadonlyArray<Locale>;
};

export type BudgetStatus = {
  readonly __typename?: 'BudgetStatus';
  readonly code: Scalars['String'];
  readonly locale: ReadonlyArray<Locale>;
};

export type BudgetTemplate = {
  readonly __typename?: 'BudgetTemplate';
  readonly code: Scalars['String'];
  readonly template: Template;
  readonly translation: Scalars['String'];
};

export type CalculatedAmountValue = {
  readonly __typename?: 'CalculatedAmountValue';
  readonly amount: Scalars['Float'];
};

export type CandidateAmount = {
  readonly __typename?: 'CandidateAmount';
  readonly amount: Scalars['Float'];
  readonly concept?: Maybe<Scalars['String']>;
  readonly consult: Scalars['Boolean'];
};

export type Client = {
  readonly __typename?: 'Client';
  readonly alternatePhone?: Maybe<Scalars['String']>;
  readonly communicationLocale?: Maybe<Scalars['String']>;
  readonly email?: Maybe<Scalars['String']>;
  readonly firebaseId?: Maybe<Scalars['String']>;
  readonly hasWebPanelAccount?: Maybe<Scalars['Boolean']>;
  readonly id: Scalars['ID'];
  readonly loginEnabled?: Maybe<Scalars['Boolean']>;
  readonly name?: Maybe<Scalars['String']>;
  readonly nif?: Maybe<Scalars['String']>;
  readonly phone?: Maybe<Scalars['String']>;
  readonly services: ReadonlyArray<Service>;
  readonly volcanoClientId?: Maybe<Scalars['String']>;
  readonly volcanoEmail?: Maybe<Scalars['String']>;
};

export type ClientEmployee = {
  readonly __typename?: 'ClientEmployee';
  readonly createdAt: Scalars['String'];
  readonly email?: Maybe<Scalars['String']>;
  readonly hasWebPanelAccount: Scalars['Boolean'];
  readonly id: Scalars['ID'];
  readonly loginEnabled: Scalars['Boolean'];
  readonly name: Scalars['String'];
  readonly phone?: Maybe<Scalars['String']>;
};

export enum ClientRole {
  Admin = 'ADMIN',
  Employee = 'EMPLOYEE'
}

export type Company = {
  readonly __typename?: 'Company';
  readonly code: CompanyCode;
  readonly data: CompanyData;
};

export enum CompanyCode {
  MiniBusesVipsBarcelona = 'MINI_BUSES_VIPS_BARCELONA',
  MiniVipsCarDrivers = 'MINI_VIPS_CAR_DRIVERS'
}

export type CompanyData = {
  readonly __typename?: 'CompanyData';
  readonly address: Scalars['String'];
  readonly cif: Scalars['String'];
  readonly country: CompanyDataCountry;
  readonly email: Scalars['String'];
  readonly fax: Scalars['String'];
  readonly location: Scalars['String'];
  readonly name: Scalars['String'];
  readonly phone: Scalars['String'];
  readonly region: Scalars['String'];
  readonly web: Scalars['String'];
  readonly zip: Scalars['String'];
};

export type CompanyDataCountry = {
  readonly __typename?: 'CompanyDataCountry';
  readonly enEN: Scalars['String'];
  readonly enUS: Scalars['String'];
  readonly esES: Scalars['String'];
};

export enum ConditionActivationType {
  Bt = 'BT',
  Bteq = 'BTEQ',
  Eq = 'EQ',
  Lt = 'LT',
  Lteq = 'LTEQ'
}

export enum ConditionAllowedServiceType {
  Dis = 'DIS',
  Tr = 'TR'
}

export enum ConditionSwitchSubject {
  Service = 'SERVICE',
  Vehicle = 'VEHICLE'
}

export enum ConditionType {
  Distance = 'DISTANCE',
  Location = 'LOCATION',
  Switch = 'SWITCH',
  Time = 'TIME',
  Value = 'VALUE',
  Vehicle = 'VEHICLE'
}

export type Contact = {
  readonly __typename?: 'Contact';
  readonly email?: Maybe<Scalars['String']>;
  readonly id: Scalars['ID'];
  readonly name: Scalars['String'];
  readonly phone?: Maybe<Scalars['String']>;
};

export type ContactInput = {
  readonly email?: Maybe<Scalars['String']>;
  readonly id?: Maybe<Scalars['ID']>;
  readonly name?: Maybe<Scalars['String']>;
  readonly phone?: Maybe<Scalars['String']>;
};

export enum CountryLocales {
  EsEs = 'esES'
}

export type DeleteResult = {
  readonly __typename?: 'DeleteResult';
  readonly deleted: Scalars['Boolean'];
  readonly reason?: Maybe<Scalars['String']>;
};

export type DepartureOrArrival = {
  readonly __typename?: 'DepartureOrArrival';
  readonly address?: Maybe<Scalars['String']>;
  readonly date?: Maybe<Scalars['String']>;
  readonly lat?: Maybe<Scalars['Float']>;
  readonly lon?: Maybe<Scalars['Float']>;
  readonly time?: Maybe<Scalars['String']>;
};

export type DepartureOrArrivalInput = {
  readonly city?: Maybe<Scalars['String']>;
  readonly isAirport?: Maybe<Scalars['Boolean']>;
  readonly latitude: Scalars['Float'];
  readonly longitude: Scalars['Float'];
};

export type Driver = {
  readonly __typename?: 'Driver';
  readonly alternatePhone?: Maybe<Scalars['String']>;
  readonly communicationLocale?: Maybe<Scalars['String']>;
  readonly drivingCompany?: Maybe<DrivingCompany>;
  readonly email?: Maybe<Scalars['String']>;
  readonly firebaseId?: Maybe<Scalars['String']>;
  readonly hasLoginCredentials?: Maybe<Scalars['Boolean']>;
  readonly id?: Maybe<Scalars['ID']>;
  readonly inPrisma?: Maybe<Scalars['Boolean']>;
  readonly inVolcano?: Maybe<Scalars['Boolean']>;
  readonly location?: Maybe<Location>;
  readonly loginEnabled?: Maybe<Scalars['Boolean']>;
  readonly loginMethod?: Maybe<LoginMethod>;
  readonly name?: Maybe<Scalars['String']>;
  readonly notificationsToken?: Maybe<Scalars['String']>;
  readonly phone?: Maybe<Scalars['String']>;
  readonly profilePicURI?: Maybe<Scalars['String']>;
  readonly providerId?: Maybe<Scalars['ID']>;
  readonly received?: Maybe<Scalars['Boolean']>;
  readonly services: ReadonlyArray<Service>;
  readonly status?: Maybe<Scalars['String']>;
  readonly type?: Maybe<Scalars['String']>;
  readonly volcanoDriverId?: Maybe<Scalars['String']>;
  readonly volcanoEmail?: Maybe<Scalars['String']>;
};

export type DrivingCompany = {
  readonly __typename?: 'DrivingCompany';
  readonly drivers: ReadonlyArray<Driver>;
  readonly email?: Maybe<Scalars['String']>;
  readonly id: Scalars['ID'];
  readonly name?: Maybe<Scalars['String']>;
  readonly phone?: Maybe<Scalars['String']>;
  readonly volcanoId?: Maybe<Scalars['String']>;
};

export type FrontendVersion = {
  readonly __typename?: 'FrontendVersion';
  readonly version: Scalars['String'];
};

export type FulfillingCondition = {
  readonly __typename?: 'FulfillingCondition';
  readonly conditionActivation?: Maybe<Scalars['String']>;
  readonly conditionType: Scalars['String'];
  readonly description?: Maybe<Scalars['String']>;
  readonly id: Scalars['ID'];
  readonly name: Scalars['String'];
  readonly threshold?: Maybe<Scalars['Float']>;
};

export type Itinerary = {
  readonly __typename?: 'Itinerary';
  readonly amounts: ReadonlyArray<Amount>;
  readonly arrivalAddress?: Maybe<Scalars['String']>;
  readonly arrivalCity?: Maybe<Scalars['String']>;
  readonly arrivalDate: Scalars['String'];
  readonly arrivalLat: Scalars['Float'];
  readonly arrivalLon: Scalars['Float'];
  readonly arrivalTime: Scalars['String'];
  readonly arrivalType?: Maybe<Scalars['String']>;
  readonly departureAddress?: Maybe<Scalars['String']>;
  readonly departureCity?: Maybe<Scalars['String']>;
  readonly departureDate: Scalars['String'];
  readonly departureLat: Scalars['Float'];
  readonly departureLon: Scalars['Float'];
  readonly departureTime: Scalars['String'];
  readonly departureType?: Maybe<Scalars['String']>;
  readonly dinner: Scalars['Boolean'];
  readonly driverFeatures: ReadonlyArray<ItineraryFeature>;
  readonly flightNumber?: Maybe<Scalars['String']>;
  readonly groupName?: Maybe<Scalars['String']>;
  readonly hours?: Maybe<Scalars['Int']>;
  readonly id: Scalars['ID'];
  readonly itineraryDescription: Scalars['String'];
  readonly notes?: Maybe<Scalars['String']>;
  readonly numPassengers?: Maybe<Scalars['Int']>;
  readonly numVehicles?: Maybe<Scalars['Int']>;
  readonly presentationTime: Scalars['String'];
  readonly realized: Scalars['Boolean'];
  readonly reference?: Maybe<Scalars['String']>;
  readonly serviceTypeId: Scalars['String'];
  readonly vehicleBrandId?: Maybe<Scalars['String']>;
  readonly vehicleFeatures: ReadonlyArray<ItineraryFeature>;
  readonly vehicleModelId?: Maybe<Scalars['String']>;
  readonly vehicleTypeId?: Maybe<Scalars['String']>;
};

export type ItineraryFeature = {
  readonly __typename?: 'ItineraryFeature';
  readonly description: Scalars['String'];
  readonly id: Scalars['ID'];
  readonly required: Scalars['Boolean'];
};

export type ItineraryFeatureInput = {
  readonly description: Scalars['String'];
  readonly id?: Maybe<Scalars['ID']>;
  readonly required: Scalars['Boolean'];
};

export type ItineraryInput = {
  readonly amounts?: Maybe<ReadonlyArray<AmountInput>>;
  readonly arrivalAddress?: Maybe<Scalars['String']>;
  readonly arrivalCity?: Maybe<Scalars['String']>;
  readonly arrivalLat?: Maybe<Scalars['Float']>;
  readonly arrivalLon?: Maybe<Scalars['Float']>;
  readonly arrivalTime: Scalars['String'];
  readonly arrivalType?: Maybe<Scalars['String']>;
  readonly departureAddress?: Maybe<Scalars['String']>;
  readonly departureArrivalDate: ReadonlyArray<Scalars['String']>;
  readonly departureCity?: Maybe<Scalars['String']>;
  readonly departureLat?: Maybe<Scalars['Float']>;
  readonly departureLon?: Maybe<Scalars['Float']>;
  readonly departureTime: Scalars['String'];
  readonly departureType?: Maybe<Scalars['String']>;
  readonly dinner?: Maybe<Scalars['Boolean']>;
  readonly driverFeatures?: Maybe<ReadonlyArray<ItineraryFeatureInput>>;
  readonly flightNumber?: Maybe<Scalars['String']>;
  readonly groupName?: Maybe<Scalars['String']>;
  readonly hours?: Maybe<Scalars['Int']>;
  readonly id?: Maybe<Scalars['ID']>;
  readonly itineraryDescription?: Maybe<Scalars['String']>;
  readonly notes?: Maybe<Scalars['String']>;
  readonly numPassengers?: Maybe<Scalars['Int']>;
  readonly numVehicles?: Maybe<Scalars['Int']>;
  readonly presentationTime: Scalars['String'];
  readonly reference?: Maybe<Scalars['String']>;
  readonly serviceTypeId: Scalars['String'];
  readonly vehicleBrandId?: Maybe<Scalars['String']>;
  readonly vehicleFeatures?: Maybe<ReadonlyArray<ItineraryFeatureInput>>;
  readonly vehicleModelId?: Maybe<Scalars['String']>;
  readonly vehicleTypeId: Scalars['String'];
};

export type Locale = {
  readonly __typename?: 'Locale';
  readonly code: CountryLocales;
  readonly value: Scalars['String'];
};

export type Location = {
  readonly __typename?: 'Location';
  readonly latitude?: Maybe<Scalars['String']>;
  readonly longitude?: Maybe<Scalars['String']>;
};

export type LocationWhereInput = {
  readonly AND?: Maybe<ReadonlyArray<LocationWhereInput>>;
  readonly NOT?: Maybe<ReadonlyArray<LocationWhereInput>>;
  readonly OR?: Maybe<ReadonlyArray<LocationWhereInput>>;
  readonly driver?: Maybe<PDriverWhereInput>;
  readonly id?: Maybe<Scalars['ID']>;
  readonly id_contains?: Maybe<Scalars['ID']>;
  readonly id_ends_with?: Maybe<Scalars['ID']>;
  readonly id_gt?: Maybe<Scalars['ID']>;
  readonly id_gte?: Maybe<Scalars['ID']>;
  readonly id_in?: Maybe<ReadonlyArray<Scalars['ID']>>;
  readonly id_lt?: Maybe<Scalars['ID']>;
  readonly id_lte?: Maybe<Scalars['ID']>;
  readonly id_not?: Maybe<Scalars['ID']>;
  readonly id_not_contains?: Maybe<Scalars['ID']>;
  readonly id_not_ends_with?: Maybe<Scalars['ID']>;
  readonly id_not_in?: Maybe<ReadonlyArray<Scalars['ID']>>;
  readonly id_not_starts_with?: Maybe<Scalars['ID']>;
  readonly id_starts_with?: Maybe<Scalars['ID']>;
  readonly latitude?: Maybe<Scalars['Float']>;
  readonly latitude_gt?: Maybe<Scalars['Float']>;
  readonly latitude_gte?: Maybe<Scalars['Float']>;
  readonly latitude_in?: Maybe<ReadonlyArray<Scalars['Float']>>;
  readonly latitude_lt?: Maybe<Scalars['Float']>;
  readonly latitude_lte?: Maybe<Scalars['Float']>;
  readonly latitude_not?: Maybe<Scalars['Float']>;
  readonly latitude_not_in?: Maybe<ReadonlyArray<Scalars['Float']>>;
  readonly longitude?: Maybe<Scalars['Float']>;
  readonly longitude_gt?: Maybe<Scalars['Float']>;
  readonly longitude_gte?: Maybe<Scalars['Float']>;
  readonly longitude_in?: Maybe<ReadonlyArray<Scalars['Float']>>;
  readonly longitude_lt?: Maybe<Scalars['Float']>;
  readonly longitude_lte?: Maybe<Scalars['Float']>;
  readonly longitude_not?: Maybe<Scalars['Float']>;
  readonly longitude_not_in?: Maybe<ReadonlyArray<Scalars['Float']>>;
};

export enum LoginMethod {
  Email = 'EMAIL',
  Phone = 'PHONE'
}

export type Mutation = {
  readonly __typename?: 'Mutation';
  readonly cancelService: ActionResult;
  readonly confirmItinerary: Itinerary;
  readonly connectMainDriverToService: Service;
  readonly createAdmin: Admin;
  readonly createBudget: Budget;
  readonly createClient: PUser;
  readonly createClientEmployee: ClientEmployee;
  readonly createClientRate: Rate;
  readonly createDriver?: Maybe<Driver>;
  readonly createPassenger?: Maybe<Passenger>;
  readonly createService?: Maybe<Service>;
  readonly createVehicleBrand: VehicleBrandModels;
  readonly createVehicleModel: VehicleModel;
  readonly createVehiclePriceCondition: VehiclePriceCondition;
  readonly createVehiclePriceVariable: VehiclePriceVariable;
  readonly deleteClient: DeleteResult;
  readonly deleteClientEmployee: DeleteResult;
  readonly deleteDriver: DeleteResult;
  readonly deleteVehicleBrand: DeleteResult;
  readonly deleteVehicleModel: DeleteResult;
  readonly deleteVehiclePriceCondition: DeleteResult;
  readonly deleteVehiclePriceVariable: DeleteResult;
  readonly editService: Service;
  readonly giveDriverAccessToApp: Driver;
  readonly removePassenger: Passenger;
  readonly sendNotificationToServiceDriver: NotificationSendStatus;
  readonly sendPasswordResetEmail: ActionResult;
  readonly updateBudget: Budget;
  readonly updateClient: Client;
  readonly updateClientEmployee: ClientEmployee;
  readonly updateDriver: Driver;
  readonly updatePassenger: Passenger;
  readonly updateServiceSubtype: ServiceSubtype;
  readonly updateVehicleBrand: VehicleBrandModels;
  readonly updateVehicleModel: VehicleModel;
  readonly updateVehiclePriceCondition: VehiclePriceCondition;
  readonly updateVehiclePriceVariable: VehiclePriceVariable;
};


export type MutationCancelServiceArgs = {
  id: Scalars['ID'];
  reason?: Maybe<Scalars['String']>;
};


export type MutationConfirmItineraryArgs = {
  id: Scalars['String'];
};


export type MutationConnectMainDriverToServiceArgs = {
  driverId: Scalars['String'];
  serviceId: Scalars['String'];
};


export type MutationCreateAdminArgs = {
  email: Scalars['String'];
  name: Scalars['String'];
  password: Scalars['String'];
};


export type MutationCreateBudgetArgs = {
  client: Scalars['String'];
  company: Scalars['String'];
  contact?: Maybe<ContactInput>;
  creationDate: Scalars['String'];
  itineraries?: Maybe<ReadonlyArray<ItineraryInput>>;
  metThrough?: Maybe<Scalars['String']>;
  reference?: Maybe<Scalars['String']>;
  requestSource?: Maybe<Scalars['String']>;
  status: Scalars['String'];
  templateBody?: Maybe<Scalars['String']>;
  templateHeading?: Maybe<Scalars['String']>;
  validityPeriodEnd: Scalars['String'];
  validityPeriodStart: Scalars['String'];
};


export type MutationCreateClientArgs = {
  email: Scalars['String'];
  id?: Maybe<Scalars['ID']>;
  password: Scalars['String'];
};


export type MutationCreateClientEmployeeArgs = {
  email: Scalars['String'];
  name: Scalars['String'];
  password: Scalars['String'];
  phone?: Maybe<Scalars['String']>;
};


export type MutationCreateClientRateArgs = {
  id: Scalars['ID'];
};


export type MutationCreateDriverArgs = {
  drivingCompanyId?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  loginMethod?: Maybe<LoginMethod>;
  name?: Maybe<Scalars['String']>;
  notificationsToken?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  profilePicURI?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  volcanoDriverId?: Maybe<Scalars['String']>;
};


export type MutationCreatePassengerArgs = {
  email: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
};


export type MutationCreateServiceArgs = {
  arrivalAddress?: Maybe<Scalars['String']>;
  arrivalDate: Scalars['String'];
  arrivalLat?: Maybe<Scalars['Float']>;
  arrivalLon?: Maybe<Scalars['Float']>;
  arrivalTime: Scalars['String'];
  clientId?: Maybe<Scalars['String']>;
  departureAddress?: Maybe<Scalars['String']>;
  departureDate: Scalars['String'];
  departureLat?: Maybe<Scalars['Float']>;
  departureLon?: Maybe<Scalars['Float']>;
  departureTime: Scalars['String'];
  description: Scalars['String'];
  flightNumber?: Maybe<Scalars['String']>;
  groupName?: Maybe<Scalars['String']>;
  groupOwner?: Maybe<Scalars['String']>;
  mainDriverId?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  numOfPassengers?: Scalars['Int'];
  passengers?: Maybe<ReadonlyArray<Scalars['String']>>;
  presentationTime: Scalars['String'];
  reference?: Maybe<Scalars['String']>;
  secondaryDriverId?: Maybe<Scalars['String']>;
  type: Scalars['String'];
  vehicleId?: Maybe<Scalars['String']>;
};


export type MutationCreateVehicleBrandArgs = {
  name: Scalars['String'];
};


export type MutationCreateVehicleModelArgs = {
  id: Scalars['ID'];
  name: Scalars['String'];
};


export type MutationCreateVehiclePriceConditionArgs = {
  clientId?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  numPassengers?: Maybe<Scalars['Int']>;
  price: Scalars['Float'];
  serviceSubtypeId: Scalars['ID'];
  vehicleBrandId?: Maybe<Scalars['String']>;
  vehicleModelId?: Maybe<Scalars['String']>;
  vehicleTypeId?: Maybe<Scalars['String']>;
};


export type MutationCreateVehiclePriceVariableArgs = {
  airportPrice?: Maybe<Scalars['Float']>;
  clientId?: Maybe<Scalars['String']>;
  extraHourPrice?: Maybe<Scalars['Float']>;
  extraKmPrice?: Maybe<Scalars['Float']>;
  extraTollPrice?: Maybe<Scalars['Float']>;
  numPassengers?: Maybe<Scalars['Int']>;
  parkingMontserratPrice?: Maybe<Scalars['Float']>;
  rateId: Scalars['ID'];
  vehicleBrandId?: Maybe<Scalars['String']>;
  vehicleModelId?: Maybe<Scalars['String']>;
  vehicleTypeId?: Maybe<Scalars['String']>;
};


export type MutationDeleteClientArgs = {
  id?: Maybe<Scalars['ID']>;
};


export type MutationDeleteClientEmployeeArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteDriverArgs = {
  id?: Maybe<Scalars['ID']>;
};


export type MutationDeleteVehicleBrandArgs = {
  id: Scalars['String'];
};


export type MutationDeleteVehicleModelArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteVehiclePriceConditionArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteVehiclePriceVariableArgs = {
  id: Scalars['ID'];
};


export type MutationEditServiceArgs = {
  arrivalAddress?: Maybe<Scalars['String']>;
  arrivalDate?: Maybe<Scalars['String']>;
  arrivalLat?: Maybe<Scalars['Float']>;
  arrivalLon?: Maybe<Scalars['Float']>;
  arrivalTime?: Maybe<Scalars['String']>;
  departureAddress?: Maybe<Scalars['String']>;
  departureDate?: Maybe<Scalars['String']>;
  departureLat?: Maybe<Scalars['Float']>;
  departureLon?: Maybe<Scalars['Float']>;
  departureTime?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  mainDriverId?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  numOfPassengers?: Maybe<Scalars['Int']>;
  passengers?: Maybe<ReadonlyArray<Scalars['String']>>;
  presentationTime?: Maybe<Scalars['String']>;
  secondaryDriverId?: Maybe<Scalars['String']>;
  vehicleId?: Maybe<Scalars['String']>;
  volcanoServiceId: Scalars['String'];
};


export type MutationGiveDriverAccessToAppArgs = {
  email: Scalars['String'];
  id: Scalars['ID'];
  password: Scalars['String'];
};


export type MutationRemovePassengerArgs = {
  email: Scalars['String'];
};


export type MutationSendNotificationToServiceDriverArgs = {
  notificationBody: Scalars['String'];
  notificationData?: Maybe<Scalars['String']>;
  notificationOptions?: Maybe<Scalars['String']>;
  notificationTitle: Scalars['String'];
  serviceId: Scalars['String'];
};


export type MutationSendPasswordResetEmailArgs = {
  id: Scalars['ID'];
};


export type MutationUpdateBudgetArgs = {
  client: Scalars['String'];
  company: Scalars['String'];
  contact?: Maybe<ContactInput>;
  creationDate: Scalars['String'];
  id: Scalars['ID'];
  itineraries?: Maybe<ReadonlyArray<ItineraryInput>>;
  metThrough?: Maybe<Scalars['String']>;
  reference?: Maybe<Scalars['String']>;
  requestSource?: Maybe<Scalars['String']>;
  status: Scalars['String'];
  templateBody?: Maybe<Scalars['String']>;
  templateHeading?: Maybe<Scalars['String']>;
  validityPeriodEnd: Scalars['String'];
  validityPeriodStart: Scalars['String'];
};


export type MutationUpdateClientArgs = {
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  loginEnabled?: Maybe<Scalars['Boolean']>;
  password?: Maybe<Scalars['String']>;
  volcanoClientId?: Maybe<Scalars['String']>;
};


export type MutationUpdateClientEmployeeArgs = {
  data: UpdateClientEmployeeInput;
  id: Scalars['ID'];
};


export type MutationUpdateDriverArgs = {
  communicationLocale?: Maybe<Scalars['String']>;
  disableLogin?: Maybe<Scalars['Boolean']>;
  drivingCompanyId?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  latitude?: Maybe<Scalars['Float']>;
  loginMethod?: Maybe<LoginMethod>;
  longitude?: Maybe<Scalars['Float']>;
  name?: Maybe<Scalars['String']>;
  notificationsToken?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  profilePicURI?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  volcanoDriverId?: Maybe<Scalars['String']>;
};


export type MutationUpdatePassengerArgs = {
  email?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  phone?: Maybe<Scalars['String']>;
};


export type MutationUpdateServiceSubtypeArgs = {
  clientId?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  distanceInMeters?: Maybe<Scalars['Float']>;
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
};


export type MutationUpdateVehicleBrandArgs = {
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
};


export type MutationUpdateVehicleModelArgs = {
  id: Scalars['ID'];
  name: Scalars['String'];
};


export type MutationUpdateVehiclePriceConditionArgs = {
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  numPassengers?: Maybe<Scalars['Int']>;
  price?: Maybe<Scalars['Float']>;
  vehicleBrandId?: Maybe<Scalars['String']>;
  vehicleModelId?: Maybe<Scalars['String']>;
  vehicleTypeId?: Maybe<Scalars['String']>;
};


export type MutationUpdateVehiclePriceVariableArgs = {
  airportPrice?: Maybe<Scalars['Float']>;
  extraHourPrice?: Maybe<Scalars['Float']>;
  extraKmPrice?: Maybe<Scalars['Float']>;
  extraTollPrice?: Maybe<Scalars['Float']>;
  id: Scalars['ID'];
  numPassengers?: Maybe<Scalars['Int']>;
  parkingMontserratPrice?: Maybe<Scalars['Float']>;
  vehicleBrandId?: Maybe<Scalars['String']>;
  vehicleModelId?: Maybe<Scalars['String']>;
  vehicleTypeId?: Maybe<Scalars['String']>;
};

export type NotificationSendStatus = {
  readonly __typename?: 'NotificationSendStatus';
  readonly sent: Scalars['Boolean'];
};

export type PAmount = {
  readonly __typename?: 'PAmount';
  readonly amount: Scalars['Float'];
  readonly concept?: Maybe<Scalars['String']>;
  readonly createdAt: Scalars['DateTime'];
  readonly id: Scalars['ID'];
  readonly itinerary: PItinerary;
  readonly updatedAt: Scalars['DateTime'];
  readonly vat: Scalars['Float'];
};

export enum PAmountOrderByInput {
  AmountAsc = 'amount_ASC',
  AmountDesc = 'amount_DESC',
  ConceptAsc = 'concept_ASC',
  ConceptDesc = 'concept_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  VatAsc = 'vat_ASC',
  VatDesc = 'vat_DESC'
}

export type PAmountWhereInput = {
  readonly AND?: Maybe<ReadonlyArray<PAmountWhereInput>>;
  readonly NOT?: Maybe<ReadonlyArray<PAmountWhereInput>>;
  readonly OR?: Maybe<ReadonlyArray<PAmountWhereInput>>;
  readonly amount?: Maybe<Scalars['Float']>;
  readonly amount_gt?: Maybe<Scalars['Float']>;
  readonly amount_gte?: Maybe<Scalars['Float']>;
  readonly amount_in?: Maybe<ReadonlyArray<Scalars['Float']>>;
  readonly amount_lt?: Maybe<Scalars['Float']>;
  readonly amount_lte?: Maybe<Scalars['Float']>;
  readonly amount_not?: Maybe<Scalars['Float']>;
  readonly amount_not_in?: Maybe<ReadonlyArray<Scalars['Float']>>;
  readonly concept?: Maybe<Scalars['String']>;
  readonly concept_contains?: Maybe<Scalars['String']>;
  readonly concept_ends_with?: Maybe<Scalars['String']>;
  readonly concept_gt?: Maybe<Scalars['String']>;
  readonly concept_gte?: Maybe<Scalars['String']>;
  readonly concept_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  readonly concept_lt?: Maybe<Scalars['String']>;
  readonly concept_lte?: Maybe<Scalars['String']>;
  readonly concept_not?: Maybe<Scalars['String']>;
  readonly concept_not_contains?: Maybe<Scalars['String']>;
  readonly concept_not_ends_with?: Maybe<Scalars['String']>;
  readonly concept_not_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  readonly concept_not_starts_with?: Maybe<Scalars['String']>;
  readonly concept_starts_with?: Maybe<Scalars['String']>;
  readonly createdAt?: Maybe<Scalars['DateTime']>;
  readonly createdAt_gt?: Maybe<Scalars['DateTime']>;
  readonly createdAt_gte?: Maybe<Scalars['DateTime']>;
  readonly createdAt_in?: Maybe<ReadonlyArray<Scalars['DateTime']>>;
  readonly createdAt_lt?: Maybe<Scalars['DateTime']>;
  readonly createdAt_lte?: Maybe<Scalars['DateTime']>;
  readonly createdAt_not?: Maybe<Scalars['DateTime']>;
  readonly createdAt_not_in?: Maybe<ReadonlyArray<Scalars['DateTime']>>;
  readonly id?: Maybe<Scalars['ID']>;
  readonly id_contains?: Maybe<Scalars['ID']>;
  readonly id_ends_with?: Maybe<Scalars['ID']>;
  readonly id_gt?: Maybe<Scalars['ID']>;
  readonly id_gte?: Maybe<Scalars['ID']>;
  readonly id_in?: Maybe<ReadonlyArray<Scalars['ID']>>;
  readonly id_lt?: Maybe<Scalars['ID']>;
  readonly id_lte?: Maybe<Scalars['ID']>;
  readonly id_not?: Maybe<Scalars['ID']>;
  readonly id_not_contains?: Maybe<Scalars['ID']>;
  readonly id_not_ends_with?: Maybe<Scalars['ID']>;
  readonly id_not_in?: Maybe<ReadonlyArray<Scalars['ID']>>;
  readonly id_not_starts_with?: Maybe<Scalars['ID']>;
  readonly id_starts_with?: Maybe<Scalars['ID']>;
  readonly itinerary?: Maybe<PItineraryWhereInput>;
  readonly updatedAt?: Maybe<Scalars['DateTime']>;
  readonly updatedAt_gt?: Maybe<Scalars['DateTime']>;
  readonly updatedAt_gte?: Maybe<Scalars['DateTime']>;
  readonly updatedAt_in?: Maybe<ReadonlyArray<Scalars['DateTime']>>;
  readonly updatedAt_lt?: Maybe<Scalars['DateTime']>;
  readonly updatedAt_lte?: Maybe<Scalars['DateTime']>;
  readonly updatedAt_not?: Maybe<Scalars['DateTime']>;
  readonly updatedAt_not_in?: Maybe<ReadonlyArray<Scalars['DateTime']>>;
  readonly vat?: Maybe<Scalars['Float']>;
  readonly vat_gt?: Maybe<Scalars['Float']>;
  readonly vat_gte?: Maybe<Scalars['Float']>;
  readonly vat_in?: Maybe<ReadonlyArray<Scalars['Float']>>;
  readonly vat_lt?: Maybe<Scalars['Float']>;
  readonly vat_lte?: Maybe<Scalars['Float']>;
  readonly vat_not?: Maybe<Scalars['Float']>;
  readonly vat_not_in?: Maybe<ReadonlyArray<Scalars['Float']>>;
};

export type PBudget = {
  readonly __typename?: 'PBudget';
  readonly client: PUser;
  readonly company: Scalars['String'];
  readonly contact?: Maybe<PContact>;
  readonly createdAt: Scalars['DateTime'];
  readonly creationDate: Scalars['DateTime'];
  readonly creator: PUser;
  readonly id: Scalars['ID'];
  readonly itineraries?: Maybe<ReadonlyArray<PItinerary>>;
  readonly metThrough?: Maybe<Scalars['String']>;
  readonly readableId: Scalars['String'];
  readonly reference?: Maybe<Scalars['String']>;
  readonly requestSource?: Maybe<Scalars['String']>;
  readonly status: Scalars['String'];
  readonly templateBody?: Maybe<Scalars['String']>;
  readonly templateHeading?: Maybe<Scalars['String']>;
  readonly updatedAt: Scalars['DateTime'];
  readonly validityPeriodEnd: Scalars['DateTime'];
  readonly validityPeriodStart: Scalars['DateTime'];
};


export type PBudgetItinerariesArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<PItineraryOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<PItineraryWhereInput>;
};

export enum PBudgetOrderByInput {
  CompanyAsc = 'company_ASC',
  CompanyDesc = 'company_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  CreationDateAsc = 'creationDate_ASC',
  CreationDateDesc = 'creationDate_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  MetThroughAsc = 'metThrough_ASC',
  MetThroughDesc = 'metThrough_DESC',
  ReadableIdAsc = 'readableId_ASC',
  ReadableIdDesc = 'readableId_DESC',
  ReferenceAsc = 'reference_ASC',
  ReferenceDesc = 'reference_DESC',
  RequestSourceAsc = 'requestSource_ASC',
  RequestSourceDesc = 'requestSource_DESC',
  StatusAsc = 'status_ASC',
  StatusDesc = 'status_DESC',
  TemplateBodyAsc = 'templateBody_ASC',
  TemplateBodyDesc = 'templateBody_DESC',
  TemplateHeadingAsc = 'templateHeading_ASC',
  TemplateHeadingDesc = 'templateHeading_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  ValidityPeriodEndAsc = 'validityPeriodEnd_ASC',
  ValidityPeriodEndDesc = 'validityPeriodEnd_DESC',
  ValidityPeriodStartAsc = 'validityPeriodStart_ASC',
  ValidityPeriodStartDesc = 'validityPeriodStart_DESC'
}

export type PBudgetWhereInput = {
  readonly AND?: Maybe<ReadonlyArray<PBudgetWhereInput>>;
  readonly NOT?: Maybe<ReadonlyArray<PBudgetWhereInput>>;
  readonly OR?: Maybe<ReadonlyArray<PBudgetWhereInput>>;
  readonly client?: Maybe<PUserWhereInput>;
  readonly company?: Maybe<Scalars['String']>;
  readonly company_contains?: Maybe<Scalars['String']>;
  readonly company_ends_with?: Maybe<Scalars['String']>;
  readonly company_gt?: Maybe<Scalars['String']>;
  readonly company_gte?: Maybe<Scalars['String']>;
  readonly company_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  readonly company_lt?: Maybe<Scalars['String']>;
  readonly company_lte?: Maybe<Scalars['String']>;
  readonly company_not?: Maybe<Scalars['String']>;
  readonly company_not_contains?: Maybe<Scalars['String']>;
  readonly company_not_ends_with?: Maybe<Scalars['String']>;
  readonly company_not_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  readonly company_not_starts_with?: Maybe<Scalars['String']>;
  readonly company_starts_with?: Maybe<Scalars['String']>;
  readonly contact?: Maybe<PContactWhereInput>;
  readonly createdAt?: Maybe<Scalars['DateTime']>;
  readonly createdAt_gt?: Maybe<Scalars['DateTime']>;
  readonly createdAt_gte?: Maybe<Scalars['DateTime']>;
  readonly createdAt_in?: Maybe<ReadonlyArray<Scalars['DateTime']>>;
  readonly createdAt_lt?: Maybe<Scalars['DateTime']>;
  readonly createdAt_lte?: Maybe<Scalars['DateTime']>;
  readonly createdAt_not?: Maybe<Scalars['DateTime']>;
  readonly createdAt_not_in?: Maybe<ReadonlyArray<Scalars['DateTime']>>;
  readonly creationDate?: Maybe<Scalars['DateTime']>;
  readonly creationDate_gt?: Maybe<Scalars['DateTime']>;
  readonly creationDate_gte?: Maybe<Scalars['DateTime']>;
  readonly creationDate_in?: Maybe<ReadonlyArray<Scalars['DateTime']>>;
  readonly creationDate_lt?: Maybe<Scalars['DateTime']>;
  readonly creationDate_lte?: Maybe<Scalars['DateTime']>;
  readonly creationDate_not?: Maybe<Scalars['DateTime']>;
  readonly creationDate_not_in?: Maybe<ReadonlyArray<Scalars['DateTime']>>;
  readonly creator?: Maybe<PUserWhereInput>;
  readonly id?: Maybe<Scalars['ID']>;
  readonly id_contains?: Maybe<Scalars['ID']>;
  readonly id_ends_with?: Maybe<Scalars['ID']>;
  readonly id_gt?: Maybe<Scalars['ID']>;
  readonly id_gte?: Maybe<Scalars['ID']>;
  readonly id_in?: Maybe<ReadonlyArray<Scalars['ID']>>;
  readonly id_lt?: Maybe<Scalars['ID']>;
  readonly id_lte?: Maybe<Scalars['ID']>;
  readonly id_not?: Maybe<Scalars['ID']>;
  readonly id_not_contains?: Maybe<Scalars['ID']>;
  readonly id_not_ends_with?: Maybe<Scalars['ID']>;
  readonly id_not_in?: Maybe<ReadonlyArray<Scalars['ID']>>;
  readonly id_not_starts_with?: Maybe<Scalars['ID']>;
  readonly id_starts_with?: Maybe<Scalars['ID']>;
  readonly itineraries_every?: Maybe<PItineraryWhereInput>;
  readonly itineraries_none?: Maybe<PItineraryWhereInput>;
  readonly itineraries_some?: Maybe<PItineraryWhereInput>;
  readonly metThrough?: Maybe<Scalars['String']>;
  readonly metThrough_contains?: Maybe<Scalars['String']>;
  readonly metThrough_ends_with?: Maybe<Scalars['String']>;
  readonly metThrough_gt?: Maybe<Scalars['String']>;
  readonly metThrough_gte?: Maybe<Scalars['String']>;
  readonly metThrough_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  readonly metThrough_lt?: Maybe<Scalars['String']>;
  readonly metThrough_lte?: Maybe<Scalars['String']>;
  readonly metThrough_not?: Maybe<Scalars['String']>;
  readonly metThrough_not_contains?: Maybe<Scalars['String']>;
  readonly metThrough_not_ends_with?: Maybe<Scalars['String']>;
  readonly metThrough_not_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  readonly metThrough_not_starts_with?: Maybe<Scalars['String']>;
  readonly metThrough_starts_with?: Maybe<Scalars['String']>;
  readonly readableId?: Maybe<Scalars['String']>;
  readonly readableId_contains?: Maybe<Scalars['String']>;
  readonly readableId_ends_with?: Maybe<Scalars['String']>;
  readonly readableId_gt?: Maybe<Scalars['String']>;
  readonly readableId_gte?: Maybe<Scalars['String']>;
  readonly readableId_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  readonly readableId_lt?: Maybe<Scalars['String']>;
  readonly readableId_lte?: Maybe<Scalars['String']>;
  readonly readableId_not?: Maybe<Scalars['String']>;
  readonly readableId_not_contains?: Maybe<Scalars['String']>;
  readonly readableId_not_ends_with?: Maybe<Scalars['String']>;
  readonly readableId_not_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  readonly readableId_not_starts_with?: Maybe<Scalars['String']>;
  readonly readableId_starts_with?: Maybe<Scalars['String']>;
  readonly reference?: Maybe<Scalars['String']>;
  readonly reference_contains?: Maybe<Scalars['String']>;
  readonly reference_ends_with?: Maybe<Scalars['String']>;
  readonly reference_gt?: Maybe<Scalars['String']>;
  readonly reference_gte?: Maybe<Scalars['String']>;
  readonly reference_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  readonly reference_lt?: Maybe<Scalars['String']>;
  readonly reference_lte?: Maybe<Scalars['String']>;
  readonly reference_not?: Maybe<Scalars['String']>;
  readonly reference_not_contains?: Maybe<Scalars['String']>;
  readonly reference_not_ends_with?: Maybe<Scalars['String']>;
  readonly reference_not_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  readonly reference_not_starts_with?: Maybe<Scalars['String']>;
  readonly reference_starts_with?: Maybe<Scalars['String']>;
  readonly requestSource?: Maybe<Scalars['String']>;
  readonly requestSource_contains?: Maybe<Scalars['String']>;
  readonly requestSource_ends_with?: Maybe<Scalars['String']>;
  readonly requestSource_gt?: Maybe<Scalars['String']>;
  readonly requestSource_gte?: Maybe<Scalars['String']>;
  readonly requestSource_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  readonly requestSource_lt?: Maybe<Scalars['String']>;
  readonly requestSource_lte?: Maybe<Scalars['String']>;
  readonly requestSource_not?: Maybe<Scalars['String']>;
  readonly requestSource_not_contains?: Maybe<Scalars['String']>;
  readonly requestSource_not_ends_with?: Maybe<Scalars['String']>;
  readonly requestSource_not_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  readonly requestSource_not_starts_with?: Maybe<Scalars['String']>;
  readonly requestSource_starts_with?: Maybe<Scalars['String']>;
  readonly status?: Maybe<Scalars['String']>;
  readonly status_contains?: Maybe<Scalars['String']>;
  readonly status_ends_with?: Maybe<Scalars['String']>;
  readonly status_gt?: Maybe<Scalars['String']>;
  readonly status_gte?: Maybe<Scalars['String']>;
  readonly status_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  readonly status_lt?: Maybe<Scalars['String']>;
  readonly status_lte?: Maybe<Scalars['String']>;
  readonly status_not?: Maybe<Scalars['String']>;
  readonly status_not_contains?: Maybe<Scalars['String']>;
  readonly status_not_ends_with?: Maybe<Scalars['String']>;
  readonly status_not_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  readonly status_not_starts_with?: Maybe<Scalars['String']>;
  readonly status_starts_with?: Maybe<Scalars['String']>;
  readonly templateBody?: Maybe<Scalars['String']>;
  readonly templateBody_contains?: Maybe<Scalars['String']>;
  readonly templateBody_ends_with?: Maybe<Scalars['String']>;
  readonly templateBody_gt?: Maybe<Scalars['String']>;
  readonly templateBody_gte?: Maybe<Scalars['String']>;
  readonly templateBody_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  readonly templateBody_lt?: Maybe<Scalars['String']>;
  readonly templateBody_lte?: Maybe<Scalars['String']>;
  readonly templateBody_not?: Maybe<Scalars['String']>;
  readonly templateBody_not_contains?: Maybe<Scalars['String']>;
  readonly templateBody_not_ends_with?: Maybe<Scalars['String']>;
  readonly templateBody_not_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  readonly templateBody_not_starts_with?: Maybe<Scalars['String']>;
  readonly templateBody_starts_with?: Maybe<Scalars['String']>;
  readonly templateHeading?: Maybe<Scalars['String']>;
  readonly templateHeading_contains?: Maybe<Scalars['String']>;
  readonly templateHeading_ends_with?: Maybe<Scalars['String']>;
  readonly templateHeading_gt?: Maybe<Scalars['String']>;
  readonly templateHeading_gte?: Maybe<Scalars['String']>;
  readonly templateHeading_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  readonly templateHeading_lt?: Maybe<Scalars['String']>;
  readonly templateHeading_lte?: Maybe<Scalars['String']>;
  readonly templateHeading_not?: Maybe<Scalars['String']>;
  readonly templateHeading_not_contains?: Maybe<Scalars['String']>;
  readonly templateHeading_not_ends_with?: Maybe<Scalars['String']>;
  readonly templateHeading_not_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  readonly templateHeading_not_starts_with?: Maybe<Scalars['String']>;
  readonly templateHeading_starts_with?: Maybe<Scalars['String']>;
  readonly updatedAt?: Maybe<Scalars['DateTime']>;
  readonly updatedAt_gt?: Maybe<Scalars['DateTime']>;
  readonly updatedAt_gte?: Maybe<Scalars['DateTime']>;
  readonly updatedAt_in?: Maybe<ReadonlyArray<Scalars['DateTime']>>;
  readonly updatedAt_lt?: Maybe<Scalars['DateTime']>;
  readonly updatedAt_lte?: Maybe<Scalars['DateTime']>;
  readonly updatedAt_not?: Maybe<Scalars['DateTime']>;
  readonly updatedAt_not_in?: Maybe<ReadonlyArray<Scalars['DateTime']>>;
  readonly validityPeriodEnd?: Maybe<Scalars['DateTime']>;
  readonly validityPeriodEnd_gt?: Maybe<Scalars['DateTime']>;
  readonly validityPeriodEnd_gte?: Maybe<Scalars['DateTime']>;
  readonly validityPeriodEnd_in?: Maybe<ReadonlyArray<Scalars['DateTime']>>;
  readonly validityPeriodEnd_lt?: Maybe<Scalars['DateTime']>;
  readonly validityPeriodEnd_lte?: Maybe<Scalars['DateTime']>;
  readonly validityPeriodEnd_not?: Maybe<Scalars['DateTime']>;
  readonly validityPeriodEnd_not_in?: Maybe<ReadonlyArray<Scalars['DateTime']>>;
  readonly validityPeriodStart?: Maybe<Scalars['DateTime']>;
  readonly validityPeriodStart_gt?: Maybe<Scalars['DateTime']>;
  readonly validityPeriodStart_gte?: Maybe<Scalars['DateTime']>;
  readonly validityPeriodStart_in?: Maybe<ReadonlyArray<Scalars['DateTime']>>;
  readonly validityPeriodStart_lt?: Maybe<Scalars['DateTime']>;
  readonly validityPeriodStart_lte?: Maybe<Scalars['DateTime']>;
  readonly validityPeriodStart_not?: Maybe<Scalars['DateTime']>;
  readonly validityPeriodStart_not_in?: Maybe<ReadonlyArray<Scalars['DateTime']>>;
};

export type PContact = {
  readonly __typename?: 'PContact';
  readonly belongsToUser?: Maybe<PUser>;
  readonly budgets?: Maybe<ReadonlyArray<PBudget>>;
  readonly createdAt: Scalars['DateTime'];
  readonly email?: Maybe<Scalars['String']>;
  readonly id: Scalars['ID'];
  readonly name: Scalars['String'];
  readonly phone?: Maybe<Scalars['String']>;
  readonly updatedAt: Scalars['DateTime'];
};


export type PContactBudgetsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<PBudgetOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<PBudgetWhereInput>;
};

export enum PContactOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  EmailAsc = 'email_ASC',
  EmailDesc = 'email_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PhoneAsc = 'phone_ASC',
  PhoneDesc = 'phone_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type PContactWhereInput = {
  readonly AND?: Maybe<ReadonlyArray<PContactWhereInput>>;
  readonly NOT?: Maybe<ReadonlyArray<PContactWhereInput>>;
  readonly OR?: Maybe<ReadonlyArray<PContactWhereInput>>;
  readonly belongsToUser?: Maybe<PUserWhereInput>;
  readonly budgets_every?: Maybe<PBudgetWhereInput>;
  readonly budgets_none?: Maybe<PBudgetWhereInput>;
  readonly budgets_some?: Maybe<PBudgetWhereInput>;
  readonly createdAt?: Maybe<Scalars['DateTime']>;
  readonly createdAt_gt?: Maybe<Scalars['DateTime']>;
  readonly createdAt_gte?: Maybe<Scalars['DateTime']>;
  readonly createdAt_in?: Maybe<ReadonlyArray<Scalars['DateTime']>>;
  readonly createdAt_lt?: Maybe<Scalars['DateTime']>;
  readonly createdAt_lte?: Maybe<Scalars['DateTime']>;
  readonly createdAt_not?: Maybe<Scalars['DateTime']>;
  readonly createdAt_not_in?: Maybe<ReadonlyArray<Scalars['DateTime']>>;
  readonly email?: Maybe<Scalars['String']>;
  readonly email_contains?: Maybe<Scalars['String']>;
  readonly email_ends_with?: Maybe<Scalars['String']>;
  readonly email_gt?: Maybe<Scalars['String']>;
  readonly email_gte?: Maybe<Scalars['String']>;
  readonly email_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  readonly email_lt?: Maybe<Scalars['String']>;
  readonly email_lte?: Maybe<Scalars['String']>;
  readonly email_not?: Maybe<Scalars['String']>;
  readonly email_not_contains?: Maybe<Scalars['String']>;
  readonly email_not_ends_with?: Maybe<Scalars['String']>;
  readonly email_not_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  readonly email_not_starts_with?: Maybe<Scalars['String']>;
  readonly email_starts_with?: Maybe<Scalars['String']>;
  readonly id?: Maybe<Scalars['ID']>;
  readonly id_contains?: Maybe<Scalars['ID']>;
  readonly id_ends_with?: Maybe<Scalars['ID']>;
  readonly id_gt?: Maybe<Scalars['ID']>;
  readonly id_gte?: Maybe<Scalars['ID']>;
  readonly id_in?: Maybe<ReadonlyArray<Scalars['ID']>>;
  readonly id_lt?: Maybe<Scalars['ID']>;
  readonly id_lte?: Maybe<Scalars['ID']>;
  readonly id_not?: Maybe<Scalars['ID']>;
  readonly id_not_contains?: Maybe<Scalars['ID']>;
  readonly id_not_ends_with?: Maybe<Scalars['ID']>;
  readonly id_not_in?: Maybe<ReadonlyArray<Scalars['ID']>>;
  readonly id_not_starts_with?: Maybe<Scalars['ID']>;
  readonly id_starts_with?: Maybe<Scalars['ID']>;
  readonly name?: Maybe<Scalars['String']>;
  readonly name_contains?: Maybe<Scalars['String']>;
  readonly name_ends_with?: Maybe<Scalars['String']>;
  readonly name_gt?: Maybe<Scalars['String']>;
  readonly name_gte?: Maybe<Scalars['String']>;
  readonly name_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  readonly name_lt?: Maybe<Scalars['String']>;
  readonly name_lte?: Maybe<Scalars['String']>;
  readonly name_not?: Maybe<Scalars['String']>;
  readonly name_not_contains?: Maybe<Scalars['String']>;
  readonly name_not_ends_with?: Maybe<Scalars['String']>;
  readonly name_not_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  readonly name_not_starts_with?: Maybe<Scalars['String']>;
  readonly name_starts_with?: Maybe<Scalars['String']>;
  readonly phone?: Maybe<Scalars['String']>;
  readonly phone_contains?: Maybe<Scalars['String']>;
  readonly phone_ends_with?: Maybe<Scalars['String']>;
  readonly phone_gt?: Maybe<Scalars['String']>;
  readonly phone_gte?: Maybe<Scalars['String']>;
  readonly phone_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  readonly phone_lt?: Maybe<Scalars['String']>;
  readonly phone_lte?: Maybe<Scalars['String']>;
  readonly phone_not?: Maybe<Scalars['String']>;
  readonly phone_not_contains?: Maybe<Scalars['String']>;
  readonly phone_not_ends_with?: Maybe<Scalars['String']>;
  readonly phone_not_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  readonly phone_not_starts_with?: Maybe<Scalars['String']>;
  readonly phone_starts_with?: Maybe<Scalars['String']>;
  readonly updatedAt?: Maybe<Scalars['DateTime']>;
  readonly updatedAt_gt?: Maybe<Scalars['DateTime']>;
  readonly updatedAt_gte?: Maybe<Scalars['DateTime']>;
  readonly updatedAt_in?: Maybe<ReadonlyArray<Scalars['DateTime']>>;
  readonly updatedAt_lt?: Maybe<Scalars['DateTime']>;
  readonly updatedAt_lte?: Maybe<Scalars['DateTime']>;
  readonly updatedAt_not?: Maybe<Scalars['DateTime']>;
  readonly updatedAt_not_in?: Maybe<ReadonlyArray<Scalars['DateTime']>>;
};

export type PDriver = {
  readonly __typename?: 'PDriver';
  readonly communicationLocale?: Maybe<Scalars['String']>;
  readonly createdAt: Scalars['DateTime'];
  readonly drivingCompany?: Maybe<PDrivingCompany>;
  readonly email?: Maybe<Scalars['String']>;
  readonly firebaseId?: Maybe<Scalars['String']>;
  readonly id: Scalars['ID'];
  readonly location?: Maybe<Location>;
  readonly loginMethod?: Maybe<LoginMethod>;
  readonly name?: Maybe<Scalars['String']>;
  readonly notificationsToken?: Maybe<Scalars['String']>;
  readonly phone?: Maybe<Scalars['String']>;
  readonly profilePicURI?: Maybe<Scalars['String']>;
  readonly servicesMain?: Maybe<ReadonlyArray<PService>>;
  readonly servicesSecondary?: Maybe<ReadonlyArray<PService>>;
  readonly status?: Maybe<Scalars['String']>;
  readonly type?: Maybe<Scalars['String']>;
  readonly updatedAt: Scalars['DateTime'];
  readonly volcanoDriverId?: Maybe<Scalars['String']>;
};


export type PDriverServicesMainArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<PServiceOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<PServiceWhereInput>;
};


export type PDriverServicesSecondaryArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<PServiceOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<PServiceWhereInput>;
};

export enum PDriverOrderByInput {
  CommunicationLocaleAsc = 'communicationLocale_ASC',
  CommunicationLocaleDesc = 'communicationLocale_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  EmailAsc = 'email_ASC',
  EmailDesc = 'email_DESC',
  FirebaseIdAsc = 'firebaseId_ASC',
  FirebaseIdDesc = 'firebaseId_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  LoginMethodAsc = 'loginMethod_ASC',
  LoginMethodDesc = 'loginMethod_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  NotificationsTokenAsc = 'notificationsToken_ASC',
  NotificationsTokenDesc = 'notificationsToken_DESC',
  PhoneAsc = 'phone_ASC',
  PhoneDesc = 'phone_DESC',
  ProfilePicUriAsc = 'profilePicURI_ASC',
  ProfilePicUriDesc = 'profilePicURI_DESC',
  StatusAsc = 'status_ASC',
  StatusDesc = 'status_DESC',
  TypeAsc = 'type_ASC',
  TypeDesc = 'type_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  VolcanoDriverIdAsc = 'volcanoDriverId_ASC',
  VolcanoDriverIdDesc = 'volcanoDriverId_DESC'
}

export type PDriverWhereInput = {
  readonly AND?: Maybe<ReadonlyArray<PDriverWhereInput>>;
  readonly NOT?: Maybe<ReadonlyArray<PDriverWhereInput>>;
  readonly OR?: Maybe<ReadonlyArray<PDriverWhereInput>>;
  readonly communicationLocale?: Maybe<Scalars['String']>;
  readonly communicationLocale_contains?: Maybe<Scalars['String']>;
  readonly communicationLocale_ends_with?: Maybe<Scalars['String']>;
  readonly communicationLocale_gt?: Maybe<Scalars['String']>;
  readonly communicationLocale_gte?: Maybe<Scalars['String']>;
  readonly communicationLocale_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  readonly communicationLocale_lt?: Maybe<Scalars['String']>;
  readonly communicationLocale_lte?: Maybe<Scalars['String']>;
  readonly communicationLocale_not?: Maybe<Scalars['String']>;
  readonly communicationLocale_not_contains?: Maybe<Scalars['String']>;
  readonly communicationLocale_not_ends_with?: Maybe<Scalars['String']>;
  readonly communicationLocale_not_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  readonly communicationLocale_not_starts_with?: Maybe<Scalars['String']>;
  readonly communicationLocale_starts_with?: Maybe<Scalars['String']>;
  readonly createdAt?: Maybe<Scalars['DateTime']>;
  readonly createdAt_gt?: Maybe<Scalars['DateTime']>;
  readonly createdAt_gte?: Maybe<Scalars['DateTime']>;
  readonly createdAt_in?: Maybe<ReadonlyArray<Scalars['DateTime']>>;
  readonly createdAt_lt?: Maybe<Scalars['DateTime']>;
  readonly createdAt_lte?: Maybe<Scalars['DateTime']>;
  readonly createdAt_not?: Maybe<Scalars['DateTime']>;
  readonly createdAt_not_in?: Maybe<ReadonlyArray<Scalars['DateTime']>>;
  readonly drivingCompany?: Maybe<PDrivingCompanyWhereInput>;
  readonly email?: Maybe<Scalars['String']>;
  readonly email_contains?: Maybe<Scalars['String']>;
  readonly email_ends_with?: Maybe<Scalars['String']>;
  readonly email_gt?: Maybe<Scalars['String']>;
  readonly email_gte?: Maybe<Scalars['String']>;
  readonly email_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  readonly email_lt?: Maybe<Scalars['String']>;
  readonly email_lte?: Maybe<Scalars['String']>;
  readonly email_not?: Maybe<Scalars['String']>;
  readonly email_not_contains?: Maybe<Scalars['String']>;
  readonly email_not_ends_with?: Maybe<Scalars['String']>;
  readonly email_not_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  readonly email_not_starts_with?: Maybe<Scalars['String']>;
  readonly email_starts_with?: Maybe<Scalars['String']>;
  readonly firebaseId?: Maybe<Scalars['String']>;
  readonly firebaseId_contains?: Maybe<Scalars['String']>;
  readonly firebaseId_ends_with?: Maybe<Scalars['String']>;
  readonly firebaseId_gt?: Maybe<Scalars['String']>;
  readonly firebaseId_gte?: Maybe<Scalars['String']>;
  readonly firebaseId_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  readonly firebaseId_lt?: Maybe<Scalars['String']>;
  readonly firebaseId_lte?: Maybe<Scalars['String']>;
  readonly firebaseId_not?: Maybe<Scalars['String']>;
  readonly firebaseId_not_contains?: Maybe<Scalars['String']>;
  readonly firebaseId_not_ends_with?: Maybe<Scalars['String']>;
  readonly firebaseId_not_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  readonly firebaseId_not_starts_with?: Maybe<Scalars['String']>;
  readonly firebaseId_starts_with?: Maybe<Scalars['String']>;
  readonly id?: Maybe<Scalars['ID']>;
  readonly id_contains?: Maybe<Scalars['ID']>;
  readonly id_ends_with?: Maybe<Scalars['ID']>;
  readonly id_gt?: Maybe<Scalars['ID']>;
  readonly id_gte?: Maybe<Scalars['ID']>;
  readonly id_in?: Maybe<ReadonlyArray<Scalars['ID']>>;
  readonly id_lt?: Maybe<Scalars['ID']>;
  readonly id_lte?: Maybe<Scalars['ID']>;
  readonly id_not?: Maybe<Scalars['ID']>;
  readonly id_not_contains?: Maybe<Scalars['ID']>;
  readonly id_not_ends_with?: Maybe<Scalars['ID']>;
  readonly id_not_in?: Maybe<ReadonlyArray<Scalars['ID']>>;
  readonly id_not_starts_with?: Maybe<Scalars['ID']>;
  readonly id_starts_with?: Maybe<Scalars['ID']>;
  readonly location?: Maybe<LocationWhereInput>;
  readonly loginMethod?: Maybe<LoginMethod>;
  readonly loginMethod_in?: Maybe<ReadonlyArray<LoginMethod>>;
  readonly loginMethod_not?: Maybe<LoginMethod>;
  readonly loginMethod_not_in?: Maybe<ReadonlyArray<LoginMethod>>;
  readonly name?: Maybe<Scalars['String']>;
  readonly name_contains?: Maybe<Scalars['String']>;
  readonly name_ends_with?: Maybe<Scalars['String']>;
  readonly name_gt?: Maybe<Scalars['String']>;
  readonly name_gte?: Maybe<Scalars['String']>;
  readonly name_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  readonly name_lt?: Maybe<Scalars['String']>;
  readonly name_lte?: Maybe<Scalars['String']>;
  readonly name_not?: Maybe<Scalars['String']>;
  readonly name_not_contains?: Maybe<Scalars['String']>;
  readonly name_not_ends_with?: Maybe<Scalars['String']>;
  readonly name_not_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  readonly name_not_starts_with?: Maybe<Scalars['String']>;
  readonly name_starts_with?: Maybe<Scalars['String']>;
  readonly notificationsToken?: Maybe<Scalars['String']>;
  readonly notificationsToken_contains?: Maybe<Scalars['String']>;
  readonly notificationsToken_ends_with?: Maybe<Scalars['String']>;
  readonly notificationsToken_gt?: Maybe<Scalars['String']>;
  readonly notificationsToken_gte?: Maybe<Scalars['String']>;
  readonly notificationsToken_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  readonly notificationsToken_lt?: Maybe<Scalars['String']>;
  readonly notificationsToken_lte?: Maybe<Scalars['String']>;
  readonly notificationsToken_not?: Maybe<Scalars['String']>;
  readonly notificationsToken_not_contains?: Maybe<Scalars['String']>;
  readonly notificationsToken_not_ends_with?: Maybe<Scalars['String']>;
  readonly notificationsToken_not_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  readonly notificationsToken_not_starts_with?: Maybe<Scalars['String']>;
  readonly notificationsToken_starts_with?: Maybe<Scalars['String']>;
  readonly phone?: Maybe<Scalars['String']>;
  readonly phone_contains?: Maybe<Scalars['String']>;
  readonly phone_ends_with?: Maybe<Scalars['String']>;
  readonly phone_gt?: Maybe<Scalars['String']>;
  readonly phone_gte?: Maybe<Scalars['String']>;
  readonly phone_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  readonly phone_lt?: Maybe<Scalars['String']>;
  readonly phone_lte?: Maybe<Scalars['String']>;
  readonly phone_not?: Maybe<Scalars['String']>;
  readonly phone_not_contains?: Maybe<Scalars['String']>;
  readonly phone_not_ends_with?: Maybe<Scalars['String']>;
  readonly phone_not_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  readonly phone_not_starts_with?: Maybe<Scalars['String']>;
  readonly phone_starts_with?: Maybe<Scalars['String']>;
  readonly profilePicURI?: Maybe<Scalars['String']>;
  readonly profilePicURI_contains?: Maybe<Scalars['String']>;
  readonly profilePicURI_ends_with?: Maybe<Scalars['String']>;
  readonly profilePicURI_gt?: Maybe<Scalars['String']>;
  readonly profilePicURI_gte?: Maybe<Scalars['String']>;
  readonly profilePicURI_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  readonly profilePicURI_lt?: Maybe<Scalars['String']>;
  readonly profilePicURI_lte?: Maybe<Scalars['String']>;
  readonly profilePicURI_not?: Maybe<Scalars['String']>;
  readonly profilePicURI_not_contains?: Maybe<Scalars['String']>;
  readonly profilePicURI_not_ends_with?: Maybe<Scalars['String']>;
  readonly profilePicURI_not_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  readonly profilePicURI_not_starts_with?: Maybe<Scalars['String']>;
  readonly profilePicURI_starts_with?: Maybe<Scalars['String']>;
  readonly servicesMain_every?: Maybe<PServiceWhereInput>;
  readonly servicesMain_none?: Maybe<PServiceWhereInput>;
  readonly servicesMain_some?: Maybe<PServiceWhereInput>;
  readonly servicesSecondary_every?: Maybe<PServiceWhereInput>;
  readonly servicesSecondary_none?: Maybe<PServiceWhereInput>;
  readonly servicesSecondary_some?: Maybe<PServiceWhereInput>;
  readonly status?: Maybe<Scalars['String']>;
  readonly status_contains?: Maybe<Scalars['String']>;
  readonly status_ends_with?: Maybe<Scalars['String']>;
  readonly status_gt?: Maybe<Scalars['String']>;
  readonly status_gte?: Maybe<Scalars['String']>;
  readonly status_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  readonly status_lt?: Maybe<Scalars['String']>;
  readonly status_lte?: Maybe<Scalars['String']>;
  readonly status_not?: Maybe<Scalars['String']>;
  readonly status_not_contains?: Maybe<Scalars['String']>;
  readonly status_not_ends_with?: Maybe<Scalars['String']>;
  readonly status_not_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  readonly status_not_starts_with?: Maybe<Scalars['String']>;
  readonly status_starts_with?: Maybe<Scalars['String']>;
  readonly type?: Maybe<Scalars['String']>;
  readonly type_contains?: Maybe<Scalars['String']>;
  readonly type_ends_with?: Maybe<Scalars['String']>;
  readonly type_gt?: Maybe<Scalars['String']>;
  readonly type_gte?: Maybe<Scalars['String']>;
  readonly type_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  readonly type_lt?: Maybe<Scalars['String']>;
  readonly type_lte?: Maybe<Scalars['String']>;
  readonly type_not?: Maybe<Scalars['String']>;
  readonly type_not_contains?: Maybe<Scalars['String']>;
  readonly type_not_ends_with?: Maybe<Scalars['String']>;
  readonly type_not_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  readonly type_not_starts_with?: Maybe<Scalars['String']>;
  readonly type_starts_with?: Maybe<Scalars['String']>;
  readonly updatedAt?: Maybe<Scalars['DateTime']>;
  readonly updatedAt_gt?: Maybe<Scalars['DateTime']>;
  readonly updatedAt_gte?: Maybe<Scalars['DateTime']>;
  readonly updatedAt_in?: Maybe<ReadonlyArray<Scalars['DateTime']>>;
  readonly updatedAt_lt?: Maybe<Scalars['DateTime']>;
  readonly updatedAt_lte?: Maybe<Scalars['DateTime']>;
  readonly updatedAt_not?: Maybe<Scalars['DateTime']>;
  readonly updatedAt_not_in?: Maybe<ReadonlyArray<Scalars['DateTime']>>;
  readonly volcanoDriverId?: Maybe<Scalars['String']>;
  readonly volcanoDriverId_contains?: Maybe<Scalars['String']>;
  readonly volcanoDriverId_ends_with?: Maybe<Scalars['String']>;
  readonly volcanoDriverId_gt?: Maybe<Scalars['String']>;
  readonly volcanoDriverId_gte?: Maybe<Scalars['String']>;
  readonly volcanoDriverId_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  readonly volcanoDriverId_lt?: Maybe<Scalars['String']>;
  readonly volcanoDriverId_lte?: Maybe<Scalars['String']>;
  readonly volcanoDriverId_not?: Maybe<Scalars['String']>;
  readonly volcanoDriverId_not_contains?: Maybe<Scalars['String']>;
  readonly volcanoDriverId_not_ends_with?: Maybe<Scalars['String']>;
  readonly volcanoDriverId_not_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  readonly volcanoDriverId_not_starts_with?: Maybe<Scalars['String']>;
  readonly volcanoDriverId_starts_with?: Maybe<Scalars['String']>;
};

export type PDrivingCompany = {
  readonly __typename?: 'PDrivingCompany';
  readonly createdAt: Scalars['DateTime'];
  readonly drivers?: Maybe<ReadonlyArray<PDriver>>;
  readonly email?: Maybe<Scalars['String']>;
  readonly id: Scalars['ID'];
  readonly name?: Maybe<Scalars['String']>;
  readonly phone?: Maybe<Scalars['String']>;
  readonly updatedAt: Scalars['DateTime'];
  readonly volcanoId?: Maybe<Scalars['String']>;
};


export type PDrivingCompanyDriversArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<PDriverOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<PDriverWhereInput>;
};

export type PDrivingCompanyWhereInput = {
  readonly AND?: Maybe<ReadonlyArray<PDrivingCompanyWhereInput>>;
  readonly NOT?: Maybe<ReadonlyArray<PDrivingCompanyWhereInput>>;
  readonly OR?: Maybe<ReadonlyArray<PDrivingCompanyWhereInput>>;
  readonly createdAt?: Maybe<Scalars['DateTime']>;
  readonly createdAt_gt?: Maybe<Scalars['DateTime']>;
  readonly createdAt_gte?: Maybe<Scalars['DateTime']>;
  readonly createdAt_in?: Maybe<ReadonlyArray<Scalars['DateTime']>>;
  readonly createdAt_lt?: Maybe<Scalars['DateTime']>;
  readonly createdAt_lte?: Maybe<Scalars['DateTime']>;
  readonly createdAt_not?: Maybe<Scalars['DateTime']>;
  readonly createdAt_not_in?: Maybe<ReadonlyArray<Scalars['DateTime']>>;
  readonly drivers_every?: Maybe<PDriverWhereInput>;
  readonly drivers_none?: Maybe<PDriverWhereInput>;
  readonly drivers_some?: Maybe<PDriverWhereInput>;
  readonly email?: Maybe<Scalars['String']>;
  readonly email_contains?: Maybe<Scalars['String']>;
  readonly email_ends_with?: Maybe<Scalars['String']>;
  readonly email_gt?: Maybe<Scalars['String']>;
  readonly email_gte?: Maybe<Scalars['String']>;
  readonly email_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  readonly email_lt?: Maybe<Scalars['String']>;
  readonly email_lte?: Maybe<Scalars['String']>;
  readonly email_not?: Maybe<Scalars['String']>;
  readonly email_not_contains?: Maybe<Scalars['String']>;
  readonly email_not_ends_with?: Maybe<Scalars['String']>;
  readonly email_not_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  readonly email_not_starts_with?: Maybe<Scalars['String']>;
  readonly email_starts_with?: Maybe<Scalars['String']>;
  readonly id?: Maybe<Scalars['ID']>;
  readonly id_contains?: Maybe<Scalars['ID']>;
  readonly id_ends_with?: Maybe<Scalars['ID']>;
  readonly id_gt?: Maybe<Scalars['ID']>;
  readonly id_gte?: Maybe<Scalars['ID']>;
  readonly id_in?: Maybe<ReadonlyArray<Scalars['ID']>>;
  readonly id_lt?: Maybe<Scalars['ID']>;
  readonly id_lte?: Maybe<Scalars['ID']>;
  readonly id_not?: Maybe<Scalars['ID']>;
  readonly id_not_contains?: Maybe<Scalars['ID']>;
  readonly id_not_ends_with?: Maybe<Scalars['ID']>;
  readonly id_not_in?: Maybe<ReadonlyArray<Scalars['ID']>>;
  readonly id_not_starts_with?: Maybe<Scalars['ID']>;
  readonly id_starts_with?: Maybe<Scalars['ID']>;
  readonly name?: Maybe<Scalars['String']>;
  readonly name_contains?: Maybe<Scalars['String']>;
  readonly name_ends_with?: Maybe<Scalars['String']>;
  readonly name_gt?: Maybe<Scalars['String']>;
  readonly name_gte?: Maybe<Scalars['String']>;
  readonly name_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  readonly name_lt?: Maybe<Scalars['String']>;
  readonly name_lte?: Maybe<Scalars['String']>;
  readonly name_not?: Maybe<Scalars['String']>;
  readonly name_not_contains?: Maybe<Scalars['String']>;
  readonly name_not_ends_with?: Maybe<Scalars['String']>;
  readonly name_not_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  readonly name_not_starts_with?: Maybe<Scalars['String']>;
  readonly name_starts_with?: Maybe<Scalars['String']>;
  readonly phone?: Maybe<Scalars['String']>;
  readonly phone_contains?: Maybe<Scalars['String']>;
  readonly phone_ends_with?: Maybe<Scalars['String']>;
  readonly phone_gt?: Maybe<Scalars['String']>;
  readonly phone_gte?: Maybe<Scalars['String']>;
  readonly phone_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  readonly phone_lt?: Maybe<Scalars['String']>;
  readonly phone_lte?: Maybe<Scalars['String']>;
  readonly phone_not?: Maybe<Scalars['String']>;
  readonly phone_not_contains?: Maybe<Scalars['String']>;
  readonly phone_not_ends_with?: Maybe<Scalars['String']>;
  readonly phone_not_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  readonly phone_not_starts_with?: Maybe<Scalars['String']>;
  readonly phone_starts_with?: Maybe<Scalars['String']>;
  readonly updatedAt?: Maybe<Scalars['DateTime']>;
  readonly updatedAt_gt?: Maybe<Scalars['DateTime']>;
  readonly updatedAt_gte?: Maybe<Scalars['DateTime']>;
  readonly updatedAt_in?: Maybe<ReadonlyArray<Scalars['DateTime']>>;
  readonly updatedAt_lt?: Maybe<Scalars['DateTime']>;
  readonly updatedAt_lte?: Maybe<Scalars['DateTime']>;
  readonly updatedAt_not?: Maybe<Scalars['DateTime']>;
  readonly updatedAt_not_in?: Maybe<ReadonlyArray<Scalars['DateTime']>>;
  readonly volcanoId?: Maybe<Scalars['String']>;
  readonly volcanoId_contains?: Maybe<Scalars['String']>;
  readonly volcanoId_ends_with?: Maybe<Scalars['String']>;
  readonly volcanoId_gt?: Maybe<Scalars['String']>;
  readonly volcanoId_gte?: Maybe<Scalars['String']>;
  readonly volcanoId_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  readonly volcanoId_lt?: Maybe<Scalars['String']>;
  readonly volcanoId_lte?: Maybe<Scalars['String']>;
  readonly volcanoId_not?: Maybe<Scalars['String']>;
  readonly volcanoId_not_contains?: Maybe<Scalars['String']>;
  readonly volcanoId_not_ends_with?: Maybe<Scalars['String']>;
  readonly volcanoId_not_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  readonly volcanoId_not_starts_with?: Maybe<Scalars['String']>;
  readonly volcanoId_starts_with?: Maybe<Scalars['String']>;
};

export type PItinerary = {
  readonly __typename?: 'PItinerary';
  readonly amounts?: Maybe<ReadonlyArray<PAmount>>;
  readonly arrivalAddress?: Maybe<Scalars['String']>;
  readonly arrivalCity?: Maybe<Scalars['String']>;
  readonly arrivalDate: Scalars['DateTime'];
  readonly arrivalLat?: Maybe<Scalars['Float']>;
  readonly arrivalLon?: Maybe<Scalars['Float']>;
  readonly arrivalTime: Scalars['DateTime'];
  readonly arrivalType?: Maybe<Scalars['String']>;
  readonly budget: PBudget;
  readonly createdAt: Scalars['DateTime'];
  readonly createdBy: PUser;
  readonly departureAddress?: Maybe<Scalars['String']>;
  readonly departureCity?: Maybe<Scalars['String']>;
  readonly departureDate: Scalars['DateTime'];
  readonly departureLat?: Maybe<Scalars['Float']>;
  readonly departureLon?: Maybe<Scalars['Float']>;
  readonly departureTime: Scalars['DateTime'];
  readonly departureType?: Maybe<Scalars['String']>;
  readonly dinner: Scalars['Boolean'];
  readonly driverFeatures?: Maybe<ReadonlyArray<PItineraryDriverFeature>>;
  readonly flightNumber?: Maybe<Scalars['String']>;
  readonly groupName?: Maybe<Scalars['String']>;
  readonly hours: Scalars['Float'];
  readonly id: Scalars['ID'];
  readonly itineraryDescription?: Maybe<Scalars['String']>;
  readonly notes?: Maybe<Scalars['String']>;
  readonly numPassengers: Scalars['Int'];
  readonly numVehicles?: Maybe<Scalars['Int']>;
  readonly presentationTime: Scalars['DateTime'];
  readonly realized: Scalars['Boolean'];
  readonly reference?: Maybe<Scalars['String']>;
  readonly service?: Maybe<PService>;
  readonly serviceDescription?: Maybe<Scalars['String']>;
  readonly serviceType: PServiceType;
  readonly updatedAt: Scalars['DateTime'];
  readonly vehicleBrand?: Maybe<PVehicleBrand>;
  readonly vehicleFeatures?: Maybe<ReadonlyArray<PItineraryVehicleFeature>>;
  readonly vehicleModel?: Maybe<PVehicleModel>;
  readonly vehicleType: PVehicleType;
};


export type PItineraryAmountsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<PAmountOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<PAmountWhereInput>;
};


export type PItineraryDriverFeaturesArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<PItineraryDriverFeatureOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<PItineraryDriverFeatureWhereInput>;
};


export type PItineraryVehicleFeaturesArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<PItineraryVehicleFeatureOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<PItineraryVehicleFeatureWhereInput>;
};

export type PItineraryDriverFeature = {
  readonly __typename?: 'PItineraryDriverFeature';
  readonly createdBy: PUser;
  readonly description: Scalars['String'];
  readonly id: Scalars['ID'];
  readonly itineraries?: Maybe<ReadonlyArray<PItinerary>>;
  readonly required: Scalars['Boolean'];
};


export type PItineraryDriverFeatureItinerariesArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<PItineraryOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<PItineraryWhereInput>;
};

export enum PItineraryDriverFeatureOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  RequiredAsc = 'required_ASC',
  RequiredDesc = 'required_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type PItineraryDriverFeatureWhereInput = {
  readonly AND?: Maybe<ReadonlyArray<PItineraryDriverFeatureWhereInput>>;
  readonly NOT?: Maybe<ReadonlyArray<PItineraryDriverFeatureWhereInput>>;
  readonly OR?: Maybe<ReadonlyArray<PItineraryDriverFeatureWhereInput>>;
  readonly createdBy?: Maybe<PUserWhereInput>;
  readonly description?: Maybe<Scalars['String']>;
  readonly description_contains?: Maybe<Scalars['String']>;
  readonly description_ends_with?: Maybe<Scalars['String']>;
  readonly description_gt?: Maybe<Scalars['String']>;
  readonly description_gte?: Maybe<Scalars['String']>;
  readonly description_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  readonly description_lt?: Maybe<Scalars['String']>;
  readonly description_lte?: Maybe<Scalars['String']>;
  readonly description_not?: Maybe<Scalars['String']>;
  readonly description_not_contains?: Maybe<Scalars['String']>;
  readonly description_not_ends_with?: Maybe<Scalars['String']>;
  readonly description_not_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  readonly description_not_starts_with?: Maybe<Scalars['String']>;
  readonly description_starts_with?: Maybe<Scalars['String']>;
  readonly id?: Maybe<Scalars['ID']>;
  readonly id_contains?: Maybe<Scalars['ID']>;
  readonly id_ends_with?: Maybe<Scalars['ID']>;
  readonly id_gt?: Maybe<Scalars['ID']>;
  readonly id_gte?: Maybe<Scalars['ID']>;
  readonly id_in?: Maybe<ReadonlyArray<Scalars['ID']>>;
  readonly id_lt?: Maybe<Scalars['ID']>;
  readonly id_lte?: Maybe<Scalars['ID']>;
  readonly id_not?: Maybe<Scalars['ID']>;
  readonly id_not_contains?: Maybe<Scalars['ID']>;
  readonly id_not_ends_with?: Maybe<Scalars['ID']>;
  readonly id_not_in?: Maybe<ReadonlyArray<Scalars['ID']>>;
  readonly id_not_starts_with?: Maybe<Scalars['ID']>;
  readonly id_starts_with?: Maybe<Scalars['ID']>;
  readonly itineraries_every?: Maybe<PItineraryWhereInput>;
  readonly itineraries_none?: Maybe<PItineraryWhereInput>;
  readonly itineraries_some?: Maybe<PItineraryWhereInput>;
  readonly required?: Maybe<Scalars['Boolean']>;
  readonly required_not?: Maybe<Scalars['Boolean']>;
};

export enum PItineraryOrderByInput {
  ArrivalAddressAsc = 'arrivalAddress_ASC',
  ArrivalAddressDesc = 'arrivalAddress_DESC',
  ArrivalCityAsc = 'arrivalCity_ASC',
  ArrivalCityDesc = 'arrivalCity_DESC',
  ArrivalDateAsc = 'arrivalDate_ASC',
  ArrivalDateDesc = 'arrivalDate_DESC',
  ArrivalLatAsc = 'arrivalLat_ASC',
  ArrivalLatDesc = 'arrivalLat_DESC',
  ArrivalLonAsc = 'arrivalLon_ASC',
  ArrivalLonDesc = 'arrivalLon_DESC',
  ArrivalTimeAsc = 'arrivalTime_ASC',
  ArrivalTimeDesc = 'arrivalTime_DESC',
  ArrivalTypeAsc = 'arrivalType_ASC',
  ArrivalTypeDesc = 'arrivalType_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DepartureAddressAsc = 'departureAddress_ASC',
  DepartureAddressDesc = 'departureAddress_DESC',
  DepartureCityAsc = 'departureCity_ASC',
  DepartureCityDesc = 'departureCity_DESC',
  DepartureDateAsc = 'departureDate_ASC',
  DepartureDateDesc = 'departureDate_DESC',
  DepartureLatAsc = 'departureLat_ASC',
  DepartureLatDesc = 'departureLat_DESC',
  DepartureLonAsc = 'departureLon_ASC',
  DepartureLonDesc = 'departureLon_DESC',
  DepartureTimeAsc = 'departureTime_ASC',
  DepartureTimeDesc = 'departureTime_DESC',
  DepartureTypeAsc = 'departureType_ASC',
  DepartureTypeDesc = 'departureType_DESC',
  DinnerAsc = 'dinner_ASC',
  DinnerDesc = 'dinner_DESC',
  FlightNumberAsc = 'flightNumber_ASC',
  FlightNumberDesc = 'flightNumber_DESC',
  GroupNameAsc = 'groupName_ASC',
  GroupNameDesc = 'groupName_DESC',
  HoursAsc = 'hours_ASC',
  HoursDesc = 'hours_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  ItineraryDescriptionAsc = 'itineraryDescription_ASC',
  ItineraryDescriptionDesc = 'itineraryDescription_DESC',
  NotesAsc = 'notes_ASC',
  NotesDesc = 'notes_DESC',
  NumPassengersAsc = 'numPassengers_ASC',
  NumPassengersDesc = 'numPassengers_DESC',
  NumVehiclesAsc = 'numVehicles_ASC',
  NumVehiclesDesc = 'numVehicles_DESC',
  PresentationTimeAsc = 'presentationTime_ASC',
  PresentationTimeDesc = 'presentationTime_DESC',
  RealizedAsc = 'realized_ASC',
  RealizedDesc = 'realized_DESC',
  ReferenceAsc = 'reference_ASC',
  ReferenceDesc = 'reference_DESC',
  ServiceDescriptionAsc = 'serviceDescription_ASC',
  ServiceDescriptionDesc = 'serviceDescription_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type PItineraryVehicleFeature = {
  readonly __typename?: 'PItineraryVehicleFeature';
  readonly createdBy: PUser;
  readonly description: Scalars['String'];
  readonly id: Scalars['ID'];
  readonly itineraries?: Maybe<ReadonlyArray<PItinerary>>;
  readonly required: Scalars['Boolean'];
};


export type PItineraryVehicleFeatureItinerariesArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<PItineraryOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<PItineraryWhereInput>;
};

export enum PItineraryVehicleFeatureOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  RequiredAsc = 'required_ASC',
  RequiredDesc = 'required_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type PItineraryVehicleFeatureWhereInput = {
  readonly AND?: Maybe<ReadonlyArray<PItineraryVehicleFeatureWhereInput>>;
  readonly NOT?: Maybe<ReadonlyArray<PItineraryVehicleFeatureWhereInput>>;
  readonly OR?: Maybe<ReadonlyArray<PItineraryVehicleFeatureWhereInput>>;
  readonly createdBy?: Maybe<PUserWhereInput>;
  readonly description?: Maybe<Scalars['String']>;
  readonly description_contains?: Maybe<Scalars['String']>;
  readonly description_ends_with?: Maybe<Scalars['String']>;
  readonly description_gt?: Maybe<Scalars['String']>;
  readonly description_gte?: Maybe<Scalars['String']>;
  readonly description_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  readonly description_lt?: Maybe<Scalars['String']>;
  readonly description_lte?: Maybe<Scalars['String']>;
  readonly description_not?: Maybe<Scalars['String']>;
  readonly description_not_contains?: Maybe<Scalars['String']>;
  readonly description_not_ends_with?: Maybe<Scalars['String']>;
  readonly description_not_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  readonly description_not_starts_with?: Maybe<Scalars['String']>;
  readonly description_starts_with?: Maybe<Scalars['String']>;
  readonly id?: Maybe<Scalars['ID']>;
  readonly id_contains?: Maybe<Scalars['ID']>;
  readonly id_ends_with?: Maybe<Scalars['ID']>;
  readonly id_gt?: Maybe<Scalars['ID']>;
  readonly id_gte?: Maybe<Scalars['ID']>;
  readonly id_in?: Maybe<ReadonlyArray<Scalars['ID']>>;
  readonly id_lt?: Maybe<Scalars['ID']>;
  readonly id_lte?: Maybe<Scalars['ID']>;
  readonly id_not?: Maybe<Scalars['ID']>;
  readonly id_not_contains?: Maybe<Scalars['ID']>;
  readonly id_not_ends_with?: Maybe<Scalars['ID']>;
  readonly id_not_in?: Maybe<ReadonlyArray<Scalars['ID']>>;
  readonly id_not_starts_with?: Maybe<Scalars['ID']>;
  readonly id_starts_with?: Maybe<Scalars['ID']>;
  readonly itineraries_every?: Maybe<PItineraryWhereInput>;
  readonly itineraries_none?: Maybe<PItineraryWhereInput>;
  readonly itineraries_some?: Maybe<PItineraryWhereInput>;
  readonly required?: Maybe<Scalars['Boolean']>;
  readonly required_not?: Maybe<Scalars['Boolean']>;
};

export type PItineraryWhereInput = {
  readonly AND?: Maybe<ReadonlyArray<PItineraryWhereInput>>;
  readonly NOT?: Maybe<ReadonlyArray<PItineraryWhereInput>>;
  readonly OR?: Maybe<ReadonlyArray<PItineraryWhereInput>>;
  readonly amounts_every?: Maybe<PAmountWhereInput>;
  readonly amounts_none?: Maybe<PAmountWhereInput>;
  readonly amounts_some?: Maybe<PAmountWhereInput>;
  readonly arrivalAddress?: Maybe<Scalars['String']>;
  readonly arrivalAddress_contains?: Maybe<Scalars['String']>;
  readonly arrivalAddress_ends_with?: Maybe<Scalars['String']>;
  readonly arrivalAddress_gt?: Maybe<Scalars['String']>;
  readonly arrivalAddress_gte?: Maybe<Scalars['String']>;
  readonly arrivalAddress_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  readonly arrivalAddress_lt?: Maybe<Scalars['String']>;
  readonly arrivalAddress_lte?: Maybe<Scalars['String']>;
  readonly arrivalAddress_not?: Maybe<Scalars['String']>;
  readonly arrivalAddress_not_contains?: Maybe<Scalars['String']>;
  readonly arrivalAddress_not_ends_with?: Maybe<Scalars['String']>;
  readonly arrivalAddress_not_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  readonly arrivalAddress_not_starts_with?: Maybe<Scalars['String']>;
  readonly arrivalAddress_starts_with?: Maybe<Scalars['String']>;
  readonly arrivalCity?: Maybe<Scalars['String']>;
  readonly arrivalCity_contains?: Maybe<Scalars['String']>;
  readonly arrivalCity_ends_with?: Maybe<Scalars['String']>;
  readonly arrivalCity_gt?: Maybe<Scalars['String']>;
  readonly arrivalCity_gte?: Maybe<Scalars['String']>;
  readonly arrivalCity_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  readonly arrivalCity_lt?: Maybe<Scalars['String']>;
  readonly arrivalCity_lte?: Maybe<Scalars['String']>;
  readonly arrivalCity_not?: Maybe<Scalars['String']>;
  readonly arrivalCity_not_contains?: Maybe<Scalars['String']>;
  readonly arrivalCity_not_ends_with?: Maybe<Scalars['String']>;
  readonly arrivalCity_not_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  readonly arrivalCity_not_starts_with?: Maybe<Scalars['String']>;
  readonly arrivalCity_starts_with?: Maybe<Scalars['String']>;
  readonly arrivalDate?: Maybe<Scalars['DateTime']>;
  readonly arrivalDate_gt?: Maybe<Scalars['DateTime']>;
  readonly arrivalDate_gte?: Maybe<Scalars['DateTime']>;
  readonly arrivalDate_in?: Maybe<ReadonlyArray<Scalars['DateTime']>>;
  readonly arrivalDate_lt?: Maybe<Scalars['DateTime']>;
  readonly arrivalDate_lte?: Maybe<Scalars['DateTime']>;
  readonly arrivalDate_not?: Maybe<Scalars['DateTime']>;
  readonly arrivalDate_not_in?: Maybe<ReadonlyArray<Scalars['DateTime']>>;
  readonly arrivalLat?: Maybe<Scalars['Float']>;
  readonly arrivalLat_gt?: Maybe<Scalars['Float']>;
  readonly arrivalLat_gte?: Maybe<Scalars['Float']>;
  readonly arrivalLat_in?: Maybe<ReadonlyArray<Scalars['Float']>>;
  readonly arrivalLat_lt?: Maybe<Scalars['Float']>;
  readonly arrivalLat_lte?: Maybe<Scalars['Float']>;
  readonly arrivalLat_not?: Maybe<Scalars['Float']>;
  readonly arrivalLat_not_in?: Maybe<ReadonlyArray<Scalars['Float']>>;
  readonly arrivalLon?: Maybe<Scalars['Float']>;
  readonly arrivalLon_gt?: Maybe<Scalars['Float']>;
  readonly arrivalLon_gte?: Maybe<Scalars['Float']>;
  readonly arrivalLon_in?: Maybe<ReadonlyArray<Scalars['Float']>>;
  readonly arrivalLon_lt?: Maybe<Scalars['Float']>;
  readonly arrivalLon_lte?: Maybe<Scalars['Float']>;
  readonly arrivalLon_not?: Maybe<Scalars['Float']>;
  readonly arrivalLon_not_in?: Maybe<ReadonlyArray<Scalars['Float']>>;
  readonly arrivalTime?: Maybe<Scalars['DateTime']>;
  readonly arrivalTime_gt?: Maybe<Scalars['DateTime']>;
  readonly arrivalTime_gte?: Maybe<Scalars['DateTime']>;
  readonly arrivalTime_in?: Maybe<ReadonlyArray<Scalars['DateTime']>>;
  readonly arrivalTime_lt?: Maybe<Scalars['DateTime']>;
  readonly arrivalTime_lte?: Maybe<Scalars['DateTime']>;
  readonly arrivalTime_not?: Maybe<Scalars['DateTime']>;
  readonly arrivalTime_not_in?: Maybe<ReadonlyArray<Scalars['DateTime']>>;
  readonly arrivalType?: Maybe<Scalars['String']>;
  readonly arrivalType_contains?: Maybe<Scalars['String']>;
  readonly arrivalType_ends_with?: Maybe<Scalars['String']>;
  readonly arrivalType_gt?: Maybe<Scalars['String']>;
  readonly arrivalType_gte?: Maybe<Scalars['String']>;
  readonly arrivalType_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  readonly arrivalType_lt?: Maybe<Scalars['String']>;
  readonly arrivalType_lte?: Maybe<Scalars['String']>;
  readonly arrivalType_not?: Maybe<Scalars['String']>;
  readonly arrivalType_not_contains?: Maybe<Scalars['String']>;
  readonly arrivalType_not_ends_with?: Maybe<Scalars['String']>;
  readonly arrivalType_not_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  readonly arrivalType_not_starts_with?: Maybe<Scalars['String']>;
  readonly arrivalType_starts_with?: Maybe<Scalars['String']>;
  readonly budget?: Maybe<PBudgetWhereInput>;
  readonly createdAt?: Maybe<Scalars['DateTime']>;
  readonly createdAt_gt?: Maybe<Scalars['DateTime']>;
  readonly createdAt_gte?: Maybe<Scalars['DateTime']>;
  readonly createdAt_in?: Maybe<ReadonlyArray<Scalars['DateTime']>>;
  readonly createdAt_lt?: Maybe<Scalars['DateTime']>;
  readonly createdAt_lte?: Maybe<Scalars['DateTime']>;
  readonly createdAt_not?: Maybe<Scalars['DateTime']>;
  readonly createdAt_not_in?: Maybe<ReadonlyArray<Scalars['DateTime']>>;
  readonly createdBy?: Maybe<PUserWhereInput>;
  readonly departureAddress?: Maybe<Scalars['String']>;
  readonly departureAddress_contains?: Maybe<Scalars['String']>;
  readonly departureAddress_ends_with?: Maybe<Scalars['String']>;
  readonly departureAddress_gt?: Maybe<Scalars['String']>;
  readonly departureAddress_gte?: Maybe<Scalars['String']>;
  readonly departureAddress_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  readonly departureAddress_lt?: Maybe<Scalars['String']>;
  readonly departureAddress_lte?: Maybe<Scalars['String']>;
  readonly departureAddress_not?: Maybe<Scalars['String']>;
  readonly departureAddress_not_contains?: Maybe<Scalars['String']>;
  readonly departureAddress_not_ends_with?: Maybe<Scalars['String']>;
  readonly departureAddress_not_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  readonly departureAddress_not_starts_with?: Maybe<Scalars['String']>;
  readonly departureAddress_starts_with?: Maybe<Scalars['String']>;
  readonly departureCity?: Maybe<Scalars['String']>;
  readonly departureCity_contains?: Maybe<Scalars['String']>;
  readonly departureCity_ends_with?: Maybe<Scalars['String']>;
  readonly departureCity_gt?: Maybe<Scalars['String']>;
  readonly departureCity_gte?: Maybe<Scalars['String']>;
  readonly departureCity_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  readonly departureCity_lt?: Maybe<Scalars['String']>;
  readonly departureCity_lte?: Maybe<Scalars['String']>;
  readonly departureCity_not?: Maybe<Scalars['String']>;
  readonly departureCity_not_contains?: Maybe<Scalars['String']>;
  readonly departureCity_not_ends_with?: Maybe<Scalars['String']>;
  readonly departureCity_not_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  readonly departureCity_not_starts_with?: Maybe<Scalars['String']>;
  readonly departureCity_starts_with?: Maybe<Scalars['String']>;
  readonly departureDate?: Maybe<Scalars['DateTime']>;
  readonly departureDate_gt?: Maybe<Scalars['DateTime']>;
  readonly departureDate_gte?: Maybe<Scalars['DateTime']>;
  readonly departureDate_in?: Maybe<ReadonlyArray<Scalars['DateTime']>>;
  readonly departureDate_lt?: Maybe<Scalars['DateTime']>;
  readonly departureDate_lte?: Maybe<Scalars['DateTime']>;
  readonly departureDate_not?: Maybe<Scalars['DateTime']>;
  readonly departureDate_not_in?: Maybe<ReadonlyArray<Scalars['DateTime']>>;
  readonly departureLat?: Maybe<Scalars['Float']>;
  readonly departureLat_gt?: Maybe<Scalars['Float']>;
  readonly departureLat_gte?: Maybe<Scalars['Float']>;
  readonly departureLat_in?: Maybe<ReadonlyArray<Scalars['Float']>>;
  readonly departureLat_lt?: Maybe<Scalars['Float']>;
  readonly departureLat_lte?: Maybe<Scalars['Float']>;
  readonly departureLat_not?: Maybe<Scalars['Float']>;
  readonly departureLat_not_in?: Maybe<ReadonlyArray<Scalars['Float']>>;
  readonly departureLon?: Maybe<Scalars['Float']>;
  readonly departureLon_gt?: Maybe<Scalars['Float']>;
  readonly departureLon_gte?: Maybe<Scalars['Float']>;
  readonly departureLon_in?: Maybe<ReadonlyArray<Scalars['Float']>>;
  readonly departureLon_lt?: Maybe<Scalars['Float']>;
  readonly departureLon_lte?: Maybe<Scalars['Float']>;
  readonly departureLon_not?: Maybe<Scalars['Float']>;
  readonly departureLon_not_in?: Maybe<ReadonlyArray<Scalars['Float']>>;
  readonly departureTime?: Maybe<Scalars['DateTime']>;
  readonly departureTime_gt?: Maybe<Scalars['DateTime']>;
  readonly departureTime_gte?: Maybe<Scalars['DateTime']>;
  readonly departureTime_in?: Maybe<ReadonlyArray<Scalars['DateTime']>>;
  readonly departureTime_lt?: Maybe<Scalars['DateTime']>;
  readonly departureTime_lte?: Maybe<Scalars['DateTime']>;
  readonly departureTime_not?: Maybe<Scalars['DateTime']>;
  readonly departureTime_not_in?: Maybe<ReadonlyArray<Scalars['DateTime']>>;
  readonly departureType?: Maybe<Scalars['String']>;
  readonly departureType_contains?: Maybe<Scalars['String']>;
  readonly departureType_ends_with?: Maybe<Scalars['String']>;
  readonly departureType_gt?: Maybe<Scalars['String']>;
  readonly departureType_gte?: Maybe<Scalars['String']>;
  readonly departureType_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  readonly departureType_lt?: Maybe<Scalars['String']>;
  readonly departureType_lte?: Maybe<Scalars['String']>;
  readonly departureType_not?: Maybe<Scalars['String']>;
  readonly departureType_not_contains?: Maybe<Scalars['String']>;
  readonly departureType_not_ends_with?: Maybe<Scalars['String']>;
  readonly departureType_not_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  readonly departureType_not_starts_with?: Maybe<Scalars['String']>;
  readonly departureType_starts_with?: Maybe<Scalars['String']>;
  readonly dinner?: Maybe<Scalars['Boolean']>;
  readonly dinner_not?: Maybe<Scalars['Boolean']>;
  readonly driverFeatures_every?: Maybe<PItineraryDriverFeatureWhereInput>;
  readonly driverFeatures_none?: Maybe<PItineraryDriverFeatureWhereInput>;
  readonly driverFeatures_some?: Maybe<PItineraryDriverFeatureWhereInput>;
  readonly flightNumber?: Maybe<Scalars['String']>;
  readonly flightNumber_contains?: Maybe<Scalars['String']>;
  readonly flightNumber_ends_with?: Maybe<Scalars['String']>;
  readonly flightNumber_gt?: Maybe<Scalars['String']>;
  readonly flightNumber_gte?: Maybe<Scalars['String']>;
  readonly flightNumber_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  readonly flightNumber_lt?: Maybe<Scalars['String']>;
  readonly flightNumber_lte?: Maybe<Scalars['String']>;
  readonly flightNumber_not?: Maybe<Scalars['String']>;
  readonly flightNumber_not_contains?: Maybe<Scalars['String']>;
  readonly flightNumber_not_ends_with?: Maybe<Scalars['String']>;
  readonly flightNumber_not_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  readonly flightNumber_not_starts_with?: Maybe<Scalars['String']>;
  readonly flightNumber_starts_with?: Maybe<Scalars['String']>;
  readonly groupName?: Maybe<Scalars['String']>;
  readonly groupName_contains?: Maybe<Scalars['String']>;
  readonly groupName_ends_with?: Maybe<Scalars['String']>;
  readonly groupName_gt?: Maybe<Scalars['String']>;
  readonly groupName_gte?: Maybe<Scalars['String']>;
  readonly groupName_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  readonly groupName_lt?: Maybe<Scalars['String']>;
  readonly groupName_lte?: Maybe<Scalars['String']>;
  readonly groupName_not?: Maybe<Scalars['String']>;
  readonly groupName_not_contains?: Maybe<Scalars['String']>;
  readonly groupName_not_ends_with?: Maybe<Scalars['String']>;
  readonly groupName_not_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  readonly groupName_not_starts_with?: Maybe<Scalars['String']>;
  readonly groupName_starts_with?: Maybe<Scalars['String']>;
  readonly hours?: Maybe<Scalars['Float']>;
  readonly hours_gt?: Maybe<Scalars['Float']>;
  readonly hours_gte?: Maybe<Scalars['Float']>;
  readonly hours_in?: Maybe<ReadonlyArray<Scalars['Float']>>;
  readonly hours_lt?: Maybe<Scalars['Float']>;
  readonly hours_lte?: Maybe<Scalars['Float']>;
  readonly hours_not?: Maybe<Scalars['Float']>;
  readonly hours_not_in?: Maybe<ReadonlyArray<Scalars['Float']>>;
  readonly id?: Maybe<Scalars['ID']>;
  readonly id_contains?: Maybe<Scalars['ID']>;
  readonly id_ends_with?: Maybe<Scalars['ID']>;
  readonly id_gt?: Maybe<Scalars['ID']>;
  readonly id_gte?: Maybe<Scalars['ID']>;
  readonly id_in?: Maybe<ReadonlyArray<Scalars['ID']>>;
  readonly id_lt?: Maybe<Scalars['ID']>;
  readonly id_lte?: Maybe<Scalars['ID']>;
  readonly id_not?: Maybe<Scalars['ID']>;
  readonly id_not_contains?: Maybe<Scalars['ID']>;
  readonly id_not_ends_with?: Maybe<Scalars['ID']>;
  readonly id_not_in?: Maybe<ReadonlyArray<Scalars['ID']>>;
  readonly id_not_starts_with?: Maybe<Scalars['ID']>;
  readonly id_starts_with?: Maybe<Scalars['ID']>;
  readonly itineraryDescription?: Maybe<Scalars['String']>;
  readonly itineraryDescription_contains?: Maybe<Scalars['String']>;
  readonly itineraryDescription_ends_with?: Maybe<Scalars['String']>;
  readonly itineraryDescription_gt?: Maybe<Scalars['String']>;
  readonly itineraryDescription_gte?: Maybe<Scalars['String']>;
  readonly itineraryDescription_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  readonly itineraryDescription_lt?: Maybe<Scalars['String']>;
  readonly itineraryDescription_lte?: Maybe<Scalars['String']>;
  readonly itineraryDescription_not?: Maybe<Scalars['String']>;
  readonly itineraryDescription_not_contains?: Maybe<Scalars['String']>;
  readonly itineraryDescription_not_ends_with?: Maybe<Scalars['String']>;
  readonly itineraryDescription_not_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  readonly itineraryDescription_not_starts_with?: Maybe<Scalars['String']>;
  readonly itineraryDescription_starts_with?: Maybe<Scalars['String']>;
  readonly notes?: Maybe<Scalars['String']>;
  readonly notes_contains?: Maybe<Scalars['String']>;
  readonly notes_ends_with?: Maybe<Scalars['String']>;
  readonly notes_gt?: Maybe<Scalars['String']>;
  readonly notes_gte?: Maybe<Scalars['String']>;
  readonly notes_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  readonly notes_lt?: Maybe<Scalars['String']>;
  readonly notes_lte?: Maybe<Scalars['String']>;
  readonly notes_not?: Maybe<Scalars['String']>;
  readonly notes_not_contains?: Maybe<Scalars['String']>;
  readonly notes_not_ends_with?: Maybe<Scalars['String']>;
  readonly notes_not_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  readonly notes_not_starts_with?: Maybe<Scalars['String']>;
  readonly notes_starts_with?: Maybe<Scalars['String']>;
  readonly numPassengers?: Maybe<Scalars['Int']>;
  readonly numPassengers_gt?: Maybe<Scalars['Int']>;
  readonly numPassengers_gte?: Maybe<Scalars['Int']>;
  readonly numPassengers_in?: Maybe<ReadonlyArray<Scalars['Int']>>;
  readonly numPassengers_lt?: Maybe<Scalars['Int']>;
  readonly numPassengers_lte?: Maybe<Scalars['Int']>;
  readonly numPassengers_not?: Maybe<Scalars['Int']>;
  readonly numPassengers_not_in?: Maybe<ReadonlyArray<Scalars['Int']>>;
  readonly numVehicles?: Maybe<Scalars['Int']>;
  readonly numVehicles_gt?: Maybe<Scalars['Int']>;
  readonly numVehicles_gte?: Maybe<Scalars['Int']>;
  readonly numVehicles_in?: Maybe<ReadonlyArray<Scalars['Int']>>;
  readonly numVehicles_lt?: Maybe<Scalars['Int']>;
  readonly numVehicles_lte?: Maybe<Scalars['Int']>;
  readonly numVehicles_not?: Maybe<Scalars['Int']>;
  readonly numVehicles_not_in?: Maybe<ReadonlyArray<Scalars['Int']>>;
  readonly presentationTime?: Maybe<Scalars['DateTime']>;
  readonly presentationTime_gt?: Maybe<Scalars['DateTime']>;
  readonly presentationTime_gte?: Maybe<Scalars['DateTime']>;
  readonly presentationTime_in?: Maybe<ReadonlyArray<Scalars['DateTime']>>;
  readonly presentationTime_lt?: Maybe<Scalars['DateTime']>;
  readonly presentationTime_lte?: Maybe<Scalars['DateTime']>;
  readonly presentationTime_not?: Maybe<Scalars['DateTime']>;
  readonly presentationTime_not_in?: Maybe<ReadonlyArray<Scalars['DateTime']>>;
  readonly realized?: Maybe<Scalars['Boolean']>;
  readonly realized_not?: Maybe<Scalars['Boolean']>;
  readonly reference?: Maybe<Scalars['String']>;
  readonly reference_contains?: Maybe<Scalars['String']>;
  readonly reference_ends_with?: Maybe<Scalars['String']>;
  readonly reference_gt?: Maybe<Scalars['String']>;
  readonly reference_gte?: Maybe<Scalars['String']>;
  readonly reference_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  readonly reference_lt?: Maybe<Scalars['String']>;
  readonly reference_lte?: Maybe<Scalars['String']>;
  readonly reference_not?: Maybe<Scalars['String']>;
  readonly reference_not_contains?: Maybe<Scalars['String']>;
  readonly reference_not_ends_with?: Maybe<Scalars['String']>;
  readonly reference_not_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  readonly reference_not_starts_with?: Maybe<Scalars['String']>;
  readonly reference_starts_with?: Maybe<Scalars['String']>;
  readonly service?: Maybe<PServiceWhereInput>;
  readonly serviceDescription?: Maybe<Scalars['String']>;
  readonly serviceDescription_contains?: Maybe<Scalars['String']>;
  readonly serviceDescription_ends_with?: Maybe<Scalars['String']>;
  readonly serviceDescription_gt?: Maybe<Scalars['String']>;
  readonly serviceDescription_gte?: Maybe<Scalars['String']>;
  readonly serviceDescription_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  readonly serviceDescription_lt?: Maybe<Scalars['String']>;
  readonly serviceDescription_lte?: Maybe<Scalars['String']>;
  readonly serviceDescription_not?: Maybe<Scalars['String']>;
  readonly serviceDescription_not_contains?: Maybe<Scalars['String']>;
  readonly serviceDescription_not_ends_with?: Maybe<Scalars['String']>;
  readonly serviceDescription_not_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  readonly serviceDescription_not_starts_with?: Maybe<Scalars['String']>;
  readonly serviceDescription_starts_with?: Maybe<Scalars['String']>;
  readonly serviceType?: Maybe<PServiceTypeWhereInput>;
  readonly updatedAt?: Maybe<Scalars['DateTime']>;
  readonly updatedAt_gt?: Maybe<Scalars['DateTime']>;
  readonly updatedAt_gte?: Maybe<Scalars['DateTime']>;
  readonly updatedAt_in?: Maybe<ReadonlyArray<Scalars['DateTime']>>;
  readonly updatedAt_lt?: Maybe<Scalars['DateTime']>;
  readonly updatedAt_lte?: Maybe<Scalars['DateTime']>;
  readonly updatedAt_not?: Maybe<Scalars['DateTime']>;
  readonly updatedAt_not_in?: Maybe<ReadonlyArray<Scalars['DateTime']>>;
  readonly vehicleBrand?: Maybe<PVehicleBrandWhereInput>;
  readonly vehicleFeatures_every?: Maybe<PItineraryVehicleFeatureWhereInput>;
  readonly vehicleFeatures_none?: Maybe<PItineraryVehicleFeatureWhereInput>;
  readonly vehicleFeatures_some?: Maybe<PItineraryVehicleFeatureWhereInput>;
  readonly vehicleModel?: Maybe<PVehicleModelWhereInput>;
  readonly vehicleType?: Maybe<PVehicleTypeWhereInput>;
};

export type PPassenger = {
  readonly __typename?: 'PPassenger';
  readonly belongsToUser?: Maybe<PUser>;
  readonly createdAt: Scalars['DateTime'];
  readonly email: Scalars['String'];
  readonly id: Scalars['ID'];
  readonly name?: Maybe<Scalars['String']>;
  readonly phone?: Maybe<Scalars['String']>;
  readonly services?: Maybe<ReadonlyArray<PService>>;
  readonly updatedAt: Scalars['DateTime'];
};


export type PPassengerServicesArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<PServiceOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<PServiceWhereInput>;
};

export enum PPassengerOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  EmailAsc = 'email_ASC',
  EmailDesc = 'email_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PhoneAsc = 'phone_ASC',
  PhoneDesc = 'phone_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type PPassengerWhereInput = {
  readonly AND?: Maybe<ReadonlyArray<PPassengerWhereInput>>;
  readonly NOT?: Maybe<ReadonlyArray<PPassengerWhereInput>>;
  readonly OR?: Maybe<ReadonlyArray<PPassengerWhereInput>>;
  readonly belongsToUser?: Maybe<PUserWhereInput>;
  readonly createdAt?: Maybe<Scalars['DateTime']>;
  readonly createdAt_gt?: Maybe<Scalars['DateTime']>;
  readonly createdAt_gte?: Maybe<Scalars['DateTime']>;
  readonly createdAt_in?: Maybe<ReadonlyArray<Scalars['DateTime']>>;
  readonly createdAt_lt?: Maybe<Scalars['DateTime']>;
  readonly createdAt_lte?: Maybe<Scalars['DateTime']>;
  readonly createdAt_not?: Maybe<Scalars['DateTime']>;
  readonly createdAt_not_in?: Maybe<ReadonlyArray<Scalars['DateTime']>>;
  readonly email?: Maybe<Scalars['String']>;
  readonly email_contains?: Maybe<Scalars['String']>;
  readonly email_ends_with?: Maybe<Scalars['String']>;
  readonly email_gt?: Maybe<Scalars['String']>;
  readonly email_gte?: Maybe<Scalars['String']>;
  readonly email_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  readonly email_lt?: Maybe<Scalars['String']>;
  readonly email_lte?: Maybe<Scalars['String']>;
  readonly email_not?: Maybe<Scalars['String']>;
  readonly email_not_contains?: Maybe<Scalars['String']>;
  readonly email_not_ends_with?: Maybe<Scalars['String']>;
  readonly email_not_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  readonly email_not_starts_with?: Maybe<Scalars['String']>;
  readonly email_starts_with?: Maybe<Scalars['String']>;
  readonly id?: Maybe<Scalars['ID']>;
  readonly id_contains?: Maybe<Scalars['ID']>;
  readonly id_ends_with?: Maybe<Scalars['ID']>;
  readonly id_gt?: Maybe<Scalars['ID']>;
  readonly id_gte?: Maybe<Scalars['ID']>;
  readonly id_in?: Maybe<ReadonlyArray<Scalars['ID']>>;
  readonly id_lt?: Maybe<Scalars['ID']>;
  readonly id_lte?: Maybe<Scalars['ID']>;
  readonly id_not?: Maybe<Scalars['ID']>;
  readonly id_not_contains?: Maybe<Scalars['ID']>;
  readonly id_not_ends_with?: Maybe<Scalars['ID']>;
  readonly id_not_in?: Maybe<ReadonlyArray<Scalars['ID']>>;
  readonly id_not_starts_with?: Maybe<Scalars['ID']>;
  readonly id_starts_with?: Maybe<Scalars['ID']>;
  readonly name?: Maybe<Scalars['String']>;
  readonly name_contains?: Maybe<Scalars['String']>;
  readonly name_ends_with?: Maybe<Scalars['String']>;
  readonly name_gt?: Maybe<Scalars['String']>;
  readonly name_gte?: Maybe<Scalars['String']>;
  readonly name_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  readonly name_lt?: Maybe<Scalars['String']>;
  readonly name_lte?: Maybe<Scalars['String']>;
  readonly name_not?: Maybe<Scalars['String']>;
  readonly name_not_contains?: Maybe<Scalars['String']>;
  readonly name_not_ends_with?: Maybe<Scalars['String']>;
  readonly name_not_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  readonly name_not_starts_with?: Maybe<Scalars['String']>;
  readonly name_starts_with?: Maybe<Scalars['String']>;
  readonly phone?: Maybe<Scalars['String']>;
  readonly phone_contains?: Maybe<Scalars['String']>;
  readonly phone_ends_with?: Maybe<Scalars['String']>;
  readonly phone_gt?: Maybe<Scalars['String']>;
  readonly phone_gte?: Maybe<Scalars['String']>;
  readonly phone_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  readonly phone_lt?: Maybe<Scalars['String']>;
  readonly phone_lte?: Maybe<Scalars['String']>;
  readonly phone_not?: Maybe<Scalars['String']>;
  readonly phone_not_contains?: Maybe<Scalars['String']>;
  readonly phone_not_ends_with?: Maybe<Scalars['String']>;
  readonly phone_not_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  readonly phone_not_starts_with?: Maybe<Scalars['String']>;
  readonly phone_starts_with?: Maybe<Scalars['String']>;
  readonly services_every?: Maybe<PServiceWhereInput>;
  readonly services_none?: Maybe<PServiceWhereInput>;
  readonly services_some?: Maybe<PServiceWhereInput>;
  readonly updatedAt?: Maybe<Scalars['DateTime']>;
  readonly updatedAt_gt?: Maybe<Scalars['DateTime']>;
  readonly updatedAt_gte?: Maybe<Scalars['DateTime']>;
  readonly updatedAt_in?: Maybe<ReadonlyArray<Scalars['DateTime']>>;
  readonly updatedAt_lt?: Maybe<Scalars['DateTime']>;
  readonly updatedAt_lte?: Maybe<Scalars['DateTime']>;
  readonly updatedAt_not?: Maybe<Scalars['DateTime']>;
  readonly updatedAt_not_in?: Maybe<ReadonlyArray<Scalars['DateTime']>>;
};

export type PRate = {
  readonly __typename?: 'PRate';
  readonly client?: Maybe<PUser>;
  readonly id: Scalars['ID'];
  readonly isGlobal: Scalars['Boolean'];
  readonly serviceTypes?: Maybe<ReadonlyArray<PServiceType>>;
  readonly vehicleVariables?: Maybe<ReadonlyArray<VehiclePricing>>;
};


export type PRateServiceTypesArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<PServiceTypeOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<PServiceTypeWhereInput>;
};


export type PRateVehicleVariablesArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<VehiclePricingOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<VehiclePricingWhereInput>;
};

export type PRateCondition = {
  readonly __typename?: 'PRateCondition';
  readonly basePrice?: Maybe<Scalars['Float']>;
  readonly client?: Maybe<PUser>;
  readonly conditionActivation?: Maybe<ConditionActivationType>;
  readonly conditionType: ConditionType;
  readonly description?: Maybe<Scalars['String']>;
  readonly executionOrderIndex?: Maybe<Scalars['Int']>;
  readonly id: Scalars['ID'];
  readonly name: Scalars['String'];
  readonly numPassengers?: Maybe<Scalars['Int']>;
  readonly rate?: Maybe<PRate>;
  readonly serviceType?: Maybe<ConditionAllowedServiceType>;
  readonly switchSubject?: Maybe<ConditionSwitchSubject>;
  readonly switchValues?: Maybe<ReadonlyArray<PRateCondition>>;
  readonly threshold?: Maybe<Scalars['Float']>;
  readonly vehicleBrand?: Maybe<PVehicleBrand>;
  readonly vehicleModel?: Maybe<PVehicleModel>;
  readonly vehicleType?: Maybe<PVehicleType>;
  readonly visibleForClient?: Maybe<Scalars['Boolean']>;
};


export type PRateConditionSwitchValuesArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<PRateConditionOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<PRateConditionWhereInput>;
};

export enum PRateConditionOrderByInput {
  BasePriceAsc = 'basePrice_ASC',
  BasePriceDesc = 'basePrice_DESC',
  ConditionActivationAsc = 'conditionActivation_ASC',
  ConditionActivationDesc = 'conditionActivation_DESC',
  ConditionTypeAsc = 'conditionType_ASC',
  ConditionTypeDesc = 'conditionType_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  ExecutionOrderIndexAsc = 'executionOrderIndex_ASC',
  ExecutionOrderIndexDesc = 'executionOrderIndex_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  NumPassengersAsc = 'numPassengers_ASC',
  NumPassengersDesc = 'numPassengers_DESC',
  ServiceTypeAsc = 'serviceType_ASC',
  ServiceTypeDesc = 'serviceType_DESC',
  SwitchSubjectAsc = 'switchSubject_ASC',
  SwitchSubjectDesc = 'switchSubject_DESC',
  ThresholdAsc = 'threshold_ASC',
  ThresholdDesc = 'threshold_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  VisibleForClientAsc = 'visibleForClient_ASC',
  VisibleForClientDesc = 'visibleForClient_DESC'
}

export type PRateConditionWhereInput = {
  readonly AND?: Maybe<ReadonlyArray<PRateConditionWhereInput>>;
  readonly NOT?: Maybe<ReadonlyArray<PRateConditionWhereInput>>;
  readonly OR?: Maybe<ReadonlyArray<PRateConditionWhereInput>>;
  readonly basePrice?: Maybe<Scalars['Float']>;
  readonly basePrice_gt?: Maybe<Scalars['Float']>;
  readonly basePrice_gte?: Maybe<Scalars['Float']>;
  readonly basePrice_in?: Maybe<ReadonlyArray<Scalars['Float']>>;
  readonly basePrice_lt?: Maybe<Scalars['Float']>;
  readonly basePrice_lte?: Maybe<Scalars['Float']>;
  readonly basePrice_not?: Maybe<Scalars['Float']>;
  readonly basePrice_not_in?: Maybe<ReadonlyArray<Scalars['Float']>>;
  readonly client?: Maybe<PUserWhereInput>;
  readonly conditionActivation?: Maybe<ConditionActivationType>;
  readonly conditionActivation_in?: Maybe<ReadonlyArray<ConditionActivationType>>;
  readonly conditionActivation_not?: Maybe<ConditionActivationType>;
  readonly conditionActivation_not_in?: Maybe<ReadonlyArray<ConditionActivationType>>;
  readonly conditionType?: Maybe<ConditionType>;
  readonly conditionType_in?: Maybe<ReadonlyArray<ConditionType>>;
  readonly conditionType_not?: Maybe<ConditionType>;
  readonly conditionType_not_in?: Maybe<ReadonlyArray<ConditionType>>;
  readonly description?: Maybe<Scalars['String']>;
  readonly description_contains?: Maybe<Scalars['String']>;
  readonly description_ends_with?: Maybe<Scalars['String']>;
  readonly description_gt?: Maybe<Scalars['String']>;
  readonly description_gte?: Maybe<Scalars['String']>;
  readonly description_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  readonly description_lt?: Maybe<Scalars['String']>;
  readonly description_lte?: Maybe<Scalars['String']>;
  readonly description_not?: Maybe<Scalars['String']>;
  readonly description_not_contains?: Maybe<Scalars['String']>;
  readonly description_not_ends_with?: Maybe<Scalars['String']>;
  readonly description_not_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  readonly description_not_starts_with?: Maybe<Scalars['String']>;
  readonly description_starts_with?: Maybe<Scalars['String']>;
  readonly executionOrderIndex?: Maybe<Scalars['Int']>;
  readonly executionOrderIndex_gt?: Maybe<Scalars['Int']>;
  readonly executionOrderIndex_gte?: Maybe<Scalars['Int']>;
  readonly executionOrderIndex_in?: Maybe<ReadonlyArray<Scalars['Int']>>;
  readonly executionOrderIndex_lt?: Maybe<Scalars['Int']>;
  readonly executionOrderIndex_lte?: Maybe<Scalars['Int']>;
  readonly executionOrderIndex_not?: Maybe<Scalars['Int']>;
  readonly executionOrderIndex_not_in?: Maybe<ReadonlyArray<Scalars['Int']>>;
  readonly id?: Maybe<Scalars['ID']>;
  readonly id_contains?: Maybe<Scalars['ID']>;
  readonly id_ends_with?: Maybe<Scalars['ID']>;
  readonly id_gt?: Maybe<Scalars['ID']>;
  readonly id_gte?: Maybe<Scalars['ID']>;
  readonly id_in?: Maybe<ReadonlyArray<Scalars['ID']>>;
  readonly id_lt?: Maybe<Scalars['ID']>;
  readonly id_lte?: Maybe<Scalars['ID']>;
  readonly id_not?: Maybe<Scalars['ID']>;
  readonly id_not_contains?: Maybe<Scalars['ID']>;
  readonly id_not_ends_with?: Maybe<Scalars['ID']>;
  readonly id_not_in?: Maybe<ReadonlyArray<Scalars['ID']>>;
  readonly id_not_starts_with?: Maybe<Scalars['ID']>;
  readonly id_starts_with?: Maybe<Scalars['ID']>;
  readonly name?: Maybe<Scalars['String']>;
  readonly name_contains?: Maybe<Scalars['String']>;
  readonly name_ends_with?: Maybe<Scalars['String']>;
  readonly name_gt?: Maybe<Scalars['String']>;
  readonly name_gte?: Maybe<Scalars['String']>;
  readonly name_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  readonly name_lt?: Maybe<Scalars['String']>;
  readonly name_lte?: Maybe<Scalars['String']>;
  readonly name_not?: Maybe<Scalars['String']>;
  readonly name_not_contains?: Maybe<Scalars['String']>;
  readonly name_not_ends_with?: Maybe<Scalars['String']>;
  readonly name_not_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  readonly name_not_starts_with?: Maybe<Scalars['String']>;
  readonly name_starts_with?: Maybe<Scalars['String']>;
  readonly numPassengers?: Maybe<Scalars['Int']>;
  readonly numPassengers_gt?: Maybe<Scalars['Int']>;
  readonly numPassengers_gte?: Maybe<Scalars['Int']>;
  readonly numPassengers_in?: Maybe<ReadonlyArray<Scalars['Int']>>;
  readonly numPassengers_lt?: Maybe<Scalars['Int']>;
  readonly numPassengers_lte?: Maybe<Scalars['Int']>;
  readonly numPassengers_not?: Maybe<Scalars['Int']>;
  readonly numPassengers_not_in?: Maybe<ReadonlyArray<Scalars['Int']>>;
  readonly rate?: Maybe<PRateWhereInput>;
  readonly serviceType?: Maybe<ConditionAllowedServiceType>;
  readonly serviceType_in?: Maybe<ReadonlyArray<ConditionAllowedServiceType>>;
  readonly serviceType_not?: Maybe<ConditionAllowedServiceType>;
  readonly serviceType_not_in?: Maybe<ReadonlyArray<ConditionAllowedServiceType>>;
  readonly switchSubject?: Maybe<ConditionSwitchSubject>;
  readonly switchSubject_in?: Maybe<ReadonlyArray<ConditionSwitchSubject>>;
  readonly switchSubject_not?: Maybe<ConditionSwitchSubject>;
  readonly switchSubject_not_in?: Maybe<ReadonlyArray<ConditionSwitchSubject>>;
  readonly switchValues_every?: Maybe<PRateConditionWhereInput>;
  readonly switchValues_none?: Maybe<PRateConditionWhereInput>;
  readonly switchValues_some?: Maybe<PRateConditionWhereInput>;
  readonly threshold?: Maybe<Scalars['Float']>;
  readonly threshold_gt?: Maybe<Scalars['Float']>;
  readonly threshold_gte?: Maybe<Scalars['Float']>;
  readonly threshold_in?: Maybe<ReadonlyArray<Scalars['Float']>>;
  readonly threshold_lt?: Maybe<Scalars['Float']>;
  readonly threshold_lte?: Maybe<Scalars['Float']>;
  readonly threshold_not?: Maybe<Scalars['Float']>;
  readonly threshold_not_in?: Maybe<ReadonlyArray<Scalars['Float']>>;
  readonly vehicleBrand?: Maybe<PVehicleBrandWhereInput>;
  readonly vehicleModel?: Maybe<PVehicleModelWhereInput>;
  readonly vehicleType?: Maybe<PVehicleTypeWhereInput>;
  readonly visibleForClient?: Maybe<Scalars['Boolean']>;
  readonly visibleForClient_not?: Maybe<Scalars['Boolean']>;
};

export type PRateWhereInput = {
  readonly AND?: Maybe<ReadonlyArray<PRateWhereInput>>;
  readonly NOT?: Maybe<ReadonlyArray<PRateWhereInput>>;
  readonly OR?: Maybe<ReadonlyArray<PRateWhereInput>>;
  readonly client?: Maybe<PUserWhereInput>;
  readonly id?: Maybe<Scalars['ID']>;
  readonly id_contains?: Maybe<Scalars['ID']>;
  readonly id_ends_with?: Maybe<Scalars['ID']>;
  readonly id_gt?: Maybe<Scalars['ID']>;
  readonly id_gte?: Maybe<Scalars['ID']>;
  readonly id_in?: Maybe<ReadonlyArray<Scalars['ID']>>;
  readonly id_lt?: Maybe<Scalars['ID']>;
  readonly id_lte?: Maybe<Scalars['ID']>;
  readonly id_not?: Maybe<Scalars['ID']>;
  readonly id_not_contains?: Maybe<Scalars['ID']>;
  readonly id_not_ends_with?: Maybe<Scalars['ID']>;
  readonly id_not_in?: Maybe<ReadonlyArray<Scalars['ID']>>;
  readonly id_not_starts_with?: Maybe<Scalars['ID']>;
  readonly id_starts_with?: Maybe<Scalars['ID']>;
  readonly isGlobal?: Maybe<Scalars['Boolean']>;
  readonly isGlobal_not?: Maybe<Scalars['Boolean']>;
  readonly serviceTypes_every?: Maybe<PServiceTypeWhereInput>;
  readonly serviceTypes_none?: Maybe<PServiceTypeWhereInput>;
  readonly serviceTypes_some?: Maybe<PServiceTypeWhereInput>;
  readonly vehicleVariables_every?: Maybe<VehiclePricingWhereInput>;
  readonly vehicleVariables_none?: Maybe<VehiclePricingWhereInput>;
  readonly vehicleVariables_some?: Maybe<VehiclePricingWhereInput>;
};

export type PService = {
  readonly __typename?: 'PService';
  readonly arrivalAddress?: Maybe<Scalars['String']>;
  readonly arrivalLat?: Maybe<Scalars['Float']>;
  readonly arrivalLon?: Maybe<Scalars['Float']>;
  readonly canceled?: Maybe<Scalars['Boolean']>;
  readonly client?: Maybe<PUser>;
  readonly createdAt: Scalars['DateTime'];
  readonly departureAddress?: Maybe<Scalars['String']>;
  readonly departureLat?: Maybe<Scalars['Float']>;
  readonly departureLon?: Maybe<Scalars['Float']>;
  readonly driver?: Maybe<PDriver>;
  readonly id: Scalars['ID'];
  readonly itinerary?: Maybe<PItinerary>;
  readonly owner?: Maybe<PUser>;
  readonly passengers?: Maybe<ReadonlyArray<PPassenger>>;
  readonly secondaryDriver?: Maybe<PDriver>;
  readonly type: PServiceType;
  readonly updatedAt: Scalars['DateTime'];
  readonly volcanoServiceId?: Maybe<Scalars['String']>;
};


export type PServicePassengersArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<PPassengerOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<PPassengerWhereInput>;
};

export enum PServiceOrderByInput {
  ArrivalAddressAsc = 'arrivalAddress_ASC',
  ArrivalAddressDesc = 'arrivalAddress_DESC',
  ArrivalLatAsc = 'arrivalLat_ASC',
  ArrivalLatDesc = 'arrivalLat_DESC',
  ArrivalLonAsc = 'arrivalLon_ASC',
  ArrivalLonDesc = 'arrivalLon_DESC',
  CanceledAsc = 'canceled_ASC',
  CanceledDesc = 'canceled_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DepartureAddressAsc = 'departureAddress_ASC',
  DepartureAddressDesc = 'departureAddress_DESC',
  DepartureLatAsc = 'departureLat_ASC',
  DepartureLatDesc = 'departureLat_DESC',
  DepartureLonAsc = 'departureLon_ASC',
  DepartureLonDesc = 'departureLon_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  VolcanoServiceIdAsc = 'volcanoServiceId_ASC',
  VolcanoServiceIdDesc = 'volcanoServiceId_DESC'
}

export type PServiceSubtype = {
  readonly __typename?: 'PServiceSubtype';
  readonly code?: Maybe<Scalars['String']>;
  readonly description?: Maybe<Scalars['String']>;
  readonly dinner: Scalars['Boolean'];
  readonly fulfillingCondition: PRateCondition;
  readonly hours: Scalars['Float'];
  readonly id: Scalars['ID'];
  readonly name: Scalars['String'];
  readonly parentType: PServiceType;
  readonly priceConditions?: Maybe<ReadonlyArray<PRateCondition>>;
};


export type PServiceSubtypePriceConditionsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<PRateConditionOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<PRateConditionWhereInput>;
};

export enum PServiceSubtypeOrderByInput {
  CodeAsc = 'code_ASC',
  CodeDesc = 'code_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  DinnerAsc = 'dinner_ASC',
  DinnerDesc = 'dinner_DESC',
  HoursAsc = 'hours_ASC',
  HoursDesc = 'hours_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type PServiceSubtypeWhereInput = {
  readonly AND?: Maybe<ReadonlyArray<PServiceSubtypeWhereInput>>;
  readonly NOT?: Maybe<ReadonlyArray<PServiceSubtypeWhereInput>>;
  readonly OR?: Maybe<ReadonlyArray<PServiceSubtypeWhereInput>>;
  readonly code?: Maybe<Scalars['String']>;
  readonly code_contains?: Maybe<Scalars['String']>;
  readonly code_ends_with?: Maybe<Scalars['String']>;
  readonly code_gt?: Maybe<Scalars['String']>;
  readonly code_gte?: Maybe<Scalars['String']>;
  readonly code_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  readonly code_lt?: Maybe<Scalars['String']>;
  readonly code_lte?: Maybe<Scalars['String']>;
  readonly code_not?: Maybe<Scalars['String']>;
  readonly code_not_contains?: Maybe<Scalars['String']>;
  readonly code_not_ends_with?: Maybe<Scalars['String']>;
  readonly code_not_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  readonly code_not_starts_with?: Maybe<Scalars['String']>;
  readonly code_starts_with?: Maybe<Scalars['String']>;
  readonly description?: Maybe<Scalars['String']>;
  readonly description_contains?: Maybe<Scalars['String']>;
  readonly description_ends_with?: Maybe<Scalars['String']>;
  readonly description_gt?: Maybe<Scalars['String']>;
  readonly description_gte?: Maybe<Scalars['String']>;
  readonly description_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  readonly description_lt?: Maybe<Scalars['String']>;
  readonly description_lte?: Maybe<Scalars['String']>;
  readonly description_not?: Maybe<Scalars['String']>;
  readonly description_not_contains?: Maybe<Scalars['String']>;
  readonly description_not_ends_with?: Maybe<Scalars['String']>;
  readonly description_not_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  readonly description_not_starts_with?: Maybe<Scalars['String']>;
  readonly description_starts_with?: Maybe<Scalars['String']>;
  readonly dinner?: Maybe<Scalars['Boolean']>;
  readonly dinner_not?: Maybe<Scalars['Boolean']>;
  readonly fulfillingCondition?: Maybe<PRateConditionWhereInput>;
  readonly hours?: Maybe<Scalars['Float']>;
  readonly hours_gt?: Maybe<Scalars['Float']>;
  readonly hours_gte?: Maybe<Scalars['Float']>;
  readonly hours_in?: Maybe<ReadonlyArray<Scalars['Float']>>;
  readonly hours_lt?: Maybe<Scalars['Float']>;
  readonly hours_lte?: Maybe<Scalars['Float']>;
  readonly hours_not?: Maybe<Scalars['Float']>;
  readonly hours_not_in?: Maybe<ReadonlyArray<Scalars['Float']>>;
  readonly id?: Maybe<Scalars['ID']>;
  readonly id_contains?: Maybe<Scalars['ID']>;
  readonly id_ends_with?: Maybe<Scalars['ID']>;
  readonly id_gt?: Maybe<Scalars['ID']>;
  readonly id_gte?: Maybe<Scalars['ID']>;
  readonly id_in?: Maybe<ReadonlyArray<Scalars['ID']>>;
  readonly id_lt?: Maybe<Scalars['ID']>;
  readonly id_lte?: Maybe<Scalars['ID']>;
  readonly id_not?: Maybe<Scalars['ID']>;
  readonly id_not_contains?: Maybe<Scalars['ID']>;
  readonly id_not_ends_with?: Maybe<Scalars['ID']>;
  readonly id_not_in?: Maybe<ReadonlyArray<Scalars['ID']>>;
  readonly id_not_starts_with?: Maybe<Scalars['ID']>;
  readonly id_starts_with?: Maybe<Scalars['ID']>;
  readonly name?: Maybe<Scalars['String']>;
  readonly name_contains?: Maybe<Scalars['String']>;
  readonly name_ends_with?: Maybe<Scalars['String']>;
  readonly name_gt?: Maybe<Scalars['String']>;
  readonly name_gte?: Maybe<Scalars['String']>;
  readonly name_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  readonly name_lt?: Maybe<Scalars['String']>;
  readonly name_lte?: Maybe<Scalars['String']>;
  readonly name_not?: Maybe<Scalars['String']>;
  readonly name_not_contains?: Maybe<Scalars['String']>;
  readonly name_not_ends_with?: Maybe<Scalars['String']>;
  readonly name_not_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  readonly name_not_starts_with?: Maybe<Scalars['String']>;
  readonly name_starts_with?: Maybe<Scalars['String']>;
  readonly parentType?: Maybe<PServiceTypeWhereInput>;
  readonly priceConditions_every?: Maybe<PRateConditionWhereInput>;
  readonly priceConditions_none?: Maybe<PRateConditionWhereInput>;
  readonly priceConditions_some?: Maybe<PRateConditionWhereInput>;
};

export type PServiceType = {
  readonly __typename?: 'PServiceType';
  readonly description?: Maybe<Scalars['String']>;
  readonly id: Scalars['ID'];
  readonly name: Scalars['String'];
  readonly subtypes?: Maybe<ReadonlyArray<PServiceSubtype>>;
  readonly volcanoCode: Scalars['String'];
};


export type PServiceTypeSubtypesArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<PServiceSubtypeOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<PServiceSubtypeWhereInput>;
};

export enum PServiceTypeOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  VolcanoCodeAsc = 'volcanoCode_ASC',
  VolcanoCodeDesc = 'volcanoCode_DESC'
}

export type PServiceTypeWhereInput = {
  readonly AND?: Maybe<ReadonlyArray<PServiceTypeWhereInput>>;
  readonly NOT?: Maybe<ReadonlyArray<PServiceTypeWhereInput>>;
  readonly OR?: Maybe<ReadonlyArray<PServiceTypeWhereInput>>;
  readonly description?: Maybe<Scalars['String']>;
  readonly description_contains?: Maybe<Scalars['String']>;
  readonly description_ends_with?: Maybe<Scalars['String']>;
  readonly description_gt?: Maybe<Scalars['String']>;
  readonly description_gte?: Maybe<Scalars['String']>;
  readonly description_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  readonly description_lt?: Maybe<Scalars['String']>;
  readonly description_lte?: Maybe<Scalars['String']>;
  readonly description_not?: Maybe<Scalars['String']>;
  readonly description_not_contains?: Maybe<Scalars['String']>;
  readonly description_not_ends_with?: Maybe<Scalars['String']>;
  readonly description_not_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  readonly description_not_starts_with?: Maybe<Scalars['String']>;
  readonly description_starts_with?: Maybe<Scalars['String']>;
  readonly id?: Maybe<Scalars['ID']>;
  readonly id_contains?: Maybe<Scalars['ID']>;
  readonly id_ends_with?: Maybe<Scalars['ID']>;
  readonly id_gt?: Maybe<Scalars['ID']>;
  readonly id_gte?: Maybe<Scalars['ID']>;
  readonly id_in?: Maybe<ReadonlyArray<Scalars['ID']>>;
  readonly id_lt?: Maybe<Scalars['ID']>;
  readonly id_lte?: Maybe<Scalars['ID']>;
  readonly id_not?: Maybe<Scalars['ID']>;
  readonly id_not_contains?: Maybe<Scalars['ID']>;
  readonly id_not_ends_with?: Maybe<Scalars['ID']>;
  readonly id_not_in?: Maybe<ReadonlyArray<Scalars['ID']>>;
  readonly id_not_starts_with?: Maybe<Scalars['ID']>;
  readonly id_starts_with?: Maybe<Scalars['ID']>;
  readonly name?: Maybe<Scalars['String']>;
  readonly name_contains?: Maybe<Scalars['String']>;
  readonly name_ends_with?: Maybe<Scalars['String']>;
  readonly name_gt?: Maybe<Scalars['String']>;
  readonly name_gte?: Maybe<Scalars['String']>;
  readonly name_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  readonly name_lt?: Maybe<Scalars['String']>;
  readonly name_lte?: Maybe<Scalars['String']>;
  readonly name_not?: Maybe<Scalars['String']>;
  readonly name_not_contains?: Maybe<Scalars['String']>;
  readonly name_not_ends_with?: Maybe<Scalars['String']>;
  readonly name_not_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  readonly name_not_starts_with?: Maybe<Scalars['String']>;
  readonly name_starts_with?: Maybe<Scalars['String']>;
  readonly subtypes_every?: Maybe<PServiceSubtypeWhereInput>;
  readonly subtypes_none?: Maybe<PServiceSubtypeWhereInput>;
  readonly subtypes_some?: Maybe<PServiceSubtypeWhereInput>;
  readonly volcanoCode?: Maybe<Scalars['String']>;
  readonly volcanoCode_contains?: Maybe<Scalars['String']>;
  readonly volcanoCode_ends_with?: Maybe<Scalars['String']>;
  readonly volcanoCode_gt?: Maybe<Scalars['String']>;
  readonly volcanoCode_gte?: Maybe<Scalars['String']>;
  readonly volcanoCode_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  readonly volcanoCode_lt?: Maybe<Scalars['String']>;
  readonly volcanoCode_lte?: Maybe<Scalars['String']>;
  readonly volcanoCode_not?: Maybe<Scalars['String']>;
  readonly volcanoCode_not_contains?: Maybe<Scalars['String']>;
  readonly volcanoCode_not_ends_with?: Maybe<Scalars['String']>;
  readonly volcanoCode_not_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  readonly volcanoCode_not_starts_with?: Maybe<Scalars['String']>;
  readonly volcanoCode_starts_with?: Maybe<Scalars['String']>;
};

export type PServiceWhereInput = {
  readonly AND?: Maybe<ReadonlyArray<PServiceWhereInput>>;
  readonly NOT?: Maybe<ReadonlyArray<PServiceWhereInput>>;
  readonly OR?: Maybe<ReadonlyArray<PServiceWhereInput>>;
  readonly arrivalAddress?: Maybe<Scalars['String']>;
  readonly arrivalAddress_contains?: Maybe<Scalars['String']>;
  readonly arrivalAddress_ends_with?: Maybe<Scalars['String']>;
  readonly arrivalAddress_gt?: Maybe<Scalars['String']>;
  readonly arrivalAddress_gte?: Maybe<Scalars['String']>;
  readonly arrivalAddress_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  readonly arrivalAddress_lt?: Maybe<Scalars['String']>;
  readonly arrivalAddress_lte?: Maybe<Scalars['String']>;
  readonly arrivalAddress_not?: Maybe<Scalars['String']>;
  readonly arrivalAddress_not_contains?: Maybe<Scalars['String']>;
  readonly arrivalAddress_not_ends_with?: Maybe<Scalars['String']>;
  readonly arrivalAddress_not_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  readonly arrivalAddress_not_starts_with?: Maybe<Scalars['String']>;
  readonly arrivalAddress_starts_with?: Maybe<Scalars['String']>;
  readonly arrivalLat?: Maybe<Scalars['Float']>;
  readonly arrivalLat_gt?: Maybe<Scalars['Float']>;
  readonly arrivalLat_gte?: Maybe<Scalars['Float']>;
  readonly arrivalLat_in?: Maybe<ReadonlyArray<Scalars['Float']>>;
  readonly arrivalLat_lt?: Maybe<Scalars['Float']>;
  readonly arrivalLat_lte?: Maybe<Scalars['Float']>;
  readonly arrivalLat_not?: Maybe<Scalars['Float']>;
  readonly arrivalLat_not_in?: Maybe<ReadonlyArray<Scalars['Float']>>;
  readonly arrivalLon?: Maybe<Scalars['Float']>;
  readonly arrivalLon_gt?: Maybe<Scalars['Float']>;
  readonly arrivalLon_gte?: Maybe<Scalars['Float']>;
  readonly arrivalLon_in?: Maybe<ReadonlyArray<Scalars['Float']>>;
  readonly arrivalLon_lt?: Maybe<Scalars['Float']>;
  readonly arrivalLon_lte?: Maybe<Scalars['Float']>;
  readonly arrivalLon_not?: Maybe<Scalars['Float']>;
  readonly arrivalLon_not_in?: Maybe<ReadonlyArray<Scalars['Float']>>;
  readonly canceled?: Maybe<Scalars['Boolean']>;
  readonly canceled_not?: Maybe<Scalars['Boolean']>;
  readonly client?: Maybe<PUserWhereInput>;
  readonly createdAt?: Maybe<Scalars['DateTime']>;
  readonly createdAt_gt?: Maybe<Scalars['DateTime']>;
  readonly createdAt_gte?: Maybe<Scalars['DateTime']>;
  readonly createdAt_in?: Maybe<ReadonlyArray<Scalars['DateTime']>>;
  readonly createdAt_lt?: Maybe<Scalars['DateTime']>;
  readonly createdAt_lte?: Maybe<Scalars['DateTime']>;
  readonly createdAt_not?: Maybe<Scalars['DateTime']>;
  readonly createdAt_not_in?: Maybe<ReadonlyArray<Scalars['DateTime']>>;
  readonly departureAddress?: Maybe<Scalars['String']>;
  readonly departureAddress_contains?: Maybe<Scalars['String']>;
  readonly departureAddress_ends_with?: Maybe<Scalars['String']>;
  readonly departureAddress_gt?: Maybe<Scalars['String']>;
  readonly departureAddress_gte?: Maybe<Scalars['String']>;
  readonly departureAddress_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  readonly departureAddress_lt?: Maybe<Scalars['String']>;
  readonly departureAddress_lte?: Maybe<Scalars['String']>;
  readonly departureAddress_not?: Maybe<Scalars['String']>;
  readonly departureAddress_not_contains?: Maybe<Scalars['String']>;
  readonly departureAddress_not_ends_with?: Maybe<Scalars['String']>;
  readonly departureAddress_not_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  readonly departureAddress_not_starts_with?: Maybe<Scalars['String']>;
  readonly departureAddress_starts_with?: Maybe<Scalars['String']>;
  readonly departureLat?: Maybe<Scalars['Float']>;
  readonly departureLat_gt?: Maybe<Scalars['Float']>;
  readonly departureLat_gte?: Maybe<Scalars['Float']>;
  readonly departureLat_in?: Maybe<ReadonlyArray<Scalars['Float']>>;
  readonly departureLat_lt?: Maybe<Scalars['Float']>;
  readonly departureLat_lte?: Maybe<Scalars['Float']>;
  readonly departureLat_not?: Maybe<Scalars['Float']>;
  readonly departureLat_not_in?: Maybe<ReadonlyArray<Scalars['Float']>>;
  readonly departureLon?: Maybe<Scalars['Float']>;
  readonly departureLon_gt?: Maybe<Scalars['Float']>;
  readonly departureLon_gte?: Maybe<Scalars['Float']>;
  readonly departureLon_in?: Maybe<ReadonlyArray<Scalars['Float']>>;
  readonly departureLon_lt?: Maybe<Scalars['Float']>;
  readonly departureLon_lte?: Maybe<Scalars['Float']>;
  readonly departureLon_not?: Maybe<Scalars['Float']>;
  readonly departureLon_not_in?: Maybe<ReadonlyArray<Scalars['Float']>>;
  readonly driver?: Maybe<PDriverWhereInput>;
  readonly id?: Maybe<Scalars['ID']>;
  readonly id_contains?: Maybe<Scalars['ID']>;
  readonly id_ends_with?: Maybe<Scalars['ID']>;
  readonly id_gt?: Maybe<Scalars['ID']>;
  readonly id_gte?: Maybe<Scalars['ID']>;
  readonly id_in?: Maybe<ReadonlyArray<Scalars['ID']>>;
  readonly id_lt?: Maybe<Scalars['ID']>;
  readonly id_lte?: Maybe<Scalars['ID']>;
  readonly id_not?: Maybe<Scalars['ID']>;
  readonly id_not_contains?: Maybe<Scalars['ID']>;
  readonly id_not_ends_with?: Maybe<Scalars['ID']>;
  readonly id_not_in?: Maybe<ReadonlyArray<Scalars['ID']>>;
  readonly id_not_starts_with?: Maybe<Scalars['ID']>;
  readonly id_starts_with?: Maybe<Scalars['ID']>;
  readonly itinerary?: Maybe<PItineraryWhereInput>;
  readonly owner?: Maybe<PUserWhereInput>;
  readonly passengers_every?: Maybe<PPassengerWhereInput>;
  readonly passengers_none?: Maybe<PPassengerWhereInput>;
  readonly passengers_some?: Maybe<PPassengerWhereInput>;
  readonly secondaryDriver?: Maybe<PDriverWhereInput>;
  readonly type?: Maybe<PServiceTypeWhereInput>;
  readonly updatedAt?: Maybe<Scalars['DateTime']>;
  readonly updatedAt_gt?: Maybe<Scalars['DateTime']>;
  readonly updatedAt_gte?: Maybe<Scalars['DateTime']>;
  readonly updatedAt_in?: Maybe<ReadonlyArray<Scalars['DateTime']>>;
  readonly updatedAt_lt?: Maybe<Scalars['DateTime']>;
  readonly updatedAt_lte?: Maybe<Scalars['DateTime']>;
  readonly updatedAt_not?: Maybe<Scalars['DateTime']>;
  readonly updatedAt_not_in?: Maybe<ReadonlyArray<Scalars['DateTime']>>;
  readonly volcanoServiceId?: Maybe<Scalars['String']>;
  readonly volcanoServiceId_contains?: Maybe<Scalars['String']>;
  readonly volcanoServiceId_ends_with?: Maybe<Scalars['String']>;
  readonly volcanoServiceId_gt?: Maybe<Scalars['String']>;
  readonly volcanoServiceId_gte?: Maybe<Scalars['String']>;
  readonly volcanoServiceId_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  readonly volcanoServiceId_lt?: Maybe<Scalars['String']>;
  readonly volcanoServiceId_lte?: Maybe<Scalars['String']>;
  readonly volcanoServiceId_not?: Maybe<Scalars['String']>;
  readonly volcanoServiceId_not_contains?: Maybe<Scalars['String']>;
  readonly volcanoServiceId_not_ends_with?: Maybe<Scalars['String']>;
  readonly volcanoServiceId_not_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  readonly volcanoServiceId_not_starts_with?: Maybe<Scalars['String']>;
  readonly volcanoServiceId_starts_with?: Maybe<Scalars['String']>;
};

export type PUser = {
  readonly __typename?: 'PUser';
  readonly clientBudgets?: Maybe<ReadonlyArray<PBudget>>;
  readonly clientEmployees?: Maybe<ReadonlyArray<PUser>>;
  readonly clientEmployer?: Maybe<PUser>;
  readonly clientRole?: Maybe<ClientRole>;
  readonly clientServices?: Maybe<ReadonlyArray<PService>>;
  readonly contacts?: Maybe<ReadonlyArray<PContact>>;
  readonly createdAt: Scalars['DateTime'];
  readonly createdBudgets?: Maybe<ReadonlyArray<PBudget>>;
  readonly createdItineraries?: Maybe<ReadonlyArray<PItinerary>>;
  readonly createdItineraryDriverFeatures?: Maybe<ReadonlyArray<PItineraryDriverFeature>>;
  readonly createdItineraryVehicleFeatures?: Maybe<ReadonlyArray<PItineraryVehicleFeature>>;
  readonly disabled: Scalars['Boolean'];
  readonly firebaseId?: Maybe<Scalars['String']>;
  readonly id: Scalars['ID'];
  readonly isAdmin: Scalars['Boolean'];
  readonly isClient: Scalars['Boolean'];
  readonly name?: Maybe<Scalars['String']>;
  readonly passengers?: Maybe<ReadonlyArray<PPassenger>>;
  readonly phone?: Maybe<Scalars['String']>;
  readonly services?: Maybe<ReadonlyArray<PService>>;
  readonly updatedAt: Scalars['DateTime'];
  readonly volcanoClientId?: Maybe<Scalars['String']>;
};


export type PUserClientBudgetsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<PBudgetOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<PBudgetWhereInput>;
};


export type PUserClientEmployeesArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<PUserOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<PUserWhereInput>;
};


export type PUserClientServicesArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<PServiceOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<PServiceWhereInput>;
};


export type PUserContactsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<PContactOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<PContactWhereInput>;
};


export type PUserCreatedBudgetsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<PBudgetOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<PBudgetWhereInput>;
};


export type PUserCreatedItinerariesArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<PItineraryOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<PItineraryWhereInput>;
};


export type PUserCreatedItineraryDriverFeaturesArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<PItineraryDriverFeatureOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<PItineraryDriverFeatureWhereInput>;
};


export type PUserCreatedItineraryVehicleFeaturesArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<PItineraryVehicleFeatureOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<PItineraryVehicleFeatureWhereInput>;
};


export type PUserPassengersArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<PPassengerOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<PPassengerWhereInput>;
};


export type PUserServicesArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<PServiceOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<PServiceWhereInput>;
};

export enum PUserOrderByInput {
  ClientRoleAsc = 'clientRole_ASC',
  ClientRoleDesc = 'clientRole_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DisabledAsc = 'disabled_ASC',
  DisabledDesc = 'disabled_DESC',
  FirebaseIdAsc = 'firebaseId_ASC',
  FirebaseIdDesc = 'firebaseId_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  IsAdminAsc = 'isAdmin_ASC',
  IsAdminDesc = 'isAdmin_DESC',
  IsClientAsc = 'isClient_ASC',
  IsClientDesc = 'isClient_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PhoneAsc = 'phone_ASC',
  PhoneDesc = 'phone_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  VolcanoClientIdAsc = 'volcanoClientId_ASC',
  VolcanoClientIdDesc = 'volcanoClientId_DESC'
}

export type PUserWhereInput = {
  readonly AND?: Maybe<ReadonlyArray<PUserWhereInput>>;
  readonly NOT?: Maybe<ReadonlyArray<PUserWhereInput>>;
  readonly OR?: Maybe<ReadonlyArray<PUserWhereInput>>;
  readonly clientBudgets_every?: Maybe<PBudgetWhereInput>;
  readonly clientBudgets_none?: Maybe<PBudgetWhereInput>;
  readonly clientBudgets_some?: Maybe<PBudgetWhereInput>;
  readonly clientEmployees_every?: Maybe<PUserWhereInput>;
  readonly clientEmployees_none?: Maybe<PUserWhereInput>;
  readonly clientEmployees_some?: Maybe<PUserWhereInput>;
  readonly clientEmployer?: Maybe<PUserWhereInput>;
  readonly clientRole?: Maybe<ClientRole>;
  readonly clientRole_in?: Maybe<ReadonlyArray<ClientRole>>;
  readonly clientRole_not?: Maybe<ClientRole>;
  readonly clientRole_not_in?: Maybe<ReadonlyArray<ClientRole>>;
  readonly clientServices_every?: Maybe<PServiceWhereInput>;
  readonly clientServices_none?: Maybe<PServiceWhereInput>;
  readonly clientServices_some?: Maybe<PServiceWhereInput>;
  readonly contacts_every?: Maybe<PContactWhereInput>;
  readonly contacts_none?: Maybe<PContactWhereInput>;
  readonly contacts_some?: Maybe<PContactWhereInput>;
  readonly createdAt?: Maybe<Scalars['DateTime']>;
  readonly createdAt_gt?: Maybe<Scalars['DateTime']>;
  readonly createdAt_gte?: Maybe<Scalars['DateTime']>;
  readonly createdAt_in?: Maybe<ReadonlyArray<Scalars['DateTime']>>;
  readonly createdAt_lt?: Maybe<Scalars['DateTime']>;
  readonly createdAt_lte?: Maybe<Scalars['DateTime']>;
  readonly createdAt_not?: Maybe<Scalars['DateTime']>;
  readonly createdAt_not_in?: Maybe<ReadonlyArray<Scalars['DateTime']>>;
  readonly createdBudgets_every?: Maybe<PBudgetWhereInput>;
  readonly createdBudgets_none?: Maybe<PBudgetWhereInput>;
  readonly createdBudgets_some?: Maybe<PBudgetWhereInput>;
  readonly createdItineraries_every?: Maybe<PItineraryWhereInput>;
  readonly createdItineraries_none?: Maybe<PItineraryWhereInput>;
  readonly createdItineraries_some?: Maybe<PItineraryWhereInput>;
  readonly createdItineraryDriverFeatures_every?: Maybe<PItineraryDriverFeatureWhereInput>;
  readonly createdItineraryDriverFeatures_none?: Maybe<PItineraryDriverFeatureWhereInput>;
  readonly createdItineraryDriverFeatures_some?: Maybe<PItineraryDriverFeatureWhereInput>;
  readonly createdItineraryVehicleFeatures_every?: Maybe<PItineraryVehicleFeatureWhereInput>;
  readonly createdItineraryVehicleFeatures_none?: Maybe<PItineraryVehicleFeatureWhereInput>;
  readonly createdItineraryVehicleFeatures_some?: Maybe<PItineraryVehicleFeatureWhereInput>;
  readonly disabled?: Maybe<Scalars['Boolean']>;
  readonly disabled_not?: Maybe<Scalars['Boolean']>;
  readonly firebaseId?: Maybe<Scalars['String']>;
  readonly firebaseId_contains?: Maybe<Scalars['String']>;
  readonly firebaseId_ends_with?: Maybe<Scalars['String']>;
  readonly firebaseId_gt?: Maybe<Scalars['String']>;
  readonly firebaseId_gte?: Maybe<Scalars['String']>;
  readonly firebaseId_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  readonly firebaseId_lt?: Maybe<Scalars['String']>;
  readonly firebaseId_lte?: Maybe<Scalars['String']>;
  readonly firebaseId_not?: Maybe<Scalars['String']>;
  readonly firebaseId_not_contains?: Maybe<Scalars['String']>;
  readonly firebaseId_not_ends_with?: Maybe<Scalars['String']>;
  readonly firebaseId_not_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  readonly firebaseId_not_starts_with?: Maybe<Scalars['String']>;
  readonly firebaseId_starts_with?: Maybe<Scalars['String']>;
  readonly id?: Maybe<Scalars['ID']>;
  readonly id_contains?: Maybe<Scalars['ID']>;
  readonly id_ends_with?: Maybe<Scalars['ID']>;
  readonly id_gt?: Maybe<Scalars['ID']>;
  readonly id_gte?: Maybe<Scalars['ID']>;
  readonly id_in?: Maybe<ReadonlyArray<Scalars['ID']>>;
  readonly id_lt?: Maybe<Scalars['ID']>;
  readonly id_lte?: Maybe<Scalars['ID']>;
  readonly id_not?: Maybe<Scalars['ID']>;
  readonly id_not_contains?: Maybe<Scalars['ID']>;
  readonly id_not_ends_with?: Maybe<Scalars['ID']>;
  readonly id_not_in?: Maybe<ReadonlyArray<Scalars['ID']>>;
  readonly id_not_starts_with?: Maybe<Scalars['ID']>;
  readonly id_starts_with?: Maybe<Scalars['ID']>;
  readonly isAdmin?: Maybe<Scalars['Boolean']>;
  readonly isAdmin_not?: Maybe<Scalars['Boolean']>;
  readonly isClient?: Maybe<Scalars['Boolean']>;
  readonly isClient_not?: Maybe<Scalars['Boolean']>;
  readonly name?: Maybe<Scalars['String']>;
  readonly name_contains?: Maybe<Scalars['String']>;
  readonly name_ends_with?: Maybe<Scalars['String']>;
  readonly name_gt?: Maybe<Scalars['String']>;
  readonly name_gte?: Maybe<Scalars['String']>;
  readonly name_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  readonly name_lt?: Maybe<Scalars['String']>;
  readonly name_lte?: Maybe<Scalars['String']>;
  readonly name_not?: Maybe<Scalars['String']>;
  readonly name_not_contains?: Maybe<Scalars['String']>;
  readonly name_not_ends_with?: Maybe<Scalars['String']>;
  readonly name_not_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  readonly name_not_starts_with?: Maybe<Scalars['String']>;
  readonly name_starts_with?: Maybe<Scalars['String']>;
  readonly passengers_every?: Maybe<PPassengerWhereInput>;
  readonly passengers_none?: Maybe<PPassengerWhereInput>;
  readonly passengers_some?: Maybe<PPassengerWhereInput>;
  readonly phone?: Maybe<Scalars['String']>;
  readonly phone_contains?: Maybe<Scalars['String']>;
  readonly phone_ends_with?: Maybe<Scalars['String']>;
  readonly phone_gt?: Maybe<Scalars['String']>;
  readonly phone_gte?: Maybe<Scalars['String']>;
  readonly phone_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  readonly phone_lt?: Maybe<Scalars['String']>;
  readonly phone_lte?: Maybe<Scalars['String']>;
  readonly phone_not?: Maybe<Scalars['String']>;
  readonly phone_not_contains?: Maybe<Scalars['String']>;
  readonly phone_not_ends_with?: Maybe<Scalars['String']>;
  readonly phone_not_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  readonly phone_not_starts_with?: Maybe<Scalars['String']>;
  readonly phone_starts_with?: Maybe<Scalars['String']>;
  readonly services_every?: Maybe<PServiceWhereInput>;
  readonly services_none?: Maybe<PServiceWhereInput>;
  readonly services_some?: Maybe<PServiceWhereInput>;
  readonly updatedAt?: Maybe<Scalars['DateTime']>;
  readonly updatedAt_gt?: Maybe<Scalars['DateTime']>;
  readonly updatedAt_gte?: Maybe<Scalars['DateTime']>;
  readonly updatedAt_in?: Maybe<ReadonlyArray<Scalars['DateTime']>>;
  readonly updatedAt_lt?: Maybe<Scalars['DateTime']>;
  readonly updatedAt_lte?: Maybe<Scalars['DateTime']>;
  readonly updatedAt_not?: Maybe<Scalars['DateTime']>;
  readonly updatedAt_not_in?: Maybe<ReadonlyArray<Scalars['DateTime']>>;
  readonly volcanoClientId?: Maybe<Scalars['String']>;
  readonly volcanoClientId_contains?: Maybe<Scalars['String']>;
  readonly volcanoClientId_ends_with?: Maybe<Scalars['String']>;
  readonly volcanoClientId_gt?: Maybe<Scalars['String']>;
  readonly volcanoClientId_gte?: Maybe<Scalars['String']>;
  readonly volcanoClientId_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  readonly volcanoClientId_lt?: Maybe<Scalars['String']>;
  readonly volcanoClientId_lte?: Maybe<Scalars['String']>;
  readonly volcanoClientId_not?: Maybe<Scalars['String']>;
  readonly volcanoClientId_not_contains?: Maybe<Scalars['String']>;
  readonly volcanoClientId_not_ends_with?: Maybe<Scalars['String']>;
  readonly volcanoClientId_not_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  readonly volcanoClientId_not_starts_with?: Maybe<Scalars['String']>;
  readonly volcanoClientId_starts_with?: Maybe<Scalars['String']>;
};

export type PVehicleBrand = {
  readonly __typename?: 'PVehicleBrand';
  readonly id: Scalars['ID'];
  readonly models?: Maybe<ReadonlyArray<PVehicleModel>>;
  readonly name: Scalars['String'];
  readonly pricing?: Maybe<ReadonlyArray<VehiclePricing>>;
};


export type PVehicleBrandModelsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<PVehicleModelOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<PVehicleModelWhereInput>;
};


export type PVehicleBrandPricingArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<VehiclePricingOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<VehiclePricingWhereInput>;
};

export type PVehicleBrandWhereInput = {
  readonly AND?: Maybe<ReadonlyArray<PVehicleBrandWhereInput>>;
  readonly NOT?: Maybe<ReadonlyArray<PVehicleBrandWhereInput>>;
  readonly OR?: Maybe<ReadonlyArray<PVehicleBrandWhereInput>>;
  readonly id?: Maybe<Scalars['ID']>;
  readonly id_contains?: Maybe<Scalars['ID']>;
  readonly id_ends_with?: Maybe<Scalars['ID']>;
  readonly id_gt?: Maybe<Scalars['ID']>;
  readonly id_gte?: Maybe<Scalars['ID']>;
  readonly id_in?: Maybe<ReadonlyArray<Scalars['ID']>>;
  readonly id_lt?: Maybe<Scalars['ID']>;
  readonly id_lte?: Maybe<Scalars['ID']>;
  readonly id_not?: Maybe<Scalars['ID']>;
  readonly id_not_contains?: Maybe<Scalars['ID']>;
  readonly id_not_ends_with?: Maybe<Scalars['ID']>;
  readonly id_not_in?: Maybe<ReadonlyArray<Scalars['ID']>>;
  readonly id_not_starts_with?: Maybe<Scalars['ID']>;
  readonly id_starts_with?: Maybe<Scalars['ID']>;
  readonly models_every?: Maybe<PVehicleModelWhereInput>;
  readonly models_none?: Maybe<PVehicleModelWhereInput>;
  readonly models_some?: Maybe<PVehicleModelWhereInput>;
  readonly name?: Maybe<Scalars['String']>;
  readonly name_contains?: Maybe<Scalars['String']>;
  readonly name_ends_with?: Maybe<Scalars['String']>;
  readonly name_gt?: Maybe<Scalars['String']>;
  readonly name_gte?: Maybe<Scalars['String']>;
  readonly name_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  readonly name_lt?: Maybe<Scalars['String']>;
  readonly name_lte?: Maybe<Scalars['String']>;
  readonly name_not?: Maybe<Scalars['String']>;
  readonly name_not_contains?: Maybe<Scalars['String']>;
  readonly name_not_ends_with?: Maybe<Scalars['String']>;
  readonly name_not_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  readonly name_not_starts_with?: Maybe<Scalars['String']>;
  readonly name_starts_with?: Maybe<Scalars['String']>;
  readonly pricing_every?: Maybe<VehiclePricingWhereInput>;
  readonly pricing_none?: Maybe<VehiclePricingWhereInput>;
  readonly pricing_some?: Maybe<VehiclePricingWhereInput>;
};

export type PVehicleModel = {
  readonly __typename?: 'PVehicleModel';
  readonly brand?: Maybe<PVehicleBrand>;
  readonly id: Scalars['ID'];
  readonly name: Scalars['String'];
  readonly pricing?: Maybe<ReadonlyArray<VehiclePricing>>;
};


export type PVehicleModelPricingArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<VehiclePricingOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<VehiclePricingWhereInput>;
};

export enum PVehicleModelOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type PVehicleModelWhereInput = {
  readonly AND?: Maybe<ReadonlyArray<PVehicleModelWhereInput>>;
  readonly NOT?: Maybe<ReadonlyArray<PVehicleModelWhereInput>>;
  readonly OR?: Maybe<ReadonlyArray<PVehicleModelWhereInput>>;
  readonly brand?: Maybe<PVehicleBrandWhereInput>;
  readonly id?: Maybe<Scalars['ID']>;
  readonly id_contains?: Maybe<Scalars['ID']>;
  readonly id_ends_with?: Maybe<Scalars['ID']>;
  readonly id_gt?: Maybe<Scalars['ID']>;
  readonly id_gte?: Maybe<Scalars['ID']>;
  readonly id_in?: Maybe<ReadonlyArray<Scalars['ID']>>;
  readonly id_lt?: Maybe<Scalars['ID']>;
  readonly id_lte?: Maybe<Scalars['ID']>;
  readonly id_not?: Maybe<Scalars['ID']>;
  readonly id_not_contains?: Maybe<Scalars['ID']>;
  readonly id_not_ends_with?: Maybe<Scalars['ID']>;
  readonly id_not_in?: Maybe<ReadonlyArray<Scalars['ID']>>;
  readonly id_not_starts_with?: Maybe<Scalars['ID']>;
  readonly id_starts_with?: Maybe<Scalars['ID']>;
  readonly name?: Maybe<Scalars['String']>;
  readonly name_contains?: Maybe<Scalars['String']>;
  readonly name_ends_with?: Maybe<Scalars['String']>;
  readonly name_gt?: Maybe<Scalars['String']>;
  readonly name_gte?: Maybe<Scalars['String']>;
  readonly name_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  readonly name_lt?: Maybe<Scalars['String']>;
  readonly name_lte?: Maybe<Scalars['String']>;
  readonly name_not?: Maybe<Scalars['String']>;
  readonly name_not_contains?: Maybe<Scalars['String']>;
  readonly name_not_ends_with?: Maybe<Scalars['String']>;
  readonly name_not_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  readonly name_not_starts_with?: Maybe<Scalars['String']>;
  readonly name_starts_with?: Maybe<Scalars['String']>;
  readonly pricing_every?: Maybe<VehiclePricingWhereInput>;
  readonly pricing_none?: Maybe<VehiclePricingWhereInput>;
  readonly pricing_some?: Maybe<VehiclePricingWhereInput>;
};

export type PVehicleType = {
  readonly __typename?: 'PVehicleType';
  readonly category: VehicleTypeCategory;
  readonly id: Scalars['ID'];
  readonly name: Scalars['String'];
  readonly pricing?: Maybe<ReadonlyArray<VehiclePricing>>;
};


export type PVehicleTypePricingArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<VehiclePricingOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<VehiclePricingWhereInput>;
};

export type PVehicleTypeWhereInput = {
  readonly AND?: Maybe<ReadonlyArray<PVehicleTypeWhereInput>>;
  readonly NOT?: Maybe<ReadonlyArray<PVehicleTypeWhereInput>>;
  readonly OR?: Maybe<ReadonlyArray<PVehicleTypeWhereInput>>;
  readonly category?: Maybe<VehicleTypeCategory>;
  readonly category_in?: Maybe<ReadonlyArray<VehicleTypeCategory>>;
  readonly category_not?: Maybe<VehicleTypeCategory>;
  readonly category_not_in?: Maybe<ReadonlyArray<VehicleTypeCategory>>;
  readonly id?: Maybe<Scalars['ID']>;
  readonly id_contains?: Maybe<Scalars['ID']>;
  readonly id_ends_with?: Maybe<Scalars['ID']>;
  readonly id_gt?: Maybe<Scalars['ID']>;
  readonly id_gte?: Maybe<Scalars['ID']>;
  readonly id_in?: Maybe<ReadonlyArray<Scalars['ID']>>;
  readonly id_lt?: Maybe<Scalars['ID']>;
  readonly id_lte?: Maybe<Scalars['ID']>;
  readonly id_not?: Maybe<Scalars['ID']>;
  readonly id_not_contains?: Maybe<Scalars['ID']>;
  readonly id_not_ends_with?: Maybe<Scalars['ID']>;
  readonly id_not_in?: Maybe<ReadonlyArray<Scalars['ID']>>;
  readonly id_not_starts_with?: Maybe<Scalars['ID']>;
  readonly id_starts_with?: Maybe<Scalars['ID']>;
  readonly name?: Maybe<Scalars['String']>;
  readonly name_contains?: Maybe<Scalars['String']>;
  readonly name_ends_with?: Maybe<Scalars['String']>;
  readonly name_gt?: Maybe<Scalars['String']>;
  readonly name_gte?: Maybe<Scalars['String']>;
  readonly name_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  readonly name_lt?: Maybe<Scalars['String']>;
  readonly name_lte?: Maybe<Scalars['String']>;
  readonly name_not?: Maybe<Scalars['String']>;
  readonly name_not_contains?: Maybe<Scalars['String']>;
  readonly name_not_ends_with?: Maybe<Scalars['String']>;
  readonly name_not_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  readonly name_not_starts_with?: Maybe<Scalars['String']>;
  readonly name_starts_with?: Maybe<Scalars['String']>;
  readonly pricing_every?: Maybe<VehiclePricingWhereInput>;
  readonly pricing_none?: Maybe<VehiclePricingWhereInput>;
  readonly pricing_some?: Maybe<VehiclePricingWhereInput>;
};

export type Passenger = {
  readonly __typename?: 'Passenger';
  readonly email: Scalars['String'];
  readonly id: Scalars['ID'];
  readonly name?: Maybe<Scalars['String']>;
  readonly phone?: Maybe<Scalars['String']>;
};

export type PriceCondition = {
  readonly __typename?: 'PriceCondition';
  readonly vehicle: ReadonlyArray<VehiclePriceCondition>;
};

export type Query = {
  readonly __typename?: 'Query';
  readonly budget: Budget;
  readonly budgetConfig: BudgetConfig;
  readonly budgets: ReadonlyArray<Budget>;
  readonly client?: Maybe<Client>;
  readonly clientEmployee: ClientEmployee;
  readonly clientEmployees: ReadonlyArray<ClientEmployee>;
  readonly clients?: Maybe<ReadonlyArray<Client>>;
  readonly computeItineraryPrice: CandidateAmount;
  readonly contacts: ReadonlyArray<Contact>;
  readonly driver?: Maybe<Driver>;
  readonly drivers?: Maybe<ReadonlyArray<Driver>>;
  readonly driversByDrivingCompany: ReadonlyArray<Driver>;
  readonly drivingCompanies: ReadonlyArray<DrivingCompany>;
  readonly drivingCompany: DrivingCompany;
  readonly getFrontendVersion: FrontendVersion;
  readonly getServiceSubtypes: ReadonlyArray<ServiceSubtype>;
  readonly globalRate?: Maybe<Rate>;
  readonly passenger: Passenger;
  readonly passengers: ReadonlyArray<Passenger>;
  readonly passengersForUser: ReadonlyArray<Passenger>;
  readonly searchDrivers: ReadonlyArray<Driver>;
  readonly searchPassengers: ReadonlyArray<Passenger>;
  readonly searchServices: ReadonlyArray<Service>;
  readonly service?: Maybe<Service>;
  readonly serviceTypes: ReadonlyArray<ServiceType>;
  readonly services?: Maybe<ReadonlyArray<Service>>;
  readonly user: PUser;
  readonly vehicle: Vehicle;
  readonly vehicleBrand: VehicleBrandModels;
  readonly vehicleBrandModels: ReadonlyArray<VehicleBrandModels>;
  readonly vehicleModel: VehicleModel;
  readonly vehicleTypes: ReadonlyArray<VehicleType>;
  readonly vehicles: ReadonlyArray<Vehicle>;
};


export type QueryBudgetArgs = {
  id: Scalars['ID'];
};


export type QueryClientArgs = {
  departureDateMax?: Maybe<Scalars['String']>;
  departureDateMin?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
};


export type QueryClientEmployeeArgs = {
  id: Scalars['ID'];
};


export type QueryComputeItineraryPriceArgs = {
  arrival?: Maybe<DepartureOrArrivalInput>;
  clientId: Scalars['String'];
  departure?: Maybe<DepartureOrArrivalInput>;
  hours?: Maybe<Scalars['Int']>;
  numPassengers?: Maybe<Scalars['Int']>;
  serviceTypeId: Scalars['String'];
  vehicleBrandId?: Maybe<Scalars['String']>;
  vehicleModelId?: Maybe<Scalars['String']>;
  vehicleTypeId: Scalars['String'];
};


export type QueryDriverArgs = {
  departureDateMax?: Maybe<Scalars['String']>;
  departureDateMin?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
};


export type QueryDriversByDrivingCompanyArgs = {
  drivingCompanyId: Scalars['ID'];
};


export type QueryDrivingCompanyArgs = {
  id: Scalars['ID'];
};


export type QueryGetServiceSubtypesArgs = {
  id: Scalars['ID'];
};


export type QueryGlobalRateArgs = {
  clientId?: Maybe<Scalars['ID']>;
};


export type QueryPassengerArgs = {
  id: Scalars['String'];
};


export type QueryPassengersForUserArgs = {
  id: Scalars['ID'];
};


export type QuerySearchDriversArgs = {
  drivingCompanyId?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
};


export type QuerySearchPassengersArgs = {
  email: Scalars['String'];
};


export type QuerySearchServicesArgs = {
  text: Scalars['String'];
};


export type QueryServiceArgs = {
  id: Scalars['ID'];
};


export type QueryServicesArgs = {
  departureDateMax?: Maybe<Scalars['String']>;
  departureDateMin?: Maybe<Scalars['String']>;
};


export type QueryVehicleArgs = {
  id: Scalars['ID'];
};


export type QueryVehicleBrandArgs = {
  id: Scalars['ID'];
};


export type QueryVehicleModelArgs = {
  id: Scalars['ID'];
};


export type QueryVehiclesArgs = {
  status?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type Rate = {
  readonly __typename?: 'Rate';
  readonly id: Scalars['ID'];
  readonly isGlobal: Scalars['Boolean'];
  readonly serviceTypes: ReadonlyArray<RateServiceType>;
  readonly vehiclePriceVariables: ReadonlyArray<VehiclePriceVariable>;
};

export type RateServiceType = {
  readonly __typename?: 'RateServiceType';
  readonly description?: Maybe<Scalars['String']>;
  readonly id: Scalars['ID'];
  readonly name: Scalars['String'];
  readonly subtypes: ReadonlyArray<ServiceSubtype>;
};

export type Service = {
  readonly __typename?: 'Service';
  readonly alternateDriver?: Maybe<Driver>;
  readonly arrival?: Maybe<DepartureOrArrival>;
  readonly budgetReadableId?: Maybe<Scalars['String']>;
  readonly client?: Maybe<Client>;
  readonly departure?: Maybe<DepartureOrArrival>;
  readonly description?: Maybe<Scalars['String']>;
  readonly disturbance?: Maybe<Scalars['Boolean']>;
  readonly driver?: Maybe<Driver>;
  readonly drivers: ReadonlyArray<Driver>;
  readonly drivingCompany?: Maybe<DrivingCompany>;
  readonly id: Scalars['ID'];
  readonly itineraryDescription?: Maybe<Scalars['String']>;
  readonly notes?: Maybe<Scalars['String']>;
  readonly numOfPassengers?: Maybe<Scalars['Int']>;
  readonly passengers: ReadonlyArray<Passenger>;
  readonly presentationTime?: Maybe<Scalars['String']>;
  readonly providerId?: Maybe<Scalars['Int']>;
  readonly reference?: Maybe<Scalars['String']>;
  readonly serieFact?: Maybe<Scalars['String']>;
  readonly status?: Maybe<Scalars['String']>;
  readonly type?: Maybe<Scalars['String']>;
  readonly typeId?: Maybe<Scalars['String']>;
  readonly vehicle?: Maybe<Vehicle>;
  readonly volcanoServiceId?: Maybe<Scalars['String']>;
};

export type ServiceSubtype = {
  readonly __typename?: 'ServiceSubtype';
  readonly description?: Maybe<Scalars['String']>;
  readonly fulfillingCondition?: Maybe<FulfillingCondition>;
  readonly id: Scalars['ID'];
  readonly name: Scalars['String'];
  readonly priceConditions?: Maybe<PriceCondition>;
};

export type ServiceType = {
  readonly __typename?: 'ServiceType';
  readonly description: Scalars['String'];
  readonly id: Scalars['String'];
  readonly name: Scalars['String'];
  readonly typeId: Scalars['String'];
};

export type Subscription = {
  readonly __typename?: 'Subscription';
  readonly newBudget: Budget;
  readonly onAnyDriverLocationUpdate: Driver;
  readonly onDriverLocationUpdate: Driver;
  readonly onNewClient: Client;
  readonly onNewDriver: Driver;
  readonly onNewPassenger: Passenger;
  readonly onNewService: Service;
  readonly onUpdateBudget: Budget;
  readonly onUpdateClient: Client;
  readonly onUpdateMe: PUser;
  readonly onUpdateService: Service;
};


export type SubscriptionOnDriverLocationUpdateArgs = {
  id: Scalars['ID'];
};

export type Template = {
  readonly __typename?: 'Template';
  readonly body: Scalars['String'];
  readonly heading: Scalars['String'];
};

export type UpdateClientEmployeeInput = {
  readonly disableLogin?: Maybe<Scalars['Boolean']>;
  readonly email: Scalars['String'];
  readonly name: Scalars['String'];
  readonly phone?: Maybe<Scalars['String']>;
};

export type Vat = {
  readonly __typename?: 'VAT';
  readonly code: Scalars['String'];
  readonly translation: Scalars['String'];
  readonly value: Scalars['Float'];
};

export type Vehicle = {
  readonly __typename?: 'Vehicle';
  readonly brand?: Maybe<Scalars['String']>;
  readonly id: Scalars['ID'];
  readonly licensePlate?: Maybe<Scalars['String']>;
  readonly location?: Maybe<Location>;
  readonly model?: Maybe<Scalars['String']>;
  readonly status?: Maybe<Scalars['String']>;
  readonly type?: Maybe<Scalars['String']>;
  readonly typeDescription?: Maybe<Scalars['String']>;
  readonly typeID?: Maybe<Scalars['Int']>;
  readonly volcanoVehicleId?: Maybe<Scalars['String']>;
};

export type VehicleBrandModels = {
  readonly __typename?: 'VehicleBrandModels';
  readonly brand: Scalars['String'];
  readonly id: Scalars['ID'];
  readonly models: ReadonlyArray<VehicleModel>;
};

export type VehicleModel = {
  readonly __typename?: 'VehicleModel';
  readonly id: Scalars['ID'];
  readonly name: Scalars['String'];
};

export type VehiclePriceCondition = {
  readonly __typename?: 'VehiclePriceCondition';
  readonly basePrice: Scalars['Float'];
  readonly description?: Maybe<Scalars['String']>;
  readonly id: Scalars['ID'];
  readonly name: Scalars['String'];
  readonly numPassengers?: Maybe<Scalars['Int']>;
  readonly vehicleBrandId?: Maybe<Scalars['String']>;
  readonly vehicleModelId?: Maybe<Scalars['String']>;
  readonly vehicleTypeId?: Maybe<Scalars['String']>;
};

export type VehiclePriceVariable = {
  readonly __typename?: 'VehiclePriceVariable';
  readonly airportPrice: Scalars['Float'];
  readonly extraHourPrice: Scalars['Float'];
  readonly extraPricePerKm: Scalars['Float'];
  readonly id: Scalars['ID'];
  readonly parkingMontserrat: Scalars['Float'];
  readonly paxNumber: Scalars['Int'];
  readonly tollPricePerKm: Scalars['Float'];
  readonly vehicleBrandId?: Maybe<Scalars['String']>;
  readonly vehicleModelId?: Maybe<Scalars['String']>;
  readonly vehicleTypeId?: Maybe<Scalars['String']>;
};

export type VehiclePricing = {
  readonly __typename?: 'VehiclePricing';
  readonly airportPrice: Scalars['Float'];
  readonly client?: Maybe<PUser>;
  readonly extraHourPrice: Scalars['Float'];
  readonly id: Scalars['ID'];
  readonly kmPrice: Scalars['Float'];
  readonly parkingMontserrat: Scalars['Float'];
  readonly pax?: Maybe<Scalars['Int']>;
  readonly rate?: Maybe<PRate>;
  readonly serviceSubtype?: Maybe<PServiceSubtype>;
  readonly serviceType?: Maybe<PServiceType>;
  readonly tollPrice: Scalars['Float'];
  readonly vehicleBrand?: Maybe<PVehicleBrand>;
  readonly vehicleModel?: Maybe<PVehicleModel>;
  readonly vehicleType?: Maybe<PVehicleType>;
};

export enum VehiclePricingOrderByInput {
  AirportPriceAsc = 'airportPrice_ASC',
  AirportPriceDesc = 'airportPrice_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  ExtraHourPriceAsc = 'extraHourPrice_ASC',
  ExtraHourPriceDesc = 'extraHourPrice_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  KmPriceAsc = 'kmPrice_ASC',
  KmPriceDesc = 'kmPrice_DESC',
  ParkingMontserratAsc = 'parkingMontserrat_ASC',
  ParkingMontserratDesc = 'parkingMontserrat_DESC',
  PaxAsc = 'pax_ASC',
  PaxDesc = 'pax_DESC',
  TollPriceAsc = 'tollPrice_ASC',
  TollPriceDesc = 'tollPrice_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type VehiclePricingWhereInput = {
  readonly AND?: Maybe<ReadonlyArray<VehiclePricingWhereInput>>;
  readonly NOT?: Maybe<ReadonlyArray<VehiclePricingWhereInput>>;
  readonly OR?: Maybe<ReadonlyArray<VehiclePricingWhereInput>>;
  readonly airportPrice?: Maybe<Scalars['Float']>;
  readonly airportPrice_gt?: Maybe<Scalars['Float']>;
  readonly airportPrice_gte?: Maybe<Scalars['Float']>;
  readonly airportPrice_in?: Maybe<ReadonlyArray<Scalars['Float']>>;
  readonly airportPrice_lt?: Maybe<Scalars['Float']>;
  readonly airportPrice_lte?: Maybe<Scalars['Float']>;
  readonly airportPrice_not?: Maybe<Scalars['Float']>;
  readonly airportPrice_not_in?: Maybe<ReadonlyArray<Scalars['Float']>>;
  readonly client?: Maybe<PUserWhereInput>;
  readonly extraHourPrice?: Maybe<Scalars['Float']>;
  readonly extraHourPrice_gt?: Maybe<Scalars['Float']>;
  readonly extraHourPrice_gte?: Maybe<Scalars['Float']>;
  readonly extraHourPrice_in?: Maybe<ReadonlyArray<Scalars['Float']>>;
  readonly extraHourPrice_lt?: Maybe<Scalars['Float']>;
  readonly extraHourPrice_lte?: Maybe<Scalars['Float']>;
  readonly extraHourPrice_not?: Maybe<Scalars['Float']>;
  readonly extraHourPrice_not_in?: Maybe<ReadonlyArray<Scalars['Float']>>;
  readonly id?: Maybe<Scalars['ID']>;
  readonly id_contains?: Maybe<Scalars['ID']>;
  readonly id_ends_with?: Maybe<Scalars['ID']>;
  readonly id_gt?: Maybe<Scalars['ID']>;
  readonly id_gte?: Maybe<Scalars['ID']>;
  readonly id_in?: Maybe<ReadonlyArray<Scalars['ID']>>;
  readonly id_lt?: Maybe<Scalars['ID']>;
  readonly id_lte?: Maybe<Scalars['ID']>;
  readonly id_not?: Maybe<Scalars['ID']>;
  readonly id_not_contains?: Maybe<Scalars['ID']>;
  readonly id_not_ends_with?: Maybe<Scalars['ID']>;
  readonly id_not_in?: Maybe<ReadonlyArray<Scalars['ID']>>;
  readonly id_not_starts_with?: Maybe<Scalars['ID']>;
  readonly id_starts_with?: Maybe<Scalars['ID']>;
  readonly kmPrice?: Maybe<Scalars['Float']>;
  readonly kmPrice_gt?: Maybe<Scalars['Float']>;
  readonly kmPrice_gte?: Maybe<Scalars['Float']>;
  readonly kmPrice_in?: Maybe<ReadonlyArray<Scalars['Float']>>;
  readonly kmPrice_lt?: Maybe<Scalars['Float']>;
  readonly kmPrice_lte?: Maybe<Scalars['Float']>;
  readonly kmPrice_not?: Maybe<Scalars['Float']>;
  readonly kmPrice_not_in?: Maybe<ReadonlyArray<Scalars['Float']>>;
  readonly parkingMontserrat?: Maybe<Scalars['Float']>;
  readonly parkingMontserrat_gt?: Maybe<Scalars['Float']>;
  readonly parkingMontserrat_gte?: Maybe<Scalars['Float']>;
  readonly parkingMontserrat_in?: Maybe<ReadonlyArray<Scalars['Float']>>;
  readonly parkingMontserrat_lt?: Maybe<Scalars['Float']>;
  readonly parkingMontserrat_lte?: Maybe<Scalars['Float']>;
  readonly parkingMontserrat_not?: Maybe<Scalars['Float']>;
  readonly parkingMontserrat_not_in?: Maybe<ReadonlyArray<Scalars['Float']>>;
  readonly pax?: Maybe<Scalars['Int']>;
  readonly pax_gt?: Maybe<Scalars['Int']>;
  readonly pax_gte?: Maybe<Scalars['Int']>;
  readonly pax_in?: Maybe<ReadonlyArray<Scalars['Int']>>;
  readonly pax_lt?: Maybe<Scalars['Int']>;
  readonly pax_lte?: Maybe<Scalars['Int']>;
  readonly pax_not?: Maybe<Scalars['Int']>;
  readonly pax_not_in?: Maybe<ReadonlyArray<Scalars['Int']>>;
  readonly rate?: Maybe<PRateWhereInput>;
  readonly serviceSubtype?: Maybe<PServiceSubtypeWhereInput>;
  readonly serviceType?: Maybe<PServiceTypeWhereInput>;
  readonly tollPrice?: Maybe<Scalars['Float']>;
  readonly tollPrice_gt?: Maybe<Scalars['Float']>;
  readonly tollPrice_gte?: Maybe<Scalars['Float']>;
  readonly tollPrice_in?: Maybe<ReadonlyArray<Scalars['Float']>>;
  readonly tollPrice_lt?: Maybe<Scalars['Float']>;
  readonly tollPrice_lte?: Maybe<Scalars['Float']>;
  readonly tollPrice_not?: Maybe<Scalars['Float']>;
  readonly tollPrice_not_in?: Maybe<ReadonlyArray<Scalars['Float']>>;
  readonly vehicleBrand?: Maybe<PVehicleBrandWhereInput>;
  readonly vehicleModel?: Maybe<PVehicleModelWhereInput>;
  readonly vehicleType?: Maybe<PVehicleTypeWhereInput>;
};

export type VehicleType = {
  readonly __typename?: 'VehicleType';
  readonly category: Scalars['String'];
  readonly id: Scalars['ID'];
  readonly name: Scalars['String'];
};

export enum VehicleTypeCategory {
  Bus = 'BUS',
  Car = 'CAR',
  Minibus = 'MINIBUS',
  Other = 'OTHER',
  Van = 'VAN'
}

export type DummyQueryVariables = Exact<{ [key: string]: never; }>;


export type DummyQuery = { readonly __typename?: 'Query', readonly getFrontendVersion: { readonly __typename?: 'FrontendVersion', readonly version: string } };

export type GetFrontendVersionQueryVariables = Exact<{ [key: string]: never; }>;


export type GetFrontendVersionQuery = { readonly __typename?: 'Query', readonly getFrontendVersion: { readonly __typename?: 'FrontendVersion', readonly version: string } };


      export interface PossibleTypesResultData {
        possibleTypes: {
          [key: string]: string[]
        }
      }
      const result: PossibleTypesResultData = {
  "possibleTypes": {}
};
      export default result;
    

export const DummyDocument = gql`
    query Dummy {
  getFrontendVersion {
    version
  }
}
    `;

/**
 * __useDummyQuery__
 *
 * To run a query within a React component, call `useDummyQuery` and pass it any options that fit your needs.
 * When your component renders, `useDummyQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useDummyQuery({
 *   variables: {
 *   },
 * });
 */
export function useDummyQuery(baseOptions?: Apollo.QueryHookOptions<DummyQuery, DummyQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<DummyQuery, DummyQueryVariables>(DummyDocument, options);
      }
export function useDummyLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<DummyQuery, DummyQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<DummyQuery, DummyQueryVariables>(DummyDocument, options);
        }
export type DummyQueryHookResult = ReturnType<typeof useDummyQuery>;
export type DummyLazyQueryHookResult = ReturnType<typeof useDummyLazyQuery>;
export type DummyQueryResult = Apollo.QueryResult<DummyQuery, DummyQueryVariables>;
export const GetFrontendVersionDocument = gql`
    query GetFrontendVersion {
  getFrontendVersion {
    version
  }
}
    `;

/**
 * __useGetFrontendVersionQuery__
 *
 * To run a query within a React component, call `useGetFrontendVersionQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetFrontendVersionQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetFrontendVersionQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetFrontendVersionQuery(baseOptions?: Apollo.QueryHookOptions<GetFrontendVersionQuery, GetFrontendVersionQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetFrontendVersionQuery, GetFrontendVersionQueryVariables>(GetFrontendVersionDocument, options);
      }
export function useGetFrontendVersionLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetFrontendVersionQuery, GetFrontendVersionQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetFrontendVersionQuery, GetFrontendVersionQueryVariables>(GetFrontendVersionDocument, options);
        }
export type GetFrontendVersionQueryHookResult = ReturnType<typeof useGetFrontendVersionQuery>;
export type GetFrontendVersionLazyQueryHookResult = ReturnType<typeof useGetFrontendVersionLazyQuery>;
export type GetFrontendVersionQueryResult = Apollo.QueryResult<GetFrontendVersionQuery, GetFrontendVersionQueryVariables>;