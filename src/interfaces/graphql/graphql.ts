/* eslint-disable */
/** Internal type. DO NOT USE DIRECTLY. */
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** Banking account number is a string of 5 to 17 alphanumeric values for representing an generic account number */
  AccountNumber: { input: unknown; output: unknown; }
  /** The `BigInt` scalar type represents non-fractional signed whole numeric values. */
  BigInt: { input: unknown; output: unknown; }
  /** The `Byte` scalar type represents byte value as a Buffer */
  Byte: { input: unknown; output: unknown; }
  /** A country code as defined by ISO 3166-1 alpha-2 */
  CountryCode: { input: unknown; output: unknown; }
  /** A country name (short name) as defined by ISO 3166-1 */
  CountryName: { input: unknown; output: unknown; }
  /** A field whose value conforms to the standard cuid format as specified in https://github.com/ericelliott/cuid#broken-down */
  Cuid: { input: unknown; output: unknown; }
  /** A field whose value conforms to the cuid2 format, as specified in https://github.com/paralleldrive/cuid2 */
  Cuid2: { input: unknown; output: unknown; }
  /** A field whose value is a Currency: https://en.wikipedia.org/wiki/ISO_4217. */
  Currency: { input: unknown; output: unknown; }
  /** A field whose value conforms to the standard DID format as specified in did-core: https://www.w3.org/TR/did-core/. */
  DID: { input: unknown; output: unknown; }
  /** A date string, such as 2007-12-03, compliant with the `full-date` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: { input: unknown; output: unknown; }
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: { input: unknown; output: unknown; }
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar.This scalar is serialized to a string in ISO 8601 format and parsed from a string in ISO 8601 format. */
  DateTimeISO: { input: unknown; output: unknown; }
  /** A field whose value conforms to the standard DeweyDecimal format as specified by the OCLC https://www.oclc.org/content/dam/oclc/dewey/resources/summaries/deweysummaries.pdf */
  DeweyDecimal: { input: unknown; output: unknown; }
  /**
   *
   *     A string representing a duration conforming to the ISO8601 standard,
   *     such as: P1W1DT13H23M34S
   *     P is the duration designator (for period) placed at the start of the duration representation.
   *     Y is the year designator that follows the value for the number of years.
   *     M is the month designator that follows the value for the number of months.
   *     W is the week designator that follows the value for the number of weeks.
   *     D is the day designator that follows the value for the number of days.
   *     T is the time designator that precedes the time components of the representation.
   *     H is the hour designator that follows the value for the number of hours.
   *     M is the minute designator that follows the value for the number of minutes.
   *     S is the second designator that follows the value for the number of seconds.
   *
   *     Note the time designator, T, that precedes the time value.
   *
   *     Matches moment.js, Luxon and DateFns implementations
   *     ,/. is valid for decimal places and +/- is a valid prefix
   *
   */
  Duration: { input: unknown; output: unknown; }
  /** A field whose value conforms to the standard internet email address format as specified in HTML Spec: https://html.spec.whatwg.org/multipage/input.html#valid-e-mail-address. */
  EmailAddress: { input: unknown; output: unknown; }
  /** A field whose value is a generic Universally Unique Identifier: https://en.wikipedia.org/wiki/Universally_unique_identifier. */
  GUID: { input: unknown; output: unknown; }
  /** A GeoJSON object as defined by RFC 7946: https://datatracker.ietf.org/doc/html/rfc7946 */
  GeoJSON: { input: unknown; output: unknown; }
  /** A field whose value is a CSS HSL color: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#hsl()_and_hsla(). */
  HSL: { input: unknown; output: unknown; }
  /** A field whose value is a CSS HSLA color: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#hsl()_and_hsla(). */
  HSLA: { input: unknown; output: unknown; }
  /** A field whose value is a hex color code: https://en.wikipedia.org/wiki/Web_colors. */
  HexColorCode: { input: unknown; output: unknown; }
  /** A field whose value is a hexadecimal: https://en.wikipedia.org/wiki/Hexadecimal. */
  Hexadecimal: { input: unknown; output: unknown; }
  /** A field whose value is an International Bank Account Number (IBAN): https://en.wikipedia.org/wiki/International_Bank_Account_Number. */
  IBAN: { input: unknown; output: unknown; }
  /** A field whose value is either an IPv4 or IPv6 address: https://en.wikipedia.org/wiki/IP_address. */
  IP: { input: unknown; output: unknown; }
  /** A field whose value is an IPC Class Symbol within the International Patent Classification System: https://www.wipo.int/classifications/ipc/en/ */
  IPCPatent: { input: unknown; output: unknown; }
  /** A field whose value is a IPv4 address: https://en.wikipedia.org/wiki/IPv4. */
  IPv4: { input: unknown; output: unknown; }
  /** A field whose value is a IPv6 address: https://en.wikipedia.org/wiki/IPv6. */
  IPv6: { input: unknown; output: unknown; }
  /** A field whose value is a ISBN-10 or ISBN-13 number: https://en.wikipedia.org/wiki/International_Standard_Book_Number. */
  ISBN: { input: unknown; output: unknown; }
  /**
   *
   *     A string representing a duration conforming to the ISO8601 standard,
   *     such as: P1W1DT13H23M34S
   *     P is the duration designator (for period) placed at the start of the duration representation.
   *     Y is the year designator that follows the value for the number of years.
   *     M is the month designator that follows the value for the number of months.
   *     W is the week designator that follows the value for the number of weeks.
   *     D is the day designator that follows the value for the number of days.
   *     T is the time designator that precedes the time components of the representation.
   *     H is the hour designator that follows the value for the number of hours.
   *     M is the minute designator that follows the value for the number of minutes.
   *     S is the second designator that follows the value for the number of seconds.
   *
   *     Note the time designator, T, that precedes the time value.
   *
   *     Matches moment.js, Luxon and DateFns implementations
   *     ,/. is valid for decimal places and +/- is a valid prefix
   *
   */
  ISO8601Duration: { input: unknown; output: unknown; }
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: { input: unknown; output: unknown; }
  /** The `JSONObject` scalar type represents JSON objects as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSONObject: { input: unknown; output: unknown; }
  /** A field whose value is a JSON Web Token (JWT): https://jwt.io/introduction. */
  JWT: { input: unknown; output: unknown; }
  /** A field whose value conforms to the Library of Congress Subclass Format ttps://www.loc.gov/catdir/cpso/lcco/ */
  LCCSubclass: { input: unknown; output: unknown; }
  /** A field whose value is a valid decimal degrees latitude number (53.471): https://en.wikipedia.org/wiki/Latitude */
  Latitude: { input: unknown; output: unknown; }
  /** A local date string (i.e., with no associated timezone) in `YYYY-MM-DD` format, e.g. `2020-01-01`. */
  LocalDate: { input: unknown; output: unknown; }
  /** A local date-time string (i.e., with no associated timezone) in `YYYY-MM-DDTHH:mm:ss` format, e.g. `2020-01-01T00:00:00`. */
  LocalDateTime: { input: unknown; output: unknown; }
  /** A local time string (i.e., with no associated timezone) in 24-hr `HH:mm[:ss[.SSS]]` format, e.g. `14:25` or `14:25:06` or `14:25:06.123`.  This scalar is very similar to the `LocalTime`, with the only difference being that `LocalEndTime` also allows `24:00` as a valid value to indicate midnight of the following day.  This is useful when using the scalar to represent the exclusive upper bound of a time block. */
  LocalEndTime: { input: unknown; output: unknown; }
  /** A local time string (i.e., with no associated timezone) in 24-hr `HH:mm[:ss[.SSS]]` format, e.g. `14:25` or `14:25:06` or `14:25:06.123`. */
  LocalTime: { input: unknown; output: unknown; }
  /** The locale in the format of a BCP 47 (RFC 5646) standard string */
  Locale: { input: unknown; output: unknown; }
  /** The `BigInt` scalar type represents non-fractional signed whole numeric values. */
  Long: { input: unknown; output: unknown; }
  /** A field whose value is a valid decimal degrees longitude number (53.471): https://en.wikipedia.org/wiki/Longitude */
  Longitude: { input: unknown; output: unknown; }
  /** A field whose value is a IEEE 802 48-bit MAC address: https://en.wikipedia.org/wiki/MAC_address. */
  MAC: { input: unknown; output: unknown; }
  /** Floats that will have a value less than 0. */
  NegativeFloat: { input: unknown; output: unknown; }
  /** Integers that will have a value less than 0. */
  NegativeInt: { input: unknown; output: unknown; }
  /** A string that cannot be passed as an empty value */
  NonEmptyString: { input: unknown; output: unknown; }
  /** Floats that will have a value of 0 or more. */
  NonNegativeFloat: { input: unknown; output: unknown; }
  /** Integers that will have a value of 0 or more. */
  NonNegativeInt: { input: unknown; output: unknown; }
  /** Floats that will have a value of 0 or less. */
  NonPositiveFloat: { input: unknown; output: unknown; }
  /** Integers that will have a value of 0 or less. */
  NonPositiveInt: { input: unknown; output: unknown; }
  /** A field whose value conforms with the standard mongodb object ID as described here: https://docs.mongodb.com/manual/reference/method/ObjectId/#ObjectId. Example: 5e5677d71bdc2ae76344968c */
  ObjectID: { input: unknown; output: unknown; }
  /** A field whose value conforms to the standard E.164 format as specified in: https://en.wikipedia.org/wiki/E.164. Basically this is +17895551234. */
  PhoneNumber: { input: unknown; output: unknown; }
  /** A field whose value is a valid TCP port within the range of 0 to 65535: https://en.wikipedia.org/wiki/Transmission_Control_Protocol#TCP_ports */
  Port: { input: unknown; output: unknown; }
  /** Floats that will have a value greater than 0. */
  PositiveFloat: { input: unknown; output: unknown; }
  /** Integers that will have a value greater than 0. */
  PositiveInt: { input: unknown; output: unknown; }
  /** A field whose value conforms to the standard postal code formats for United States, United Kingdom, Germany, Canada, France, Italy, Australia, Netherlands, Spain, Denmark, Sweden, Belgium, India, Austria, Portugal, Switzerland or Luxembourg. */
  PostalCode: { input: unknown; output: unknown; }
  /** A field whose value is a CSS RGB color: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgb()_and_rgba(). */
  RGB: { input: unknown; output: unknown; }
  /** A field whose value is a CSS RGBA color: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgb()_and_rgba(). */
  RGBA: { input: unknown; output: unknown; }
  /** In the US, an ABA routing transit number (`ABA RTN`) is a nine-digit code to identify the financial institution. */
  RoutingNumber: { input: unknown; output: unknown; }
  /** A field whose value conforms to the standard personal number (personnummer) formats for Sweden */
  SESSN: { input: unknown; output: unknown; }
  /** The `SafeInt` scalar type represents non-fractional signed whole numeric values that are considered safe as defined by the ECMAScript specification. */
  SafeInt: { input: unknown; output: unknown; }
  /** A field whose value is a Semantic Version: https://semver.org */
  SemVer: { input: unknown; output: unknown; }
  /** A time string at UTC, such as 10:15:30Z, compliant with the `full-time` format outlined in section 5.6 of the RFC 3339profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Time: { input: unknown; output: unknown; }
  /** A field whose value exists in the standard IANA Time Zone Database: https://www.iana.org/time-zones */
  TimeZone: { input: unknown; output: unknown; }
  /** The javascript `Date` as integer. Type represents date and time as number of milliseconds from start of UNIX epoch. */
  Timestamp: { input: unknown; output: unknown; }
  /** A ULID (Universally Unique Lexicographically Sortable Identifier) is a 26-character string that is URL-safe, case-insensitive, and lexicographically sortable. */
  ULID: { input: unknown; output: unknown; }
  /** A field whose value conforms to the standard URL format as specified in RFC3986: https://www.ietf.org/rfc/rfc3986.txt. */
  URL: { input: unknown; output: unknown; }
  /** A currency string, such as $21.25 */
  USCurrency: { input: unknown; output: unknown; }
  /** A field whose value is a generic Universally Unique Identifier: https://en.wikipedia.org/wiki/Universally_unique_identifier. */
  UUID: { input: unknown; output: unknown; }
  /** Floats that will have a value of 0 or more. */
  UnsignedFloat: { input: unknown; output: unknown; }
  /** Integers that will have a value of 0 or more. */
  UnsignedInt: { input: unknown; output: unknown; }
  /** A field whose value is a UTC Offset: https://en.wikipedia.org/wiki/List_of_tz_database_time_zones */
  UtcOffset: { input: unknown; output: unknown; }
  /** Represents NULL values */
  Void: { input: unknown; output: unknown; }
};

