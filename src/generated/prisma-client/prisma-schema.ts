export const typeDefs = /* GraphQL */ `type Address {
  id: ID!
  type: AddressTypes!
  street: String!
  suite: String
  city: String!
  provinceState: String!
  postalcode: String!
  coordinate: Coordinate
  timezone: TimeZone
  owner: User!
}

type AddressConnection {
  pageInfo: PageInfo!
  edges: [AddressEdge]!
  aggregate: AggregateAddress!
}

input AddressCreateInput {
  type: AddressTypes!
  street: String!
  suite: String
  city: String!
  provinceState: String!
  postalcode: String!
  coordinate: CoordinateCreateOneInput
  timezone: TimeZoneCreateOneInput
  owner: UserCreateOneWithoutAddressesInput!
}

input AddressCreateManyWithoutOwnerInput {
  create: [AddressCreateWithoutOwnerInput!]
  connect: [AddressWhereUniqueInput!]
}

input AddressCreateOneInput {
  create: AddressCreateInput
  connect: AddressWhereUniqueInput
}

input AddressCreateWithoutOwnerInput {
  type: AddressTypes!
  street: String!
  suite: String
  city: String!
  provinceState: String!
  postalcode: String!
  coordinate: CoordinateCreateOneInput
  timezone: TimeZoneCreateOneInput
}

type AddressEdge {
  node: Address!
  cursor: String!
}

enum AddressOrderByInput {
  id_ASC
  id_DESC
  type_ASC
  type_DESC
  street_ASC
  street_DESC
  suite_ASC
  suite_DESC
  city_ASC
  city_DESC
  provinceState_ASC
  provinceState_DESC
  postalcode_ASC
  postalcode_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type AddressPreviousValues {
  id: ID!
  type: AddressTypes!
  street: String!
  suite: String
  city: String!
  provinceState: String!
  postalcode: String!
}

input AddressScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  type: AddressTypes
  type_not: AddressTypes
  type_in: [AddressTypes!]
  type_not_in: [AddressTypes!]
  street: String
  street_not: String
  street_in: [String!]
  street_not_in: [String!]
  street_lt: String
  street_lte: String
  street_gt: String
  street_gte: String
  street_contains: String
  street_not_contains: String
  street_starts_with: String
  street_not_starts_with: String
  street_ends_with: String
  street_not_ends_with: String
  suite: String
  suite_not: String
  suite_in: [String!]
  suite_not_in: [String!]
  suite_lt: String
  suite_lte: String
  suite_gt: String
  suite_gte: String
  suite_contains: String
  suite_not_contains: String
  suite_starts_with: String
  suite_not_starts_with: String
  suite_ends_with: String
  suite_not_ends_with: String
  city: String
  city_not: String
  city_in: [String!]
  city_not_in: [String!]
  city_lt: String
  city_lte: String
  city_gt: String
  city_gte: String
  city_contains: String
  city_not_contains: String
  city_starts_with: String
  city_not_starts_with: String
  city_ends_with: String
  city_not_ends_with: String
  provinceState: String
  provinceState_not: String
  provinceState_in: [String!]
  provinceState_not_in: [String!]
  provinceState_lt: String
  provinceState_lte: String
  provinceState_gt: String
  provinceState_gte: String
  provinceState_contains: String
  provinceState_not_contains: String
  provinceState_starts_with: String
  provinceState_not_starts_with: String
  provinceState_ends_with: String
  provinceState_not_ends_with: String
  postalcode: String
  postalcode_not: String
  postalcode_in: [String!]
  postalcode_not_in: [String!]
  postalcode_lt: String
  postalcode_lte: String
  postalcode_gt: String
  postalcode_gte: String
  postalcode_contains: String
  postalcode_not_contains: String
  postalcode_starts_with: String
  postalcode_not_starts_with: String
  postalcode_ends_with: String
  postalcode_not_ends_with: String
  AND: [AddressScalarWhereInput!]
  OR: [AddressScalarWhereInput!]
  NOT: [AddressScalarWhereInput!]
}

type AddressSubscriptionPayload {
  mutation: MutationType!
  node: Address
  updatedFields: [String!]
  previousValues: AddressPreviousValues
}

input AddressSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: AddressWhereInput
  AND: [AddressSubscriptionWhereInput!]
  OR: [AddressSubscriptionWhereInput!]
  NOT: [AddressSubscriptionWhereInput!]
}

enum AddressTypes {
  BILLING
  BUSINESS
  DELIVERY
  HOME
  VENDOR
}

input AddressUpdateDataInput {
  type: AddressTypes
  street: String
  suite: String
  city: String
  provinceState: String
  postalcode: String
  coordinate: CoordinateUpdateOneInput
  timezone: TimeZoneUpdateOneInput
  owner: UserUpdateOneRequiredWithoutAddressesInput
}

input AddressUpdateInput {
  type: AddressTypes
  street: String
  suite: String
  city: String
  provinceState: String
  postalcode: String
  coordinate: CoordinateUpdateOneInput
  timezone: TimeZoneUpdateOneInput
  owner: UserUpdateOneRequiredWithoutAddressesInput
}

input AddressUpdateManyDataInput {
  type: AddressTypes
  street: String
  suite: String
  city: String
  provinceState: String
  postalcode: String
}

input AddressUpdateManyMutationInput {
  type: AddressTypes
  street: String
  suite: String
  city: String
  provinceState: String
  postalcode: String
}

input AddressUpdateManyWithoutOwnerInput {
  create: [AddressCreateWithoutOwnerInput!]
  delete: [AddressWhereUniqueInput!]
  connect: [AddressWhereUniqueInput!]
  disconnect: [AddressWhereUniqueInput!]
  update: [AddressUpdateWithWhereUniqueWithoutOwnerInput!]
  upsert: [AddressUpsertWithWhereUniqueWithoutOwnerInput!]
  deleteMany: [AddressScalarWhereInput!]
  updateMany: [AddressUpdateManyWithWhereNestedInput!]
}

input AddressUpdateManyWithWhereNestedInput {
  where: AddressScalarWhereInput!
  data: AddressUpdateManyDataInput!
}

input AddressUpdateOneRequiredInput {
  create: AddressCreateInput
  update: AddressUpdateDataInput
  upsert: AddressUpsertNestedInput
  connect: AddressWhereUniqueInput
}

input AddressUpdateWithoutOwnerDataInput {
  type: AddressTypes
  street: String
  suite: String
  city: String
  provinceState: String
  postalcode: String
  coordinate: CoordinateUpdateOneInput
  timezone: TimeZoneUpdateOneInput
}

input AddressUpdateWithWhereUniqueWithoutOwnerInput {
  where: AddressWhereUniqueInput!
  data: AddressUpdateWithoutOwnerDataInput!
}

input AddressUpsertNestedInput {
  update: AddressUpdateDataInput!
  create: AddressCreateInput!
}

input AddressUpsertWithWhereUniqueWithoutOwnerInput {
  where: AddressWhereUniqueInput!
  update: AddressUpdateWithoutOwnerDataInput!
  create: AddressCreateWithoutOwnerInput!
}

input AddressWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  type: AddressTypes
  type_not: AddressTypes
  type_in: [AddressTypes!]
  type_not_in: [AddressTypes!]
  street: String
  street_not: String
  street_in: [String!]
  street_not_in: [String!]
  street_lt: String
  street_lte: String
  street_gt: String
  street_gte: String
  street_contains: String
  street_not_contains: String
  street_starts_with: String
  street_not_starts_with: String
  street_ends_with: String
  street_not_ends_with: String
  suite: String
  suite_not: String
  suite_in: [String!]
  suite_not_in: [String!]
  suite_lt: String
  suite_lte: String
  suite_gt: String
  suite_gte: String
  suite_contains: String
  suite_not_contains: String
  suite_starts_with: String
  suite_not_starts_with: String
  suite_ends_with: String
  suite_not_ends_with: String
  city: String
  city_not: String
  city_in: [String!]
  city_not_in: [String!]
  city_lt: String
  city_lte: String
  city_gt: String
  city_gte: String
  city_contains: String
  city_not_contains: String
  city_starts_with: String
  city_not_starts_with: String
  city_ends_with: String
  city_not_ends_with: String
  provinceState: String
  provinceState_not: String
  provinceState_in: [String!]
  provinceState_not_in: [String!]
  provinceState_lt: String
  provinceState_lte: String
  provinceState_gt: String
  provinceState_gte: String
  provinceState_contains: String
  provinceState_not_contains: String
  provinceState_starts_with: String
  provinceState_not_starts_with: String
  provinceState_ends_with: String
  provinceState_not_ends_with: String
  postalcode: String
  postalcode_not: String
  postalcode_in: [String!]
  postalcode_not_in: [String!]
  postalcode_lt: String
  postalcode_lte: String
  postalcode_gt: String
  postalcode_gte: String
  postalcode_contains: String
  postalcode_not_contains: String
  postalcode_starts_with: String
  postalcode_not_starts_with: String
  postalcode_ends_with: String
  postalcode_not_ends_with: String
  coordinate: CoordinateWhereInput
  timezone: TimeZoneWhereInput
  owner: UserWhereInput
  AND: [AddressWhereInput!]
  OR: [AddressWhereInput!]
  NOT: [AddressWhereInput!]
}

input AddressWhereUniqueInput {
  id: ID
}

type AggregateAddress {
  count: Int!
}

type AggregateComment {
  count: Int!
}

type AggregateCompany {
  count: Int!
}

type AggregateCoordinate {
  count: Int!
}

type AggregateImage {
  count: Int!
}

type AggregatePermission {
  count: Int!
}

type AggregatePost {
  count: Int!
}

type AggregateProduct {
  count: Int!
}

type AggregateRole {
  count: Int!
}

type AggregateSettings {
  count: Int!
}

type AggregateTelephoneNumber {
  count: Int!
}

type AggregateTenant {
  count: Int!
}

type AggregateTenantUserRole {
  count: Int!
}

type AggregateTimeZone {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type BatchPayload {
  count: Long!
}

type Comment {
  id: ID!
  content: String
  post: Post!
  author: User!
  createdAt: DateTime!
  updatedAt: DateTime!
}

type CommentConnection {
  pageInfo: PageInfo!
  edges: [CommentEdge]!
  aggregate: AggregateComment!
}

input CommentCreateInput {
  content: String
  post: PostCreateOneWithoutCommentsInput!
  author: UserCreateOneWithoutCommentsInput!
}

input CommentCreateManyWithoutAuthorInput {
  create: [CommentCreateWithoutAuthorInput!]
  connect: [CommentWhereUniqueInput!]
}

input CommentCreateManyWithoutPostInput {
  create: [CommentCreateWithoutPostInput!]
  connect: [CommentWhereUniqueInput!]
}

input CommentCreateWithoutAuthorInput {
  content: String
  post: PostCreateOneWithoutCommentsInput!
}

input CommentCreateWithoutPostInput {
  content: String
  author: UserCreateOneWithoutCommentsInput!
}

type CommentEdge {
  node: Comment!
  cursor: String!
}

enum CommentOrderByInput {
  id_ASC
  id_DESC
  content_ASC
  content_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type CommentPreviousValues {
  id: ID!
  content: String
  createdAt: DateTime!
  updatedAt: DateTime!
}

input CommentScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  content: String
  content_not: String
  content_in: [String!]
  content_not_in: [String!]
  content_lt: String
  content_lte: String
  content_gt: String
  content_gte: String
  content_contains: String
  content_not_contains: String
  content_starts_with: String
  content_not_starts_with: String
  content_ends_with: String
  content_not_ends_with: String
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  AND: [CommentScalarWhereInput!]
  OR: [CommentScalarWhereInput!]
  NOT: [CommentScalarWhereInput!]
}

type CommentSubscriptionPayload {
  mutation: MutationType!
  node: Comment
  updatedFields: [String!]
  previousValues: CommentPreviousValues
}

input CommentSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: CommentWhereInput
  AND: [CommentSubscriptionWhereInput!]
  OR: [CommentSubscriptionWhereInput!]
  NOT: [CommentSubscriptionWhereInput!]
}

input CommentUpdateInput {
  content: String
  post: PostUpdateOneRequiredWithoutCommentsInput
  author: UserUpdateOneRequiredWithoutCommentsInput
}

input CommentUpdateManyDataInput {
  content: String
}

input CommentUpdateManyMutationInput {
  content: String
}

input CommentUpdateManyWithoutAuthorInput {
  create: [CommentCreateWithoutAuthorInput!]
  delete: [CommentWhereUniqueInput!]
  connect: [CommentWhereUniqueInput!]
  disconnect: [CommentWhereUniqueInput!]
  update: [CommentUpdateWithWhereUniqueWithoutAuthorInput!]
  upsert: [CommentUpsertWithWhereUniqueWithoutAuthorInput!]
  deleteMany: [CommentScalarWhereInput!]
  updateMany: [CommentUpdateManyWithWhereNestedInput!]
}

input CommentUpdateManyWithoutPostInput {
  create: [CommentCreateWithoutPostInput!]
  delete: [CommentWhereUniqueInput!]
  connect: [CommentWhereUniqueInput!]
  disconnect: [CommentWhereUniqueInput!]
  update: [CommentUpdateWithWhereUniqueWithoutPostInput!]
  upsert: [CommentUpsertWithWhereUniqueWithoutPostInput!]
  deleteMany: [CommentScalarWhereInput!]
  updateMany: [CommentUpdateManyWithWhereNestedInput!]
}

input CommentUpdateManyWithWhereNestedInput {
  where: CommentScalarWhereInput!
  data: CommentUpdateManyDataInput!
}

input CommentUpdateWithoutAuthorDataInput {
  content: String
  post: PostUpdateOneRequiredWithoutCommentsInput
}

input CommentUpdateWithoutPostDataInput {
  content: String
  author: UserUpdateOneRequiredWithoutCommentsInput
}

input CommentUpdateWithWhereUniqueWithoutAuthorInput {
  where: CommentWhereUniqueInput!
  data: CommentUpdateWithoutAuthorDataInput!
}

input CommentUpdateWithWhereUniqueWithoutPostInput {
  where: CommentWhereUniqueInput!
  data: CommentUpdateWithoutPostDataInput!
}

input CommentUpsertWithWhereUniqueWithoutAuthorInput {
  where: CommentWhereUniqueInput!
  update: CommentUpdateWithoutAuthorDataInput!
  create: CommentCreateWithoutAuthorInput!
}

input CommentUpsertWithWhereUniqueWithoutPostInput {
  where: CommentWhereUniqueInput!
  update: CommentUpdateWithoutPostDataInput!
  create: CommentCreateWithoutPostInput!
}

input CommentWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  content: String
  content_not: String
  content_in: [String!]
  content_not_in: [String!]
  content_lt: String
  content_lte: String
  content_gt: String
  content_gte: String
  content_contains: String
  content_not_contains: String
  content_starts_with: String
  content_not_starts_with: String
  content_ends_with: String
  content_not_ends_with: String
  post: PostWhereInput
  author: UserWhereInput
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  AND: [CommentWhereInput!]
  OR: [CommentWhereInput!]
  NOT: [CommentWhereInput!]
}

input CommentWhereUniqueInput {
  id: ID
}

type Company {
  id: ID!
  name: String!
  address: Address!
  contactNumber: TelephoneNumber!
  contactEmail: String!
  domain: String!
  contactPerson: String
}

type CompanyConnection {
  pageInfo: PageInfo!
  edges: [CompanyEdge]!
  aggregate: AggregateCompany!
}

input CompanyCreateInput {
  name: String!
  address: AddressCreateOneInput!
  contactNumber: TelephoneNumberCreateOneInput!
  contactEmail: String!
  domain: String!
  contactPerson: String
}

input CompanyCreateOneInput {
  create: CompanyCreateInput
  connect: CompanyWhereUniqueInput
}

type CompanyEdge {
  node: Company!
  cursor: String!
}

enum CompanyOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  contactEmail_ASC
  contactEmail_DESC
  domain_ASC
  domain_DESC
  contactPerson_ASC
  contactPerson_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type CompanyPreviousValues {
  id: ID!
  name: String!
  contactEmail: String!
  domain: String!
  contactPerson: String
}

type CompanySubscriptionPayload {
  mutation: MutationType!
  node: Company
  updatedFields: [String!]
  previousValues: CompanyPreviousValues
}

input CompanySubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: CompanyWhereInput
  AND: [CompanySubscriptionWhereInput!]
  OR: [CompanySubscriptionWhereInput!]
  NOT: [CompanySubscriptionWhereInput!]
}

input CompanyUpdateDataInput {
  name: String
  address: AddressUpdateOneRequiredInput
  contactNumber: TelephoneNumberUpdateOneRequiredInput
  contactEmail: String
  domain: String
  contactPerson: String
}

input CompanyUpdateInput {
  name: String
  address: AddressUpdateOneRequiredInput
  contactNumber: TelephoneNumberUpdateOneRequiredInput
  contactEmail: String
  domain: String
  contactPerson: String
}

input CompanyUpdateManyMutationInput {
  name: String
  contactEmail: String
  domain: String
  contactPerson: String
}

input CompanyUpdateOneRequiredInput {
  create: CompanyCreateInput
  update: CompanyUpdateDataInput
  upsert: CompanyUpsertNestedInput
  connect: CompanyWhereUniqueInput
}

input CompanyUpsertNestedInput {
  update: CompanyUpdateDataInput!
  create: CompanyCreateInput!
}

input CompanyWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  address: AddressWhereInput
  contactNumber: TelephoneNumberWhereInput
  contactEmail: String
  contactEmail_not: String
  contactEmail_in: [String!]
  contactEmail_not_in: [String!]
  contactEmail_lt: String
  contactEmail_lte: String
  contactEmail_gt: String
  contactEmail_gte: String
  contactEmail_contains: String
  contactEmail_not_contains: String
  contactEmail_starts_with: String
  contactEmail_not_starts_with: String
  contactEmail_ends_with: String
  contactEmail_not_ends_with: String
  domain: String
  domain_not: String
  domain_in: [String!]
  domain_not_in: [String!]
  domain_lt: String
  domain_lte: String
  domain_gt: String
  domain_gte: String
  domain_contains: String
  domain_not_contains: String
  domain_starts_with: String
  domain_not_starts_with: String
  domain_ends_with: String
  domain_not_ends_with: String
  contactPerson: String
  contactPerson_not: String
  contactPerson_in: [String!]
  contactPerson_not_in: [String!]
  contactPerson_lt: String
  contactPerson_lte: String
  contactPerson_gt: String
  contactPerson_gte: String
  contactPerson_contains: String
  contactPerson_not_contains: String
  contactPerson_starts_with: String
  contactPerson_not_starts_with: String
  contactPerson_ends_with: String
  contactPerson_not_ends_with: String
  AND: [CompanyWhereInput!]
  OR: [CompanyWhereInput!]
  NOT: [CompanyWhereInput!]
}

input CompanyWhereUniqueInput {
  id: ID
}

type Coordinate {
  id: ID!
  latitude: String!
  longitude: String!
}

type CoordinateConnection {
  pageInfo: PageInfo!
  edges: [CoordinateEdge]!
  aggregate: AggregateCoordinate!
}

input CoordinateCreateInput {
  latitude: String!
  longitude: String!
}

input CoordinateCreateOneInput {
  create: CoordinateCreateInput
  connect: CoordinateWhereUniqueInput
}

type CoordinateEdge {
  node: Coordinate!
  cursor: String!
}

enum CoordinateOrderByInput {
  id_ASC
  id_DESC
  latitude_ASC
  latitude_DESC
  longitude_ASC
  longitude_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type CoordinatePreviousValues {
  id: ID!
  latitude: String!
  longitude: String!
}

type CoordinateSubscriptionPayload {
  mutation: MutationType!
  node: Coordinate
  updatedFields: [String!]
  previousValues: CoordinatePreviousValues
}

input CoordinateSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: CoordinateWhereInput
  AND: [CoordinateSubscriptionWhereInput!]
  OR: [CoordinateSubscriptionWhereInput!]
  NOT: [CoordinateSubscriptionWhereInput!]
}

input CoordinateUpdateDataInput {
  latitude: String
  longitude: String
}

input CoordinateUpdateInput {
  latitude: String
  longitude: String
}

input CoordinateUpdateManyMutationInput {
  latitude: String
  longitude: String
}

input CoordinateUpdateOneInput {
  create: CoordinateCreateInput
  update: CoordinateUpdateDataInput
  upsert: CoordinateUpsertNestedInput
  delete: Boolean
  disconnect: Boolean
  connect: CoordinateWhereUniqueInput
}

input CoordinateUpsertNestedInput {
  update: CoordinateUpdateDataInput!
  create: CoordinateCreateInput!
}

input CoordinateWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  latitude: String
  latitude_not: String
  latitude_in: [String!]
  latitude_not_in: [String!]
  latitude_lt: String
  latitude_lte: String
  latitude_gt: String
  latitude_gte: String
  latitude_contains: String
  latitude_not_contains: String
  latitude_starts_with: String
  latitude_not_starts_with: String
  latitude_ends_with: String
  latitude_not_ends_with: String
  longitude: String
  longitude_not: String
  longitude_in: [String!]
  longitude_not_in: [String!]
  longitude_lt: String
  longitude_lte: String
  longitude_gt: String
  longitude_gte: String
  longitude_contains: String
  longitude_not_contains: String
  longitude_starts_with: String
  longitude_not_starts_with: String
  longitude_ends_with: String
  longitude_not_ends_with: String
  AND: [CoordinateWhereInput!]
  OR: [CoordinateWhereInput!]
  NOT: [CoordinateWhereInput!]
}

input CoordinateWhereUniqueInput {
  id: ID
}

scalar DateTime

enum Genders {
  MALE
  FEMALE
  UNKNOWN
}

type Image {
  id: ID!
  url: String!
  name: String
  description: String
  alt: String
  owner: User!
}

type ImageConnection {
  pageInfo: PageInfo!
  edges: [ImageEdge]!
  aggregate: AggregateImage!
}

input ImageCreateInput {
  url: String!
  name: String
  description: String
  alt: String
  owner: UserCreateOneWithoutImagesInput!
}

input ImageCreateManyWithoutOwnerInput {
  create: [ImageCreateWithoutOwnerInput!]
  connect: [ImageWhereUniqueInput!]
}

input ImageCreateWithoutOwnerInput {
  url: String!
  name: String
  description: String
  alt: String
}

type ImageEdge {
  node: Image!
  cursor: String!
}

enum ImageOrderByInput {
  id_ASC
  id_DESC
  url_ASC
  url_DESC
  name_ASC
  name_DESC
  description_ASC
  description_DESC
  alt_ASC
  alt_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type ImagePreviousValues {
  id: ID!
  url: String!
  name: String
  description: String
  alt: String
}

input ImageScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  url: String
  url_not: String
  url_in: [String!]
  url_not_in: [String!]
  url_lt: String
  url_lte: String
  url_gt: String
  url_gte: String
  url_contains: String
  url_not_contains: String
  url_starts_with: String
  url_not_starts_with: String
  url_ends_with: String
  url_not_ends_with: String
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  alt: String
  alt_not: String
  alt_in: [String!]
  alt_not_in: [String!]
  alt_lt: String
  alt_lte: String
  alt_gt: String
  alt_gte: String
  alt_contains: String
  alt_not_contains: String
  alt_starts_with: String
  alt_not_starts_with: String
  alt_ends_with: String
  alt_not_ends_with: String
  AND: [ImageScalarWhereInput!]
  OR: [ImageScalarWhereInput!]
  NOT: [ImageScalarWhereInput!]
}

type ImageSubscriptionPayload {
  mutation: MutationType!
  node: Image
  updatedFields: [String!]
  previousValues: ImagePreviousValues
}

input ImageSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: ImageWhereInput
  AND: [ImageSubscriptionWhereInput!]
  OR: [ImageSubscriptionWhereInput!]
  NOT: [ImageSubscriptionWhereInput!]
}

input ImageUpdateInput {
  url: String
  name: String
  description: String
  alt: String
  owner: UserUpdateOneRequiredWithoutImagesInput
}

input ImageUpdateManyDataInput {
  url: String
  name: String
  description: String
  alt: String
}

input ImageUpdateManyMutationInput {
  url: String
  name: String
  description: String
  alt: String
}

input ImageUpdateManyWithoutOwnerInput {
  create: [ImageCreateWithoutOwnerInput!]
  delete: [ImageWhereUniqueInput!]
  connect: [ImageWhereUniqueInput!]
  disconnect: [ImageWhereUniqueInput!]
  update: [ImageUpdateWithWhereUniqueWithoutOwnerInput!]
  upsert: [ImageUpsertWithWhereUniqueWithoutOwnerInput!]
  deleteMany: [ImageScalarWhereInput!]
  updateMany: [ImageUpdateManyWithWhereNestedInput!]
}

input ImageUpdateManyWithWhereNestedInput {
  where: ImageScalarWhereInput!
  data: ImageUpdateManyDataInput!
}

input ImageUpdateWithoutOwnerDataInput {
  url: String
  name: String
  description: String
  alt: String
}

input ImageUpdateWithWhereUniqueWithoutOwnerInput {
  where: ImageWhereUniqueInput!
  data: ImageUpdateWithoutOwnerDataInput!
}

input ImageUpsertWithWhereUniqueWithoutOwnerInput {
  where: ImageWhereUniqueInput!
  update: ImageUpdateWithoutOwnerDataInput!
  create: ImageCreateWithoutOwnerInput!
}

input ImageWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  url: String
  url_not: String
  url_in: [String!]
  url_not_in: [String!]
  url_lt: String
  url_lte: String
  url_gt: String
  url_gte: String
  url_contains: String
  url_not_contains: String
  url_starts_with: String
  url_not_starts_with: String
  url_ends_with: String
  url_not_ends_with: String
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  alt: String
  alt_not: String
  alt_in: [String!]
  alt_not_in: [String!]
  alt_lt: String
  alt_lte: String
  alt_gt: String
  alt_gte: String
  alt_contains: String
  alt_not_contains: String
  alt_starts_with: String
  alt_not_starts_with: String
  alt_ends_with: String
  alt_not_ends_with: String
  owner: UserWhereInput
  AND: [ImageWhereInput!]
  OR: [ImageWhereInput!]
  NOT: [ImageWhereInput!]
}

input ImageWhereUniqueInput {
  id: ID
}

scalar Json

scalar Long

type Mutation {
  createAddress(data: AddressCreateInput!): Address!
  updateAddress(data: AddressUpdateInput!, where: AddressWhereUniqueInput!): Address
  updateManyAddresses(data: AddressUpdateManyMutationInput!, where: AddressWhereInput): BatchPayload!
  upsertAddress(where: AddressWhereUniqueInput!, create: AddressCreateInput!, update: AddressUpdateInput!): Address!
  deleteAddress(where: AddressWhereUniqueInput!): Address
  deleteManyAddresses(where: AddressWhereInput): BatchPayload!
  createComment(data: CommentCreateInput!): Comment!
  updateComment(data: CommentUpdateInput!, where: CommentWhereUniqueInput!): Comment
  updateManyComments(data: CommentUpdateManyMutationInput!, where: CommentWhereInput): BatchPayload!
  upsertComment(where: CommentWhereUniqueInput!, create: CommentCreateInput!, update: CommentUpdateInput!): Comment!
  deleteComment(where: CommentWhereUniqueInput!): Comment
  deleteManyComments(where: CommentWhereInput): BatchPayload!
  createCompany(data: CompanyCreateInput!): Company!
  updateCompany(data: CompanyUpdateInput!, where: CompanyWhereUniqueInput!): Company
  updateManyCompanies(data: CompanyUpdateManyMutationInput!, where: CompanyWhereInput): BatchPayload!
  upsertCompany(where: CompanyWhereUniqueInput!, create: CompanyCreateInput!, update: CompanyUpdateInput!): Company!
  deleteCompany(where: CompanyWhereUniqueInput!): Company
  deleteManyCompanies(where: CompanyWhereInput): BatchPayload!
  createCoordinate(data: CoordinateCreateInput!): Coordinate!
  updateCoordinate(data: CoordinateUpdateInput!, where: CoordinateWhereUniqueInput!): Coordinate
  updateManyCoordinates(data: CoordinateUpdateManyMutationInput!, where: CoordinateWhereInput): BatchPayload!
  upsertCoordinate(where: CoordinateWhereUniqueInput!, create: CoordinateCreateInput!, update: CoordinateUpdateInput!): Coordinate!
  deleteCoordinate(where: CoordinateWhereUniqueInput!): Coordinate
  deleteManyCoordinates(where: CoordinateWhereInput): BatchPayload!
  createImage(data: ImageCreateInput!): Image!
  updateImage(data: ImageUpdateInput!, where: ImageWhereUniqueInput!): Image
  updateManyImages(data: ImageUpdateManyMutationInput!, where: ImageWhereInput): BatchPayload!
  upsertImage(where: ImageWhereUniqueInput!, create: ImageCreateInput!, update: ImageUpdateInput!): Image!
  deleteImage(where: ImageWhereUniqueInput!): Image
  deleteManyImages(where: ImageWhereInput): BatchPayload!
  createPermission(data: PermissionCreateInput!): Permission!
  updatePermission(data: PermissionUpdateInput!, where: PermissionWhereUniqueInput!): Permission
  updateManyPermissions(data: PermissionUpdateManyMutationInput!, where: PermissionWhereInput): BatchPayload!
  upsertPermission(where: PermissionWhereUniqueInput!, create: PermissionCreateInput!, update: PermissionUpdateInput!): Permission!
  deletePermission(where: PermissionWhereUniqueInput!): Permission
  deleteManyPermissions(where: PermissionWhereInput): BatchPayload!
  createPost(data: PostCreateInput!): Post!
  updatePost(data: PostUpdateInput!, where: PostWhereUniqueInput!): Post
  updateManyPosts(data: PostUpdateManyMutationInput!, where: PostWhereInput): BatchPayload!
  upsertPost(where: PostWhereUniqueInput!, create: PostCreateInput!, update: PostUpdateInput!): Post!
  deletePost(where: PostWhereUniqueInput!): Post
  deleteManyPosts(where: PostWhereInput): BatchPayload!
  createProduct(data: ProductCreateInput!): Product!
  updateProduct(data: ProductUpdateInput!, where: ProductWhereUniqueInput!): Product
  updateManyProducts(data: ProductUpdateManyMutationInput!, where: ProductWhereInput): BatchPayload!
  upsertProduct(where: ProductWhereUniqueInput!, create: ProductCreateInput!, update: ProductUpdateInput!): Product!
  deleteProduct(where: ProductWhereUniqueInput!): Product
  deleteManyProducts(where: ProductWhereInput): BatchPayload!
  createRole(data: RoleCreateInput!): Role!
  updateRole(data: RoleUpdateInput!, where: RoleWhereUniqueInput!): Role
  updateManyRoles(data: RoleUpdateManyMutationInput!, where: RoleWhereInput): BatchPayload!
  upsertRole(where: RoleWhereUniqueInput!, create: RoleCreateInput!, update: RoleUpdateInput!): Role!
  deleteRole(where: RoleWhereUniqueInput!): Role
  deleteManyRoles(where: RoleWhereInput): BatchPayload!
  createSettings(data: SettingsCreateInput!): Settings!
  updateSettings(data: SettingsUpdateInput!, where: SettingsWhereUniqueInput!): Settings
  updateManySettingses(data: SettingsUpdateManyMutationInput!, where: SettingsWhereInput): BatchPayload!
  upsertSettings(where: SettingsWhereUniqueInput!, create: SettingsCreateInput!, update: SettingsUpdateInput!): Settings!
  deleteSettings(where: SettingsWhereUniqueInput!): Settings
  deleteManySettingses(where: SettingsWhereInput): BatchPayload!
  createTelephoneNumber(data: TelephoneNumberCreateInput!): TelephoneNumber!
  updateTelephoneNumber(data: TelephoneNumberUpdateInput!, where: TelephoneNumberWhereUniqueInput!): TelephoneNumber
  updateManyTelephoneNumbers(data: TelephoneNumberUpdateManyMutationInput!, where: TelephoneNumberWhereInput): BatchPayload!
  upsertTelephoneNumber(where: TelephoneNumberWhereUniqueInput!, create: TelephoneNumberCreateInput!, update: TelephoneNumberUpdateInput!): TelephoneNumber!
  deleteTelephoneNumber(where: TelephoneNumberWhereUniqueInput!): TelephoneNumber
  deleteManyTelephoneNumbers(where: TelephoneNumberWhereInput): BatchPayload!
  createTenant(data: TenantCreateInput!): Tenant!
  updateTenant(data: TenantUpdateInput!, where: TenantWhereUniqueInput!): Tenant
  updateManyTenants(data: TenantUpdateManyMutationInput!, where: TenantWhereInput): BatchPayload!
  upsertTenant(where: TenantWhereUniqueInput!, create: TenantCreateInput!, update: TenantUpdateInput!): Tenant!
  deleteTenant(where: TenantWhereUniqueInput!): Tenant
  deleteManyTenants(where: TenantWhereInput): BatchPayload!
  createTenantUserRole(data: TenantUserRoleCreateInput!): TenantUserRole!
  updateManyTenantUserRoles(data: TenantUserRoleUpdateManyMutationInput!, where: TenantUserRoleWhereInput): BatchPayload!
  deleteManyTenantUserRoles(where: TenantUserRoleWhereInput): BatchPayload!
  createTimeZone(data: TimeZoneCreateInput!): TimeZone!
  updateTimeZone(data: TimeZoneUpdateInput!, where: TimeZoneWhereUniqueInput!): TimeZone
  updateManyTimeZones(data: TimeZoneUpdateManyMutationInput!, where: TimeZoneWhereInput): BatchPayload!
  upsertTimeZone(where: TimeZoneWhereUniqueInput!, create: TimeZoneCreateInput!, update: TimeZoneUpdateInput!): TimeZone!
  deleteTimeZone(where: TimeZoneWhereUniqueInput!): TimeZone
  deleteManyTimeZones(where: TimeZoneWhereInput): BatchPayload!
  createUser(data: UserCreateInput!): User!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateManyUsers(data: UserUpdateManyMutationInput!, where: UserWhereInput): BatchPayload!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  deleteUser(where: UserWhereUniqueInput!): User
  deleteManyUsers(where: UserWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Permission {
  id: ID!
  permissionName: Permissions!
  roles(where: RoleWhereInput, orderBy: RoleOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Role!]
}

type PermissionConnection {
  pageInfo: PageInfo!
  edges: [PermissionEdge]!
  aggregate: AggregatePermission!
}

input PermissionCreateInput {
  permissionName: Permissions!
  roles: RoleCreateManyWithoutPermissionsInput
}

input PermissionCreateManyWithoutRolesInput {
  create: [PermissionCreateWithoutRolesInput!]
  connect: [PermissionWhereUniqueInput!]
}

input PermissionCreateWithoutRolesInput {
  permissionName: Permissions!
}

type PermissionEdge {
  node: Permission!
  cursor: String!
}

enum PermissionOrderByInput {
  id_ASC
  id_DESC
  permissionName_ASC
  permissionName_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type PermissionPreviousValues {
  id: ID!
  permissionName: Permissions!
}

enum Permissions {
  DRAFT_PRODUCTS
  MANAGE_PROFILE
  MANAGE_PRODUCTS
  APPROVE_PRODUCT_DRAFTS
  MANAGE_TENANT
  MANAGE_TENANT_USERS
  MANAGE_TENANTS
  MANAGE_TENANTS_USERS
  EDIT_PERSONAL_ACCOUNT
  CREATE_USERS
  READ_USERS
  EDIT_USERS
  DELETE_USERS
  CREATE_TENANTS
  READ_TENANTS
  EDIT_TENANTS
  DELETE_TENANTS
  CREATE_SETTINGS
  READ_SETTINGS
  EDIT_SETTINGS
  DELETE_SETTINGS
  CREATE_ORDERS
  READ_ORDERS
  EDIT_ORDERS
  DELETE_ORDERS
  CREATE_INVOICES
  READ_INVOICES
  EDIT_INVOICES
  DELETE_INVOICES
  CREATE_ROLES
  READ_ROLES
  EDIT_ROLES
  DELETE_ROLES
  CREATE_PERMISSIONS
  READ_PERMISSIONS
  EDIT_PERMISSIONS
  DELETE_PERMISSIONS
  CREATE_CATEGORIES
  READ_CATEGORIES
  EDIT_CATEGORIES
  DELETE_CATEGORIES
  CREATE_COUPONS
  READ_COUPONS
  EDIT_COUPONS
  DELETE_COUPONS
  CREATE_PRODUCTS
  READ_PRODUCTS
  EDIT_PRODUCTS
  DELETE_PRODUCTS
  CREATE_REPORTS
  READ_REPORTS
  EDIT_REPORTS
  DELETE_REPORTS
  CREATE_DELIVERY_METHOD
  READ_DELIVERY_METHOD
  EDIT_DELIVERY_METHOD
  DELETE_DELIVERY_METHOD
  CREATE_BILLING_METHOD
  READ_BILLING_METHOD
  EDIT_BILLING_METHOD
  DELETE_BILLING_METHOD
}

input PermissionScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  permissionName: Permissions
  permissionName_not: Permissions
  permissionName_in: [Permissions!]
  permissionName_not_in: [Permissions!]
  AND: [PermissionScalarWhereInput!]
  OR: [PermissionScalarWhereInput!]
  NOT: [PermissionScalarWhereInput!]
}

type PermissionSubscriptionPayload {
  mutation: MutationType!
  node: Permission
  updatedFields: [String!]
  previousValues: PermissionPreviousValues
}

input PermissionSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: PermissionWhereInput
  AND: [PermissionSubscriptionWhereInput!]
  OR: [PermissionSubscriptionWhereInput!]
  NOT: [PermissionSubscriptionWhereInput!]
}

input PermissionUpdateInput {
  permissionName: Permissions
  roles: RoleUpdateManyWithoutPermissionsInput
}

input PermissionUpdateManyDataInput {
  permissionName: Permissions
}

input PermissionUpdateManyMutationInput {
  permissionName: Permissions
}

input PermissionUpdateManyWithoutRolesInput {
  create: [PermissionCreateWithoutRolesInput!]
  delete: [PermissionWhereUniqueInput!]
  connect: [PermissionWhereUniqueInput!]
  disconnect: [PermissionWhereUniqueInput!]
  update: [PermissionUpdateWithWhereUniqueWithoutRolesInput!]
  upsert: [PermissionUpsertWithWhereUniqueWithoutRolesInput!]
  deleteMany: [PermissionScalarWhereInput!]
  updateMany: [PermissionUpdateManyWithWhereNestedInput!]
}

input PermissionUpdateManyWithWhereNestedInput {
  where: PermissionScalarWhereInput!
  data: PermissionUpdateManyDataInput!
}

input PermissionUpdateWithoutRolesDataInput {
  permissionName: Permissions
}

input PermissionUpdateWithWhereUniqueWithoutRolesInput {
  where: PermissionWhereUniqueInput!
  data: PermissionUpdateWithoutRolesDataInput!
}

input PermissionUpsertWithWhereUniqueWithoutRolesInput {
  where: PermissionWhereUniqueInput!
  update: PermissionUpdateWithoutRolesDataInput!
  create: PermissionCreateWithoutRolesInput!
}

input PermissionWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  permissionName: Permissions
  permissionName_not: Permissions
  permissionName_in: [Permissions!]
  permissionName_not_in: [Permissions!]
  roles_every: RoleWhereInput
  roles_some: RoleWhereInput
  roles_none: RoleWhereInput
  AND: [PermissionWhereInput!]
  OR: [PermissionWhereInput!]
  NOT: [PermissionWhereInput!]
}

input PermissionWhereUniqueInput {
  id: ID
}

type Post {
  id: ID!
  title: String!
  content: String
  published: Boolean!
  author: User!
  likedBy(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User!]
  comments(where: CommentWhereInput, orderBy: CommentOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Comment!]
  createdAt: DateTime!
  updatedAt: DateTime!
}

type PostConnection {
  pageInfo: PageInfo!
  edges: [PostEdge]!
  aggregate: AggregatePost!
}

input PostCreateInput {
  title: String!
  content: String
  published: Boolean
  author: UserCreateOneWithoutPostsInput!
  likedBy: UserCreateManyWithoutLikedPostsInput
  comments: CommentCreateManyWithoutPostInput
}

input PostCreateManyWithoutAuthorInput {
  create: [PostCreateWithoutAuthorInput!]
  connect: [PostWhereUniqueInput!]
}

input PostCreateManyWithoutLikedByInput {
  create: [PostCreateWithoutLikedByInput!]
  connect: [PostWhereUniqueInput!]
}

input PostCreateOneWithoutCommentsInput {
  create: PostCreateWithoutCommentsInput
  connect: PostWhereUniqueInput
}

input PostCreateWithoutAuthorInput {
  title: String!
  content: String
  published: Boolean
  likedBy: UserCreateManyWithoutLikedPostsInput
  comments: CommentCreateManyWithoutPostInput
}

input PostCreateWithoutCommentsInput {
  title: String!
  content: String
  published: Boolean
  author: UserCreateOneWithoutPostsInput!
  likedBy: UserCreateManyWithoutLikedPostsInput
}

input PostCreateWithoutLikedByInput {
  title: String!
  content: String
  published: Boolean
  author: UserCreateOneWithoutPostsInput!
  comments: CommentCreateManyWithoutPostInput
}

type PostEdge {
  node: Post!
  cursor: String!
}

enum PostOrderByInput {
  id_ASC
  id_DESC
  title_ASC
  title_DESC
  content_ASC
  content_DESC
  published_ASC
  published_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type PostPreviousValues {
  id: ID!
  title: String!
  content: String
  published: Boolean!
  createdAt: DateTime!
  updatedAt: DateTime!
}

input PostScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  title: String
  title_not: String
  title_in: [String!]
  title_not_in: [String!]
  title_lt: String
  title_lte: String
  title_gt: String
  title_gte: String
  title_contains: String
  title_not_contains: String
  title_starts_with: String
  title_not_starts_with: String
  title_ends_with: String
  title_not_ends_with: String
  content: String
  content_not: String
  content_in: [String!]
  content_not_in: [String!]
  content_lt: String
  content_lte: String
  content_gt: String
  content_gte: String
  content_contains: String
  content_not_contains: String
  content_starts_with: String
  content_not_starts_with: String
  content_ends_with: String
  content_not_ends_with: String
  published: Boolean
  published_not: Boolean
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  AND: [PostScalarWhereInput!]
  OR: [PostScalarWhereInput!]
  NOT: [PostScalarWhereInput!]
}

type PostSubscriptionPayload {
  mutation: MutationType!
  node: Post
  updatedFields: [String!]
  previousValues: PostPreviousValues
}

input PostSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: PostWhereInput
  AND: [PostSubscriptionWhereInput!]
  OR: [PostSubscriptionWhereInput!]
  NOT: [PostSubscriptionWhereInput!]
}

input PostUpdateInput {
  title: String
  content: String
  published: Boolean
  author: UserUpdateOneRequiredWithoutPostsInput
  likedBy: UserUpdateManyWithoutLikedPostsInput
  comments: CommentUpdateManyWithoutPostInput
}

input PostUpdateManyDataInput {
  title: String
  content: String
  published: Boolean
}

input PostUpdateManyMutationInput {
  title: String
  content: String
  published: Boolean
}

input PostUpdateManyWithoutAuthorInput {
  create: [PostCreateWithoutAuthorInput!]
  delete: [PostWhereUniqueInput!]
  connect: [PostWhereUniqueInput!]
  disconnect: [PostWhereUniqueInput!]
  update: [PostUpdateWithWhereUniqueWithoutAuthorInput!]
  upsert: [PostUpsertWithWhereUniqueWithoutAuthorInput!]
  deleteMany: [PostScalarWhereInput!]
  updateMany: [PostUpdateManyWithWhereNestedInput!]
}

input PostUpdateManyWithoutLikedByInput {
  create: [PostCreateWithoutLikedByInput!]
  delete: [PostWhereUniqueInput!]
  connect: [PostWhereUniqueInput!]
  disconnect: [PostWhereUniqueInput!]
  update: [PostUpdateWithWhereUniqueWithoutLikedByInput!]
  upsert: [PostUpsertWithWhereUniqueWithoutLikedByInput!]
  deleteMany: [PostScalarWhereInput!]
  updateMany: [PostUpdateManyWithWhereNestedInput!]
}

input PostUpdateManyWithWhereNestedInput {
  where: PostScalarWhereInput!
  data: PostUpdateManyDataInput!
}

input PostUpdateOneRequiredWithoutCommentsInput {
  create: PostCreateWithoutCommentsInput
  update: PostUpdateWithoutCommentsDataInput
  upsert: PostUpsertWithoutCommentsInput
  connect: PostWhereUniqueInput
}

input PostUpdateWithoutAuthorDataInput {
  title: String
  content: String
  published: Boolean
  likedBy: UserUpdateManyWithoutLikedPostsInput
  comments: CommentUpdateManyWithoutPostInput
}

input PostUpdateWithoutCommentsDataInput {
  title: String
  content: String
  published: Boolean
  author: UserUpdateOneRequiredWithoutPostsInput
  likedBy: UserUpdateManyWithoutLikedPostsInput
}

input PostUpdateWithoutLikedByDataInput {
  title: String
  content: String
  published: Boolean
  author: UserUpdateOneRequiredWithoutPostsInput
  comments: CommentUpdateManyWithoutPostInput
}

input PostUpdateWithWhereUniqueWithoutAuthorInput {
  where: PostWhereUniqueInput!
  data: PostUpdateWithoutAuthorDataInput!
}

input PostUpdateWithWhereUniqueWithoutLikedByInput {
  where: PostWhereUniqueInput!
  data: PostUpdateWithoutLikedByDataInput!
}

input PostUpsertWithoutCommentsInput {
  update: PostUpdateWithoutCommentsDataInput!
  create: PostCreateWithoutCommentsInput!
}

input PostUpsertWithWhereUniqueWithoutAuthorInput {
  where: PostWhereUniqueInput!
  update: PostUpdateWithoutAuthorDataInput!
  create: PostCreateWithoutAuthorInput!
}

input PostUpsertWithWhereUniqueWithoutLikedByInput {
  where: PostWhereUniqueInput!
  update: PostUpdateWithoutLikedByDataInput!
  create: PostCreateWithoutLikedByInput!
}

input PostWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  title: String
  title_not: String
  title_in: [String!]
  title_not_in: [String!]
  title_lt: String
  title_lte: String
  title_gt: String
  title_gte: String
  title_contains: String
  title_not_contains: String
  title_starts_with: String
  title_not_starts_with: String
  title_ends_with: String
  title_not_ends_with: String
  content: String
  content_not: String
  content_in: [String!]
  content_not_in: [String!]
  content_lt: String
  content_lte: String
  content_gt: String
  content_gte: String
  content_contains: String
  content_not_contains: String
  content_starts_with: String
  content_not_starts_with: String
  content_ends_with: String
  content_not_ends_with: String
  published: Boolean
  published_not: Boolean
  author: UserWhereInput
  likedBy_every: UserWhereInput
  likedBy_some: UserWhereInput
  likedBy_none: UserWhereInput
  comments_every: CommentWhereInput
  comments_some: CommentWhereInput
  comments_none: CommentWhereInput
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  AND: [PostWhereInput!]
  OR: [PostWhereInput!]
  NOT: [PostWhereInput!]
}

input PostWhereUniqueInput {
  id: ID
}

type Product {
  id: ID!
  name: String!
}

type ProductConnection {
  pageInfo: PageInfo!
  edges: [ProductEdge]!
  aggregate: AggregateProduct!
}

input ProductCreateInput {
  name: String!
}

type ProductEdge {
  node: Product!
  cursor: String!
}

enum ProductOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type ProductPreviousValues {
  id: ID!
  name: String!
}

type ProductSubscriptionPayload {
  mutation: MutationType!
  node: Product
  updatedFields: [String!]
  previousValues: ProductPreviousValues
}

input ProductSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: ProductWhereInput
  AND: [ProductSubscriptionWhereInput!]
  OR: [ProductSubscriptionWhereInput!]
  NOT: [ProductSubscriptionWhereInput!]
}

input ProductUpdateInput {
  name: String
}

input ProductUpdateManyMutationInput {
  name: String
}

input ProductWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  AND: [ProductWhereInput!]
  OR: [ProductWhereInput!]
  NOT: [ProductWhereInput!]
}

input ProductWhereUniqueInput {
  id: ID
}

type Query {
  address(where: AddressWhereUniqueInput!): Address
  addresses(where: AddressWhereInput, orderBy: AddressOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Address]!
  addressesConnection(where: AddressWhereInput, orderBy: AddressOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): AddressConnection!
  comment(where: CommentWhereUniqueInput!): Comment
  comments(where: CommentWhereInput, orderBy: CommentOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Comment]!
  commentsConnection(where: CommentWhereInput, orderBy: CommentOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): CommentConnection!
  company(where: CompanyWhereUniqueInput!): Company
  companies(where: CompanyWhereInput, orderBy: CompanyOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Company]!
  companiesConnection(where: CompanyWhereInput, orderBy: CompanyOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): CompanyConnection!
  coordinate(where: CoordinateWhereUniqueInput!): Coordinate
  coordinates(where: CoordinateWhereInput, orderBy: CoordinateOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Coordinate]!
  coordinatesConnection(where: CoordinateWhereInput, orderBy: CoordinateOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): CoordinateConnection!
  image(where: ImageWhereUniqueInput!): Image
  images(where: ImageWhereInput, orderBy: ImageOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Image]!
  imagesConnection(where: ImageWhereInput, orderBy: ImageOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ImageConnection!
  permission(where: PermissionWhereUniqueInput!): Permission
  permissions(where: PermissionWhereInput, orderBy: PermissionOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Permission]!
  permissionsConnection(where: PermissionWhereInput, orderBy: PermissionOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): PermissionConnection!
  post(where: PostWhereUniqueInput!): Post
  posts(where: PostWhereInput, orderBy: PostOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Post]!
  postsConnection(where: PostWhereInput, orderBy: PostOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): PostConnection!
  product(where: ProductWhereUniqueInput!): Product
  products(where: ProductWhereInput, orderBy: ProductOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Product]!
  productsConnection(where: ProductWhereInput, orderBy: ProductOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ProductConnection!
  role(where: RoleWhereUniqueInput!): Role
  roles(where: RoleWhereInput, orderBy: RoleOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Role]!
  rolesConnection(where: RoleWhereInput, orderBy: RoleOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): RoleConnection!
  settings(where: SettingsWhereUniqueInput!): Settings
  settingses(where: SettingsWhereInput, orderBy: SettingsOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Settings]!
  settingsesConnection(where: SettingsWhereInput, orderBy: SettingsOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): SettingsConnection!
  telephoneNumber(where: TelephoneNumberWhereUniqueInput!): TelephoneNumber
  telephoneNumbers(where: TelephoneNumberWhereInput, orderBy: TelephoneNumberOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [TelephoneNumber]!
  telephoneNumbersConnection(where: TelephoneNumberWhereInput, orderBy: TelephoneNumberOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): TelephoneNumberConnection!
  tenant(where: TenantWhereUniqueInput!): Tenant
  tenants(where: TenantWhereInput, orderBy: TenantOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Tenant]!
  tenantsConnection(where: TenantWhereInput, orderBy: TenantOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): TenantConnection!
  tenantUserRoles(where: TenantUserRoleWhereInput, orderBy: TenantUserRoleOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [TenantUserRole]!
  tenantUserRolesConnection(where: TenantUserRoleWhereInput, orderBy: TenantUserRoleOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): TenantUserRoleConnection!
  timeZone(where: TimeZoneWhereUniqueInput!): TimeZone
  timeZones(where: TimeZoneWhereInput, orderBy: TimeZoneOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [TimeZone]!
  timeZonesConnection(where: TimeZoneWhereInput, orderBy: TimeZoneOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): TimeZoneConnection!
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  node(id: ID!): Node
}

type Role {
  id: ID!
  roleName: Roles!
  permissions(where: PermissionWhereInput, orderBy: PermissionOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Permission!]
}

type RoleConnection {
  pageInfo: PageInfo!
  edges: [RoleEdge]!
  aggregate: AggregateRole!
}

input RoleCreateInput {
  roleName: Roles!
  permissions: PermissionCreateManyWithoutRolesInput
}

input RoleCreateManyWithoutPermissionsInput {
  create: [RoleCreateWithoutPermissionsInput!]
  connect: [RoleWhereUniqueInput!]
}

input RoleCreateWithoutPermissionsInput {
  roleName: Roles!
}

type RoleEdge {
  node: Role!
  cursor: String!
}

enum RoleOrderByInput {
  id_ASC
  id_DESC
  roleName_ASC
  roleName_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type RolePreviousValues {
  id: ID!
  roleName: Roles!
}

enum Roles {
  CONTRIBUTOR
  ADMINISTRATOR
  ADMIN_TENANT
  SUPER_TENANT
  SUPER_USER
}

input RoleScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  roleName: Roles
  roleName_not: Roles
  roleName_in: [Roles!]
  roleName_not_in: [Roles!]
  AND: [RoleScalarWhereInput!]
  OR: [RoleScalarWhereInput!]
  NOT: [RoleScalarWhereInput!]
}

type RoleSubscriptionPayload {
  mutation: MutationType!
  node: Role
  updatedFields: [String!]
  previousValues: RolePreviousValues
}

input RoleSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: RoleWhereInput
  AND: [RoleSubscriptionWhereInput!]
  OR: [RoleSubscriptionWhereInput!]
  NOT: [RoleSubscriptionWhereInput!]
}

input RoleUpdateInput {
  roleName: Roles
  permissions: PermissionUpdateManyWithoutRolesInput
}

input RoleUpdateManyDataInput {
  roleName: Roles
}

input RoleUpdateManyMutationInput {
  roleName: Roles
}

input RoleUpdateManyWithoutPermissionsInput {
  create: [RoleCreateWithoutPermissionsInput!]
  delete: [RoleWhereUniqueInput!]
  connect: [RoleWhereUniqueInput!]
  disconnect: [RoleWhereUniqueInput!]
  update: [RoleUpdateWithWhereUniqueWithoutPermissionsInput!]
  upsert: [RoleUpsertWithWhereUniqueWithoutPermissionsInput!]
  deleteMany: [RoleScalarWhereInput!]
  updateMany: [RoleUpdateManyWithWhereNestedInput!]
}

input RoleUpdateManyWithWhereNestedInput {
  where: RoleScalarWhereInput!
  data: RoleUpdateManyDataInput!
}

input RoleUpdateWithoutPermissionsDataInput {
  roleName: Roles
}

input RoleUpdateWithWhereUniqueWithoutPermissionsInput {
  where: RoleWhereUniqueInput!
  data: RoleUpdateWithoutPermissionsDataInput!
}

input RoleUpsertWithWhereUniqueWithoutPermissionsInput {
  where: RoleWhereUniqueInput!
  update: RoleUpdateWithoutPermissionsDataInput!
  create: RoleCreateWithoutPermissionsInput!
}

input RoleWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  roleName: Roles
  roleName_not: Roles
  roleName_in: [Roles!]
  roleName_not_in: [Roles!]
  permissions_every: PermissionWhereInput
  permissions_some: PermissionWhereInput
  permissions_none: PermissionWhereInput
  AND: [RoleWhereInput!]
  OR: [RoleWhereInput!]
  NOT: [RoleWhereInput!]
}

input RoleWhereUniqueInput {
  id: ID
}

type Settings {
  id: ID!
  tenant: Tenant
  data: Json
}

type SettingsConnection {
  pageInfo: PageInfo!
  edges: [SettingsEdge]!
  aggregate: AggregateSettings!
}

input SettingsCreateInput {
  tenant: TenantCreateOneWithoutSettingsInput
  data: Json
}

input SettingsCreateOneWithoutTenantInput {
  create: SettingsCreateWithoutTenantInput
  connect: SettingsWhereUniqueInput
}

input SettingsCreateWithoutTenantInput {
  data: Json
}

type SettingsEdge {
  node: Settings!
  cursor: String!
}

enum SettingsOrderByInput {
  id_ASC
  id_DESC
  data_ASC
  data_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type SettingsPreviousValues {
  id: ID!
  data: Json
}

type SettingsSubscriptionPayload {
  mutation: MutationType!
  node: Settings
  updatedFields: [String!]
  previousValues: SettingsPreviousValues
}

input SettingsSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: SettingsWhereInput
  AND: [SettingsSubscriptionWhereInput!]
  OR: [SettingsSubscriptionWhereInput!]
  NOT: [SettingsSubscriptionWhereInput!]
}

input SettingsUpdateInput {
  tenant: TenantUpdateOneWithoutSettingsInput
  data: Json
}

input SettingsUpdateManyMutationInput {
  data: Json
}

input SettingsUpdateOneWithoutTenantInput {
  create: SettingsCreateWithoutTenantInput
  update: SettingsUpdateWithoutTenantDataInput
  upsert: SettingsUpsertWithoutTenantInput
  delete: Boolean
  disconnect: Boolean
  connect: SettingsWhereUniqueInput
}

input SettingsUpdateWithoutTenantDataInput {
  data: Json
}

input SettingsUpsertWithoutTenantInput {
  update: SettingsUpdateWithoutTenantDataInput!
  create: SettingsCreateWithoutTenantInput!
}

input SettingsWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  tenant: TenantWhereInput
  AND: [SettingsWhereInput!]
  OR: [SettingsWhereInput!]
  NOT: [SettingsWhereInput!]
}

input SettingsWhereUniqueInput {
  id: ID
}

type Subscription {
  address(where: AddressSubscriptionWhereInput): AddressSubscriptionPayload
  comment(where: CommentSubscriptionWhereInput): CommentSubscriptionPayload
  company(where: CompanySubscriptionWhereInput): CompanySubscriptionPayload
  coordinate(where: CoordinateSubscriptionWhereInput): CoordinateSubscriptionPayload
  image(where: ImageSubscriptionWhereInput): ImageSubscriptionPayload
  permission(where: PermissionSubscriptionWhereInput): PermissionSubscriptionPayload
  post(where: PostSubscriptionWhereInput): PostSubscriptionPayload
  product(where: ProductSubscriptionWhereInput): ProductSubscriptionPayload
  role(where: RoleSubscriptionWhereInput): RoleSubscriptionPayload
  settings(where: SettingsSubscriptionWhereInput): SettingsSubscriptionPayload
  telephoneNumber(where: TelephoneNumberSubscriptionWhereInput): TelephoneNumberSubscriptionPayload
  tenant(where: TenantSubscriptionWhereInput): TenantSubscriptionPayload
  tenantUserRole(where: TenantUserRoleSubscriptionWhereInput): TenantUserRoleSubscriptionPayload
  timeZone(where: TimeZoneSubscriptionWhereInput): TimeZoneSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
}

type TelephoneNumber {
  id: ID!
  type: String!
  telephone: String!
  owner: User!
}

type TelephoneNumberConnection {
  pageInfo: PageInfo!
  edges: [TelephoneNumberEdge]!
  aggregate: AggregateTelephoneNumber!
}

input TelephoneNumberCreateInput {
  type: String!
  telephone: String!
  owner: UserCreateOneWithoutTelephoneNumbersInput!
}

input TelephoneNumberCreateManyWithoutOwnerInput {
  create: [TelephoneNumberCreateWithoutOwnerInput!]
  connect: [TelephoneNumberWhereUniqueInput!]
}

input TelephoneNumberCreateOneInput {
  create: TelephoneNumberCreateInput
  connect: TelephoneNumberWhereUniqueInput
}

input TelephoneNumberCreateWithoutOwnerInput {
  type: String!
  telephone: String!
}

type TelephoneNumberEdge {
  node: TelephoneNumber!
  cursor: String!
}

enum TelephoneNumberOrderByInput {
  id_ASC
  id_DESC
  type_ASC
  type_DESC
  telephone_ASC
  telephone_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type TelephoneNumberPreviousValues {
  id: ID!
  type: String!
  telephone: String!
}

input TelephoneNumberScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  type: String
  type_not: String
  type_in: [String!]
  type_not_in: [String!]
  type_lt: String
  type_lte: String
  type_gt: String
  type_gte: String
  type_contains: String
  type_not_contains: String
  type_starts_with: String
  type_not_starts_with: String
  type_ends_with: String
  type_not_ends_with: String
  telephone: String
  telephone_not: String
  telephone_in: [String!]
  telephone_not_in: [String!]
  telephone_lt: String
  telephone_lte: String
  telephone_gt: String
  telephone_gte: String
  telephone_contains: String
  telephone_not_contains: String
  telephone_starts_with: String
  telephone_not_starts_with: String
  telephone_ends_with: String
  telephone_not_ends_with: String
  AND: [TelephoneNumberScalarWhereInput!]
  OR: [TelephoneNumberScalarWhereInput!]
  NOT: [TelephoneNumberScalarWhereInput!]
}

type TelephoneNumberSubscriptionPayload {
  mutation: MutationType!
  node: TelephoneNumber
  updatedFields: [String!]
  previousValues: TelephoneNumberPreviousValues
}

input TelephoneNumberSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: TelephoneNumberWhereInput
  AND: [TelephoneNumberSubscriptionWhereInput!]
  OR: [TelephoneNumberSubscriptionWhereInput!]
  NOT: [TelephoneNumberSubscriptionWhereInput!]
}

input TelephoneNumberUpdateDataInput {
  type: String
  telephone: String
  owner: UserUpdateOneRequiredWithoutTelephoneNumbersInput
}

input TelephoneNumberUpdateInput {
  type: String
  telephone: String
  owner: UserUpdateOneRequiredWithoutTelephoneNumbersInput
}

input TelephoneNumberUpdateManyDataInput {
  type: String
  telephone: String
}

input TelephoneNumberUpdateManyMutationInput {
  type: String
  telephone: String
}

input TelephoneNumberUpdateManyWithoutOwnerInput {
  create: [TelephoneNumberCreateWithoutOwnerInput!]
  delete: [TelephoneNumberWhereUniqueInput!]
  connect: [TelephoneNumberWhereUniqueInput!]
  disconnect: [TelephoneNumberWhereUniqueInput!]
  update: [TelephoneNumberUpdateWithWhereUniqueWithoutOwnerInput!]
  upsert: [TelephoneNumberUpsertWithWhereUniqueWithoutOwnerInput!]
  deleteMany: [TelephoneNumberScalarWhereInput!]
  updateMany: [TelephoneNumberUpdateManyWithWhereNestedInput!]
}

input TelephoneNumberUpdateManyWithWhereNestedInput {
  where: TelephoneNumberScalarWhereInput!
  data: TelephoneNumberUpdateManyDataInput!
}

input TelephoneNumberUpdateOneRequiredInput {
  create: TelephoneNumberCreateInput
  update: TelephoneNumberUpdateDataInput
  upsert: TelephoneNumberUpsertNestedInput
  connect: TelephoneNumberWhereUniqueInput
}

input TelephoneNumberUpdateWithoutOwnerDataInput {
  type: String
  telephone: String
}

input TelephoneNumberUpdateWithWhereUniqueWithoutOwnerInput {
  where: TelephoneNumberWhereUniqueInput!
  data: TelephoneNumberUpdateWithoutOwnerDataInput!
}

input TelephoneNumberUpsertNestedInput {
  update: TelephoneNumberUpdateDataInput!
  create: TelephoneNumberCreateInput!
}

input TelephoneNumberUpsertWithWhereUniqueWithoutOwnerInput {
  where: TelephoneNumberWhereUniqueInput!
  update: TelephoneNumberUpdateWithoutOwnerDataInput!
  create: TelephoneNumberCreateWithoutOwnerInput!
}

input TelephoneNumberWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  type: String
  type_not: String
  type_in: [String!]
  type_not_in: [String!]
  type_lt: String
  type_lte: String
  type_gt: String
  type_gte: String
  type_contains: String
  type_not_contains: String
  type_starts_with: String
  type_not_starts_with: String
  type_ends_with: String
  type_not_ends_with: String
  telephone: String
  telephone_not: String
  telephone_in: [String!]
  telephone_not_in: [String!]
  telephone_lt: String
  telephone_lte: String
  telephone_gt: String
  telephone_gte: String
  telephone_contains: String
  telephone_not_contains: String
  telephone_starts_with: String
  telephone_not_starts_with: String
  telephone_ends_with: String
  telephone_not_ends_with: String
  owner: UserWhereInput
  AND: [TelephoneNumberWhereInput!]
  OR: [TelephoneNumberWhereInput!]
  NOT: [TelephoneNumberWhereInput!]
}

input TelephoneNumberWhereUniqueInput {
  id: ID
}

type Tenant {
  id: ID!
  isActive: Boolean!
  domain: String!
  apiKey: String
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User!]
  company: Company!
  parent: Tenant
  settings: Settings
}

type TenantConnection {
  pageInfo: PageInfo!
  edges: [TenantEdge]!
  aggregate: AggregateTenant!
}

input TenantCreateInput {
  isActive: Boolean
  domain: String!
  apiKey: String
  users: UserCreateManyWithoutTenantsInput
  company: CompanyCreateOneInput!
  parent: TenantCreateOneInput
  settings: SettingsCreateOneWithoutTenantInput
}

input TenantCreateManyWithoutUsersInput {
  create: [TenantCreateWithoutUsersInput!]
  connect: [TenantWhereUniqueInput!]
}

input TenantCreateOneInput {
  create: TenantCreateInput
  connect: TenantWhereUniqueInput
}

input TenantCreateOneWithoutSettingsInput {
  create: TenantCreateWithoutSettingsInput
  connect: TenantWhereUniqueInput
}

input TenantCreateWithoutSettingsInput {
  isActive: Boolean
  domain: String!
  apiKey: String
  users: UserCreateManyWithoutTenantsInput
  company: CompanyCreateOneInput!
  parent: TenantCreateOneInput
}

input TenantCreateWithoutUsersInput {
  isActive: Boolean
  domain: String!
  apiKey: String
  company: CompanyCreateOneInput!
  parent: TenantCreateOneInput
  settings: SettingsCreateOneWithoutTenantInput
}

type TenantEdge {
  node: Tenant!
  cursor: String!
}

enum TenantOrderByInput {
  id_ASC
  id_DESC
  isActive_ASC
  isActive_DESC
  domain_ASC
  domain_DESC
  apiKey_ASC
  apiKey_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type TenantPreviousValues {
  id: ID!
  isActive: Boolean!
  domain: String!
  apiKey: String
}

input TenantScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  isActive: Boolean
  isActive_not: Boolean
  domain: String
  domain_not: String
  domain_in: [String!]
  domain_not_in: [String!]
  domain_lt: String
  domain_lte: String
  domain_gt: String
  domain_gte: String
  domain_contains: String
  domain_not_contains: String
  domain_starts_with: String
  domain_not_starts_with: String
  domain_ends_with: String
  domain_not_ends_with: String
  apiKey: String
  apiKey_not: String
  apiKey_in: [String!]
  apiKey_not_in: [String!]
  apiKey_lt: String
  apiKey_lte: String
  apiKey_gt: String
  apiKey_gte: String
  apiKey_contains: String
  apiKey_not_contains: String
  apiKey_starts_with: String
  apiKey_not_starts_with: String
  apiKey_ends_with: String
  apiKey_not_ends_with: String
  AND: [TenantScalarWhereInput!]
  OR: [TenantScalarWhereInput!]
  NOT: [TenantScalarWhereInput!]
}

type TenantSubscriptionPayload {
  mutation: MutationType!
  node: Tenant
  updatedFields: [String!]
  previousValues: TenantPreviousValues
}

input TenantSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: TenantWhereInput
  AND: [TenantSubscriptionWhereInput!]
  OR: [TenantSubscriptionWhereInput!]
  NOT: [TenantSubscriptionWhereInput!]
}

input TenantUpdateDataInput {
  isActive: Boolean
  domain: String
  apiKey: String
  users: UserUpdateManyWithoutTenantsInput
  company: CompanyUpdateOneRequiredInput
  parent: TenantUpdateOneInput
  settings: SettingsUpdateOneWithoutTenantInput
}

input TenantUpdateInput {
  isActive: Boolean
  domain: String
  apiKey: String
  users: UserUpdateManyWithoutTenantsInput
  company: CompanyUpdateOneRequiredInput
  parent: TenantUpdateOneInput
  settings: SettingsUpdateOneWithoutTenantInput
}

input TenantUpdateManyDataInput {
  isActive: Boolean
  domain: String
  apiKey: String
}

input TenantUpdateManyMutationInput {
  isActive: Boolean
  domain: String
  apiKey: String
}

input TenantUpdateManyWithoutUsersInput {
  create: [TenantCreateWithoutUsersInput!]
  delete: [TenantWhereUniqueInput!]
  connect: [TenantWhereUniqueInput!]
  disconnect: [TenantWhereUniqueInput!]
  update: [TenantUpdateWithWhereUniqueWithoutUsersInput!]
  upsert: [TenantUpsertWithWhereUniqueWithoutUsersInput!]
  deleteMany: [TenantScalarWhereInput!]
  updateMany: [TenantUpdateManyWithWhereNestedInput!]
}

input TenantUpdateManyWithWhereNestedInput {
  where: TenantScalarWhereInput!
  data: TenantUpdateManyDataInput!
}

input TenantUpdateOneInput {
  create: TenantCreateInput
  update: TenantUpdateDataInput
  upsert: TenantUpsertNestedInput
  delete: Boolean
  disconnect: Boolean
  connect: TenantWhereUniqueInput
}

input TenantUpdateOneWithoutSettingsInput {
  create: TenantCreateWithoutSettingsInput
  update: TenantUpdateWithoutSettingsDataInput
  upsert: TenantUpsertWithoutSettingsInput
  delete: Boolean
  disconnect: Boolean
  connect: TenantWhereUniqueInput
}

input TenantUpdateWithoutSettingsDataInput {
  isActive: Boolean
  domain: String
  apiKey: String
  users: UserUpdateManyWithoutTenantsInput
  company: CompanyUpdateOneRequiredInput
  parent: TenantUpdateOneInput
}

input TenantUpdateWithoutUsersDataInput {
  isActive: Boolean
  domain: String
  apiKey: String
  company: CompanyUpdateOneRequiredInput
  parent: TenantUpdateOneInput
  settings: SettingsUpdateOneWithoutTenantInput
}

input TenantUpdateWithWhereUniqueWithoutUsersInput {
  where: TenantWhereUniqueInput!
  data: TenantUpdateWithoutUsersDataInput!
}

input TenantUpsertNestedInput {
  update: TenantUpdateDataInput!
  create: TenantCreateInput!
}

input TenantUpsertWithoutSettingsInput {
  update: TenantUpdateWithoutSettingsDataInput!
  create: TenantCreateWithoutSettingsInput!
}

input TenantUpsertWithWhereUniqueWithoutUsersInput {
  where: TenantWhereUniqueInput!
  update: TenantUpdateWithoutUsersDataInput!
  create: TenantCreateWithoutUsersInput!
}

type TenantUserRole {
  tenant: Tenant!
  user: User!
  role: [Roles!]!
}

type TenantUserRoleConnection {
  pageInfo: PageInfo!
  edges: [TenantUserRoleEdge]!
  aggregate: AggregateTenantUserRole!
}

input TenantUserRoleCreateInput {
  tenant: TenantCreateOneInput!
  user: UserCreateOneInput!
  role: TenantUserRoleCreateroleInput
}

input TenantUserRoleCreateroleInput {
  set: [Roles!]
}

type TenantUserRoleEdge {
  node: TenantUserRole!
  cursor: String!
}

enum TenantUserRoleOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type TenantUserRolePreviousValues {
  role: [Roles!]!
}

type TenantUserRoleSubscriptionPayload {
  mutation: MutationType!
  node: TenantUserRole
  updatedFields: [String!]
  previousValues: TenantUserRolePreviousValues
}

input TenantUserRoleSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: TenantUserRoleWhereInput
  AND: [TenantUserRoleSubscriptionWhereInput!]
  OR: [TenantUserRoleSubscriptionWhereInput!]
  NOT: [TenantUserRoleSubscriptionWhereInput!]
}

input TenantUserRoleUpdateManyMutationInput {
  role: TenantUserRoleUpdateroleInput
}

input TenantUserRoleUpdateroleInput {
  set: [Roles!]
}

input TenantUserRoleWhereInput {
  tenant: TenantWhereInput
  user: UserWhereInput
  AND: [TenantUserRoleWhereInput!]
  OR: [TenantUserRoleWhereInput!]
  NOT: [TenantUserRoleWhereInput!]
}

input TenantWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  isActive: Boolean
  isActive_not: Boolean
  domain: String
  domain_not: String
  domain_in: [String!]
  domain_not_in: [String!]
  domain_lt: String
  domain_lte: String
  domain_gt: String
  domain_gte: String
  domain_contains: String
  domain_not_contains: String
  domain_starts_with: String
  domain_not_starts_with: String
  domain_ends_with: String
  domain_not_ends_with: String
  apiKey: String
  apiKey_not: String
  apiKey_in: [String!]
  apiKey_not_in: [String!]
  apiKey_lt: String
  apiKey_lte: String
  apiKey_gt: String
  apiKey_gte: String
  apiKey_contains: String
  apiKey_not_contains: String
  apiKey_starts_with: String
  apiKey_not_starts_with: String
  apiKey_ends_with: String
  apiKey_not_ends_with: String
  users_every: UserWhereInput
  users_some: UserWhereInput
  users_none: UserWhereInput
  company: CompanyWhereInput
  parent: TenantWhereInput
  settings: SettingsWhereInput
  AND: [TenantWhereInput!]
  OR: [TenantWhereInput!]
  NOT: [TenantWhereInput!]
}

input TenantWhereUniqueInput {
  id: ID
  domain: String
}

type TimeZone {
  id: ID!
  offset: String
  description: String
}

type TimeZoneConnection {
  pageInfo: PageInfo!
  edges: [TimeZoneEdge]!
  aggregate: AggregateTimeZone!
}

input TimeZoneCreateInput {
  offset: String
  description: String
}

input TimeZoneCreateOneInput {
  create: TimeZoneCreateInput
  connect: TimeZoneWhereUniqueInput
}

type TimeZoneEdge {
  node: TimeZone!
  cursor: String!
}

enum TimeZoneOrderByInput {
  id_ASC
  id_DESC
  offset_ASC
  offset_DESC
  description_ASC
  description_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type TimeZonePreviousValues {
  id: ID!
  offset: String
  description: String
}

type TimeZoneSubscriptionPayload {
  mutation: MutationType!
  node: TimeZone
  updatedFields: [String!]
  previousValues: TimeZonePreviousValues
}

input TimeZoneSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: TimeZoneWhereInput
  AND: [TimeZoneSubscriptionWhereInput!]
  OR: [TimeZoneSubscriptionWhereInput!]
  NOT: [TimeZoneSubscriptionWhereInput!]
}

input TimeZoneUpdateDataInput {
  offset: String
  description: String
}

input TimeZoneUpdateInput {
  offset: String
  description: String
}

input TimeZoneUpdateManyMutationInput {
  offset: String
  description: String
}

input TimeZoneUpdateOneInput {
  create: TimeZoneCreateInput
  update: TimeZoneUpdateDataInput
  upsert: TimeZoneUpsertNestedInput
  delete: Boolean
  disconnect: Boolean
  connect: TimeZoneWhereUniqueInput
}

input TimeZoneUpsertNestedInput {
  update: TimeZoneUpdateDataInput!
  create: TimeZoneCreateInput!
}

input TimeZoneWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  offset: String
  offset_not: String
  offset_in: [String!]
  offset_not_in: [String!]
  offset_lt: String
  offset_lte: String
  offset_gt: String
  offset_gte: String
  offset_contains: String
  offset_not_contains: String
  offset_starts_with: String
  offset_not_starts_with: String
  offset_ends_with: String
  offset_not_ends_with: String
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  AND: [TimeZoneWhereInput!]
  OR: [TimeZoneWhereInput!]
  NOT: [TimeZoneWhereInput!]
}

input TimeZoneWhereUniqueInput {
  id: ID
}

type User {
  id: ID!
  isActive: Boolean!
  email: String!
  emailVerified: Boolean!
  password: String!
  firstName: String
  lastName: String
  addresses(where: AddressWhereInput, orderBy: AddressOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Address!]
  images(where: ImageWhereInput, orderBy: ImageOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Image!]
  dob: DateTime
  gender: Genders
  telephoneNumbers(where: TelephoneNumberWhereInput, orderBy: TelephoneNumberOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [TelephoneNumber!]
  userData: Json
  tenants(where: TenantWhereInput, orderBy: TenantOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Tenant!]
  posts(where: PostWhereInput, orderBy: PostOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Post!]
  likedPosts(where: PostWhereInput, orderBy: PostOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Post!]
  comments(where: CommentWhereInput, orderBy: CommentOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Comment!]
  createdAt: DateTime!
  lastLoginAt: DateTime
  updatedAt: DateTime!
  token: String
}

type UserConnection {
  pageInfo: PageInfo!
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  isActive: Boolean
  email: String!
  emailVerified: Boolean
  password: String!
  firstName: String
  lastName: String
  addresses: AddressCreateManyWithoutOwnerInput
  images: ImageCreateManyWithoutOwnerInput
  dob: DateTime
  gender: Genders
  telephoneNumbers: TelephoneNumberCreateManyWithoutOwnerInput
  userData: Json
  tenants: TenantCreateManyWithoutUsersInput
  posts: PostCreateManyWithoutAuthorInput
  likedPosts: PostCreateManyWithoutLikedByInput
  comments: CommentCreateManyWithoutAuthorInput
  lastLoginAt: DateTime
  token: String
}

input UserCreateManyWithoutLikedPostsInput {
  create: [UserCreateWithoutLikedPostsInput!]
  connect: [UserWhereUniqueInput!]
}

input UserCreateManyWithoutTenantsInput {
  create: [UserCreateWithoutTenantsInput!]
  connect: [UserWhereUniqueInput!]
}

input UserCreateOneInput {
  create: UserCreateInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutAddressesInput {
  create: UserCreateWithoutAddressesInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutCommentsInput {
  create: UserCreateWithoutCommentsInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutImagesInput {
  create: UserCreateWithoutImagesInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutPostsInput {
  create: UserCreateWithoutPostsInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutTelephoneNumbersInput {
  create: UserCreateWithoutTelephoneNumbersInput
  connect: UserWhereUniqueInput
}

input UserCreateWithoutAddressesInput {
  isActive: Boolean
  email: String!
  emailVerified: Boolean
  password: String!
  firstName: String
  lastName: String
  images: ImageCreateManyWithoutOwnerInput
  dob: DateTime
  gender: Genders
  telephoneNumbers: TelephoneNumberCreateManyWithoutOwnerInput
  userData: Json
  tenants: TenantCreateManyWithoutUsersInput
  posts: PostCreateManyWithoutAuthorInput
  likedPosts: PostCreateManyWithoutLikedByInput
  comments: CommentCreateManyWithoutAuthorInput
  lastLoginAt: DateTime
  token: String
}

input UserCreateWithoutCommentsInput {
  isActive: Boolean
  email: String!
  emailVerified: Boolean
  password: String!
  firstName: String
  lastName: String
  addresses: AddressCreateManyWithoutOwnerInput
  images: ImageCreateManyWithoutOwnerInput
  dob: DateTime
  gender: Genders
  telephoneNumbers: TelephoneNumberCreateManyWithoutOwnerInput
  userData: Json
  tenants: TenantCreateManyWithoutUsersInput
  posts: PostCreateManyWithoutAuthorInput
  likedPosts: PostCreateManyWithoutLikedByInput
  lastLoginAt: DateTime
  token: String
}

input UserCreateWithoutImagesInput {
  isActive: Boolean
  email: String!
  emailVerified: Boolean
  password: String!
  firstName: String
  lastName: String
  addresses: AddressCreateManyWithoutOwnerInput
  dob: DateTime
  gender: Genders
  telephoneNumbers: TelephoneNumberCreateManyWithoutOwnerInput
  userData: Json
  tenants: TenantCreateManyWithoutUsersInput
  posts: PostCreateManyWithoutAuthorInput
  likedPosts: PostCreateManyWithoutLikedByInput
  comments: CommentCreateManyWithoutAuthorInput
  lastLoginAt: DateTime
  token: String
}

input UserCreateWithoutLikedPostsInput {
  isActive: Boolean
  email: String!
  emailVerified: Boolean
  password: String!
  firstName: String
  lastName: String
  addresses: AddressCreateManyWithoutOwnerInput
  images: ImageCreateManyWithoutOwnerInput
  dob: DateTime
  gender: Genders
  telephoneNumbers: TelephoneNumberCreateManyWithoutOwnerInput
  userData: Json
  tenants: TenantCreateManyWithoutUsersInput
  posts: PostCreateManyWithoutAuthorInput
  comments: CommentCreateManyWithoutAuthorInput
  lastLoginAt: DateTime
  token: String
}

input UserCreateWithoutPostsInput {
  isActive: Boolean
  email: String!
  emailVerified: Boolean
  password: String!
  firstName: String
  lastName: String
  addresses: AddressCreateManyWithoutOwnerInput
  images: ImageCreateManyWithoutOwnerInput
  dob: DateTime
  gender: Genders
  telephoneNumbers: TelephoneNumberCreateManyWithoutOwnerInput
  userData: Json
  tenants: TenantCreateManyWithoutUsersInput
  likedPosts: PostCreateManyWithoutLikedByInput
  comments: CommentCreateManyWithoutAuthorInput
  lastLoginAt: DateTime
  token: String
}

input UserCreateWithoutTelephoneNumbersInput {
  isActive: Boolean
  email: String!
  emailVerified: Boolean
  password: String!
  firstName: String
  lastName: String
  addresses: AddressCreateManyWithoutOwnerInput
  images: ImageCreateManyWithoutOwnerInput
  dob: DateTime
  gender: Genders
  userData: Json
  tenants: TenantCreateManyWithoutUsersInput
  posts: PostCreateManyWithoutAuthorInput
  likedPosts: PostCreateManyWithoutLikedByInput
  comments: CommentCreateManyWithoutAuthorInput
  lastLoginAt: DateTime
  token: String
}

input UserCreateWithoutTenantsInput {
  isActive: Boolean
  email: String!
  emailVerified: Boolean
  password: String!
  firstName: String
  lastName: String
  addresses: AddressCreateManyWithoutOwnerInput
  images: ImageCreateManyWithoutOwnerInput
  dob: DateTime
  gender: Genders
  telephoneNumbers: TelephoneNumberCreateManyWithoutOwnerInput
  userData: Json
  posts: PostCreateManyWithoutAuthorInput
  likedPosts: PostCreateManyWithoutLikedByInput
  comments: CommentCreateManyWithoutAuthorInput
  lastLoginAt: DateTime
  token: String
}

type UserEdge {
  node: User!
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  isActive_ASC
  isActive_DESC
  email_ASC
  email_DESC
  emailVerified_ASC
  emailVerified_DESC
  password_ASC
  password_DESC
  firstName_ASC
  firstName_DESC
  lastName_ASC
  lastName_DESC
  dob_ASC
  dob_DESC
  gender_ASC
  gender_DESC
  userData_ASC
  userData_DESC
  createdAt_ASC
  createdAt_DESC
  lastLoginAt_ASC
  lastLoginAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  token_ASC
  token_DESC
}

type UserPreviousValues {
  id: ID!
  isActive: Boolean!
  email: String!
  emailVerified: Boolean!
  password: String!
  firstName: String
  lastName: String
  dob: DateTime
  gender: Genders
  userData: Json
  createdAt: DateTime!
  lastLoginAt: DateTime
  updatedAt: DateTime!
  token: String
}

input UserScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  isActive: Boolean
  isActive_not: Boolean
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  emailVerified: Boolean
  emailVerified_not: Boolean
  password: String
  password_not: String
  password_in: [String!]
  password_not_in: [String!]
  password_lt: String
  password_lte: String
  password_gt: String
  password_gte: String
  password_contains: String
  password_not_contains: String
  password_starts_with: String
  password_not_starts_with: String
  password_ends_with: String
  password_not_ends_with: String
  firstName: String
  firstName_not: String
  firstName_in: [String!]
  firstName_not_in: [String!]
  firstName_lt: String
  firstName_lte: String
  firstName_gt: String
  firstName_gte: String
  firstName_contains: String
  firstName_not_contains: String
  firstName_starts_with: String
  firstName_not_starts_with: String
  firstName_ends_with: String
  firstName_not_ends_with: String
  lastName: String
  lastName_not: String
  lastName_in: [String!]
  lastName_not_in: [String!]
  lastName_lt: String
  lastName_lte: String
  lastName_gt: String
  lastName_gte: String
  lastName_contains: String
  lastName_not_contains: String
  lastName_starts_with: String
  lastName_not_starts_with: String
  lastName_ends_with: String
  lastName_not_ends_with: String
  dob: DateTime
  dob_not: DateTime
  dob_in: [DateTime!]
  dob_not_in: [DateTime!]
  dob_lt: DateTime
  dob_lte: DateTime
  dob_gt: DateTime
  dob_gte: DateTime
  gender: Genders
  gender_not: Genders
  gender_in: [Genders!]
  gender_not_in: [Genders!]
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  lastLoginAt: DateTime
  lastLoginAt_not: DateTime
  lastLoginAt_in: [DateTime!]
  lastLoginAt_not_in: [DateTime!]
  lastLoginAt_lt: DateTime
  lastLoginAt_lte: DateTime
  lastLoginAt_gt: DateTime
  lastLoginAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  token: String
  token_not: String
  token_in: [String!]
  token_not_in: [String!]
  token_lt: String
  token_lte: String
  token_gt: String
  token_gte: String
  token_contains: String
  token_not_contains: String
  token_starts_with: String
  token_not_starts_with: String
  token_ends_with: String
  token_not_ends_with: String
  AND: [UserScalarWhereInput!]
  OR: [UserScalarWhereInput!]
  NOT: [UserScalarWhereInput!]
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UserWhereInput
  AND: [UserSubscriptionWhereInput!]
  OR: [UserSubscriptionWhereInput!]
  NOT: [UserSubscriptionWhereInput!]
}

input UserUpdateInput {
  isActive: Boolean
  email: String
  emailVerified: Boolean
  password: String
  firstName: String
  lastName: String
  addresses: AddressUpdateManyWithoutOwnerInput
  images: ImageUpdateManyWithoutOwnerInput
  dob: DateTime
  gender: Genders
  telephoneNumbers: TelephoneNumberUpdateManyWithoutOwnerInput
  userData: Json
  tenants: TenantUpdateManyWithoutUsersInput
  posts: PostUpdateManyWithoutAuthorInput
  likedPosts: PostUpdateManyWithoutLikedByInput
  comments: CommentUpdateManyWithoutAuthorInput
  lastLoginAt: DateTime
  token: String
}

input UserUpdateManyDataInput {
  isActive: Boolean
  email: String
  emailVerified: Boolean
  password: String
  firstName: String
  lastName: String
  dob: DateTime
  gender: Genders
  userData: Json
  lastLoginAt: DateTime
  token: String
}

input UserUpdateManyMutationInput {
  isActive: Boolean
  email: String
  emailVerified: Boolean
  password: String
  firstName: String
  lastName: String
  dob: DateTime
  gender: Genders
  userData: Json
  lastLoginAt: DateTime
  token: String
}

input UserUpdateManyWithoutLikedPostsInput {
  create: [UserCreateWithoutLikedPostsInput!]
  delete: [UserWhereUniqueInput!]
  connect: [UserWhereUniqueInput!]
  disconnect: [UserWhereUniqueInput!]
  update: [UserUpdateWithWhereUniqueWithoutLikedPostsInput!]
  upsert: [UserUpsertWithWhereUniqueWithoutLikedPostsInput!]
  deleteMany: [UserScalarWhereInput!]
  updateMany: [UserUpdateManyWithWhereNestedInput!]
}

input UserUpdateManyWithoutTenantsInput {
  create: [UserCreateWithoutTenantsInput!]
  delete: [UserWhereUniqueInput!]
  connect: [UserWhereUniqueInput!]
  disconnect: [UserWhereUniqueInput!]
  update: [UserUpdateWithWhereUniqueWithoutTenantsInput!]
  upsert: [UserUpsertWithWhereUniqueWithoutTenantsInput!]
  deleteMany: [UserScalarWhereInput!]
  updateMany: [UserUpdateManyWithWhereNestedInput!]
}

input UserUpdateManyWithWhereNestedInput {
  where: UserScalarWhereInput!
  data: UserUpdateManyDataInput!
}

input UserUpdateOneRequiredWithoutAddressesInput {
  create: UserCreateWithoutAddressesInput
  update: UserUpdateWithoutAddressesDataInput
  upsert: UserUpsertWithoutAddressesInput
  connect: UserWhereUniqueInput
}

input UserUpdateOneRequiredWithoutCommentsInput {
  create: UserCreateWithoutCommentsInput
  update: UserUpdateWithoutCommentsDataInput
  upsert: UserUpsertWithoutCommentsInput
  connect: UserWhereUniqueInput
}

input UserUpdateOneRequiredWithoutImagesInput {
  create: UserCreateWithoutImagesInput
  update: UserUpdateWithoutImagesDataInput
  upsert: UserUpsertWithoutImagesInput
  connect: UserWhereUniqueInput
}

input UserUpdateOneRequiredWithoutPostsInput {
  create: UserCreateWithoutPostsInput
  update: UserUpdateWithoutPostsDataInput
  upsert: UserUpsertWithoutPostsInput
  connect: UserWhereUniqueInput
}

input UserUpdateOneRequiredWithoutTelephoneNumbersInput {
  create: UserCreateWithoutTelephoneNumbersInput
  update: UserUpdateWithoutTelephoneNumbersDataInput
  upsert: UserUpsertWithoutTelephoneNumbersInput
  connect: UserWhereUniqueInput
}

input UserUpdateWithoutAddressesDataInput {
  isActive: Boolean
  email: String
  emailVerified: Boolean
  password: String
  firstName: String
  lastName: String
  images: ImageUpdateManyWithoutOwnerInput
  dob: DateTime
  gender: Genders
  telephoneNumbers: TelephoneNumberUpdateManyWithoutOwnerInput
  userData: Json
  tenants: TenantUpdateManyWithoutUsersInput
  posts: PostUpdateManyWithoutAuthorInput
  likedPosts: PostUpdateManyWithoutLikedByInput
  comments: CommentUpdateManyWithoutAuthorInput
  lastLoginAt: DateTime
  token: String
}

input UserUpdateWithoutCommentsDataInput {
  isActive: Boolean
  email: String
  emailVerified: Boolean
  password: String
  firstName: String
  lastName: String
  addresses: AddressUpdateManyWithoutOwnerInput
  images: ImageUpdateManyWithoutOwnerInput
  dob: DateTime
  gender: Genders
  telephoneNumbers: TelephoneNumberUpdateManyWithoutOwnerInput
  userData: Json
  tenants: TenantUpdateManyWithoutUsersInput
  posts: PostUpdateManyWithoutAuthorInput
  likedPosts: PostUpdateManyWithoutLikedByInput
  lastLoginAt: DateTime
  token: String
}

input UserUpdateWithoutImagesDataInput {
  isActive: Boolean
  email: String
  emailVerified: Boolean
  password: String
  firstName: String
  lastName: String
  addresses: AddressUpdateManyWithoutOwnerInput
  dob: DateTime
  gender: Genders
  telephoneNumbers: TelephoneNumberUpdateManyWithoutOwnerInput
  userData: Json
  tenants: TenantUpdateManyWithoutUsersInput
  posts: PostUpdateManyWithoutAuthorInput
  likedPosts: PostUpdateManyWithoutLikedByInput
  comments: CommentUpdateManyWithoutAuthorInput
  lastLoginAt: DateTime
  token: String
}

input UserUpdateWithoutLikedPostsDataInput {
  isActive: Boolean
  email: String
  emailVerified: Boolean
  password: String
  firstName: String
  lastName: String
  addresses: AddressUpdateManyWithoutOwnerInput
  images: ImageUpdateManyWithoutOwnerInput
  dob: DateTime
  gender: Genders
  telephoneNumbers: TelephoneNumberUpdateManyWithoutOwnerInput
  userData: Json
  tenants: TenantUpdateManyWithoutUsersInput
  posts: PostUpdateManyWithoutAuthorInput
  comments: CommentUpdateManyWithoutAuthorInput
  lastLoginAt: DateTime
  token: String
}

input UserUpdateWithoutPostsDataInput {
  isActive: Boolean
  email: String
  emailVerified: Boolean
  password: String
  firstName: String
  lastName: String
  addresses: AddressUpdateManyWithoutOwnerInput
  images: ImageUpdateManyWithoutOwnerInput
  dob: DateTime
  gender: Genders
  telephoneNumbers: TelephoneNumberUpdateManyWithoutOwnerInput
  userData: Json
  tenants: TenantUpdateManyWithoutUsersInput
  likedPosts: PostUpdateManyWithoutLikedByInput
  comments: CommentUpdateManyWithoutAuthorInput
  lastLoginAt: DateTime
  token: String
}

input UserUpdateWithoutTelephoneNumbersDataInput {
  isActive: Boolean
  email: String
  emailVerified: Boolean
  password: String
  firstName: String
  lastName: String
  addresses: AddressUpdateManyWithoutOwnerInput
  images: ImageUpdateManyWithoutOwnerInput
  dob: DateTime
  gender: Genders
  userData: Json
  tenants: TenantUpdateManyWithoutUsersInput
  posts: PostUpdateManyWithoutAuthorInput
  likedPosts: PostUpdateManyWithoutLikedByInput
  comments: CommentUpdateManyWithoutAuthorInput
  lastLoginAt: DateTime
  token: String
}

input UserUpdateWithoutTenantsDataInput {
  isActive: Boolean
  email: String
  emailVerified: Boolean
  password: String
  firstName: String
  lastName: String
  addresses: AddressUpdateManyWithoutOwnerInput
  images: ImageUpdateManyWithoutOwnerInput
  dob: DateTime
  gender: Genders
  telephoneNumbers: TelephoneNumberUpdateManyWithoutOwnerInput
  userData: Json
  posts: PostUpdateManyWithoutAuthorInput
  likedPosts: PostUpdateManyWithoutLikedByInput
  comments: CommentUpdateManyWithoutAuthorInput
  lastLoginAt: DateTime
  token: String
}

input UserUpdateWithWhereUniqueWithoutLikedPostsInput {
  where: UserWhereUniqueInput!
  data: UserUpdateWithoutLikedPostsDataInput!
}

input UserUpdateWithWhereUniqueWithoutTenantsInput {
  where: UserWhereUniqueInput!
  data: UserUpdateWithoutTenantsDataInput!
}

input UserUpsertWithoutAddressesInput {
  update: UserUpdateWithoutAddressesDataInput!
  create: UserCreateWithoutAddressesInput!
}

input UserUpsertWithoutCommentsInput {
  update: UserUpdateWithoutCommentsDataInput!
  create: UserCreateWithoutCommentsInput!
}

input UserUpsertWithoutImagesInput {
  update: UserUpdateWithoutImagesDataInput!
  create: UserCreateWithoutImagesInput!
}

input UserUpsertWithoutPostsInput {
  update: UserUpdateWithoutPostsDataInput!
  create: UserCreateWithoutPostsInput!
}

input UserUpsertWithoutTelephoneNumbersInput {
  update: UserUpdateWithoutTelephoneNumbersDataInput!
  create: UserCreateWithoutTelephoneNumbersInput!
}

input UserUpsertWithWhereUniqueWithoutLikedPostsInput {
  where: UserWhereUniqueInput!
  update: UserUpdateWithoutLikedPostsDataInput!
  create: UserCreateWithoutLikedPostsInput!
}

input UserUpsertWithWhereUniqueWithoutTenantsInput {
  where: UserWhereUniqueInput!
  update: UserUpdateWithoutTenantsDataInput!
  create: UserCreateWithoutTenantsInput!
}

input UserWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  isActive: Boolean
  isActive_not: Boolean
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  emailVerified: Boolean
  emailVerified_not: Boolean
  password: String
  password_not: String
  password_in: [String!]
  password_not_in: [String!]
  password_lt: String
  password_lte: String
  password_gt: String
  password_gte: String
  password_contains: String
  password_not_contains: String
  password_starts_with: String
  password_not_starts_with: String
  password_ends_with: String
  password_not_ends_with: String
  firstName: String
  firstName_not: String
  firstName_in: [String!]
  firstName_not_in: [String!]
  firstName_lt: String
  firstName_lte: String
  firstName_gt: String
  firstName_gte: String
  firstName_contains: String
  firstName_not_contains: String
  firstName_starts_with: String
  firstName_not_starts_with: String
  firstName_ends_with: String
  firstName_not_ends_with: String
  lastName: String
  lastName_not: String
  lastName_in: [String!]
  lastName_not_in: [String!]
  lastName_lt: String
  lastName_lte: String
  lastName_gt: String
  lastName_gte: String
  lastName_contains: String
  lastName_not_contains: String
  lastName_starts_with: String
  lastName_not_starts_with: String
  lastName_ends_with: String
  lastName_not_ends_with: String
  addresses_every: AddressWhereInput
  addresses_some: AddressWhereInput
  addresses_none: AddressWhereInput
  images_every: ImageWhereInput
  images_some: ImageWhereInput
  images_none: ImageWhereInput
  dob: DateTime
  dob_not: DateTime
  dob_in: [DateTime!]
  dob_not_in: [DateTime!]
  dob_lt: DateTime
  dob_lte: DateTime
  dob_gt: DateTime
  dob_gte: DateTime
  gender: Genders
  gender_not: Genders
  gender_in: [Genders!]
  gender_not_in: [Genders!]
  telephoneNumbers_every: TelephoneNumberWhereInput
  telephoneNumbers_some: TelephoneNumberWhereInput
  telephoneNumbers_none: TelephoneNumberWhereInput
  tenants_every: TenantWhereInput
  tenants_some: TenantWhereInput
  tenants_none: TenantWhereInput
  posts_every: PostWhereInput
  posts_some: PostWhereInput
  posts_none: PostWhereInput
  likedPosts_every: PostWhereInput
  likedPosts_some: PostWhereInput
  likedPosts_none: PostWhereInput
  comments_every: CommentWhereInput
  comments_some: CommentWhereInput
  comments_none: CommentWhereInput
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  lastLoginAt: DateTime
  lastLoginAt_not: DateTime
  lastLoginAt_in: [DateTime!]
  lastLoginAt_not_in: [DateTime!]
  lastLoginAt_lt: DateTime
  lastLoginAt_lte: DateTime
  lastLoginAt_gt: DateTime
  lastLoginAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  token: String
  token_not: String
  token_in: [String!]
  token_not_in: [String!]
  token_lt: String
  token_lte: String
  token_gt: String
  token_gte: String
  token_contains: String
  token_not_contains: String
  token_starts_with: String
  token_not_starts_with: String
  token_ends_with: String
  token_not_ends_with: String
  AND: [UserWhereInput!]
  OR: [UserWhereInput!]
  NOT: [UserWhereInput!]
}

input UserWhereUniqueInput {
  id: ID
  email: String
}
`