export type AdminUser = {
  __typename?: 'AdminUser';
  createdAt: Scalars['Date']['output'];
  email: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['Date']['output'];
};

export type AnalyticsSummary = {
  __typename?: 'AnalyticsSummary';
  leads: Scalars['Int']['output'];
  outboundClicks: Scalars['Int']['output'];
  projectImpressions: Scalars['Int']['output'];
  resumeDownloads: Scalars['Int']['output'];
  totalVisits: Scalars['Int']['output'];
  uniqueVisitors: Scalars['Int']['output'];
};

export type AuthPayload = {
  __typename?: 'AuthPayload';
  admin: AdminUser;
  token: Scalars['String']['output'];
};

export type AvailabilityStatus = {
  __typename?: 'AvailabilityStatus';
  acceptingWork: Scalars['Boolean']['output'];
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  label: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type AvailabilityStatusConnection = {
  __typename?: 'AvailabilityStatusConnection';
  edges: Array<AvailabilityStatus>;
  pageInfo: PageInfo;
};

export type CaseStudySection = {
  __typename?: 'CaseStudySection';
  body: Scalars['String']['output'];
  order: Scalars['Int']['output'];
  title: Scalars['String']['output'];
};

export type CaseStudySectionInput = {
  body: Scalars['String']['input'];
  order?: InputMaybe<Scalars['Int']['input']>;
  title: Scalars['String']['input'];
};

export type Certification = {
  __typename?: 'Certification';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  date?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  issuer?: Maybe<Scalars['String']['output']>;
  order: Scalars['Int']['output'];
  title: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};

export type CertificationConnection = {
  __typename?: 'CertificationConnection';
  edges: Array<Certification>;
  pageInfo: PageInfo;
};

export type ContactLead = {
  __typename?: 'ContactLead';
  company?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  email: Scalars['String']['output'];
  followUpDate?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  message: Scalars['String']['output'];
  name: Scalars['String']['output'];
  notes?: Maybe<Scalars['String']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
  priority: LeadPriority;
  projectInterest?: Maybe<Scalars['String']['output']>;
  sourcePage?: Maybe<Scalars['String']['output']>;
  status: LeadStatus;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type CreateAvailabilityStatusInput = {
  acceptingWork?: InputMaybe<Scalars['Boolean']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  label: Scalars['String']['input'];
};

export type CreateCertificationInput = {
  date?: InputMaybe<Scalars['String']['input']>;
  issuer?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Scalars['Int']['input']>;
  title: Scalars['String']['input'];
  url?: InputMaybe<Scalars['String']['input']>;
};

export type CreateContactLeadInput = {
  company?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
  message: Scalars['String']['input'];
  name: Scalars['String']['input'];
  phone?: InputMaybe<Scalars['String']['input']>;
  projectInterest?: InputMaybe<Scalars['String']['input']>;
  sourcePage?: InputMaybe<Scalars['String']['input']>;
};

export type CreateEducationInput = {
  endDate?: InputMaybe<Scalars['String']['input']>;
  institution: Scalars['String']['input'];
  location?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Scalars['Int']['input']>;
  program: Scalars['String']['input'];
  startDate?: InputMaybe<Scalars['String']['input']>;
};

export type CreateExperienceInput = {
  company: Scalars['String']['input'];
  endDate?: InputMaybe<Scalars['DateTime']['input']>;
  highlights?: InputMaybe<Array<Scalars['String']['input']>>;
  isCurrent?: InputMaybe<Scalars['Boolean']['input']>;
  location?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Scalars['Int']['input']>;
  role: Scalars['String']['input'];
  startDate?: InputMaybe<Scalars['DateTime']['input']>;
  workMode?: InputMaybe<Scalars['String']['input']>;
};

export type CreateMediaAssetInput = {
  alt?: InputMaybe<Scalars['String']['input']>;
  projectId?: InputMaybe<Scalars['String']['input']>;
  title: Scalars['String']['input'];
  type?: InputMaybe<MediaType>;
  url: Scalars['String']['input'];
};

export type CreateProjectInput = {
  caseStudySections?: InputMaybe<Array<CaseStudySectionInput>>;
  client?: InputMaybe<Scalars['String']['input']>;
  company?: InputMaybe<Scalars['String']['input']>;
  featured?: InputMaybe<Scalars['Boolean']['input']>;
  features?: InputMaybe<Array<Scalars['String']['input']>>;
  github?: InputMaybe<GitHubMetadataInput>;
  lessons?: InputMaybe<Array<Scalars['String']['input']>>;
  links?: InputMaybe<Array<ProjectLinkInput>>;
  mediaIds?: InputMaybe<Array<Scalars['String']['input']>>;
  order?: InputMaybe<Scalars['Int']['input']>;
  outcomes?: InputMaybe<Array<Scalars['String']['input']>>;
  problem?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<Scalars['String']['input']>;
  seo?: InputMaybe<SeoMetadataInput>;
  slug: Scalars['String']['input'];
  stack?: InputMaybe<Array<Scalars['String']['input']>>;
  status?: InputMaybe<ProjectStatus>;
  summary: Scalars['String']['input'];
  title: Scalars['String']['input'];
  visibility?: InputMaybe<ProjectVisibility>;
};

export type CreateResumeAssetInput = {
  focus?: InputMaybe<Scalars['String']['input']>;
  isDefault?: InputMaybe<Scalars['Boolean']['input']>;
  title: Scalars['String']['input'];
  url: Scalars['String']['input'];
};

export type CreateSkillInput = {
  category: Scalars['String']['input'];
  featured?: InputMaybe<Scalars['Boolean']['input']>;
  name: Scalars['String']['input'];
  order?: InputMaybe<Scalars['Int']['input']>;
};

export type CreateTestimonialInput = {
  company?: InputMaybe<Scalars['String']['input']>;
  isVisible?: InputMaybe<Scalars['Boolean']['input']>;
  name: Scalars['String']['input'];
  order?: InputMaybe<Scalars['Int']['input']>;
  quote: Scalars['String']['input'];
  role?: InputMaybe<Scalars['String']['input']>;
};

export type Education = {
  __typename?: 'Education';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  endDate?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  institution: Scalars['String']['output'];
  location?: Maybe<Scalars['String']['output']>;
  order: Scalars['Int']['output'];
  program: Scalars['String']['output'];
  startDate?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type EducationConnection = {
  __typename?: 'EducationConnection';
  edges: Array<Education>;
  pageInfo: PageInfo;
};

export type Experience = {
  __typename?: 'Experience';
  company: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  endDate?: Maybe<Scalars['String']['output']>;
  highlights: Array<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  isCurrent: Scalars['Boolean']['output'];
  location?: Maybe<Scalars['String']['output']>;
  order: Scalars['Int']['output'];
  role: Scalars['String']['output'];
  startDate?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
  workMode?: Maybe<Scalars['String']['output']>;
};

export type ExperienceConnection = {
  __typename?: 'ExperienceConnection';
  edges: Array<Experience>;
  pageInfo: PageInfo;
};

export type GetAvailabilityStatusFilters = {
  acceptingWork?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
};

export type GetCertificationFilters = {
  issuer?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
};

export type GetEducationFilters = {
  institution?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
};

export type GetExperienceFilters = {
  company?: InputMaybe<Scalars['String']['input']>;
  isCurrent?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
};

export type GetMediaAssetFilters = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  projectId?: InputMaybe<Scalars['String']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<MediaType>;
};

export type GetPortfolioFilters = {
  certifications?: InputMaybe<GetCertificationFilters>;
  education?: InputMaybe<GetEducationFilters>;
  experiences?: InputMaybe<GetExperienceFilters>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  projects?: InputMaybe<GetProjectFilters>;
  resumes?: InputMaybe<GetResumeAssetFilters>;
  skills?: InputMaybe<GetSkillFilters>;
  testimonials?: InputMaybe<GetTestimonialFilters>;
};

export type GetProjectFilters = {
  client?: InputMaybe<Scalars['String']['input']>;
  company?: InputMaybe<Scalars['String']['input']>;
  featured?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  stack?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<ProjectStatus>;
  visibility?: InputMaybe<ProjectVisibility>;
};

export type GetResumeAssetFilters = {
  focus?: InputMaybe<Scalars['String']['input']>;
  isDefault?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
};

export type GetSkillFilters = {
  category?: InputMaybe<Scalars['String']['input']>;
  featured?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
};

export type GetTestimonialFilters = {
  company?: InputMaybe<Scalars['String']['input']>;
  isVisible?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
};

export type GitHubMetadata = {
  __typename?: 'GitHubMetadata';
  defaultBranch?: Maybe<Scalars['String']['output']>;
  language?: Maybe<Scalars['String']['output']>;
  pushedAt?: Maybe<Scalars['DateTime']['output']>;
  repoUrl?: Maybe<Scalars['String']['output']>;
  stars?: Maybe<Scalars['Int']['output']>;
};

export type GitHubMetadataInput = {
  defaultBranch?: InputMaybe<Scalars['String']['input']>;
  language?: InputMaybe<Scalars['String']['input']>;
  pushedAt?: InputMaybe<Scalars['DateTime']['input']>;
  repoUrl?: InputMaybe<Scalars['String']['input']>;
  stars?: InputMaybe<Scalars['Int']['input']>;
};

export enum LeadPriority {
  HIGH = 'HIGH',
  LOW = 'LOW',
  MEDIUM = 'MEDIUM'
}

export enum LeadStatus {
  ARCHIVED = 'ARCHIVED',
  NEW = 'NEW',
  REPLIED = 'REPLIED',
  REVIEWED = 'REVIEWED'
}

export type LoginInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type MediaAsset = {
  __typename?: 'MediaAsset';
  alt?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  projectId?: Maybe<Scalars['String']['output']>;
  title: Scalars['String']['output'];
  type: MediaType;
  url: Scalars['String']['output'];
};

export type MediaAssetConnection = {
  __typename?: 'MediaAssetConnection';
  edges: Array<MediaAsset>;
  pageInfo: PageInfo;
};

export enum MediaType {
  IMAGE = 'IMAGE',
  LOGO = 'LOGO',
  OG_IMAGE = 'OG_IMAGE',
  OTHER = 'OTHER',
  RESUME = 'RESUME',
  SCREENSHOT = 'SCREENSHOT'
}

export type Mutation = {
  __typename?: 'Mutation';
  _empty?: Maybe<Scalars['String']['output']>;
  createAvailabilityStatus: AvailabilityStatus;
  createCertification: Certification;
  createContactLead: ContactLead;
  createEducation: Education;
  createExperience: Experience;
  createMediaAsset: MediaAsset;
  createProject: Project;
  createResumeAsset: ResumeAsset;
  createSkill: Skill;
  createTestimonial: Testimonial;
  deleteCertification: Scalars['Boolean']['output'];
  deleteEducation: Scalars['Boolean']['output'];
  deleteExperience: Scalars['Boolean']['output'];
  deleteProject: Scalars['Boolean']['output'];
  deleteSkill: Scalars['Boolean']['output'];
  login: AuthPayload;
  setDefaultResume: ResumeAsset;
  trackOutboundClick: Scalars['Boolean']['output'];
  trackProjectImpression: Scalars['Boolean']['output'];
  trackResumeDownload: Scalars['Boolean']['output'];
  trackVisit: Scalars['Boolean']['output'];
  updateAvailabilityStatus: AvailabilityStatus;
  updateCertification: Certification;
  updateContactLead: ContactLead;
  updateEducation: Education;
  updateExperience: Experience;
  updateMediaAsset: MediaAsset;
  updateProfile: Profile;
  updateProject: Project;
  updateResumeAsset: ResumeAsset;
  updateSkill: Skill;
  updateTestimonial: Testimonial;
};


export type MutationCreateAvailabilityStatusArgs = {
  data: CreateAvailabilityStatusInput;
};


export type MutationCreateCertificationArgs = {
  data: CreateCertificationInput;
};


export type MutationCreateContactLeadArgs = {
  data: CreateContactLeadInput;
};


export type MutationCreateEducationArgs = {
  data: CreateEducationInput;
};


export type MutationCreateExperienceArgs = {
  data: CreateExperienceInput;
};


export type MutationCreateMediaAssetArgs = {
  data: CreateMediaAssetInput;
};


export type MutationCreateProjectArgs = {
  data: CreateProjectInput;
};


export type MutationCreateResumeAssetArgs = {
  data: CreateResumeAssetInput;
};


export type MutationCreateSkillArgs = {
  data: CreateSkillInput;
};


export type MutationCreateTestimonialArgs = {
  data: CreateTestimonialInput;
};


export type MutationDeleteCertificationArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteEducationArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteExperienceArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteProjectArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteSkillArgs = {
  id: Scalars['ID']['input'];
};


export type MutationLoginArgs = {
  data: LoginInput;
};


export type MutationSetDefaultResumeArgs = {
  id: Scalars['ID']['input'];
};


export type MutationTrackOutboundClickArgs = {
  data: OutboundClickInput;
};


export type MutationTrackProjectImpressionArgs = {
  data: ProjectImpressionInput;
};


export type MutationTrackResumeDownloadArgs = {
  data: ResumeDownloadInput;
};


export type MutationTrackVisitArgs = {
  data: VisitEventInput;
};


export type MutationUpdateAvailabilityStatusArgs = {
  data: UpdateAvailabilityStatusInput;
};


export type MutationUpdateCertificationArgs = {
  data: UpdateCertificationInput;
};


export type MutationUpdateContactLeadArgs = {
  data: UpdateContactLeadInput;
};


export type MutationUpdateEducationArgs = {
  data: UpdateEducationInput;
};


export type MutationUpdateExperienceArgs = {
  data: UpdateExperienceInput;
};


export type MutationUpdateMediaAssetArgs = {
  data: UpdateMediaAssetInput;
};


export type MutationUpdateProfileArgs = {
  data: UpdateProfileInput;
};


export type MutationUpdateProjectArgs = {
  data: UpdateProjectInput;
};


export type MutationUpdateResumeAssetArgs = {
  data: UpdateResumeAssetInput;
};


export type MutationUpdateSkillArgs = {
  data: UpdateSkillInput;
};


export type MutationUpdateTestimonialArgs = {
  data: UpdateTestimonialInput;
};

export type OutboundClickInput = {
  label?: InputMaybe<Scalars['String']['input']>;
  path?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
  visitorId?: InputMaybe<Scalars['String']['input']>;
};

export type PageInfo = {
  __typename?: 'PageInfo';
  hasNextPage: Scalars['Boolean']['output'];
  limit: Scalars['Int']['output'];
  page: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type Portfolio = {
  __typename?: 'Portfolio';
  availability?: Maybe<AvailabilityStatus>;
  certifications: Array<Certification>;
  defaultResume?: Maybe<ResumeAsset>;
  education: Array<Education>;
  experiences: Array<Experience>;
  featuredProjects: Array<Project>;
  profile?: Maybe<Profile>;
  projects: Array<Project>;
  resumes: Array<ResumeAsset>;
  skills: Array<Skill>;
  testimonials: Array<Testimonial>;
};

export type Profile = {
  __typename?: 'Profile';
  bio: Scalars['String']['output'];
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  email: Scalars['String']['output'];
  fullName: Scalars['String']['output'];
  githubUrl?: Maybe<Scalars['String']['output']>;
  headline: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  linkedInUrl?: Maybe<Scalars['String']['output']>;
  location?: Maybe<Scalars['String']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
  seo?: Maybe<SeoMetadata>;
  title: Scalars['String']['output'];
  twitterUrl?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type Project = {
  __typename?: 'Project';
  caseStudySections: Array<CaseStudySection>;
  client?: Maybe<Scalars['String']['output']>;
  company?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  featured: Scalars['Boolean']['output'];
  features: Array<Scalars['String']['output']>;
  github?: Maybe<GitHubMetadata>;
  id: Scalars['ID']['output'];
  lessons: Array<Scalars['String']['output']>;
  links: Array<ProjectLink>;
  mediaIds: Array<Scalars['String']['output']>;
  order: Scalars['Int']['output'];
  outcomes: Array<Scalars['String']['output']>;
  problem?: Maybe<Scalars['String']['output']>;
  role?: Maybe<Scalars['String']['output']>;
  seo?: Maybe<SeoMetadata>;
  slug: Scalars['String']['output'];
  stack: Array<Scalars['String']['output']>;
  status: ProjectStatus;
  summary: Scalars['String']['output'];
  title: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  visibility: ProjectVisibility;
};

export type ProjectConnection = {
  __typename?: 'ProjectConnection';
  edges: Array<Project>;
  pageInfo: PageInfo;
};

export type ProjectImpressionInput = {
  path?: InputMaybe<Scalars['String']['input']>;
  projectId?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  visitorId?: InputMaybe<Scalars['String']['input']>;
};

export type ProjectLink = {
  __typename?: 'ProjectLink';
  label?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};

export type ProjectLinkInput = {
  label?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
};

export enum ProjectStatus {
  ARCHIVED = 'ARCHIVED',
  CLIENT_WORK = 'CLIENT_WORK',
  IN_PROGRESS = 'IN_PROGRESS',
  LIVE = 'LIVE',
  OPEN_SOURCE = 'OPEN_SOURCE',
  PRIVATE = 'PRIVATE'
}

export enum ProjectVisibility {
  HIDDEN = 'HIDDEN',
  PASSWORD_PROTECTED = 'PASSWORD_PROTECTED',
  PRIVATE_SUMMARY = 'PRIVATE_SUMMARY',
  PUBLIC = 'PUBLIC'
}

export type Query = {
  __typename?: 'Query';
  _empty?: Maybe<Scalars['String']['output']>;
  adminLeads: Array<ContactLead>;
  adminMe: AdminUser;
  adminMediaAssets: MediaAssetConnection;
  adminResumes: ResumeAssetConnection;
  adminTestimonials: TestimonialConnection;
  analyticsSummary: AnalyticsSummary;
  getAdminProjects: ProjectConnection;
  getAvailabilityStatusById: AvailabilityStatus;
  getCertificationById: Certification;
  getCertifications: CertificationConnection;
  getEducation: EducationConnection;
  getEducationById: Education;
  getExperienceById: Experience;
  getExperiences: ExperienceConnection;
  getFeaturedPublicProjects: ProjectConnection;
  getLatestAvailabilityStatus?: Maybe<AvailabilityStatus>;
  getProfileById: Profile;
  getProjectById: Project;
  getPublicProjectBySlug?: Maybe<Project>;
  getPublicProjects: ProjectConnection;
  getSkillById: Skill;
  getSkills: SkillConnection;
  healthCheck: Scalars['String']['output'];
  hello: Scalars['String']['output'];
  portfolio: Portfolio;
};


export type QueryAdminMediaAssetsArgs = {
  filters: GetMediaAssetFilters;
};


export type QueryAdminResumesArgs = {
  filters: GetResumeAssetFilters;
};


export type QueryAdminTestimonialsArgs = {
  filters: GetTestimonialFilters;
};


export type QueryAnalyticsSummaryArgs = {
  days?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetAdminProjectsArgs = {
  filters: GetProjectFilters;
};


export type QueryGetAvailabilityStatusByIdArgs = {
  id: Scalars['ID']['input'];
};


export type QueryGetCertificationByIdArgs = {
  id: Scalars['ID']['input'];
};


export type QueryGetCertificationsArgs = {
  filters: GetCertificationFilters;
};


export type QueryGetEducationArgs = {
  filters: GetEducationFilters;
};


export type QueryGetEducationByIdArgs = {
  id: Scalars['ID']['input'];
};


export type QueryGetExperienceByIdArgs = {
  id: Scalars['ID']['input'];
};


export type QueryGetExperiencesArgs = {
  filters: GetExperienceFilters;
};


export type QueryGetFeaturedPublicProjectsArgs = {
  filters: GetProjectFilters;
};


export type QueryGetProfileByIdArgs = {
  id: Scalars['ID']['input'];
};


export type QueryGetProjectByIdArgs = {
  id: Scalars['ID']['input'];
};


export type QueryGetPublicProjectBySlugArgs = {
  slug: Scalars['String']['input'];
};


export type QueryGetPublicProjectsArgs = {
  filters: GetProjectFilters;
};


export type QueryGetSkillByIdArgs = {
  id: Scalars['ID']['input'];
};


export type QueryGetSkillsArgs = {
  filters: GetSkillFilters;
};


export type QueryPortfolioArgs = {
  filters?: InputMaybe<GetPortfolioFilters>;
};

export type ResumeAsset = {
  __typename?: 'ResumeAsset';
  downloads: Scalars['Int']['output'];
  focus?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  isDefault: Scalars['Boolean']['output'];
  title: Scalars['String']['output'];
  url: Scalars['String']['output'];
};

export type ResumeAssetConnection = {
  __typename?: 'ResumeAssetConnection';
  edges: Array<ResumeAsset>;
  pageInfo: PageInfo;
};

export type ResumeDownloadInput = {
  path?: InputMaybe<Scalars['String']['input']>;
  resumeId: Scalars['ID']['input'];
  visitorId?: InputMaybe<Scalars['String']['input']>;
};

export type SeoMetadata = {
  __typename?: 'SeoMetadata';
  description?: Maybe<Scalars['String']['output']>;
  keywords: Array<Scalars['String']['output']>;
  ogImageId?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export type SeoMetadataInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  keywords?: InputMaybe<Array<Scalars['String']['input']>>;
  ogImageId?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type Skill = {
  __typename?: 'Skill';
  category: Scalars['String']['output'];
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  featured: Scalars['Boolean']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  order: Scalars['Int']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type SkillConnection = {
  __typename?: 'SkillConnection';
  edges: Array<Skill>;
  pageInfo: PageInfo;
};

export type Subscription = {
  __typename?: 'Subscription';
  _empty?: Maybe<Scalars['String']['output']>;
};

export type Testimonial = {
  __typename?: 'Testimonial';
  company?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  isVisible: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  order: Scalars['Int']['output'];
  quote: Scalars['String']['output'];
  role?: Maybe<Scalars['String']['output']>;
};

export type TestimonialConnection = {
  __typename?: 'TestimonialConnection';
  edges: Array<Testimonial>;
  pageInfo: PageInfo;
};

export type UpdateAvailabilityStatusInput = {
  acceptingWork?: InputMaybe<Scalars['Boolean']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  label?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateCertificationInput = {
  date?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  issuer?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateContactLeadInput = {
  followUpDate?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  notes?: InputMaybe<Scalars['String']['input']>;
  priority?: InputMaybe<LeadPriority>;
  status?: InputMaybe<LeadStatus>;
};

export type UpdateEducationInput = {
  endDate?: InputMaybe<Scalars['DateTime']['input']>;
  id: Scalars['ID']['input'];
  institution?: InputMaybe<Scalars['String']['input']>;
  location?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Scalars['Int']['input']>;
  program?: InputMaybe<Scalars['String']['input']>;
  startDate?: InputMaybe<Scalars['DateTime']['input']>;
};

export type UpdateExperienceInput = {
  company?: InputMaybe<Scalars['String']['input']>;
  endDate?: InputMaybe<Scalars['DateTime']['input']>;
  highlights?: InputMaybe<Array<Scalars['String']['input']>>;
  id: Scalars['ID']['input'];
  isCurrent?: InputMaybe<Scalars['Boolean']['input']>;
  location?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Scalars['Int']['input']>;
  role?: InputMaybe<Scalars['String']['input']>;
  startDate?: InputMaybe<Scalars['DateTime']['input']>;
  workMode?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateMediaAssetInput = {
  alt?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  projectId?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<MediaType>;
  url?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateProfileInput = {
  bio?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  fullName?: InputMaybe<Scalars['String']['input']>;
  githubUrl?: InputMaybe<Scalars['String']['input']>;
  headline?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  linkedInUrl?: InputMaybe<Scalars['String']['input']>;
  location?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  seo?: InputMaybe<SeoMetadataInput>;
  title?: InputMaybe<Scalars['String']['input']>;
  twitterUrl?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateProjectInput = {
  caseStudySections?: InputMaybe<Array<CaseStudySectionInput>>;
  client?: InputMaybe<Scalars['String']['input']>;
  company?: InputMaybe<Scalars['String']['input']>;
  featured?: InputMaybe<Scalars['Boolean']['input']>;
  features?: InputMaybe<Array<Scalars['String']['input']>>;
  github?: InputMaybe<GitHubMetadataInput>;
  id: Scalars['ID']['input'];
  lessons?: InputMaybe<Array<Scalars['String']['input']>>;
  links?: InputMaybe<Array<ProjectLinkInput>>;
  mediaIds?: InputMaybe<Array<Scalars['String']['input']>>;
  order?: InputMaybe<Scalars['Int']['input']>;
  outcomes?: InputMaybe<Array<Scalars['String']['input']>>;
  problem?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<Scalars['String']['input']>;
  seo?: InputMaybe<SeoMetadataInput>;
  slug?: InputMaybe<Scalars['String']['input']>;
  stack?: InputMaybe<Array<Scalars['String']['input']>>;
  status?: InputMaybe<ProjectStatus>;
  summary?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  visibility?: InputMaybe<ProjectVisibility>;
};

export type UpdateResumeAssetInput = {
  focus?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  isDefault?: InputMaybe<Scalars['Boolean']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateSkillInput = {
  category?: InputMaybe<Scalars['String']['input']>;
  featured?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['ID']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Scalars['Int']['input']>;
};

export type UpdateTestimonialInput = {
  company?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  isVisible?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Scalars['Int']['input']>;
  quote?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<Scalars['String']['input']>;
};

export type VisitEventInput = {
  device?: InputMaybe<Scalars['String']['input']>;
  path?: InputMaybe<Scalars['String']['input']>;
  referrer?: InputMaybe<Scalars['String']['input']>;
  sessionId?: InputMaybe<Scalars['String']['input']>;
  userAgent?: InputMaybe<Scalars['String']['input']>;
  utmCampaign?: InputMaybe<Scalars['String']['input']>;
  utmMedium?: InputMaybe<Scalars['String']['input']>;
  utmSource?: InputMaybe<Scalars['String']['input']>;
  visitorId?: InputMaybe<Scalars['String']['input']>;
};
